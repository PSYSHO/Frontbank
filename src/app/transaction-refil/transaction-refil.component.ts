import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

const URL = 'http://localhost:8080/bank/transaction/refile';

@Component({
  selector: 'app-transaction-refil',
  templateUrl: './transaction-refil.component.html',
  styleUrls: ['./transaction-refil.component.css']
})
export class TransactionRefilComponent implements OnInit {
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
  }

  addTransaction(): void {
    const data = {
      summ: this.transactionDto.summ,
      wallet: this.transactionDto.wallet,
      description: this.transactionDto.discription,
      rate: this.transactionDto.rate = '0',
      approved: this.transactionDto.approved = 'true',
      type: this.transactionDto.type = 'External'
    };
    this.http.post(URL, data).subscribe();
    this.router.navigate(['user']);
  }
}
