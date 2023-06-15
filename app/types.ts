export enum FlavorEnum {
  Paperwork = 'Paperwork',
  Work = 'Work',
  Project = 'Project',
}

export enum RepeatPattern {
  Daily,
  Weekly,
  Never,
}

export enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  //   NextWeek,
  //   NotAssigned,
}

export interface TaskData {
  name: string;
  flavor: FlavorEnum;
  urgency: number;
  isBlocking: boolean;
  dayOfWeek: DayOfWeek;
  repeat?: RepeatPattern;
}
