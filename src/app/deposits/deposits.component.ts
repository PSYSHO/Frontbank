import {Component, OnInit} from '@angular/core';
import {Deposits} from '../entity/deposits';
import {HttpClient} from '@angular/common/http';
import {Tarif} from '../entity/tarif';
import {Observable} from 'rxjs';
import {NgSelectModule} from '@ng-select/ng-select';
import {Router} from '@angular/router';

const URL = 'http://localhost:8080/bank/deposit';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent implements OnInit {
  deposits: Deposits[];
  tarifs: Tarif[];
  deposDto = {
    walletDepos: '',
    tarif: '',
    description: '',
    duration: ''
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
    this.getAllTarif().subscribe(
      data => {
        this.tarifs = JSON.parse(data);
      },
      err => {
        this.tarifs = JSON.parse(err.error).message;
      }
    );
  }

  addDeposit(): void {
    const data = {
      walletDepos: this.deposDto.walletDepos,
      tarif: this.deposDto.tarif,
      description: this.deposDto.description,
      duration: this.deposDto.duration
    };
    this.http.post(URL, data).subscribe();
    this.router.navigate(['user']);

    //console.trace(data);
  }

  public getAllTarif(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/tarif', {responseType: 'text'});
  }

  public getAllDepos(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/deposit/all', {responseType: 'text'});
  }
}
