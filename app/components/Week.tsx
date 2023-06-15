import React from 'react';
import { groupBy } from 'lodash-es';
import Stack from '@mui/material/Stack';

import { TaskData } from '../types';
import { Day } from './Day';

type Props = {
  tasks: TaskData[];
  sort: string;
};

export function Week({ tasks, sort }: Props) {
  const splitTasks = groupBy(tasks, 'dayOfWeek');
  console.log({ splitTasks });
  const { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday } =
    splitTasks;

  return (
    <Stack>
      <Day name="Sunday" tasks={Sunday} sort={sort} />
      <Day name="Monday" tasks={Monday} sort={sort} />
      <Day name="Tuesday" tasks={Tuesday} sort={sort} />
      <Day name="Wednesday" tasks={Wednesday} sort={sort} />
      <Day name="Thursday" tasks={Thursday} sort={sort} />
      <Day name="Friday" tasks={Friday} sort={sort} />
      <Day name="Saturday" tasks={Saturday} sort={sort} />
    </Stack>
  );
}
