'use client';
import React from 'react';
import { ShikiCode } from '@/components/ui/shiki-code';

const sampleCode = `import React from 'react';

function MyComponent() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default MyComponent;`;

const pythonCode = `def fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Example usage
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`;

const cssCode = `.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}`;

export default function ShikiCodeDemo() {
  return (
    <div className='p-6 w-full dark:bg-black bg-white rounded-xl mx-auto space-y-8'>
      <div>
        <h3 className='text-lg font-semibold mb-3'>TypeScript Example</h3>
        <ShikiCode code={sampleCode} lang='tsx' className='mb-6' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>Python Example</h3>
        <ShikiCode code={pythonCode} lang='python' className='mb-6' />
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3'>CSS Example</h3>
        <ShikiCode code={cssCode} lang='css' className='mb-6' />
      </div>
    </div>
  );
}
