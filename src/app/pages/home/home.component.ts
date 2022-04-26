import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Movie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MoviesService) { }

  movieList : Movie[] = [];
  textSearch:string = "";
  loading:boolean=false;

  ngOnInit(): void {
    this.service.getMovieData()
    .subscribe(resp=>{
      console.log(resp.Search);
      this.movieList = resp.Search;
    })
  }

  ontextSearchClick(){
    this.loading=true;
    console.log("Text Search Clicked:"+this.textSearch);
    this.movieList = [];
    setTimeout(() => {
      this.service.searchMovieData(this.textSearch)
    .subscribe(resp=>{
      this.loading=false;
      console.log(resp);
      if(resp.Search)
      {
        this.movieList = resp.Search
        
      }
      else{
        this.movieList=[];
      }
      
     
    })
    }, 4000);
    
  }

}
