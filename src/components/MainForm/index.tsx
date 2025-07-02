import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
// import { useRef, useState } from 'react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/taskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();

  // const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);

  //cyclos
  const nextCyclos = getNextCycle(state.currentCycle);

  const nextCycleType = getNextCycleType(nextCyclos);

  function handleCreateNewTask(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite a tarefa!');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName[0].toUpperCase() + taskName.substring(1),
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;
    const formattedSecondsRemaining = formatSecondsToMinutes(secondsRemaining);

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCyclos,
        secondsRemaining, //checar,
        formattedSecondsRemaining, //checar,
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} action='' className='form'>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='meuInput'
          labelText='Task'
          placeholder='Digite aqui'
          // value={taskName}
          // onChange={e => setTaskName(e.target.value)}
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRow'>
        <p>Proximo intervalo 25:00</p>
      </div>
      {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask ? (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa '
            type='submit'
            icon={<PlayCircleIcon />}
          />
        ) : (
          <DefaultButton
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual '
            type='button'
            color='red'
            icon={<StopCircleIcon />}
          />
        )}
      </div>
    </form>
  );
}
