import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url: string =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=25c3431783cc423a9ba5f12f35ffb476";

  constructor(private httpClient: HttpClient) {}

  // get<T>(httpParams?: HttpParams): Observable<T> {
  //   return this.httpClient.get<T>(this.url, { params: httpParams });
  // }
}
