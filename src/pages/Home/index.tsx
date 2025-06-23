import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  const { state, setState } = props;
  console.log(props);
  return (
    <MainTemplate>
      <Container>
        <CountDown
          formattedSecondsRemaining={state.formattedSecondsRemaining}
        />
      </Container>
      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
}
