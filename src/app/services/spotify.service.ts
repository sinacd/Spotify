import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SpotifyData } from '../models/spotify.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http:HttpClient) {
  }
  
  
  private Authorizationkey = `Bearer BQBkNhhOTdfAC7EeBvPM0QS6XDzJdzCXhMPNZmh4xZLiG9vTp9I2DpUCPLFBkIV6Thhzg-FeqtL0RXBGZG2vwau69R-4eywSAO20KheMzYMQyWesv4sdEfCee5dLcbmkZVBxBQViVxxwJFFcUXuwM7G3lXvUlydiHfW2cA6diE9-kriplxwNvxcBdQGXfTFbLJ3JEK0`
  private httpOptions = {
    headers : new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : this.Authorizationkey
    })
  } 
  
  public getAllArtists(searchStr:string): Observable<any>{
   let artistsurl =`https://api.spotify.com/v1/search?q=${searchStr}&type=artist`;
    return this.http.get(artistsurl,this.httpOptions)
  }
  public getArtist(artistId:string): Observable<any>{
   let artisturl =`https://api.spotify.com/v1/artists/${artistId}`;
    return this.http.get(artisturl,this.httpOptions)
  }
  
  public getAllAlbums(artistId:string): Observable<any>{
   let albumurl =`https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this.http.get(albumurl,this.httpOptions)
  }
  public getAllSongs(albumId:string): Observable<any>{
   let songsurl =`https://api.spotify.com/v1/albums/${albumId}/tracks`;
    return this.http.get(songsurl,this.httpOptions)
  }
  
  public getAlbum(albumId:string): Observable<any>{
   let albumsurl =`https://api.spotify.com/v1/albums/${albumId}`;
    return this.http.get(albumsurl,this.httpOptions)
  }
  
  
  
  


}