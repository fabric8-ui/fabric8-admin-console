import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';

@Directive({
    selector: '[appInfiniteScroll]',
    exportAs: 'appInfiniteScroll'
})
export class InfiniteScrollDirective implements OnInit {

  @Output('initItems') initItems = new EventEmitter();
  @Output('fetchMore') fetchMore = new EventEmitter();
  @Input() eachElementHeightInPx = 20;
  @Input() fetchThreshold = 5;
  pageSize = 10;
  lastCheckedHeight = 0;
  previousScrollHeight = 0;

  constructor(private elementRef: ElementRef) {
  }

  private element: HTMLElement = this.elementRef.nativeElement;

  ngOnInit() {
    this.pageSize = Math.ceil(this.element.offsetHeight / this.eachElementHeightInPx);
    // Page should always have more elements than it can hold
    // Normally twice than threshold value
    this.pageSize += this.fetchThreshold * 2;
    this.initContentItems();
  }

  initContentItems() {
    this.initItems.emit({
      pageSize: this.pageSize
    });
  }

  @HostListener('scroll', ['$event'])
  onScrollContainer(event: any) {
    console.log('scrolling');
    if (this.element.scrollHeight > this.lastCheckedHeight) {
      this.previousScrollHeight = this.element.scrollHeight;
      const remainingHeight = this.element.scrollHeight - (this.element.offsetHeight + this.element.scrollTop);
      const remainingElement = Math.ceil(remainingHeight / this.eachElementHeightInPx);
      if (remainingElement < this.fetchThreshold) {
        this.lastCheckedHeight = this.element.scrollHeight;
        this.fetchMore.emit();
      }
    } else if (this.element.scrollHeight < this.previousScrollHeight) { // To check if the list is reloaded
      this.previousScrollHeight = this.element.scrollHeight;
      this.lastCheckedHeight = 0;
      this.element.scrollTop = 0; // Scroll the list to top
    }
  }
}
