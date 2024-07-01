import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { mockUserList } from '../mocks/user/user.mock';
import { IUserInfo, IUserLogin } from '../../types/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USER_BASE_URL = `${env.apiUrl}/user`
  private readonly LOGIN_URL = `${this.USER_BASE_URL}/login`
  private readonly CREATE_URL = `${this.USER_BASE_URL}/login`
  private readonly http = inject(HttpClient)

  login(userLoginInfo: IUserLogin): Observable<boolean> {
    // return this.http.post<boolean>(this.LOGIN_URL, userLoginInfo);
    return of(mockUserList).pipe(map(userList => userList.some(user => user.email.toLowerCase() === userLoginInfo.email.toLowerCase())))
  }

  create(newUserInfo: IUserInfo): Observable<boolean> {
    // return this.http.post<boolean>(this.CREATE, newUserInfo);
    return of(mockUserList).pipe(map(userList => {
      const userExists = userList.some(user => user.email.toLowerCase() === newUserInfo.email.toLowerCase())
      if (userExists) {
        throwError(() => new Error('User already exists'))
        return false
      }
      mockUserList.push(newUserInfo);
      return true
    }))
  }
}
