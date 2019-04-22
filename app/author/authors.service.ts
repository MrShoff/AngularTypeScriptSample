import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors: string[];

  constructor() { 
    this.authors = ["author1", "author2", "author3", "author4"];
  }

  getAuthors(): string[] {
    return this.authors;
  }
}
