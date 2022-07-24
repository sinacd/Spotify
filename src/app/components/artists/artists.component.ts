import { AlbumData } from './../../models/album.model';
import { SpotifyService } from './../../services/spotify.service';
import { SearchComponent } from './../search/search/search.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArtistData } from 'src/app/models/artist.model';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  public artistId: string='';
  albums!:AlbumData;
  artist!:ArtistData;
  
  public backToHome() {
    this.router.navigate(['']);
 
    }


  constructor(private activatedroute:ActivatedRoute,
    private spotifyservice:SpotifyService
    , private router:Router) { }

  ngOnInit(): void {
    //id from url
    this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
      this.artistId = params.get('id')!;

    }); 
    //albums from server
   
      this.spotifyservice.getAllAlbums(this.artistId)
      .subscribe({
        next:(data) =>{
          this.albums = data;
          
        } 
      });
       //artist from server
       this.spotifyservice.getArtist(this.artistId)
      .subscribe({
        next:(data) =>{
          this.artist = data;
        
        } 
      });
     






}
}