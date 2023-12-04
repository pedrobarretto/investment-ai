import { InputBar, NavBar, TextBox } from '@/components';
import { InvestmentContextProvider } from '@/context';

export default function Home() {
  return (
    <InvestmentContextProvider>
      <NavBar />
      <InputBar />
      <TextBox />
    </InvestmentContextProvider>
  );
}
