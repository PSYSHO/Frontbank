import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardOperatorComponent } from './board-operator/board-operator.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { DepositsComponent } from './deposits/deposits.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TarifBoardComponent } from './tarif-board/tarif-board.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { OperationCreditComponent } from './operation-credit/operation-credit.component';
import { OperationDepositsComponent } from './operation-deposits/operation-deposits.component';
import { TransactionDeposComponent } from './transaction-depos/transaction-depos.component';
import { TransactionCreditComponent } from './transaction-credit/transaction-credit.component';
import { TransactionExternalComponent } from './transaction-external/transaction-external.component';
import { TransactionRefilComponent } from './transaction-refil/transaction-refil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardOperatorComponent,
    CreditCardsComponent,
    DepositsComponent,
    TransactionComponent,
    TarifBoardComponent,
    OperationCreditComponent,
    OperationDepositsComponent,
    TransactionDeposComponent,
    TransactionCreditComponent,
    TransactionExternalComponent,
    TransactionRefilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
