import React, { useState } from 'react';

export function NavBar() {
  return (
    <nav
      style={{ backgroundColor: '#0066CC' }}
      className='flex filter drop-shadow-lg bg-white px-4 py-4 h-20 items-center'
    >
      <div className='w-3/12 flex items-center'>
        <span className='text-2xl font-semibold' style={{ color: '#fff' }}>
          InvestmentAI
        </span>
      </div>
    </nav>
  );
}
