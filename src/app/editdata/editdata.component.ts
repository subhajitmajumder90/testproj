import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
    formData = new FormGroup({
      name:       new FormControl('',Validators.required),
      phone:      new FormControl('',Validators.required),
      email:      new FormControl('',Validators.required),
      password:   new FormControl('',Validators.required),
    });
    fid:any;
  

  constructor(private activaterout:ActivatedRoute,private firstserv:FirstserviceService,private router:Router) { }

  ngOnInit() {
    this.activaterout.queryParams.subscribe((res:any)=>{
      this.fid=res.id;
      this.formData.patchValue({
        name:res.name,
        phone:res.phone,
        email:res.email,
        password:res.password,
      })
    });
  }
  
  editformdata(){
    let regdata:any= {data:this.formData.value, id:this.fid}
    this.firstserv.editList(regdata).subscribe(
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
