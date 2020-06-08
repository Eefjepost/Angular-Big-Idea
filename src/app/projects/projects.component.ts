import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onBack(): void {
    this.router.navigate(['/home']);
    window.scrollTo(0, 0);
  }

}
