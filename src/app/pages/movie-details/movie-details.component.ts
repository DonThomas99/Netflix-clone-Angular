import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

constructor(private service:MovieApiServiceService, private router:ActivatedRoute){

}
  ngOnInit(): void {
let getParamId = this.router.snapshot.paramMap.get('id')
console.log(getParamId,'id mavane');

this.getMovieDetails(getParamId)
  }

getMovieDetails(id:any){
this.service.getMovieDetails(id).subscribe((result)=>{
  console.log(result,'movie details mavane');
  
})
}
  

}
