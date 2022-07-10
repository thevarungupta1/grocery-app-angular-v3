import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  catId:any;
  products: any;

  constructor(
    private dataService: DataService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) {
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId')
  }


  ngOnInit(): void {
    this.dataService.getProductByCatId(this.catId).subscribe((response) => {
      this.products = response.data;
    });
  }

  onButtonClicked(pid: string){
    this.router.navigate(['product-detail',pid ])

  }
}
