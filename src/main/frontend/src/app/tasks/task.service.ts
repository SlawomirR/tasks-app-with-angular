import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Task} from "src/app/tasks/task.model";
import {Observable} from "rxjs";

@Injectable()
export class TaskService {

    onTaskAdded = new EventEmitter<Task>();

    constructor(private http: HttpClient) {

    }

    getTasks() {
        return this.http.get("/api/tasks")/*.pipe(map((response: Response) => response.json()))*/;
    }

    saveTask(task: Task, checked: boolean): Observable<Task> {
        task.completed = checked;
        return this.http.post<Task>("/api/tasks/save", task);
    }

    addTask(task: Task) {
        return this.http.post<Task>("/api/tasks/save", task);
    }
}
