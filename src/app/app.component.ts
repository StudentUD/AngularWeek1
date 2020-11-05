import { Component } from '@angular/core';

import {Post} from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week1-project';
  posts= ['Post A','Post B', 'Pots C']; 
  postsObjects:Post[];

  constructor(){
    this.postsObjects=[];
  }

  save(title:string) :boolean{
    let p = new Post(title); //crete a object 
    this.postsObjects.push(p);
    console.log(p);
    return false; // evitar que se recargue
  }

}
