import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
      <Heading>
        Ola mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi atque
        nihil cupiditate perspiciatis non accusantium, libero quas velit
        voluptatem veniam, incidunt natus reiciendis nostrum nesciunt. Eaque
        quaerat voluptatum praesentium.
      </p>
    </div>
  );
}

// export default App
