import { InvestmentType, RiskLevel, TimeSpent } from '@/enums';
import { useState } from 'react';
import axios from 'axios';
import { useInvestment } from '@/hooks';

export function InputBar() {
  const [riskLevel, setRiskLevel] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const { setText } = useInvestment();

  async function sendPrompt() {
    console.log(riskLevel, timeSpent, value, type);
    const url = `http://localhost:8080/investment/${
      type === InvestmentType.normal ? 'normal' : 'crypto'
    }`;
    const headers = {
      'Content-Type': 'application/json',
    };
    const data =
      type === InvestmentType.normal
        ? {
            riskLevel,
            timeSpent,
            value,
          }
        : { value };

    try {
      const response = await axios.post(url, data, { headers });
      setText(response.data.text);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='relative mx-auto max-w-4xl mt-10'>
      <div className='flex flex-col justify-center items-center w-full p-4 bg-white shadow-md rounded-lg'>
        <div className='flex flex-col sm:flex-row sm:items-center'>
          {/* Dropdown 1 */}
          <div className='w-full sm:w-auto mb-2 sm:mb-0'>
            <select
              value={riskLevel}
              onChange={(event) => setRiskLevel(event.target.value)}
              className='w-full rounded-md border border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:border-blue-500'
            >
              <option value=''>Risco do investimento</option>
              <option value={RiskLevel.lowRisk}>Baixo Risco</option>
              <option value={RiskLevel.mediumRisk}>Médio Risco</option>
              <option value={RiskLevel.highRisk}>Alto Risco</option>
            </select>
          </div>

          {/* Dropdown 2 */}
          <div className='w-full sm:w-auto mb-2 sm:mb-0 ml-0 sm:ml-4'>
            <select
              value={timeSpent}
              onChange={(event) => setTimeSpent(event.target.value)}
              className='w-full rounded-md border border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:border-blue-500'
            >
              <option value=''>Tempo do investimento</option>
              <option value={TimeSpent.shortTerm}>Curto Prazo</option>
              <option value={TimeSpent.mediumTerm}>Médio Prazo</option>
              <option value={TimeSpent.highTerm}>Longo Prazo</option>
            </select>
          </div>

          {/* Input 3 */}
          <div className='w-full sm:w-auto mb-2 sm:mb-0 ml-0 sm:ml-4'>
            <input
              className='w-full rounded-md border border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:border-blue-500'
              type='number'
              min={0}
              step={1}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>

          {/* Dropdown 4 */}
          <div className='w-full sm:w-auto mb-2 sm:mb-0 ml-0 sm:ml-4'>
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className='w-full rounded-md border border-gray-300 py-2 px-3 leading-tight focus:outline-none focus:border-blue-500'
            >
              <option value=''>Tipo dos ativos</option>
              <option value={InvestmentType.normal}>
                Normal (Bolsa e Ações)
              </option>
              <option value={InvestmentType.crypto}>Criptomoedas</option>
            </select>
          </div>

          {/* Button */}
          <div className='w-full sm:w-auto mt-2 sm:mt-0 ml-0 sm:ml-4 sm:flex-shrink-0'>
            <button
              onClick={sendPrompt}
              className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
