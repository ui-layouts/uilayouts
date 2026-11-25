'use client';
import { Button } from '@/components/website/ui/button';
import {
  Select,
  SelectContent,
  SelectEmpty,
  SelectInput,
  SelectItem,
  SelectList,
  SelectTrigger,
} from '@ui-sdk/react/select';
import { cn } from '@/lib/utils';
import { Search, CheckIcon, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import * as RPNInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

type PhoneInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> &
  Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
    onChange?: (value: RPNInput.Value) => void;
  };
const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
  React.ElementRef<typeof RPNInput.default>,
  PhoneInputProps
>(({ className, onChange, ...props }, ref) => {
  return (
    <RPNInput.default
      ref={ref}
      className={cn('flex', className)}
      flagComponent={FlagComponent}
      countrySelectComponent={CountrySelect}
      inputComponent={InputComponent}
      /**
       * Handles the onChange event.
       *
       * react-phone-number-input might trigger the onChange event as undefined
       * when a valid phone number is not entered. To prevent this,
       * the value is coerced to an empty string.
       *
       * @param {E164Number | undefined} value - The entered value
       */
      onChange={(value) => onChange?.(value || '')}
      {...props}
    />
  );
});
PhoneInput.displayName = 'PhoneInput';

const InputComponent = React.forwardRef<HTMLInputElement, any>(({ className, ...props }, ref) => (
  <input
    className={cn('rounded-e-lg rounded-s-none px-2 bg-card outline-hidden w-full ', className)}
    {...props}
    ref={ref}
  />
));
InputComponent.displayName = 'InputComponent';

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: CountrySelectOption[];
};

const CountrySelect = ({ disabled, value, onChange, options }: CountrySelectProps) => {
  const countries = options.filter((option) => option.value);
  return (
    <Select
      items={countries}
      value={value}
      disabled={disabled}
      onValueChange={(country) => country && onChange(country)}
    >
      <SelectTrigger
        aria-label='Country calling code'
        render={
          <Button
            type='button'
            variant='outline'
            className='flex gap-1 rounded-e-none bg-card rounded-s-lg px-3'
          />
        }
      >
        <FlagComponent country={value} countryName={value} />
        <ChevronsUpDown
          className={cn('-mr-2 h-4 w-4 opacity-50', disabled ? 'hidden' : 'opacity-100')}
        />
      </SelectTrigger>
      <SelectContent
        sideOffset={4}
        alignItemWithTrigger={false}
        className='z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-hidden w-[300px] p-0'
      >
        <div className='flex items-center border-b px-3'>
          <Search aria-hidden className='mr-2 h-4 w-4 shrink-0 opacity-50' />
          <SelectInput
            aria-label='Search countries'
            placeholder='Search country...'
            className='h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground'
          />
        </div>
        <SelectEmpty className='py-6 text-center text-sm'>No country found.</SelectEmpty>
        <SelectList className='max-h-72 overflow-y-auto p-1'>
          {(state) =>
            (state.items as CountrySelectOption[]).map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                label={option.label}
                className='relative flex cursor-pointer select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-highlighted:bg-neutral-200 dark:data-highlighted:bg-neutral-950 gap-2'
              >
                <FlagComponent country={option.value} countryName={option.label} />
                <span className='flex-1 text-sm'>{option.label}</span>
                {option.value && (
                  <span className='text-foreground/50 text-sm'>
                    {`+${RPNInput.getCountryCallingCode(option.value)}`}
                  </span>
                )}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    option.value === value ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </SelectItem>
            ))
          }
        </SelectList>
      </SelectContent>
    </Select>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className='bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-xs'>
      {Flag && <Flag title={countryName} />}
    </span>
  );
};
FlagComponent.displayName = 'FlagComponent';

export { PhoneInput };
