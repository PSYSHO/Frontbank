import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OperationCreditComponent} from './operation-credit/operation-credit.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {DepositsComponent} from './deposits/deposits.component';
import {BoardOperatorComponent} from './board-operator/board-operator.component';
import {TransactionComponent} from './transaction/transaction.component';
import {CreditCardsComponent} from './credit-cards/credit-cards.component';
import {TarifBoardComponent} from './tarif-board/tarif-board.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {OperationDepositsComponent} from './operation-deposits/operation-deposits.component';
import {TransactionCreditComponent} from './transaction-credit/transaction-credit.component';
import {TransactionDeposComponent} from './transaction-depos/transaction-depos.component';
import {TransactionRefilComponent} from './transaction-refil/transaction-refil.component';
import {TransactionExternalComponent} from './transaction-external/transaction-external.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'deposit', component: DepositsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'oper', component: BoardOperatorComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'credit', component: CreditCardsComponent},
  {path: 'tarif', component: TarifBoardComponent},
  {path: 'operation/:id', component: OperationCreditComponent},
  {path: 'operationd/:id', component: OperationDepositsComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'transaction/credit', component: TransactionCreditComponent},
  {path: 'transaction/deposit', component: TransactionDeposComponent},
  {path: 'transaction/rifil', component: TransactionRefilComponent},
  {path: 'transaction/external', component: TransactionExternalComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [NgSelectModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
