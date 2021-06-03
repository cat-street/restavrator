import {
  Children, ReactElement, cloneElement,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  activeClassName: string;
  href: string;
  propsAs?: string;
  children: ReactElement;
};

const ActiveLink = ({
  children,
  activeClassName,
  href,
  propsAs,
  ...props
}: Props): JSX.Element => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName: string = children.props.className || '';

  const className = asPath === href || asPath === propsAs
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link href={href} {...props}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.defaultProps = {
  propsAs: '',
};

export default ActiveLink;
