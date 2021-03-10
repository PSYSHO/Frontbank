import {Payments} from './payments';
import {Tarif} from './tarif';

export class Creditcards {
  id: bigint;
  rate: string;
  wallet: number;
  userId: bigint;
  payments: Payments[];
  currencyEnum: string;
  duration: bigint;
  peni: number;
  confirm: boolean;
  limitCard: number;
  validPeriod: string;
}
