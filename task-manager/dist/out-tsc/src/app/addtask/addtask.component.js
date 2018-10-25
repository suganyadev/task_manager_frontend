var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from './task';
import { Router } from '@angular/router';
var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(router, taskervice) {
        this.router = router;
        this.taskervice = taskervice;
        this.task = new Task();
        this.error = { isError: false, errorMessage: '' };
    }
    AddtaskComponent.prototype.addTask = function () {
        if (!this.error.isError) {
            this.taskervice.addTask(this.task)
                .subscribe(function (data) {
                //alert("Task created successfully.");
            });
            this.router.navigate(['viewtask']);
        }
    };
    ;
    /*addTask(task, parentTask,startDate, endDate) {
      this.taskervice.addTask(task,parentTask,startDate,endDate);
    }*/
    AddtaskComponent.prototype.ngOnInit = function () {
    };
    AddtaskComponent.prototype.compareTwoDates = function (strDate, endDate) {
        this.error = { isError: false, errorMessage: '' };
        if (new Date(strDate) > new Date(endDate)) {
            this.error = { isError: true, errorMessage: 'End Date cant before start date' };
        }
    };
    AddtaskComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    AddtaskComponent = __decorate([
        Component({
            selector: 'app-addtask',
            templateUrl: './addtask.component.html',
            styleUrls: ['./addtask.component.css']
        }),
        __metadata("design:paramtypes", [Router, TaskService])
    ], AddtaskComponent);
    return AddtaskComponent;
}());
export { AddtaskComponent };
//# sourceMappingURL=addtask.component.js.map