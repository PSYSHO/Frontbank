import {Component, OnInit} from '@angular/core';
import {Deposits} from '../entity/deposits';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Creditcards} from '../entity/creditcards';
import {Router} from '@angular/router';

const URL = 'http://localhost:8080/bank/transaction';

@Component({
  selector: 'app-transaction-credit',
  templateUrl: './transaction-credit.component.html',
  styleUrls: ['./transaction-credit.component.css']
})
export class TransactionCreditComponent implements OnInit {

  credits: Creditcards[];
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
    this.getAllCredit().subscribe(
      data => {
        this.credits = JSON.parse(data);
      },
      err => {
        this.credits = JSON.parse(err.error).message;
      }
    );
  }

  addCreditTransaction(): void {
    const data = {
      summ: this.transactionDto.summ,
      wallet: this.transactionDto.wallet,
      description: this.transactionDto.discription,
      rate: this.transactionDto.rate = '0',
      approved: this.transactionDto.approved = 'true',
      type: this.transactionDto.type = 'Credit'
    };
    this.http.post(URL + '/credit' + '/' + this.transactionDto.wallet, data).subscribe();
    this.router.navigate(['user']);
  }

  public getAllCredit(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/credit/all', {responseType: 'text'});
  }
}
