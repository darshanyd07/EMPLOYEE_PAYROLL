import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private http:HttpClient) { }

add(employee :any){

  return this.http.post("http://localhost:8082/employee/post",employee);

}

getAll(){
  return this.http.get("http://localhost:8082/employee/getall");

}

getEmployeeById(Id:number){
  return this.http.get("http://localhost:8082/employee/get/"+Id);
}

updateEmployeeById(employee:any, Id:number){
  return this.http.put("http://localhost:8082/employee/updateEmployee/"+Id, employee);
}

deleteById(employeeId:number){
  return this.http.delete("http://localhost:8082/employee/delete/"+employeeId);
}


}
