import React from 'react';

function Footer() {
  return (
    <>
      <footer className='mt-8 not-prose py-6'>
        <p className='text-sm leading-loose text-primary/90 text-center md:text-left'>
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
