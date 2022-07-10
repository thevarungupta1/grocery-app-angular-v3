import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;

  constructor(private dataService:DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe(response => {
        this.categories = response.data
    })
  }

  onButtonClicked(catId: number){
    this.router.navigate(['products', catId])
  }

}
