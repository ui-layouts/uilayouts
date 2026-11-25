'use client';
import {
  PasswordInput as PasswordField,
  PasswordInputControl,
  PasswordInputToggle,
} from '@ui-sdk/react/password-input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const PasswordInput = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='w-96 mx-auto py-14'>
      <label htmlFor='pass' className='text-sm font-normal'>
        Password
      </label>
      <PasswordField visible={isVisible} onVisibleChange={setIsVisible} className='relative mt-1'>
        <PasswordInputControl
          id='pass'
          placeholder='Password'
          className='bg-muted w-full outline-hidden focus-within:border-blue-700 rounded-md p-2  border-2 '
        />
        <PasswordInputToggle
          aria-label='Show password'
          className='absolute top-3 right-4 text-2xl text-muted-foreground cursor-pointer'
        >
          {isVisible ? <Eye size={22} /> : <EyeOff size={22} />}
        </PasswordInputToggle>
      </PasswordField>
    </div>
  );
};

export default PasswordInput;
