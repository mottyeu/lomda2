import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public name :string = "m n";
public currentDate :Date;
public discount: number = 3;
public categories:string[];

constructor(private categoriesService: CategoriesService){}
  ngOnInit() {
       this.currentDate = new Date();
          this.categories =this.categoriesService.getCategories();
  }

}
