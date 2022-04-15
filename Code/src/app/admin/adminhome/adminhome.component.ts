import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private ps:ProductService) { }
  products:product[]=[];
  ngOnInit(): void {
    this.ps.getProducts().subscribe( {
      next: (data:product[])=>this.products = data,
      error: ()=> this.products = []
     }
     )
  }

}
