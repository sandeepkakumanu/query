import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {
  user: any;
  dd:any;
  

  constructor(private ds:CommonserviceService, private  da:  ActivatedRoute ) { }

  ngOnInit(): void {
    this.user=this.da.snapshot.params["id"]
    console.log(this.user)
    this.ds. getstudentbyid(this.user).subscribe(res=>{
      this.dd =res
      console.log(this.dd);
    })
  }  
   

}
