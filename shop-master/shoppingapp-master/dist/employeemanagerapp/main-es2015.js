(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_18_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const employee_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.onOpenModal(employee_r5, "edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_18_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7); const employee_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r8.onOpenModal(employee_r5, "delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const employee_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", employee_r5 == null ? null : employee_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r5 == null ? null : employee_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r5 == null ? null : employee_r5.jobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r5 == null ? null : employee_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Phone : ", employee_r5 == null ? null : employee_r5.phone, "");
} }
function AppComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "NO EMPLOYEES!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "No Employees were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class AppComponent {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    ngOnInit() {
        this.getEmployees();
    }
    getEmployees() {
        this.employeeService.getEmployees().subscribe((response) => {
            this.employees = response;
            console.log(this.employees);
        }, (error) => {
            alert(error.message);
        });
    }
    onAddEmloyee(addForm) {
        document.getElementById('add-employee-form').click();
        this.employeeService.addEmployee(addForm.value).subscribe((response) => {
            console.log(response);
            this.getEmployees();
            addForm.reset();
        }, (error) => {
            alert(error.message);
            addForm.reset();
        });
    }
    onUpdateEmloyee(employee) {
        this.employeeService.updateEmployee(employee).subscribe((response) => {
            console.log(response);
            this.getEmployees();
        }, (error) => {
            alert(error.message);
        });
    }
    onDeleteEmloyee(employeeId) {
        this.employeeService.deleteEmployee(employeeId).subscribe((response) => {
            console.log(response);
            this.getEmployees();
        }, (error) => {
            alert(error.message);
        });
    }
    searchEmployees(key) {
        console.log(key);
        const results = [];
        for (const employee of this.employees) {
            if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
                results.push(employee);
            }
        }
        this.employees = results;
        if (results.length === 0 || !key) {
            this.getEmployees();
        }
    }
    onOpenModal(employee, mode) {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
            button.setAttribute('data-target', '#addEmployeeModal');
        }
        if (mode === 'edit') {
            this.editEmployee = employee;
            button.setAttribute('data-target', '#updateEmployeeModal');
        }
        if (mode === 'delete') {
            this.deleteEmployee = employee;
            button.setAttribute('data-target', '#deleteEmployeeModal');
        }
        container.appendChild(button);
        button.click();
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 113, vars: 12, consts: [["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", "rel", "stylesheet"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "navbar-brand", 2, "color", "white"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor02", "aria-controls", "navbarColor02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "click"], [1, "sr-only"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "ngModel", "", "name", "key", "id", "searchName", "placeholder", "Search employees...", "required", "", 1, "form-control", "mr-sm-2", 3, "ngModelChange"], ["key", "ngModel"], ["id", "main-container", 1, "container"], [1, "row"], ["class", "col-md-6 col-xl-3", 4, "ngFor", "ngForOf"], ["id", "addEmployeeModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "addEmployeeModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "addEmployeeModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngSubmit"], ["addForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "ngModel", "", "name", "name", "id", "name", "placeholder", "Name", "required", "", 1, "form-control"], ["for", "email"], ["type", "email", "ngModel", "", "name", "email", "id", "email", "placeholder", "Email", "required", "", 1, "form-control"], ["for", "phone"], ["type", "text", "ngModel", "", "name", "jobTitle", "id", "jobTile", "placeholder", "Job title", "required", "", 1, "form-control"], ["type", "text", "ngModel", "", "name", "phone", "id", "phone", "placeholder", "Phone", "required", "", 1, "form-control"], ["type", "text", "ngModel", "", "name", "imageUrl", "id", "imageUrl", "placeholder", "Image URL", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "id", "add-employee-form", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["id", "updateEmployeeModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "employeeEditModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "updateEmployeeModalLabel", 1, "modal-title"], ["editForm", "ngForm"], ["type", "text", "name", "name", "id", "name", "aria-describedby", "emailHelp", "placeholder", "Name", 1, "form-control", 3, "ngModel"], ["type", "hidden", "name", "id", "id", "id", "placeholder", "Email", 1, "form-control", 3, "ngModel"], ["type", "hidden", "name", "userCode", "id", "userCode", "placeholder", "Email", 1, "form-control", 3, "ngModel"], ["type", "email", "name", "email", "id", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel"], ["type", "text", "name", "jobTitle", "id", "jobTitle", "placeholder", "Job title", 1, "form-control", 3, "ngModel"], ["type", "text", "name", "phone", "id", "phone", "name", "phone", "placeholder", "Phone", 1, "form-control", 3, "ngModel"], ["type", "text", "name", "imageUrl", "id", "imageUrl", "placeholder", "Image URL", 1, "form-control", 3, "ngModel"], ["type", "button", "id", "", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["id", "deleteEmployeeModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "deleteModelLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "deleteModelLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], ["class", "col-lg-12 col-md-12 col-xl-12", 4, "ngIf"], [1, "col-md-6", "col-xl-3"], [1, "card", "m-b-30"], [1, "card-body", "row"], [1, "col-6"], ["href", ""], ["alt", "", 1, "img-fluid", "rounded-circle", "w-60", 3, "src"], [1, "col-6", "card-title", "align-self-center", "mb-0"], [1, "m-0"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "fa", "fa-envelope", "float-right"], [1, "fa", "fa-phone", "float-right"], [1, "card-body"], [1, "float-right", "btn-group", "btn-group-sm"], ["data-placement", "top", "data-original-title", "Edit", 1, "btn", "btn-primary", "tooltips", 3, "click"], [1, "fa", "fa-pencil"], ["data-placement", "top", "data-original-title", "Delete", 1, "btn", "btn-secondary", "tooltips", 3, "click"], [1, "fa", "fa-times"], [1, "col-lg-12", "col-md-12", "col-xl-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-heading"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Employee Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_a_click_9_listener() { return ctx.onOpenModal(null, "add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Add Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15); return ctx.searchEmployees(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, AppComponent_div_18_Template, 24, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Add Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "form", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30); return ctx.onAddEmloyee(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Job title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "form", null, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Job title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](67); return ctx.onUpdateEmloyee(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Delete Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_110_listener() { return ctx.onDeleteEmloyee(ctx.deleteEmployee == null ? null : ctx.deleteEmployee.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](112, AppComponent_div_112_Template, 6, 0, "div", 54);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.employees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Edit Employee ", ctx.editEmployee == null ? null : ctx.editEmployee.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.employeeCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.jobTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngModel", ctx.editEmployee == null ? null : ctx.editEmployee.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Are you sure you want to delete employee ", ctx.deleteEmployee == null ? null : ctx.deleteEmployee.name, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.employees == null ? null : ctx.employees.length) == 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class EmployeeService {
    constructor(http) {
        this.http = http;
        this.apiServerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl;
    }
    getEmployees() {
        return this.http.get(`${this.apiServerUrl}/employee/all`);
    }
    addEmployee(employee) {
        return this.http.post(`${this.apiServerUrl}/employee/add`, employee);
    }
    updateEmployee(employee) {
        return this.http.put(`${this.apiServerUrl}/employee/update`, employee);
    }
    deleteEmployee(employeeId) {
        return this.http.delete(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
}
EmployeeService.??fac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EmployeeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: EmployeeService, factory: EmployeeService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JeevanThok\Desktop\Employe project\employeemanagerapp-master\employeemanagerapp-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map