import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}
  postMember(data: any) {
    return this.http
      .post<any>('http://localhost:3000/register/', data)
      .subscribe(
        (res: any) => {
          alert('sign up success');
        },
        (error: any) => {
          alert('sign up failed');
        }
      );
  }
  getMember(data: any) {
    this.http.get<any>('http://localhost:3000/register/', data).subscribe(
      (res: any) => {
        const user = res.find((mem: any) => {
          console.log(data);
          return (
            mem.userName === data.userName && mem.password === data.password
          );
        });
        if (user) {
          alert('login success');
          this.router.navigate(['/shoppingcart']);
        } else {
          alert('username or password not found');
        }
      },
      (error) => {
        alert('failed login');
      }
    );
  }
}
