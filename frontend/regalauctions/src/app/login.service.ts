import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserResponse } from 'src/entity';

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  public get token(): String {
    return getCookie("token");
  }

  public set token(value: String) {
    setCookie("token", value, 1);
  }

  public auth(username: String, password: String): Promise<String> {
    if (!this.isAuthenticated) {
      return new Promise((resolve, reject) => {
        this.http.post("/api-token-auth/?format=json", {
          username,
          password
        }).subscribe(
          (data: { token: string }) => {
            this.token = data.token
            resolve(this.token);
          },
          error => reject(error)
        );
      })
    }
    else {
      return Promise.resolve(this.token);
    }
  }

  public clearToken() {
    this.token = "";
  }

  public get isAuthenticated(): boolean {
    return this.token != "";
  }

  public getUser(): Promise<UserResponse> {
    return new Promise<UserResponse>((resolve, reject) => {
      if (this.isAuthenticated) {
        this.http.get<UserResponse[]>("/api/users/", {
          headers: {
            'Authorization': `Token ${this.token}`
          }
        }).subscribe((data) => resolve(data[0]), (error) => reject(error));
      }
      else {
        reject(new Error("Not authenticated"));
      }
    });
  }

  public register(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let body = {
        user: {
          username: user.username,
          password: user.password,
          email: user.email
        },
        name: user.name,
        active: true,
        is_admin: user.isAdmin,
        cpf: user.cpf,
      };
      this.http.post("/api/users/", body).subscribe(() => resolve(true), (error) => reject(error));
    });
  }
}
