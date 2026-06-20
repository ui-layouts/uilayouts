'use client';
import { cn } from '@/lib/utils';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

interface TagsInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  editTag?: boolean;
  className?: string;
}

export const TagsInput: React.FC<TagsInputProps> = ({
  tags,
  setTags,
  editTag = true,
  className,
}) => {
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const trimmedInput = input.trim();

    if ((e.key === 'Enter' || e.key === ',') && trimmedInput) {
      e.preventDefault();
      if (editingIndex !== null) {
        const updatedTags = [...tags];
        updatedTags[editingIndex] = trimmedInput;
        setTags(updatedTags);
        setEditingIndex(null);
      } else if (!tags.includes(trimmedInput)) {
        setTags([...tags, trimmedInput]);
      }
      setInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
    if (editingIndex !== null) {
      setEditingIndex(null);
    }
  };

  const handleEditTag = (index: number) => {
    if (editTag) {
      setInput(tags[index]);
      setEditingIndex(index);
      setTimeout(() => editInputRef.current?.focus(), 0);
    }
  };

  const handleBlur = () => {
    if (editingIndex !== null) {
      const updatedTags = [...tags];
      const trimmedInput = input.trim();
      if (trimmedInput) {
        updatedTags[editingIndex] = trimmedInput;
      } else {
        updatedTags.splice(editingIndex, 1);
      }
      setTags(updatedTags);
      setEditingIndex(null);
    }
    setInput('');
  };

  useEffect(() => {
    if (editInputRef.current) {
      editInputRef.current.style.width = `${input.length + 1}ch`;
    }
  }, [input]);

  return (
    <div
      className={cn(
        'flex flex-wrap w-full items-center gap-2 p-2 border-2 rounded-md focus-within:border-blue-500 bg-background',
        className
      )}
    >
      {tags.map((tag, index) => (
        <div key={tag} className='relative'>
          {editTag && editingIndex === index ? (
            <input
              ref={editInputRef}
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleAddTag}
              onBlur={handleBlur}
              className='px-2 py-1 text-sm border bg-muted rounded-sm outline-hidden'
              placeholder='Edit tag...'
              style={{ width: `${input.length + 1 * 1.2}px` }}
            />
          ) : (
            <div
              onClick={() => handleEditTag(index)}
              className='flex items-center gap-2 px-1 pl-2 py-1 text-sm font-medium text-white bg-blue-500 rounded-sm cursor-pointer hover:bg-blue-600'
            >
              {tag}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTag(tag);
                }}
                className='text-primary px-1 focus:outline-hidden bg-card rounded-sm'
              >
                &times;
              </button>
            </div>
          )}
        </div>
      ))}
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTag}
        className={`grow px-2 py-1 text-sm border-none outline-hidden bg-background rounded-md ${
          editingIndex !== null ? 'opacity-0' : 'opacity-100'
        }`}
        placeholder='Add a tag...'
      />
    </div>
  );
};
