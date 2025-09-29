'use client';

import { SmartDatetimeInput } from '@/components/ui/dateTime-input';
import React, { useState } from 'react';

export default function index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  return (
    <div className='p-4 max-w-md mx-auto py-10'>
      <SmartDatetimeInput
        value={selectedDate}
        onValueChange={handleDateChange}
        placeholder='Enter a date and time'
        className='lg:w-96'
      />
      {/* {selectedDate && (
        <p className='mt-4'>Selected Date: {selectedDate.toLocaleString()}</p>
      )} */}
    </div>
  );
}
