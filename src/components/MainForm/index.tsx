import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import type { HomeProps } from '../../pages/Home';

export function MainForm({ state }: HomeProps) {
  return (
    <form action='' className='form'>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='meuInput'
          labelText='Task'
          placeholder='Digite aqui'
        />
      </div>
      <div className='formRow'>
        <p>Proximo intervalo {state.config.longBreakTime}</p>
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
