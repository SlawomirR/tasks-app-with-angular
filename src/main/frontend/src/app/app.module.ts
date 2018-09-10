import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';
import {TasksListComponent} from './tasks/tasks-list/tasks-list.component';
import {TasksAddComponent} from './tasks/tasks-add/tasks-add.component';
import {TaskService} from "./tasks/task.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        TasksListComponent,
        TasksAddComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
