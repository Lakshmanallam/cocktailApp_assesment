import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktaildatafetchService {

  constructor(private http: HttpClient) { }

  getMojitoCocktailsList(){

    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Mojito');
  }

  getMargaritaCocktailsList(){

    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita');
  }

}
