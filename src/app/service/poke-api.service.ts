import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private http: HttpClient
  ) { }

  private url: string = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";


  get apiListAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res ),
      tap(res => {
        res.results.map( (resPokemons: any) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )

          })
      })
    )
  }




  public apiGetPokemons (url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map( res => res ))
  }

}
