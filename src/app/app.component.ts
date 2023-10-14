import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Osman Abrar Khan";
  @ViewChild('mainApp', {static: false}) mainApp!: ElementRef;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.mainApp.nativeElement.classList.add('intro-bg-color');
          this.mainApp.nativeElement.classList.remove('projects-bg-color');
        } else if (event.url === '/projects') {
          this.mainApp.nativeElement.classList.add('projects-bg-color');
          this.mainApp.nativeElement.classList.remove('intro-bg-color');
        }
      }
    });
  }
}
