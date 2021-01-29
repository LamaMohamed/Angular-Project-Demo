import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from '../../_m/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  person: User = { email: '', password: ''};
  

 constructor(private authService:AuthService){}

 
  ngOnInit(): void {

  }


  onSubmit() {
    this.authService.login(this.person).subscribe(
      (res) => {
        localStorage.setItem('token', res['token']);
        console.log(res);
      },
      (err) => {console.log(err);
      },
      () => { },
    )
  }

}
