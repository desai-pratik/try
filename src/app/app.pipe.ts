import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform { 
    transform(value: any[], searchTerm: string, selectedOption: string) { 
      if (!searchTerm || !selectedOption) {
        return value; 
      }  
      return value.filter((item: any) => { 
        switch (selectedOption) {
          case 'age':
            return item.age.toString().indexOf(searchTerm) > -1;
          case 'name':
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          case 'gender': 
            // return item.gender.toString().indexOf(searchTerm) > -1;
            return item.gender.toLowerCase() === searchTerm.toLowerCase();

          case 'hsc':
            return item.Hsc.toString().indexOf(searchTerm) > -1;
          default:
            return false;
        }
    });
  }
}