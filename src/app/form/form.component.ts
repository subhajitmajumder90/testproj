import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit() {
  }
  zz="";
  share(valneme:string,pass:string){
    
    if(valneme!="" && pass!=""){
      
      alert("Username= "+valneme+" and pass= "+ pass);
      //this.router.navigate(['dashboard']);
      this.router.navigate(['dashboard'],{queryParams:{uname:valneme,upass:pass}});
    }
    else{
      alert("you entered nothing");
    }
  }
  
}
