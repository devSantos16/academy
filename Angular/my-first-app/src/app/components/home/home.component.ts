import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public id: number = 1
  public condition: boolean = false
  public arialabel: string = "sla"


  public updatecondition = (condition: boolean) => {
    this.condition = condition
  }

  public submit = () => {
    window.alert("Alert")
  }
}
