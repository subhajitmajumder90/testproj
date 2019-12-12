import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {
  formData = new FormGroup({
    name:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });


  constructor(private router:Router,private firstserv:FirstserviceService) { }

  ngOnInit() {
  }
  addformdata(){
    let regdata:any= {data:this.formData.value}
    this.firstserv.setList(regdata).subscribe(
      (res:any)=>{
        if(res.status){
          this.router.navigate(['apiform']);
        }
      },
      (err:any)=>{
        console.log(err);
      }
    );
  }

}
