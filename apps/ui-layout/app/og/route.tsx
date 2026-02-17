import { ImageResponse } from 'next/og';

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: 'normal' }[]
> {
  const [
    { base64Font: normal },
    { base64Font: mono },
    { base64Font: semibold },
  ] = await Promise.all([
    import('./geist-regular-otf.json').then((mod) => mod.default || mod),
    import('./geistmono-regular-otf.json').then((mod) => mod.default || mod),
    import('./geist-semibold-otf.json').then((mod) => mod.default || mod),
  ]);

  return [
    {
      name: 'Geist',
      data: Buffer.from(normal, 'base64'),
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Geist Mono',
      data: Buffer.from(mono, 'base64'),
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Geist',
      data: Buffer.from(semibold, 'base64'),
      weight: 600 as const,
      style: 'normal' as const,
    },
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');
  const description = searchParams.get('description');

  const [fonts] = await Promise.all([loadAssets()]);

  return new ImageResponse(
    <div
      tw='flex h-full w-full bg-blue-500 text-white'
      style={{ fontFamily: 'Geist Sans' }}
    >
      <div tw='flex border absolute border-stone-200 border-dashed inset-y-0 left-16 w-[1px]' />
      <div tw='flex border absolute border-stone-200 border-dashed inset-y-0 right-16 w-[1px]' />
      <div tw='flex border absolute border-stone-200 inset-x-0 h-[1px] top-16' />
      <div tw='flex border absolute border-stone-200 inset-x-0 h-[1px] bottom-16' />
      <div tw='flex absolute flex-row bottom-24 right-24 text-white'>
        <svg
          viewBox='0 0 190 213'
          width={48}
          height={48}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0.00239237 54.1534V14.4734C0.00239237 10.535 1.81881 7.089 5.45165 4.13526C8.8423 1.37843 12.9595 0 17.8033 0H105.355C111.167 0 116.132 1.67381 120.249 5.02138C124.367 8.36896 126.425 12.3073 126.425 16.8363V31.6051C126.425 35.7403 127.636 39.5802 130.058 43.1247C132.48 46.6692 135.871 49.426 140.23 51.3952C144.347 53.5612 148.949 54.7427 154.035 54.9397H169.293C174.863 54.9397 179.707 56.515 183.824 59.6657C187.941 63.0132 190 67.05 190 71.776V151.064C190 151.239 189.999 151.413 189.998 151.587V197.482C189.998 201.527 188.181 205.066 184.548 208.1C181.158 210.931 177.04 212.347 172.197 212.347H84.6452C78.8327 212.347 73.8678 210.628 69.7506 207.19C65.6333 203.752 63.5747 199.707 63.5747 195.056V179.888C63.5747 175.641 62.3638 171.697 59.9419 168.057C57.52 164.416 54.1293 161.585 49.7699 159.563C45.6527 157.338 41.0511 156.125 35.9651 155.922H20.7072C15.1368 155.922 10.2931 154.305 6.17583 151.069C2.05861 147.631 0 143.485 0 138.631V54.6035C0 54.4533 0.0007987 54.3033 0.00239237 54.1534ZM126.062 153.385V60.2564C126.062 58.878 125.578 57.6965 124.609 56.7119C123.398 55.7273 121.945 55.235 120.249 55.235H69.0264C67.3311 55.235 65.8779 55.7273 64.667 56.7119C64.481 56.8631 64.3094 57.0189 64.152 57.1794L63.938 150.462C63.938 151.878 64.4224 153.091 65.3912 154.102C66.6021 155.113 68.0552 155.619 69.7506 155.619H120.974C122.669 155.619 124.122 155.113 125.333 154.102C125.607 153.874 125.85 153.634 126.062 153.385Z'
            fill='white'
          />
        </svg>
      </div>
      <div tw='flex flex-col absolute w-[896px] justify-center inset-32'>
        <div
          tw='tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]'
          style={{
            textWrap: 'balance',
            fontWeight: 600,
            fontSize: title && title.length > 20 ? 64 : 80,
            letterSpacing: '-0.04em',
          }}
        >
          {title}
        </div>
        <div
          tw='text-[40px] leading-[1.5] flex-grow-1 text-stone-400'
          style={{
            fontWeight: 500,
            textWrap: 'balance',
          }}
        >
          {description}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 628,
      fonts,
    }
  );
}
