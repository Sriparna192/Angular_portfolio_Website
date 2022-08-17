import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showAbout = true;
  showLink = false;
  showCv = false;
  showSkill=false;


  constructor() { }

  ngOnInit(): void {
  }

  myAbout() {
    this.showAbout = true;
    this.showLink = false;
    this.showCv = false;
    this.showSkill=false;
  }
  myLink() {
    this.showLink = true;
    this.showAbout = false;
    this.showCv = false;
    this.showSkill=false;
  }

  myResume() {
    this.showLink = false;
    this.showCv = true;
    this.showAbout = false;
    this.showSkill=false;
  }
  mySkill()
  {
    this.showLink = false;
    this.showCv = false;
    this.showAbout = false;
    this.showSkill=true;
  }
}
