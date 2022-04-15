import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products:product[] | undefined;
  constructor() { }

  ngOnInit(): void {
    
  }

}
