import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {

    }

    getTasks() {
        return this.http.get("/api/tasks")/*.pipe(map((response: Response) => response.json()))*/;
    }
}
