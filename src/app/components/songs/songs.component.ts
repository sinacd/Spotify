import { SongData } from './../../models/song.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { singleAlbumData } from 'src/app/models/singleAlbum.model';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  public albumId!: string;
  songs!:SongData;
  album!:singleAlbumData;
  public backToArtist() {
    this.router.navigate([`/artists/${this.album.artists[0].id}`]);
  }





  constructor(private activatedroute:ActivatedRoute,
    private spotifyservice:SpotifyService
    , private router:Router) { }

  ngOnInit(): void {
     //id from url
     this.activatedroute.paramMap.subscribe((params:ParamMap)=>{
      this.albumId = params.get('id')!;
      
    });
    //songs from server
      this.spotifyservice.getAllSongs(this.albumId)
      .subscribe({
        next:(data) =>{
          this.songs = data;
         
        } 
      });
    //albums from server
      this.spotifyservice.getAlbum(this.albumId)
      .subscribe({
        next:(data) =>{
          this.album = data;
          
        } 
      });




    
  }

}
