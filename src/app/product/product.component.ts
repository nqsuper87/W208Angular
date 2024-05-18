import { Component, OnInit } from '@angular/core';
import { IProduct } from '../entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  tableWidth = 200;
  content = "";
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Hoe",
      "productCode": "GDN-0012",
      "releaseDate": "April 25, 2017",
      "description": "Heavy-duty garden hoe for tough soil.",
      "price": 29.99,
      "starRating": 4.0,
      "imageUrl": "https://example.com/garden_hoe.png"
    },
    {
      "productId": 3,
      "productName": "Pruning Shears",
      "productCode": "GDN-0013",
      "releaseDate": "June 10, 2018",
      "description": "Sharp pruning shears for precise cuts.",
      "price": 12.50,
      "starRating": 4.5,
      "imageUrl": "https://example.com/pruning_shears.png"
    },
    {
      "productId": 4,
      "productName": "Watering Can",
      "productCode": "GDN-0014",
      "releaseDate": "May 5, 2019",
      "description": "Large watering can for easy watering.",
      "price": 24.99,
      "starRating": 4.2,
      "imageUrl": "https://example.com/watering_can.png"
    },
    {
      "productId": 5,
      "productName": "Garden Gloves",
      "productCode": "GDN-0015",
      "releaseDate": "July 20, 2020",
      "description": "Durable garden gloves for protection.",
      "price": 9.99,
      "starRating": 4.8,
      "imageUrl": "https://example.com/garden_gloves.png"
    },
    {
      "productId": 6,
      "productName": "Trowel",
      "productCode": "GDN-0016",
      "releaseDate": "March 14, 2021",
      "description": "Sturdy trowel for planting.",
      "price": 7.99,
      "starRating": 4.3,
      "imageUrl": "https://example.com/trowel.png"
    },
    {
      "productId": 7,
      "productName": "Garden Fork",
      "productCode": "GDN-0017",
      "releaseDate": "October 30, 2022",
      "description": "Versatile garden fork for digging.",
      "price": 19.99,
      "starRating": 4.1,
      "imageUrl": "https://example.com/garden_fork.png"
    },
    {
      "productId": 8,
      "productName": "Hedge Trimmers",
      "productCode": "GDN-0018",
      "releaseDate": "August 12, 2023",
      "description": "Powerful hedge trimmers for neat hedges.",
      "price": 59.95,
      "starRating": 4.7,
      "imageUrl": "https://example.com/hedge_trimmers.png"
    },
    {
      "productId": 9,
      "productName": "Garden Sprayer",
      "productCode": "GDN-0019",
      "releaseDate": "January 5, 2024",
      "description": "Handy garden sprayer for pesticides or fertilizers.",
      "price": 34.99,
      "starRating": 4.4,
      "imageUrl": "https://example.com/garden_sprayer.png"
    },
    {
      "productId": 10,
      "productName": "Wheelbarrow",
      "productCode": "GDN-0020",
      "releaseDate": "November 18, 2024",
      "description": "Heavy-duty wheelbarrow for transporting materials.",
      "price": 79.99,
      "starRating": 4.6,
      "imageUrl": "https://example.com/wheelbarrow.png"
    }
  ];
  

  constructor() { }

  ngOnInit() {
  }

  readMore(){
    console.log("Hello class WD18305");
    this.content = "Hello class WD18305";
  }

  onRatingClicked(event){
    console.log("EventEmitter from Product List", event);
    
  }

}
