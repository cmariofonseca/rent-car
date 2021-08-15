import { Component, OnInit } from '@angular/core';
import { trademarkList } from 'src/app/shared/utils/trademarkList';
import { trademarks } from 'src/app/shared/utils/trademarks';

@Component({
  selector: 'app-trademarks',
  templateUrl: './trademarks.component.html',
  styleUrls: ['./trademarks.component.css']
})
export class TrademarksComponent implements OnInit {

  titleOfComponent: string;
  brands: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.brands = trademarkList;
    this.getTrademark();
  }
  
  getTrademark(): void {
    const url: Array<string> = document.location.href.split('/');
    const brand: string = url[url.length-1];
    this.getTitleOfComponent(brand);
  }
  
  getTitleOfComponent(key: string): void {
    const brands = trademarks;
    this.titleOfComponent = brands[key];
  }

}
