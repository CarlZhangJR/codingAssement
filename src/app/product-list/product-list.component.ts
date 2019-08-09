import { Component, OnInit, HostListener } from '@angular/core';
import { GetAllProductService } from '../service/get-all-product.service';
import { SourceData } from '../model/source-data';
import { Group } from '../model/group';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private getAllProductService: GetAllProductService) { }
  result: SourceData[];
  groups: Group[];
  isShown: boolean;
  clickedProduct: Group;
  isShow: boolean;
  topPosToStartShowing = 100;

  ngOnInit() {
    this.isShown = false;
    this.searchAllProduct();
  }
  searchAllProduct() {
    this.getAllProductService.getAllProduct().subscribe(data => {
      this.result = data; console.log(this.result);
      this.groups = this.result['groups']; console.log(this.groups);
    });
  }

  checkDetail(id: string) {
    if (this.isShown) {
    this.isShown = false;
  } else {
    this.clickedProduct = this.groups.find(item => {
      return item.id === id;
   });
    this.isShown = true;
  }
}


  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
     gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
