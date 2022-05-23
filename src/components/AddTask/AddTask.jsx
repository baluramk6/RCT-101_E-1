import React, { useState } from "react";
import styles from "./addTask.module.css";
import uuid from "uuid";

const AddTask = ({ onClick }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [task, SetTask] = useState();

  const handleAdd = (task) => {
    const payload = {
      task: task,
      status: false,
    };
  };

  return (
    <div className={styles.todoForm}>
      <input
        onChange={(e) => SetTask(e.target.value)}
        data-cy="add-task-input"
        placeholder="Write here.."
        type="text"
      />
      <button
        onClick={() => onClick(task)}
        data-cy="add-task-button"
        className="add-button"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
