import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  public inputValue: any = '';

  transform(value: any) {
      this.inputValue = value;
  }

  nameSearch:string = "";
  proname:any[] = [
    {name:"pratik"},
    {name:"Aarav"},
    {name:"Aryan"},
    {name:"Arjun"},
    {name:"Akash"},
    {name:"Siddharth"},
    {name:"Rajat"},
    {name:"Ankit"},
    {name:"Aditya"},
    {name:"Abhinav"},
    {name:"Vikram"},
    {name:"Rahul"},
    {name:"Sameer"},
    {name:"Karan"},
    {name:"Deepak"},
    {name:"Aishwarya"},
    {name:"Neha"},
    {name:"Priya"},
    {name:"Pooja"},
    {name:"Swati"},
    {name:"Divya"},
    {name:"Aaradhya"},
    {name:"Sneha"},
    {name:"Kavita"},
    {name:"Roshni"},
    {name:"Shruti"},
    {name:"Tanvi"},
    {name:"Gauri"},
    {name:"Meera"},
    {name:"Nisha"},
  ]
 


}






























