import React, { PropsWithChildren } from 'react';
import getStyles from '../../utils/getStyles';
import styles from './Button.module.scss';

type Props = {
  buttonStyles: Array<string> | string;
};

function Button({
  buttonStyles,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button
      type="button"
      className={`${styles.button} ${getStyles({
        elementStyles: buttonStyles,
        styles,
      })}`}
    >
      {children}
    </button>
  );
}

export default Button;
