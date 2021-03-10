import {Role} from './role';
import {Deposits} from './deposits';
import {Creditcards} from './creditcards';

export class User{
  id: bigint;
  username: string;
  secondName: string;
  lastname: string;
  roles: Role[];
  wallet: number;
  deposit: Deposits[];
  creditcard: Creditcards[];
  email: string;
  password: string;
}
