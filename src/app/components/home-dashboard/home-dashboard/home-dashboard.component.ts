import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
  movies:any;  //list of movies
  constructor( private authSvc:AuthServiceService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.authSvc.getdata().subscribe(result=>{          //get data from authservice
      console.log(result);
      this.movies=result
    });
  }
}
