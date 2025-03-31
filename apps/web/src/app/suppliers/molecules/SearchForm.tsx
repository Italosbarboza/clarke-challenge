'use client';

import { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

type Props = {
  onSubmit: (consumption: number) => void;
};

export function SearchForm({ onSubmit }: Props) {
  const [value, setValue] = useState(0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value);
      }}
      className="flex gap-2"
    >
      <Input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
