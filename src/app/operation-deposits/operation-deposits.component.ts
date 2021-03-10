import { Component, OnInit } from '@angular/core';
import {Creditcards} from '../entity/creditcards';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Deposits} from '../entity/deposits';

@Component({
  selector: 'app-operation-deposits',
  templateUrl: './operation-deposits.component.html',
  styleUrls: ['./operation-deposits.component.css']
})
export class OperationDepositsComponent implements OnInit {
  id: number;
  deposits: Deposits;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCredit(this.id).subscribe(data => {
        console.log(data);
        this.deposits = JSON.parse(data);
      },
      err => {
        this.deposits = JSON.parse(err.error).message;
      });
  }
  operation(): void {
    this.router.navigate(['oper']);
  }

  public getCredit(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/bank/operation/deposit/' + this.id, {responseType: 'text'});
  }

}
