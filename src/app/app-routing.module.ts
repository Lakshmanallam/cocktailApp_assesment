import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MargaritaListComponent } from './margarita-list/margarita-list.component';
import { MojitoListComponent } from './mojito-list/mojito-list.component';

const routes: Routes = [
  { path: 'MojitoList', component: MojitoListComponent },
  { path: 'MargaritaList', component: MargaritaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
