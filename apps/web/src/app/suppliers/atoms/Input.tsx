import { InputHTMLAttributes, useRef } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current && inputRef.current.value === '0') {
      inputRef.current.value = ''; 
    }
  };

  const handleBlur = () => {
    if (inputRef.current && inputRef.current.value === '') {
      inputRef.current.value = '0'; 
    }
  };

  return (
    <input
      {...props}
      ref={inputRef}
      className={`border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 px-3 py-2 rounded w-full ${props.className ?? ''}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      pattern="[0-9]*" 
    />
  );
}
