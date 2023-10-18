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
  public upper: any = "uppercase";  

  transform(value: any){
    this.inputValue = value | this.upper;
  }


  // Touppercase(value: any ) { 
  //  this.inputValue = value ;  
  // }

  // Tolowercase(value: any) { 
  //   this.inputValue = value; 
  // }
  
  



 
}


