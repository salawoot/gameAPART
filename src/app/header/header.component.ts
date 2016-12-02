import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  mainMenu;
  titleMenu;
  constructor() { 

    this.titleMenu = {
      name: 'ชื่อเว็บจร๊า',
      link: '/home'
    };

    this.mainMenu = [
        {
            name: 'หน้าแรกน๊ะ',
            link: '/home'
        },
        {
            name: 'เกียวกับราว',
            link: '/about'
        },
        {
            name: 'ติดต่อราว',
            link: '/contact'
        }];
  }

  ngOnInit() {

  }

}
