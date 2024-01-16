import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isVisible: boolean = false;

  constructor(private router: Router) {}

  returnToHome() {
    this.router.navigate(['']);
  }

  openDropdown() {
    this.isVisible = !this.isVisible;
  }
}
