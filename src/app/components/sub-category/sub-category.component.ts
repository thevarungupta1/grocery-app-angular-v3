import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  catId:any;
  subCategories: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.catId = this.activatedRoute.snapshot.paramMap.get('catId')

    this.dataService.getSubCategoryByCatId(this.catId).subscribe(response => {
      this.subCategories = response.data
    })
  }

}
