import React from 'react';
import type { TaskData } from '../types';
import { Task } from './Task';

type Props = {
  tasks: TaskData[];
};

export function TaskList({ tasks }: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
}
