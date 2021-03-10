import {Tarif} from './tarif';

export class Deposits {
  id: bigint;
  walletDepos: number;
  type: Tarif;
  description: string;
  userId: number;
  confirm: boolean;
}
