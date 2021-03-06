import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private router: Router
  ) { }

  personalLinks = {
    linkedin: 'https://linkedin.com/in/davidfza25',
    github: 'https://github.com/dafer154',
    twitter: 'https://twitter.com/@david_fza',
    instagram: 'https://www.instagram.com/dafer154/',
    facebook: 'https://www.facebook.com/David.FZA'
  };

  anio: number = new Date().getFullYear();


  ngOnInit() {

  }



}
