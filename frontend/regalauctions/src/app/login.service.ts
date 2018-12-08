import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: String;

  constructor(private http: HttpClient) { }

  public auth(username: String, password:String) : Promise<String> {
    if(this.token == null) {
      return new Promise((resolve, reject) => {
        this.http.post("/backend/api-token-auth/?format=json", {
          username,
          password
        }).subscribe(
          (data: {token: string}) => {
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
    this.token = null;
  }

  public get isAuthenticated() : boolean {
    return this.token != null;
  }
}
