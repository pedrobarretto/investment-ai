import { useContext } from 'react';
import { InvestmentContext } from '@/context';

export function useInvestment() {
  const context = useContext(InvestmentContext);
  return context;
}