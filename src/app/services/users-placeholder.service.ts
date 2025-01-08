import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholderService {

  constructor(private readonly _httpClient: HttpClient) {
  }

  getUsersPlaceholder(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

}
