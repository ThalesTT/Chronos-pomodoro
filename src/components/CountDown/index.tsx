import styles from './styles.module.css';

type CoutDownProps = {
  formattedSecondsRemaining: string;
};

export function CountDown({ formattedSecondsRemaining }: CoutDownProps) {
  return <div className={styles.container}>{formattedSecondsRemaining}</div>;
}
