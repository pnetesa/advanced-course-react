import { type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  containerElement?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props): JSX.Element => {
  const {
    children,
    containerElement = document.body,
  } = props;
  return createPortal(children, containerElement);
};
