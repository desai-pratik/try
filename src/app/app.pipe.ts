import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {

  transform(value: any, searchTurm: any): any {
    return value.filter(function(search: any){
      return search.name.indexOf(searchTurm)> -1
    }) 
    
  }


}
