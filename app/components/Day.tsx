import React from 'react';
import { TaskData } from '../types';
import { Task } from './Task';

type Props = {
  name: string;
  tasks: TaskData[];
  sort: string;
};

export function Day({ name, tasks, sort }: Props) {
  return (
    <div className="flex min-h-screen flex-column items-center justify-between">
      <h3>{name}</h3>
      {tasks && tasks.map((task) => <Task task={task} />)}
    </div>
  );
}
