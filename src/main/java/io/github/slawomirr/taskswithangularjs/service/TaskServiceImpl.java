package io.github.slawomirr.taskswithangularjs.service;

import io.github.slawomirr.taskswithangularjs.domain.Task;
import io.github.slawomirr.taskswithangularjs.repository.TaskRepository;

public class TaskServiceImpl implements TaskService {


    private TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public Iterable<Task> list() {
        return this.taskRepository.findAll();
    }
}
