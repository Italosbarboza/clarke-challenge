import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: Props) {
  return (
    <input
      {...props}
      className={`border px-3 py-2 rounded w-full ${props.className ?? ''}`}
    />
  );
}
