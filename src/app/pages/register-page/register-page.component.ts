import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  cities = ['Delhi', 'Mumbai', 'Pune'];

  userData = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitHanlder(){
    this.authService.register(this.userData).subscribe(response => {
      console.log(response)
    })
  }

}
