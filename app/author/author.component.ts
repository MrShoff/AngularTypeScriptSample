import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: '.authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title: string;
  authors: string[];
  
  constructor(authors: AuthorsService) { 
    this.authors = authors.getAuthors();
    this.title = `${this.authors.length} Authors`;
  }

  getTitle(): string {
    return this.title;
  }

  ngOnInit() {
  }

}
