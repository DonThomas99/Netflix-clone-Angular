import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from "../../service/movie-api-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService){

  }
  bannerResult:any=[]
  trendingMovieResult:any=[]

  ngOnInit(): void {

    this.bannerData();
    this.trendingData();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result) =>{
this.bannerResult = result.results      
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result) =>{
console.log('trending mavane',result);
this.trendingMovieResult = result.results


    })

  }

}
