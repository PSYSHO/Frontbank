import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tarif} from '../entity/tarif';
import {Observable} from 'rxjs';
import {BigInteger} from '@angular/compiler/src/i18n/big_integer';

const URL = 'http://localhost:8080/bank/tarif';

@Component({
  selector: 'app-tarif-board',
  templateUrl: './tarif-board.component.html',
  styleUrls: ['./tarif-board.component.css']
})
export class TarifBoardComponent implements OnInit {
  tarifs: Tarif[];
  tari = {
    tarifEnum: '',
    name: '',
    rate: ''
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllTarif().subscribe(
      data => {
        this.tarifs = JSON.parse(data);
      },
      err => {
        this.tarifs = JSON.parse(err.error).message;
      }
    );
  }

  public createTarif(): void {
    const data = {
      name: this.tari.name,
      rate: this.tari.rate,
      tarifEnum: this.tari.tarifEnum
    };

    this.http.post(URL + '/add', data).subscribe();
    window.location.reload();
  }

  public getAllTarif(): Observable<any> {
    return this.http.get(URL, {responseType: 'text'});
  }

  public removeTarif(Id: any): void {
    this.http.delete(URL + '/' + Id, {responseType: 'text'}).subscribe();
    window.location.reload();
  }
}
