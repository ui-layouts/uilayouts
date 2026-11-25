'use client';
import { Button } from '@/components/website/ui/button';
import {
  Select,
  SelectContent,
  SelectEmpty,
  SelectInput,
  SelectItem,
  SelectSelectAll,
  SelectList,
  SelectTrigger,
} from '@ui-sdk/react/select';
import { cn } from '@/lib/utils';
import { Search, CheckIcon, ChevronDown, XCircle, XIcon } from 'lucide-react';
import * as React from 'react';

/**
 * Props for MultiSelect component
 */
interface MultiSelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * An array of option objects to be displayed in the multi-select component.
   * Each option object has a label, value, and an optional icon.
   */
  options: {
    /** The text to display for the option. */
    label: string;
    /** The unique value associated with the option. */
    value: string;
    /** Optional icon component to display alongside the option. */
    icon?: React.ComponentType<{ className?: string }>;
    disable?: boolean;
  }[];

  /**
   * Callback function triggered when the selected values change.
   * Receives an array of the new selected values.
   */
  onValueChange: (value: string[]) => void;

  /** The default selected values when the component mounts. */
  defaultValue?: string[];

  /**
   * Placeholder text to be displayed when no values are selected.
   * Optional, defaults to "Select options".
   */
  placeholder?: string;

  /**
   * Animation duration in seconds for the visual effects (e.g., bouncing badges).
   * Optional, defaults to 0 (no animation).
   */
  animation?: number;

  /**
   * Maximum number of items to display. Extra selected items will be summarized.
   * Optional, defaults to 3.
   */
  maxCount?: number;

  /**
   * The modality of the popover. When set to true, interaction with outside elements
   * will be disabled and only popover content will be visible to screen readers.
   * Optional, defaults to false.
   */
  modalPopover?: boolean;

  /**
   * If true, renders the multi-select component as a child of another component.
   * Optional, defaults to false.
   */
  asChild?: boolean;

  /**
   * Additional class names to apply custom styles to the multi-select component.
   * Optional, can be used to add custom styles.
   */
  className?: string;
  popoverClass?: string;
  showall?: boolean;
}

