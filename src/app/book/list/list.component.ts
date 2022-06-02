import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {Observable} from "rxjs";
import {Book} from "../../model/book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
books:Book[]=[];

  constructor(private bookService:BookServiceService,
              private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.bookService.findAll().subscribe((data)=>{this.books=data;alert("tải dữ liệu thành công!")},
      ()=>{alert("tải dữ liệu thất bại!")})
  }
  delete(id:any){
    let check = confirm("Delete this book?");
    if(check){
      this.bookService.delete(id).subscribe(()=>{alert("delete success!");this.backHome()},()=>{alert("delete failed!")})
    }
  }
  backHome(){
    //@ts-ignore
    event.preventDefault();
    this.router.navigateByUrl("books");
  }
}
