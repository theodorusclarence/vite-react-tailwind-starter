import React from 'react';

import CustomLink from '@/components/CustomLink';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
            <CustomLink href='https://github.com/theodorusclarence/vite-react-tailwind-starter'>
              <h1>Vite React Tailwind Starter</h1>
            </CustomLink>
            <p className='mb-4'>
              By{' '}
              <CustomLink href='https://theodorusclarence.com'>
                Theodorus Clarence
              </CustomLink>
            </p>

            <div className='mt-8 text-dark'>
              <p className='text-[#ffe347]'>JIT is on</p>
            </div>
            <footer className='absolute text-gray-300 bottom-2'>
              © {new Date().getFullYear()}{' '}
              <CustomLink href='https://theodorusclarence.com'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
