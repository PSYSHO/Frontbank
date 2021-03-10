import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entity/user';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/user', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/admin/' + 'users', {responseType: 'text'});
  }

  public getAllCreditUSer(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/credit/confirm', {responseType: 'text'});
  }

  public getAllDeposUSer(): Observable<any> {
    return this.http.get('http://localhost:8080/bank/deposit', {responseType: 'text'});
  }



}
