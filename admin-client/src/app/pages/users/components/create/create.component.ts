import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../../../../viewModels/account/account';
import { AccountService } from '../../../../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  account:AccountModel
  constructor(private accountService:AccountService,private router:Router,private toastr: ToastrService) { 
    this.account=new AccountModel();
  }
  ngOnInit() {
  }
  create(){
    this.accountService.create(this.account).then(x=>{
      this.toastr.success(x.message, 'پیام');
      this.router.navigate(["/pages/users"]);
    })
  }
}
