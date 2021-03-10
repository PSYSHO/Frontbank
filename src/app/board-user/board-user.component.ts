import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from '../entity/user';
import {Creditcards} from '../entity/creditcards';
import {Deposits} from '../entity/deposits';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  user: User;
  credits: Creditcards[];
  deposits: Deposits[];


  constructor(private router: Router, private userService: UserService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.user = JSON.parse(data);
      },
      err => {
        this.user = JSON.parse(err.error).message;
      }
    );
    this.userService.getAllCreditUSer().subscribe(
      data => {
        this.credits = JSON.parse(data);
      },
      err => {
        this.credits = JSON.parse(err.error).message;
      }
    );
    this.userService.getAllDeposUSer().subscribe(
      data => {
        this.deposits = JSON.parse(data);
      },
      err => {
        this.deposits = JSON.parse(err.error).message;
      }
    );
  }
  createDepos(): void {
    this.router.navigate(['deposit']);
  }
  createCredit(): void {
    this.router.navigate(['credit']);
  }
  public remove(id: number): void {
    this.http.delete('http://localhost:8080/bank/deposit/' + id).subscribe();
  }
}
