import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';

import { Input } from '@angular/core'; //// First, import Input

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() titlePost:string; // decorate the property with @Input()
  @HostBinding('attr.class') cssClass ="bg-info"; // no funciona 
  constructor() { }

  ngOnInit(): void {
  }

}
