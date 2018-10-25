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
import { Task } from '../addtask/task';
import { Router } from '@angular/router';
import { SearchCriteria } from '../services/search.criteria';
var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(router, taskervice) {
        this.router = router;
        this.taskervice = taskervice;
        this.task = new Task();
        this.taskList = [];
        this.searchCriteria = new SearchCriteria();
    }
    ViewtaskComponent.prototype.viewTask = function () {
        var _this = this;
        this.taskervice.viewTask()
            .subscribe(function (data) {
            _this.taskList = data;
        }, function (error) {
            // alert("ERROR");
        });
    };
    ;
    ViewtaskComponent.prototype.editTask = function (task) {
        this.taskervice.editTask = task;
        this.router.navigateByUrl('updateTask');
    };
    ;
    ViewtaskComponent.prototype.endTask = function (taskId) {
        var _this = this;
        this.taskervice.endTask(taskId)
            .subscribe(function (data) {
            console.log(data);
            _this.taskList = data;
        }, function (error) {
            // alert("ERROR");
        });
    };
    ;
    /*addTask(task, parentTask,startDate, endDate) {
      this.taskervice.addTask(task,parentTask,startDate,endDate);
    }*/
    ViewtaskComponent.prototype.ngOnInit = function () {
        this.viewTask();
    };
    ViewtaskComponent = __decorate([
        Component({
            selector: 'app-viewtask',
            templateUrl: './viewtask.component.html',
            styleUrls: ['./viewtask.component.css']
        }),
        __metadata("design:paramtypes", [Router, TaskService])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());
export { ViewtaskComponent };
//# sourceMappingURL=viewtask.component.js.map