export interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  social: Record<string, string>;
}

export interface ScheduleItem {
  time: string;
  title: string;
  type: 'keynote' | 'session' | 'break' | 'networking';
}

export interface ScheduleByDay {
  [key: string]: ScheduleItem[];
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
