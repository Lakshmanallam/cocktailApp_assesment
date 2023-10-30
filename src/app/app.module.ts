import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MojitoListComponent } from './mojito-list/mojito-list.component';
import { MargaritaListComponent } from './margarita-list/margarita-list.component';
import { CocktaildatafetchService } from './cocktaildatafetch.service';
import { HttpClientModule } from '@angular/common/http';
import { CocktaildetailsComponent } from './cocktaildetails/cocktaildetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MojitoListComponent,
    MargaritaListComponent,
    CocktaildetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CocktaildatafetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
