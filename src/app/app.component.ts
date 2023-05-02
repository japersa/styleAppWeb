import { Component } from '@angular/core';
import { MyDto } from './myDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name: string = "Alvaro";
  public age: number = 30;
  public isMa: boolean = true;
  public person: object = {
    firstName: "Alvaro",
    lastname: "Perez",
  }
  public person1: MyDto = {
    firstName: "Luisa",
    lastName: "Alvarez",
    fullName: function (): string {
      return this.firstName + this.lastName
    }
  }
  public persons: Object[] = [
    this.person,
    this.person1
  ]
}
