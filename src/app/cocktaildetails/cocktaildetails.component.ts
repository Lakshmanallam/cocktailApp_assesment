import { Component, Input } from '@angular/core';
import { MojitoListComponent } from '../mojito-list/mojito-list.component';

@Component({
  selector: 'app-cocktaildetails',
  templateUrl: './cocktaildetails.component.html',
  styleUrls: ['./cocktaildetails.component.sass']
})
export class CocktaildetailsComponent  {
  
  @Input() details: any;

  ngOnInit(){
    debugger;
    console.log("ingrediants", this.details);
    
  }
 
}
