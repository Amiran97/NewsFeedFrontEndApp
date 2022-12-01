import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url: string =
    "https://newsapi.org/v2/everything?q=Apple&from=2021-12-01&sortBy=popularity&apiKey=25c3431783cc423a9ba5f12f35ffb476";

  constructor(private httpClient: HttpClient) {}

  get<T>(path: string, httpParams?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(this.url + path, { params: httpParams });
  }
}
