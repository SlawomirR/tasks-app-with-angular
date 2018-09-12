import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    addTaskValue: string = null;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }

    onTaskAdd(event) {
        let task: Task = new Task(event.target.value, false, this.getTodayAsString());
        this.taskService.addTask(task)
            .subscribe(
                (newTask: Task) => {
                    this.taskService.onTaskAdded.emit(newTask);
                    this.addTaskValue = ""; // cleat the input
                }
            )
    }

    getTodayAsString() {
        let today = new Date();
        let dd: any = today.getDay();
        let mm: any = today.getMonth();
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }

        return mm + "/" + dd + "/" + yyyy;
    }
}
