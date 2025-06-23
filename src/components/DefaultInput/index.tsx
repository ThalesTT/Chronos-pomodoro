import styles from './styles.module.css';

type DefaultInputprops = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  type,
  id,
  labelText,
  ...rest
}: DefaultInputprops) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} id={id} {...rest} />
    </>
  );
}
