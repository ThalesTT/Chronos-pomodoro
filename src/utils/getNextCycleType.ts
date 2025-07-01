import type { TaskModel } from '../models/taskModel';

export function getNextCycleType(cyclo: number): TaskModel['type'] {
  if (cyclo === 8) return 'longBreakTime';
  if (cyclo % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
