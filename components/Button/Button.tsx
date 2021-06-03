import { PropsWithChildren, MouseEventHandler, forwardRef } from 'react';

import getStyles from 'utils/getStyles';

import styles from './Button.module.scss';

type Props = PropsWithChildren<{
  buttonStyles: Array<string> | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>(
  ({ buttonStyles, onClick, children }: Props, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      type="button"
      className={`${styles.button} ${getStyles({
        elementStyles: buttonStyles,
        styles,
      })}`}
    >
      {children}
    </button>
  ),
);

export default Button;
