import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Deposits} from '../entity/deposits';
import {Router} from '@angular/router';

const URL = 'http://localhost:8080/bank/transaction';

@Component({
  selector: 'app-transaction-depos',
  templateUrl: './transaction-depos.component.html',
  styleUrls: ['./transaction-depos.component.css']
})
export class TransactionDeposComponent implements OnInit {
  deposits: Deposits[];
  transactionDto = {
    summ: '',
    wallet: '',
    type: '',
    discription: '',
    approved: '',
    rate: '',
  };

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllDepos().subscribe(
      data => {
        this.deposits = JSON.parse(data);
      },
      err => {
        this.deposits = JSON.parse(err.error).message;
      }
    );
  }

  addDepositTransaction(): void {
    const data = {
      summ: this.transactionDto.summ,
      wallet: this.transactionDto.wallet,
      description: this.transactionDto.discription,
      rate: this.transactionDto.rate = '0',
      approved: this.transactionDto.approved = 'true',
      type: this.transactionDto.type = 'Deposit'
    };
    this.http.post(URL + '/depos' + '/' + this.transactionDto.wallet, data).subscribe();
    this.router.navigate(['user']);
  }

  public getAllDepos(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/deposit/all', {responseType: 'text'});
  }

}
