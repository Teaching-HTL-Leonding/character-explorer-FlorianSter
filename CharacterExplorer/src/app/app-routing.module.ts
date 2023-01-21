import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "characterList"},
  {path: "characterList", component: CharacterListComponent},
  {path: "characterDetails/:id", component: CharacterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
