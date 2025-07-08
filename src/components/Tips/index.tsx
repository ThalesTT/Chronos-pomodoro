import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();

  const nextCyclos = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCyclos);
  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo de <b>{state.config.workTime}</b>min
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso de <b>{state.config.shortBreakTime}</b>min
      </span>
    ),
    longBreakTime: (
      <span>Descanso longo de {state.config.longBreakTime}min</span>
    ),
  };
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}</b>min
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanso de <b>{state.config.shortBreakTime}</b>min
      </span>
    ),
    longBreakTime: <span>Descanso de {state.config.longBreakTime}min</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
