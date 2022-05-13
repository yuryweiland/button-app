import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss']
})
export class SecondScreenComponent implements OnInit {

  constructor(
    private router: Router
    ) {

  }

  ngOnInit(): void {
  }

  public prev(): void {
    this.router.navigate(['']);
  }

}
