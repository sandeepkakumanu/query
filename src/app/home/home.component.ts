import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
d:any;
  constructor(private data: CommonserviceService) { }

  ngOnInit(): void {
    this.getstudents()
  }
  getstudents(){
    return this.data.getstudent().subscribe(RES=>{
          this.d=RES
          console.log(this.d)
    })

  }
}
