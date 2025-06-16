import styles from './styles.module.css';

export function Cyclos() {
  return (
    <div className={styles.cyclos}>
      <span>Ciclos:</span>
      <div className={styles.cyclesDots}>
        <span className={`${styles.cyclesDots}${styles.workTime}`}></span>
        <span className={`${styles.cyclesDots}${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDots}${styles.workTime}`}></span>
        <span className={`${styles.cyclesDots}${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDots}${styles.workTime}`}></span>
        <span className={`${styles.cyclesDots}${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDots}${styles.workTime}`}></span>
        <span className={`${styles.cyclesDots}${styles.LongBreakTime}`}></span>
      </div>
    </div>
  );
}
