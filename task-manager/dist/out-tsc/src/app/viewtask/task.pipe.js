var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
var TaskPipe = /** @class */ (function () {
    function TaskPipe() {
    }
    TaskPipe.prototype.transform = function (taskList, field, value) {
        console.log(field + "value --->" + value);
        if (!taskList) {
            return [];
        }
        if (!field || !value) {
            return taskList;
        }
        if (value === "") {
            return taskList;
        }
        else {
            if (field == "task") {
                return taskList.filter(function (singleTask) {
                    return singleTask.task.includes(value);
                });
            }
            else if (field == "parentTask") {
                return taskList.filter(function (singleTask) {
                    return singleTask.parentTask.includes(value);
                });
            }
            else if (field == "priorityFrom") {
                return taskList.filter(function (singleTask) { return singleTask.priority >= parseInt(value); });
            }
            else if (field == "priorityTo") {
                return taskList.filter(function (singleTask) { return singleTask.priority <= parseInt(value); });
            }
            else if (field == "startDate") {
                return taskList.filter(function (singleTask) {
                    var datePipe = new DatePipe('en-US');
                    var str = datePipe.transform(singleTask.startDate, 'dd-MM-yyyy');
                    if (str.includes(value)) {
                        return singleTask;
                    }
                    else {
                        return null;
                    }
                });
            }
            else if (field == "endDate") {
                return taskList.filter(function (singleTask) {
                    var datePipe = new DatePipe('en-US');
                    var str = datePipe.transform(singleTask.endDate, 'dd-MM-yyyy');
                    if (str.includes(value)) {
                        return singleTask;
                    }
                    else {
                        return null;
                    }
                });
            }
        }
    };
    TaskPipe = __decorate([
        Pipe({ name: 'filter' }),
        Injectable()
    ], TaskPipe);
    return TaskPipe;
}());
export { TaskPipe };
//# sourceMappingURL=task.pipe.js.map