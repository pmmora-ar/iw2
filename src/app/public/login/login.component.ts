import { Component, OnInit } from '@angular/core';
//import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    //public authService: AuthService
  ) { }

  public enabledProviders = {
    //email: {},
    google: {
      name: "google",
      text: "Google",
      tip: "Log in with your Google account.",
      description: "Log in with your Google account.",
      image: "",
    },
    facebook: {
      name: "facebook",
      text: "Facebook",
      tip: "Log in with your Facebook account.",
      description: "Log in with your Facebook account.",
      image: "",
    }
  };

  ngOnInit() {
  }
  providerSelector(provider) {}
}
