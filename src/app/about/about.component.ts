import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {
  public currentWindowWidth: number;

  constructor() { }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.currentWindowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }




}
