import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//YasinJ

const routes: Routes = [
 /*{path: 'home', component: HomeComponent},
  {path: 'authors', component: AuthorComponent}
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
