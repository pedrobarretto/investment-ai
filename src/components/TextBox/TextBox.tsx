import { useInvestment } from '@/hooks';
import React from 'react';

export function TextBox() {
  const { text } = useInvestment();

  return (
    <div className='relative mx-auto max-w-4xl mt-10'>
      <div
        className='flex flex-col justify-center w-full p-4 bg-white shadow-md rounded-lg'
        style={{ whiteSpace: 'pre-line' }}
      >
        <h1>Resposta gerada por inteligência artificial:</h1>
        {text}
      </div>
    </div>
  );
}
