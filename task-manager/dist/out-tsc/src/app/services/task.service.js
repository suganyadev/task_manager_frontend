var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        //private userUrl = 'http://localhost:8080/user-portal/user';
        this.userUrl = 'http://localhost:7070';
    }
    TaskService.prototype.addTask = function (task) {
        return this.http.post(this.userUrl + '/addTask', task);
    };
    TaskService.prototype.viewTask = function () {
        return this.http.get(this.userUrl + '/viewTask');
    };
    TaskService.prototype.updateTask = function (task, taskId) {
        return this.http.post(this.userUrl + '/editTask/' + taskId, task);
    };
    TaskService.prototype.endTask = function (taskId) {
        console.log(taskId);
        return this.http.get(this.userUrl + '/endTask/' + taskId);
    };
    TaskService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], TaskService);
    return TaskService;
}());
export { TaskService };
//# sourceMappingURL=task.service.js.map