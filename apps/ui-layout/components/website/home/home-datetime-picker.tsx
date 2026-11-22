'use client';

import { SmartDatetimeInput } from '@/components/ui/datetime-input';
import React, { useState } from 'react';

export default function HomeDateTimePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  return (
    <div className='p-4 w-[95%] mx-auto '>
      <h2 className='font-medium  px-1 py-1'>DateTime Input </h2>
      <SmartDatetimeInput
        value={selectedDate}
        onValueChange={handleDateChange}
        placeholder='Enter a date and time'
        className='bg-card'
      />
    </div>
  );
}
