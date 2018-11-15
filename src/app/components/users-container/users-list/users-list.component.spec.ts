import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersListComponent } from './users-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
  expect(component).toBeTruthy();
  });
// tests for rendering profile images
  it('should render profile images: userImages', async(() => {
     const tag = fixture.debugElement.nativeElement;
     expect(tag.querySelector('h1'));
  }));
   // tests for expaning rows values
   it(' should display values upon expanding rows', async() => {
    const tag = fixture.debugElement.nativeElement;
     expect(tag.querySelector('#expandTemplate'));
   });
});
