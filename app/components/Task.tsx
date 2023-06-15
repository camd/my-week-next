import React from 'react';
import { TaskData } from '../types';

type Props = {
  task: TaskData;
};

export function Task({ task }: Props) {
  const { name } = task;
  return <div>{name}</div>;
}
