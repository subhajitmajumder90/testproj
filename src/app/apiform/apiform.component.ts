import { Component, OnInit } from '@angular/core';
import { FirstserviceService } from '../firstservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apiform',
  templateUrl: './apiform.component.html',
  styleUrls: ['./apiform.component.css']
})
export class ApiformComponent implements OnInit {

  slist:any[];
  constructor(private firstserv:FirstserviceService,private router:Router) { }


  ngOnInit() {
    this.showlist();

  }
  showlist(){
    this.firstserv.getList().subscribe(
      (res:any)=>{
        this.slist=res.data;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  editlist(editdata){
    this.router.navigate(["editdata"],{queryParams:editdata});
  }
  deletelist(delid,i){
    if(confirm("Are you Sure?")){
      this.firstserv.deleteList(delid).subscribe( res=>{
      
          console.log(res);
          this.slist.splice(i,1);
        },
        err=>{
          console.log(err);
        }
      );
    }
  }
  

}
