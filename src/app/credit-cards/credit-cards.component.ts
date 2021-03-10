import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Creditcards} from '../entity/creditcards';
import {Router} from '@angular/router';

const URL = 'http://localhost:8080/bank/credit';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.css']
})
export class CreditCardsComponent implements OnInit {
  credits: Creditcards[];
  creditDto = {
    rate: '',
    curencyEnum: '',
    limitCard: '',
    duration: ''
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

  addCredit(): void {
    const data = {
      rate: this.creditDto.rate,
      limitCard: this.creditDto.limitCard,
      duration: this.creditDto.duration,
      curencyEnum: this.creditDto.curencyEnum
    };
    this.http.post(URL, data).subscribe();
    this.router.navigate(['user']);
  }

  public getAllCredit(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/credit/confirm', {responseType: 'text'});
  }
}
