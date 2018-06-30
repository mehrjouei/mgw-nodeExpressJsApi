import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AccountService } from '../../../../services/account.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) { }
  data;
  selectedRow;
  ngOnInit() {
    this.accountService.getAll().then(x => {
      this.data = x.users;
    })
  }
  settings = {
    columns: {
      id: {
        title: 'کد کاربری',
        show:false
      },
      userName: {
        title: 'نام کاربری'
      },
      firstName: {
        title: 'نام'
      },
      lastName: {
        title: 'نام خانوادگی'
      },
      isActive: {
        title: 'فعال/غیرفعال',
        valuePrepareFunction:this.deactiveFunc,
      },
      role: {
        title: 'نقش کاربری',
        valuePrepareFunction:this.rolesFunc,
      }
    },
    actions: false
  };
  selectRow(event){
    this.selectedRow=event.selected[0];
  }
  deactiveFunc(value){
    if (value=="1") {
      return "فعال";
    }
    return "غیر فعال";

  }
  rolesFunc(value){
    switch (value) {
      case 0:
        return "مدیر";
      case 1:
        return "مدیر پشتیبانی";
        
        case 2:
        return " پشتیبان";
        default:
        return value;
    }
  }
}
