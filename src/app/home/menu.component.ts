import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Meeting Room Management';

  

 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
}
