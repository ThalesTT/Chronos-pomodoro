import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  // const { children } = props;
  console.log(styles);
  return <h1 className={styles.heading}>{children}</h1>;
}
