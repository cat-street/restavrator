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

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  // eslint-disable-next-line operator-linebreak
  const className =
    asPath === href || asPath === propsAs
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
