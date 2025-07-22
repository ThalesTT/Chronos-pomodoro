import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TmWorkerManager } from '../../wk/TmWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const playBeep = useRef<() => void | null>(null);

  const worker = TmWorkerManager.getInstance();
  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      if (playBeep.current) {
        playBeep.current();
        playBeep.current = null;
      }
      dispatch({ type: TaskActionTypes.COMPLETE_TASK });
      console.log('Worker completo');
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    // console.log(state);
    if (!state.activeTask) {
      console.log('worker terminado por falta de active task');
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeep.current === null) {
      playBeep.current = loadBeep();
    } else {
      playBeep.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
