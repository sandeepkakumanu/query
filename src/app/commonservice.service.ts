import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  snapshot: any;

  constructor(private data: HttpClient) { }

  getstudent(){
    return this.data.get("https://jsonplaceholder.typicode.com/users")
  }
  getstudentbyid(id){
    return this.data.get("https://jsonplaceholder.typicode.com/posts/?userId="+id);
  }

}
