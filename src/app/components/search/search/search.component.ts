import { SpotifyData } from './../../../models/spotify.model';
import { SpotifyService } from './../../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {
  public searchStr: string="adele";
  spotifydata?: SpotifyData;
  aImg?: string;
  constructor(private spotifyservice: SpotifyService) {

  }
 
  ngOnInit(): void {
   this.searchArtists();
   this.searchStr=''; 
    }
    public searchArtists()
    {
      this.spotifyservice.getAllArtists(this.searchStr)
      .subscribe({
        next:(data) =>{
          this.spotifydata = data;
        

        
        } 
      });
    } 
    onsubmit() {
    }
  }
  
  /*  */