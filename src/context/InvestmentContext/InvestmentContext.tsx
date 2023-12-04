'use client';
import { ReactNode, createContext, useState } from 'react';

interface InvestmentContext {
  text: string;
  setText: (text: string) => void;
}

export const InvestmentContext = createContext<InvestmentContext>(
  {} as InvestmentContext
);

export function InvestmentContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [text, setText] = useState<string>('');

  return (
    <InvestmentContext.Provider value={{ text, setText }}>
      {children}
    </InvestmentContext.Provider>
  );
}
