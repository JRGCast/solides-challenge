import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
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
    return of(mockUserList).pipe(map(userList => {
      const userExists = userList.find(user => user.email.toLowerCase() === userLoginInfo.email.toLowerCase())
      if (!userExists) {
        throw new Error('User is not registered')
      }
      if (userExists.email === userLoginInfo.email && userExists.password === userLoginInfo.password) {
        return true
      } else {
        throw new Error('Login information mismatch')
      }
    }),
      catchError(error => {
        return throwError(() => error);
      }))
  }

  create(newUserInfo: IUserInfo): Observable<boolean> {
    // return this.http.post<boolean>(this.CREATE, newUserInfo);
    return of(mockUserList).pipe(
      map(userList => {
        const userExists = userList.some(user => user.email.toLowerCase() === newUserInfo.email.toLowerCase());
        if (userExists) {
          throw new Error('User already exists');
        }
        mockUserList.push(newUserInfo);
        return true;
      }),
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
