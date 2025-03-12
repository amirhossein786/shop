"use client";
import { useState, useEffect } from 'react';
import Select from 'react-select';

export default function ClientOnlySelect({ options, onChange, placeholder, styles, theme }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <div className="w-full border rounded-md px-3 py-2 bg-white">
        {placeholder}
      </div>
    );
  }
  
  return (
    <Select
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      styles={styles}
      theme={theme}
    />
  );
}