export const MultiSelect = React.forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      onValueChange,
      defaultValue = [],
      placeholder = 'Select options',
      animation = 0,
      maxCount = 3,
      modalPopover = false,
      asChild = false,
      className,
      popoverClass,
      showall = false,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Backspace' && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onValueChange(newSelectedValues);
      }
    };

    const toggleOption = (option: string) => {
      const newSelectedValues = selectedValues.includes(option)
        ? selectedValues.filter((value) => value !== option)
        : [...selectedValues, option];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onValueChange([]);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };
    const filteredOptions = options.filter((option) => !option.disable);
    return (
      <Select<string, true>
        multiple
        items={options.map((option) => ({
          ...option,
          disabled: option.disable,
        }))}
        value={selectedValues}
        disabled={props.disabled}
        onValueChange={(next) => {
          setSelectedValues(next);
          onValueChange(next);
        }}
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        modal={modalPopover}
      >
        <SelectTrigger
          aria-label={props['aria-label'] ?? placeholder}
          render={<Button {...props} ref={ref} />}
          className={cn(
            'flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-card hover:bg-secondary',
            className
          )}
        >
          {selectedValues.length > 0 ? (
            <div className='flex justify-between items-center w-full'>
              <div className='flex flex-wrap items-center  gap-1 p-1'>
                {(showall ? selectedValues : selectedValues.slice(0, maxCount)).map((value) => {
                  const option = options.find((o) => o.value === value);
                  const IconComponent = option?.icon;
                  return (
                    <div
                      key={value}
                      className={cn(
                        'inline-flex items-center rounded-lg px-2 py-1 text-xs font-semibold bg-muted text-primary'
                      )}
                    >
                      {IconComponent && <IconComponent className='h-4 w-4 mr-2' />}
                      {option?.label}
                      <XCircle
                        className='ml-2 h-4 w-4 cursor-pointer'
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleOption(value);
                        }}
                      />
                    </div>
                  );
                })}
                {!showall && selectedValues.length > maxCount && (
                  <div
                    className={cn(
                      'bg-transparent inline-flex items-center border px-2 py-0.5 rounded-lg text-foreground border-foreground/10 hover:bg-transparent'
                    )}
                    style={{ animationDuration: `${animation}s` }}
                  >
                    {`+ ${selectedValues.length - maxCount} more`}
                    <XCircle
                      className='ml-2 h-4 w-4 cursor-pointer'
                      onClick={(event) => {
                        event.stopPropagation();
                        clearExtraOptions();
                      }}
                    />
                  </div>
                )}
              </div>
              <div className='flex items-center justify-between'>
                <XIcon
                  className='h-4 mx-2 cursor-pointer text-primary'
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClear();
                  }}
                />
                {/* <Separator
                    orientation="vertical"
                    className="flex min-h-6 h-full"
                  /> */}
                <ChevronDown className='h-4 mx-2 cursor-pointer text-primary' />
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-between w-full mx-auto'>
              <span className='text-sm text-muted-foreground mx-3'>{placeholder}</span>
              <ChevronDown className='h-4 cursor-pointer text-muted-foreground mx-2' />
            </div>
          )}
        </SelectTrigger>
        <SelectContent
          alignItemWithTrigger={false}
          sideOffset={4}
          align='start'
          className={cn(
            'z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-hidden w-auto p-0',
            popoverClass
          )}
        >
          <div className='flex items-center border-b px-3'>
            <Search aria-hidden className='mr-2 h-4 w-4 shrink-0 opacity-50' />
            <SelectInput
              aria-label='Search options'
              placeholder='Search...'
              onKeyDown={handleInputKeyDown}
              className='h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground'
            />
          </div>
          <SelectEmpty className='py-6 text-center text-sm'>No results found.</SelectEmpty>
          <SelectList className='max-h-[300px] overflow-y-auto p-1'>
            {(state) => (
              <>
                <SelectSelectAll className='relative flex cursor-pointer select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-highlighted:bg-neutral-200 dark:data-highlighted:bg-neutral-950'>
                  <div
                    className={cn(
                      'mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary',
                      selectedValues.length === filteredOptions.length
                        ? 'bg-primary text-primary-foreground'
                        : 'opacity-50 [&_svg]:invisible'
                    )}
                  >
                    <CheckIcon className='h-4 w-4' />
                  </div>
                  <span>(Select All)</span>
                </SelectSelectAll>
                {(state.items as MultiSelectProps['options']).map((option) => {
                  const isSelected = selectedValues.includes(option.value);
                  const isDisabled = option.disable; // Check if option is disabled

                  return (
                    <SelectItem
                      value={option.value}
                      label={option.label}
                      disabled={isDisabled}
                      key={option.value}
                      className={cn(
                        'relative flex cursor-pointer select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-highlighted:bg-neutral-200 dark:data-highlighted:bg-neutral-950',
                        isDisabled && 'opacity-50 cursor-not-allowed' // Disable styling
                      )}
                    >
                      <div
                        className={cn(
                          'mr-2 flex h-4 w-4 items-center justify-center rounded-xs border border-primary',
                          isSelected
                            ? 'bg-primary text-primary-foreground'
                            : 'opacity-50 [&_svg]:invisible'
                        )}
                      >
                        {!isDisabled && <CheckIcon className='h-4 w-4' />}
                      </div>
                      {option.icon && (
                        <option.icon
                          className={cn('mr-2 h-4 w-4', isDisabled ? 'text-muted-foreground' : '')}
                        />
                      )}
                      <span>{option.label}</span>
                    </SelectItem>
                  );
                })}
              </>
            )}
          </SelectList>
          <div className='flex items-center justify-between'>
            {selectedValues.length > 0 && (
              <>
                <button
                  type='button'
                  onClick={handleClear}
                  className='flex flex-1 items-center px-2 py-1.5 text-sm justify-center cursor-pointer border-r'
                >
                  Clear
                </button>
              </>
            )}
            <button
              type='button'
              onClick={() => setIsPopoverOpen(false)}
              className='flex flex-1 items-center px-2 py-1.5 text-sm justify-center cursor-pointer max-w-full'
            >
              Close
            </button>
          </div>
        </SelectContent>
      </Select>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
