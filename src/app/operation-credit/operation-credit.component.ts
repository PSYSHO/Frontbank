import {Component, OnInit} from '@angular/core';
import {Creditcards} from '../entity/creditcards';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:8080/bank/operation';

@Component({
  selector: 'app-operation',
  templateUrl: './operation-credit.component.html',
  styleUrls: ['./operation-credit.component.css']
})
export class OperationCreditComponent implements OnInit {
  id: number;
  creditCard: Creditcards;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCredit(this.id).subscribe(data => {
        console.log(data);
        this.creditCard = JSON.parse(data);
      },
      err => {
        this.creditCard = JSON.parse(err.error).message;
      });
  }
  operation(): void {
    this.router.navigate(['oper']);
  }

  public getCredit(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/bank/operation/credit/' + this.id, {responseType: 'text'});
  }
}
