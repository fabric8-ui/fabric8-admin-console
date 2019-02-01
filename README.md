# Admin Console

Admin Console is an application for admins to manage users on Codeready Toolchain.

## 1. Prerequisites

You need to install:

* `Node` [Here](https://nodejs.org/en/)
* `Git` [Here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* `Angular` (>= v6) [Here](https://angular.io/guide/quickstart#step-1-install-the-angular-cli)

Run the following command to find out your Angular version.

```
$ ng version
```

*You must at least have Angular version 6*.


#### 1.1 Check out the code

```
$ git clone https://github.com/fabric8-ui/fabric8-admin-console
```
#### 1.2 Installing Dependencipes

To fetch the dependencies, generate code and finally build the project you can
type `npm install` in a freshly clone repository of this project.

```
$ cd fabric8-admin-console
$ npm install
```

#### 1.3 Build and Run


Run `ng build` to build the project. The build artifacts will be stored in the dist/ directory. Use the `--prod` flag for a production build.

Run `ng serve` to serve the project.

## 2. Tests

#### 2.1 Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io/latest/index.html).

#### 2.2 End-To-End Test
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/#/).

## 3. Contribution Guidelines
#### 3.1 Code Quality
fabric8-admin-console uses `tslint` to check the `typescript` code.It also uses `prettier` to check the format of `HTML`.

##### Running the code quality checks
Each linter is built into the build process, so running npm run build or npm start will display any errors, their location (file name and line number), and any error message(s). Whenever a file that is watched by the code quality checks is changed, the build (if started with npm start) will re-run, checking only the altered files.

#### 3.2 Working on an issue
One can work on the issues and can raise a pull request for the same.List of open [issues](https://github.com/fabric8-ui/fabric8-admin-console/issues).

If it is a feature then, the title of the PR should be somewhat similar to [this](https://github.com/fabric8-ui/fabric8-admin-console/pull/23). 

```
feat(UX): Improve Functionality and Experience By Patternfly-ng 
```

If it's a fix that you were working with,then the title should be similar to [this](https://github.com/fabric8-ui/fabric8-admin-console/pull/48).
```
fix(tests): add unit tests for userService and userStore 
```
## 4. References
* [Angular Docs](https://angular.io/)
* [Patternfly-3](https://github.com/patternfly/patternfly)
* [Patternfly-4](https://github.com/patternfly/patternfly-next)
* [fabric8-UI](https://github.com/fabric8-ui)
* [fabric8-services](https://github.com/fabric8-services)
