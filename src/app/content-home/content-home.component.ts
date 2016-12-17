import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-home',
  templateUrl: './content-home.component.html',
  styleUrls: ['./content-home.component.scss']
})
export class ContentHomeComponent implements OnInit {

  content;

  constructor() { 
    this.content = [{
      title: 'Apple iPhone7 128GB (Gold)',
      image: 'http://www.flashfly.net/wp/wp-content/uploads/2016/10/compare-iphone-7-201609.png',
      detail: 'This is a longer card with supporting text below as a natural.',
      old_price: 199,
      type_price: 'บาท',
      new_price: 100,
      discount: 99,
      discount_percent: 0,
      salable: 1,
      stock: 3,
      unitname: 'เครือง'
    },
    {
      title: 'Apple MacBook Pro with Retina Display 13.3/i5/2.7 DC /8/256 Flash - THA',
      image: 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/silver/mbp15touch-silver-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1478283596610',
      detail: 'This is a longer card with supporting text below as a natural.',
      old_price: 199,
      type_price: 'บาท',
      new_price: 100,
      discount: 99,
      discount_percent: 0,
      salable: 0,
      stock: 3,
      unitname: 'เครือง'
    },
    {
      title: 'APPLE IPad PRO Wi-Fi 32GB (Space Gray)',
      image: 'https://static.bhphoto.com/images/images500x500/apple_128gb_ipad_pro_wi_fi_1446834022000_1185490.jpg',
      detail: 'This is a longer card with supporting text below as a natural.',
      old_price: 199,
      type_price: 'บาท',
      new_price: 100,
      discount: 99,
      discount_percent: 0,
      salable: 0,
      stock: 3,
      unitname: 'เครือง'
    },
    {
      title: 'Apple iPhone 7 Plus 128GB-เครื่องศูนย์ (JetBlack)',
      image: 'http://cdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-plus-01.jpg',
      detail: 'This is a longer card with supporting text below as a natural.',
      old_price: 199,
      type_price: 'บาท',
      new_price: 100,
      discount: 99,
      discount_percent: 0,
      salable: 1,
      stock: 3,
      unitname: 'เครือง'
    }];
  }

  ngOnInit() {
  }

}
