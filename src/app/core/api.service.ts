import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArtistResponse } from '../interfaces/artist-response';

@Injectable()
export class ApiService {
  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;
  apiHost: string = environment.apiHost;
  pathRoot: string = `${location.protocol + "//" + location.host + "/api"}`;
  constructor(private http: HttpClient) {

  }

  getSearch(value: string): Observable<any> {
    let me = this;
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': me.apiKey,
      'X-RapidAPI-Host': me.apiHost
    });
    return me.http.get(`${me.apiUrl}search?q=${value}`, { headers });
  }
  getArtist(id: number): Observable<ArtistResponse> {
    let me = this;
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': me.apiKey,
      'X-RapidAPI-Host': me.apiHost
    });
    return me.http.get<ArtistResponse>(`${me.apiUrl}artist/${id}`, { headers });
  }

}
