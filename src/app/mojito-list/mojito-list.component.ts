import { Component, Input, OnInit } from '@angular/core';
import { CocktaildatafetchService } from '../cocktaildatafetch.service';

@Component({
  selector: 'app-mojito-list',
  templateUrl: './mojito-list.component.html',
  styleUrls: ['./mojito-list.component.sass'],
})
export class MojitoListComponent implements OnInit {

  @Input() details: any;

  cocktails: any = [];
  cocktaildetails:any = [];
  showValues : boolean = false;
  constructor( private cocktailDataService: CocktaildatafetchService){
   
  }

  getMojitoList(): void {  
      this.cocktailDataService.getMojitoCocktailsList().subscribe((data:any) => {
      this.cocktails = data.drinks;
      });
   

  }

  getDetails(i:any,a:any){
    this.showValues = true;
    this.cocktaildetails = [];
     this.cocktaildetails.push(a.strIngredient1);
     this.cocktaildetails.push(a.strIngredient2);
     this.cocktaildetails.push(a.strIngredient3);
     this.cocktaildetails.push(a.strIngredient4);
     this.cocktaildetails.push(a.strIngredient5);
     this.cocktaildetails.push(a.strIngredient6);
     this.cocktaildetails.push(a.strIngredient7);
  
  }

  ngOnInit(): void {
    this.getMojitoList();
  }

}
