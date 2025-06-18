import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { DefaultInput } from './components/DefaulInput';
import { Cyclos } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
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
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cyclos />
          </div>
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

// export default App
