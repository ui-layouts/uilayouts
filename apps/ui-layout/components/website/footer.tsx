import React from 'react';

function Footer() {
  return (
    <>
      <footer className='xl:pb-2 p-2 mt-8 rounded-md not-prose'>
        <p className='text-balance text-center text-sm leading-loose text-primary/90 md:text-left'>
          Built by{' '}
          <a
            href='https://x.com/naymur_dev'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            naymur
          </a>{' '}
          . The source code is available on{' '}
          <a
            href='https://github.com/ui-layouts/uilayouts'
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default Footer;
