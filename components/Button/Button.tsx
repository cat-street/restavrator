import React, { PropsWithChildren, FC, MouseEventHandler } from 'react';
import getStyles from '../../utils/getStyles';
import styles from './Button.module.scss';

type Props = PropsWithChildren<{
  buttonStyles: Array<string> | string;
  onClick?: MouseEventHandler<HTMLButtonElement>
}>;

const Button: FC<Props> = ({ buttonStyles, onClick, children }: Props) => (
  <button
    onClick={onClick}
    type="button"
    className={`${styles.button} ${getStyles({
      elementStyles: buttonStyles,
      styles,
    })}`}
  >
    {children}
  </button>
);

export default Button;
