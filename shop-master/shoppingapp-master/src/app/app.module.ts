import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Component/home/home.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SellerComponent } from './Component/seller/seller.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { NavbarComponent } from './Component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    SellerComponent,
    LoginComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
