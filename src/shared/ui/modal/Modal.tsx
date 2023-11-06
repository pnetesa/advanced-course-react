import type React from 'react';
import { type FC, type HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Modal.module.scss';
import { Portal } from 'shared/ui/portal/Portal';
import { useTheme } from 'app/providers/theme-provider';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props): JSX.Element => {
  const { className, isOpen = false, onClose, children } = props;
  const { theme } = useTheme();

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | number>();

  const closeHandler = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const onKeyDown = useCallback((e: KeyboardEvent): any => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current as number);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.modal, [className, theme], mods)}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
