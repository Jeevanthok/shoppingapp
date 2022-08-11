import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  constructor(private loginService: EmployeeService, private router: Router) { }
  Message: any;
  wrongCredential: boolean = false;

  ngOnInit(): void {
  }
  login() {
    this.loginService.login(this.username, this.password).subscribe(
      data => {
        console.log(data);
        if (data.status == "valid-admin") {
          localStorage.setItem("username", this.username);
          this.wrongCredential = false;
          alert('Succefully Login');
          this.router.navigate(['/seller']);
        }
        if (data.status == "valid-user") {
          localStorage.setItem("username", this.username);
          this.wrongCredential = false;
          alert('Succefully Login');
          this.router.navigate(['/home']);
        } if (data.status == "Incorrect credentials") {
          this.wrongCredential = true;
          this.Message = 'Incorrect Credentials';
        } if (data.status == "User doesn't exist") {
          this.wrongCredential = true;
          this.Message = "User doesn't exist";
        }
      }
    );
  }

}
