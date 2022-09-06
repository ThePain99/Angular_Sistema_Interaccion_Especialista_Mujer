import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';
@Pipe({
  name: 'userNameFilter'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchText: string): any {
    if (!users || !searchText) {
      return users;
    }
    return users.filter((val: any) => {
      return (val.nombre.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    })
  }

}