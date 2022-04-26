import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApiMovie } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovieData(){
    return this.http.get<ResponseApiMovie>('https://www.omdbapi.com/?s=star&apikey=ee6588a8');
  }

  searchMovieData(text:string){
    return this.http.get<ResponseApiMovie>(`https://www.omdbapi.com/?s=${text}&apikey=ee6588a8`);
  }
}
