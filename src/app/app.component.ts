import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sr-portfolio';
  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    console.log('scrolling....');
    //set up the div "id=nav"
    if (document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300) {
      document.getElementById('nav').classList.add('scrolled');
    }
    else {
      document.getElementById('nav').classList.remove('scrolled');
      // this.innerWidth = 'auto';
    }
  }
}
