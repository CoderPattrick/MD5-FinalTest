import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";
const api_url = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http : HttpClient) { }
  findAll():Observable<Book[]>{
   return this.http.get<Book[]>(api_url+"/books");
  }
  findById(id:number):Observable<Book>{
    return this.http.get<Book>(api_url+"/books/"+id);
  }
  saveNew(book:Book):Observable<Book>{
    return this.http.post<Book>(api_url+"/books",book);
  }
  save(id:number,book:Book):Observable<any>{
    return this.http.put<Book[]>(api_url+"/books/"+id,book);
  }
  delete(id:number):Observable<any>{
    return this.http.delete<Book[]>(api_url+"/books/"+id);
  }
}
