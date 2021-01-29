import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from '../../_m/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  person: User ={email:'',password:'',repeatedPassword:''};
  
 constructor(private authService:AuthService){}

  ngOnInit(): void {

  }


  onSubmit() {
    this.authService.register(this.person).subscribe(
      (res) =>{console.log(res);
      },
      (err) =>{console.log(err);
      },
      () =>{},
    );
  }


}
