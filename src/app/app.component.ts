// import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  public inputValue: any = ''; 


  // search filter
  nameSearch:string = "";
  selectSearch:any = "";
  
  proname:any[] = [
    {name:"pratik" , age:20 , Hsc: 48, gender: "male"},
    {name:"Aarav" , age:25 , Hsc: 20, gender: "male"},
    {name:"Aryan" , age:98 , Hsc: 68, gender: "male"},
    {name:"Arjun" , age:15 , Hsc: 94, gender: "male"},
    {name:"Akash" , age:65 , Hsc: 37, gender: "male"},
    {name:"Siddharth" , age:84 , Hsc: 55, gender: "male"},
    {name:"Rajat" , age:35 , Hsc: 94, gender: "male"},
    {name:"Ankit" , age:98 , Hsc: 37, gender: "male"},
    {name:"Aditya" , age:35 , Hsc: 94, gender: "male"},
    {name:"Abhinav" , age:84 , Hsc: 34, gender: "male"},
    {name:"Vikram" , age:66 , Hsc: 88, gender: "male"},
    {name:"Rahul" , age:35 , Hsc: 98, gender: "male"},
    {name:"Sameer" , age:94 , Hsc: 37, gender: "male"},
    {name:"Karan" , age:65 , Hsc: 34, gender: "male"},
    {name:"Deepak" , age:28 , Hsc: 95, gender: "male"}, 
    {name:"Aishwarya" , age:96 , Hsc: 34, gender: "male"},
    {name:"Neha" , age:64 , Hsc: 67, gender: "female"},
    {name:"Priya" , age:36 , Hsc: 35, gender: "female"},
    {name:"Pooja" , age:45 , Hsc: 5, gender: "female"},
    {name:"Swati" , age:9 , Hsc: 95, gender: "female"},
    {name:"Divya" , age:65 , Hsc: 95, gender: "female"},
    {name:"Aaradhya" , age:39 , Hsc: 49, gender: "female"},
    {name:"Sneha" , age:22 , Hsc: 46, gender: "female"},
    {name:"Kavita" , age:47 , Hsc: 37, gender: "female"},
    {name:"Roshni" , age:20 , Hsc: 38, gender: "female"},
    {name:"Shruti" , age:99 , Hsc: 66, gender: "female"},
    {name:"Tanvi" , age:67 , Hsc: 65, gender: "female"},
    {name:"Gauri" , age:34 , Hsc: 35, gender: "female"},
    {name:"Meera" , age:20 , Hsc: 20, gender: "female"},
    {name:"Nisha" , age:37 , Hsc: 91, gender: "female"}
  ]
  
}






























