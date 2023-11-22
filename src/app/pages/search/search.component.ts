import { Component,OnInit } from '@angular/core';
import {  FormControl,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() {
    
  }
  
  ngOnInit(): void {
  }
  
  searchForm = new FormGroup({

    'movieName': new FormControl(null)

  })
  submitForm(){
    console.log(this.searchForm.value,'search mavane');
    
  }

}
