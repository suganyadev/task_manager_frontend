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
import { Task } from '../addtask/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(router, taskervice) {
        this.router = router;
        this.taskervice = taskervice;
        this.task = new Task();
    }
    UpdateComponent.prototype.updateTask = function (task, taskId) {
        this.taskervice.updateTask(task, taskId)
            .subscribe(function (data) {
            console.log("in here");
        }, function (error) {
        });
        console.log("out");
        this.navigateToView();
    };
    ;
    UpdateComponent.prototype.navigateToView = function () {
        console.log("in hdddere");
        this.router.navigate(['viewtask']);
    };
    UpdateComponent.prototype.ngOnInit = function () {
        this.task = this.taskervice.editTask;
    };
    UpdateComponent = __decorate([
        Component({
            selector: 'app-update',
            templateUrl: './update.component.html',
            styleUrls: ['./update.component.css']
        }),
        __metadata("design:paramtypes", [Router, TaskService])
    ], UpdateComponent);
    return UpdateComponent;
}());
export { UpdateComponent };
//# sourceMappingURL=update.component.js.map