import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';


@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss']
})
export class FirstScreenComponent implements OnInit {
  // public loc: GeolocationPosition;

  constructor(
    private router: Router,
    // private geo: Geolocation
  ) {

  }

  ngOnInit(): void {
  }

  public next(): void {
    this.router.navigate(['second']);
  }
  
  // async getCurrentPosition() {
  //   this.loc = await this.geo.getCurrentPosition();
  // }

}
