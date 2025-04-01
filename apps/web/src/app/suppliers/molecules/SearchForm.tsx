'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  onSubmit: (consumption: number) => void;
  onClear: () => void;
};

export function SearchForm({ onSubmit, onClear }: Props) {
  const [value, setValue] = useState(''); 

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue) && numericValue >= 0) {
      onSubmit(numericValue);
    }
  };

  const handleClear = () => {
    setValue('');
    onClear();
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 items-end">
      <Input
        type="number"
        value={value}
        onChange={handleValueChange}
        placeholder="Type your consumption in kWh"
        min={0}
      />
      <Button type="submit">Search</Button>
      <Button type="button" onClick={handleClear}>
        Clear
      </Button>
    </form>
  );
}
