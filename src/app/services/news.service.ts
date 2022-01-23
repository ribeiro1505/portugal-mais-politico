import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  public getPoliticaNews(): Observable<object>{
    const dataURL = 'https://portugal-news.herokuapp.com/politica';
    return this.http.get(dataURL);
  }

  public getPartidosInscritos(): Observable<object>{
    const dataURL = 'https://portugal-news.herokuapp.com/partidos';
    return this.http.get(dataURL);
  }

  public getPartido(partidoId: string): Observable<object>{
    const dataURL = 'https://portugal-news.herokuapp.com/partido/' + partidoId;
    return this.http.get(dataURL);
  }

}
