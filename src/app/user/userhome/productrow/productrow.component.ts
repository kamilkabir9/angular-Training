import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent implements OnInit {

  @Input() products:any[]=[];
  @Input() producttitle:string="";
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
