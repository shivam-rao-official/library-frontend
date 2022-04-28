import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }
  register(val:any){
  console.log(val);
    return this.http.post('http://localhost/libraryjson/project_min.php?tag=register', val);
  }
  login(val:any){
    return this.http.post('http://localhost/libraryjson/project_min.php?tag=login', val);
  }
  userlist(val:any){
    return this.http.post('http://localhost/libraryjson/project_min.php?tag=userlist', val);
  }
  total(){
    return this.http.get('http://localhost/libraryjson/project_min.php?tag=total');
  }
  active(){
    return this.http.get('http://localhost/libraryjson/project_min.php?tag=active');
  }
  nonactive(){
    return this.http.get('http://localhost/libraryjson/project_min.php?tag=nonactive');
  }
  dropdown(){
    return this.http.get('http://localhost/libraryjson/project_min.php?tag=select');
  }
  view(){
    return this.http.get('http://localhost/libraryjson/project_min.php?tag=view');
  }
  AddBookview(val:any){
    console.log(val);
    return this.http.post('http://localhost/libraryjson/project_min.php?tag=AddBook', val);
  }
  editBookview(val:any){
    console.log(val);
    return this.http.post('http://localhost/libraryjson/project_min.php?tag=update', val);
  }
  deleteBookview(val:any){
    console.log(val);
    return this.http.post('http://localhost/libraryjson/project_min.php?tag=delete', val);
  }

  totalbooks(){
    return this.http.get('http://localhost/libraryjson/project_min.php?tag=totalbooks');
  }
  availablebooks(){
    return this.http.get('http://localhost/libraryjson/project_min.php?tag=availablebooks');
  }
  unavailablebooks(){
    return this.http.get('http://localhost/libraryjson/project_min.php?tag=unavailablebooks');
  }
  booklist(val:any){
    return this.http.post('http://localhost/libraryjson/project_min.php?tag=booklist', val);
  }
}



