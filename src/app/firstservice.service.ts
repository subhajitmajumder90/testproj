import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor(private httpss:HttpClient) { }
  getList(){
    return this.httpss.get('http://192.168.1.100/angular_api/list.php');
  }
  setList(insdata:any){
    return this.httpss.post('http://192.168.1.100/angular_api/insert.php',insdata);
  }
  editList(editid){
    return this.httpss.post("http://192.168.1.100/angular_api/update.php",editid);
  }
  deleteList(delid:number){
    return this.httpss.post('http://192.168.1.100/angular_api/delete.php',delid);
    //return this.httpss.delete('http://192.168.1.100/angular_api/delete.php/'+delid);
  }
}
