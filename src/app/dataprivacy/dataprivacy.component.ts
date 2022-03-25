import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dataprivacy',
  templateUrl: './dataprivacy.component.html',
  styleUrls: ['./dataprivacy.component.css']
})
export class DataprivacyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onBack(): void {
  this.router.navigate(['/home']);
  window.scrollTo(0, 0);
    }

  }





