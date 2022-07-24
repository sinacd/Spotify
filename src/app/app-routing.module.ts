import { SongsComponent } from './components/songs/songs.component';
import { SearchComponent } from './components/search/search/search.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',component:SearchComponent, pathMatch:'full'},
  {path:'artists/:id',component:ArtistsComponent, pathMatch:'full'},
  {path:'songs/:id',component:SongsComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {






  
 }
