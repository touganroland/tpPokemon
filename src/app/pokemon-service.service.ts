import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  apiUrl = 'https://pokeapi.co/api/v2/pokedex/1?offset=20&limit=20';
  apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  recupListePokemon(): Observable<any[]> {
    return  this.http.get<any[]>(this.apiUrl, {headers: new HttpHeaders({
      'content-type': 'application/json'
    })});
  }

  
  recupPokemonDetail(id): Observable<any[]> {
    var s = this.apiBaseUrl + id
    return  this.http.get<any[]>(s, {headers: new HttpHeaders({
      'content-type': 'application/json'
    })});
  }
}


