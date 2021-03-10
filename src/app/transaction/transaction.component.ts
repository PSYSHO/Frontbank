import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  createDeposTrans(): void {
    this.router.navigate(['transaction/deposit']);
  }

  createCreditTrans(): void {
    this.router.navigate(['transaction/credit']);
  }

  createRefilTrans(): void {
    this.router.navigate(['transaction/rifil']);
  }

  createExternalTrans(): void {
    this.router.navigate(['transaction/external']);
  }

}
