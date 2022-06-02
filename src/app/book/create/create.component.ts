import { Component, OnInit } from '@angular/core';
import {BookServiceService} from "../../service/book-service.service";
import {Book} from "../../model/book";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bookForm:FormGroup=new FormGroup({
    id:new FormControl(),
    title:new FormControl(),
    author:new FormControl(),
    description:new FormControl()
  })

  constructor(private bookService:BookServiceService,
              private router:Router) { }

  ngOnInit(): void {
  }

  saveNew(){
    let book = {
      id:this.bookForm.get("id")?.value,
      title:this.bookForm.get("title")?.value,
      author:this.bookForm.get("author")?.value,
      description:this.bookForm.get("description")?.value,
    }
    this.bookService.saveNew(book).subscribe(()=>{alert("Lưu thành công!");this.backHome();},()=>{alert("Lưu thất bại!")});
  }

  backHome(){
    //@ts-ignore
    event.preventDefault();
    this.router.navigateByUrl("books");
  }
}
