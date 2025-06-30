import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
// import { useRef, useState } from 'react';
import { useRef } from 'react';

export function MainForm() {
  // const [taskName, setTaskName] = useState('');
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
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
        />
      </div>
      <div className='formRow'>
        <p>Proximo intervalo 25:00</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
