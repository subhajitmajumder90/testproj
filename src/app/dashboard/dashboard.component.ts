import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestmModule } from '../testm/testm.module';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private activaterout:ActivatedRoute) { }
  uname:string;
  upass:string;
  testm:TestmModule[];

  ngOnInit() {
    this.activaterout.queryParams.subscribe(params=>{
      this.uname=params['uname'];
      this.upass=params['upass'];
    });
    this.testm= [
      {
        id:1,
        title:"Subhajit",
        complete:true,
      }
    ]
  }

}
