package io.github.slawomirr.taskswithangularjs.repository;

import io.github.slawomirr.taskswithangularjs.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {


}
