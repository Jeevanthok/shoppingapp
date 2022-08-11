import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;
  baseurl: string;

  constructor(private http: HttpClient){}

  public getProducts(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/product/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/product/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/product/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${employeeId}`);
  }

  public login(username:any,password:any):Observable<any>{
    return this.http.post(this.apiServerUrl+"/product/login",{
      "username" : username,
      "password" : password
    })
  }
}
