import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {BookServiceService} from "../../service/book-service.service";
import {Book} from "../../model/book";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  bookForm:FormGroup = new FormGroup({
    id:new FormControl(),
    title:new FormControl(),
    author:new FormControl(),
    description:new FormControl()
  })
  constructor(private router:Router,
              private pathVariable:ActivatedRoute,
              private bookService:BookServiceService) {
    const routeParams = this.pathVariable.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.findById(id);
  }


  ngOnInit(): void {
  }

  findById(id:number){
    this.bookService.findById(id).subscribe((data)=>{
      this.bookForm.get("id")?.setValue(data.id);
      this.bookForm.get("title")?.setValue(data.title);
      this.bookForm.get("author")?.setValue(data.author);
      this.bookForm.get("description")?.setValue(data.description);
    },()=>{alert("Tải dữ liệu thất bại")})
  }
  backHome(){
    //@ts-ignore
    event.preventDefault();
    this.router.navigateByUrl("books");
  }
  save(){
    let book = {
      title:this.bookForm.get("title")?.value,
      author:this.bookForm.get("author")?.value,
      description:this.bookForm.get("description")?.value,
    }
    this.bookService.save(this.bookForm.get("id")?.value,book).subscribe(()=>{alert("Lưu thành công!");this.backHome();},()=>{alert("Lưu thất bại!")});
  }
}
