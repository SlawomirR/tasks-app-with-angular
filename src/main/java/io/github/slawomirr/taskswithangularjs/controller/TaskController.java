package io.github.slawomirr.taskswithangularjs.controller;

import io.github.slawomirr.taskswithangularjs.domain.Task;
import io.github.slawomirr.taskswithangularjs.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> list() {
        return this.taskService.list();
    }
}
