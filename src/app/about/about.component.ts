import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private router: Router){ }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = ['/robin-chen'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  
}
