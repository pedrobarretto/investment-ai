import { RiskLevel, TimeSpent } from '@/enums';

export interface RiskPrompt {
  riskLevel: RiskLevel;
  value: number;
  timeSpent: TimeSpent;
}