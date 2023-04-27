import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService){}
  users: any;

  getUsers(){
    this.appService.getUsers().subscribe((data: any)=>{
      this.users = data;
    });
  }
}
