import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = '', ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer ${className}`}
    />
  );
}
