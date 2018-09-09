package io.github.slawomirr.taskswithangularjs.service;

import io.github.slawomirr.taskswithangularjs.domain.Task;

public interface TaskService {

    Iterable<Task> list();
}
