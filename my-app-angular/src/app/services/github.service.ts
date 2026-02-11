import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private readonly http: HttpClient) { }

  //https://api.github.com/users/peter

  private readonly API_URL = "https://api.github.com/users"

  getUser(username: string): Observable<any>{
    return this.http.get<any>(`${this.API_URL}/${username}`)
  }

  getCatFact(): Observable<any>{
    return this.http.get<any>("https://meowfacts.herokuapp.com/");
  }
}
