import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {User} from '../entity/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const API_URL = 'http://localhost:8080/bank/admin/';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.users = JSON.parse(data);
      },
      err => {
        this.users = JSON.parse(err.error).message;
      }
    );
  }
  addOp(data: any): void{
    this.http.put('http://localhost:8080/bank/admin/' + 'oper', data).subscribe();
  }
  addAdm(user): Observable<any>{
    return this.http.put('http://localhost:8080/bank/admin/' + 'adm', user);
    window.location.reload();
  }
}
