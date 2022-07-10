import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
})
export class ProductDetailPageComponent implements OnInit {
  pid:any;
  product: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.pid  = this.activatedRoute.snapshot.paramMap.get('pid');
  }

  ngOnInit(): void {
    this.dataService.getProductById(this.pid).subscribe((response: any) => {
      this.product = response.data;
    });
  }
}
