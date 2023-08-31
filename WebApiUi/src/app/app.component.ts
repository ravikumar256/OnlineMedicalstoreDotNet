import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApi.Ui';
  addDrugClicked:boolean=false;
  DrugsClicked:boolean=true;
  showOrderClicked:boolean=false;
  searchDrugsClicked: boolean=true;
  myCartClicked: boolean=false;
  myOrdersClicked: boolean=false;
  loginClicked: boolean=false;
  signUpClicked: boolean=false;
  constructor(private userService: UsersService) { }
  isLoginClicked()
  {
    this.loginClicked=true;
    this.signUpClicked=false;
  }
  isSignUpClicked()
  {
    this.signUpClicked=true;
    this.loginClicked=false;
  }
  isSearchDrugsClicked()
  {
    this.searchDrugsClicked=true;
    this.myCartClicked=false;
    this.myOrdersClicked=false;
  }
  isMyCartClicked()
  {
    this.searchDrugsClicked=false;
    this.myCartClicked=true;
    this.myOrdersClicked=false;
  }
  isMyOrdersClicked()
  {
    this.searchDrugsClicked=false;
    this.myCartClicked=false;
    this.myOrdersClicked=true;
  }
  isShowOrderClicked()
  {
    this.showOrderClicked=true;
    this.addDrugClicked=false;
    this.DrugsClicked=false;
  }
  isDrugsClicked()
  {
    this.showOrderClicked=false;
    this.addDrugClicked=false;
    this.DrugsClicked=true;
  }
  isAddDrugClicked()
  {
    this.showOrderClicked=false;
    this.addDrugClicked=true;
    this.DrugsClicked=false;
  }

  isUserLoggedIn(): boolean {
    //console.log(this.userService.isUserLoggedIn());
    return this.userService.isUserLoggedIn();
  }
  isAdminLoggedIn(): boolean {
    //console.log(this.userService.isAdminLoggedIn());
    return this.userService.isAdminLoggedIn();
  }

  getUsername(): string {
    return this.userService.getUsername();
  }

  logout(): void {
    this.userService.logout();
    this.loginClicked=false;
  }
}
