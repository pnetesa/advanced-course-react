import { type InputHTMLAttributes, memo, type ChangeEvent, useState, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo(function Input(props: InputProps): JSX.Element {
  const {
    className,
    placeholder,
    autofocus,
    onChange,
    ...otherProps
  } = props;

  otherProps.type = otherProps.type ?? 'text';

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const onSelect = (e: any): void => {
    setCaretPosition(e?.target?.selectionEnd || e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.inputWrapper, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder} ~ $`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={inputRef}
          className={cls.input}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (<span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />)}
      </div>
    </div>
  );
});
