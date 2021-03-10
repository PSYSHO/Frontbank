import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Operation} from '../entity/operation';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Deposits} from '../entity/deposits';

const URL = 'http://localhost:8080/bank/operation';

@Component({
  selector: 'app-board-operator',
  templateUrl: './board-operator.component.html',
  styleUrls: ['./board-operator.component.css']
})
export class BoardOperatorComponent implements OnInit {
  operationsC: Operation[];
  operationcD: Operation[];
  id: number;
  OperationDto = {
    approvedOperator: false,
    description: ''
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllOperationCredit().subscribe(
      data => {
        this.operationsC = JSON.parse(data);
      },
      err => {
        this.operationsC = JSON.parse(err.error).message;
      }
    );
    this.getAllOperationDepos().subscribe(
      data => {
        this.operationcD = JSON.parse(data);
      },
      err => {
        this.operationcD = JSON.parse(err.error).message;
      }
    );
  }

  addConfirmCredit(id: number): void {
    const data = {
      approvedOperator: this.OperationDto.approvedOperator = true,
      description: this.OperationDto.description
    };
    this.http.post('http://localhost:8080/bank/operation/credit/' + id, data).subscribe();
    //console.trace(data);
  }
  addConfirmDepos(id: number): void {
    const data = {
      approvedOperator: this.OperationDto.approvedOperator = true,
      description: this.OperationDto.description
    };
    this.http.post('http://localhost:8080/bank/operation/deposit/' + id, data).subscribe();
    //console.trace(data);
  }

  public getAllOperationCredit(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/operation/credit', {responseType: 'text'});
  }

  public getAllOperationDepos(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/operation/depos', {responseType: 'text'});
  }
  operationDetailsDepos(id: number): void {
    this.router.navigate(['operationd', id]);
  }

  operationDetailsCredit(id: number): void {
    this.router.navigate(['operation', id]);
  }
}
