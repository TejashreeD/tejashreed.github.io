import { Component, OnInit, Renderer2 } from '@angular/core';
import { Constants } from '../global/constant';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  constants = Constants;
  menuConstants = Constants.menu;
  isMenuCollapsed = true;

  public selected = false;

  public sections = 8;

  public scroll = 0;


  ngOnInit() {
    this.scrollTop();
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
      console.log(this.scroll);

    });
  }

  scrollTop() {
    window.scroll(0, 0);
  }
  menuClick(event) {
    event.target.classList.toggle('active');

  }
  clickLink(event) {
    // $( '#topheader .navbar-nav a' ).on( 'click', function () {
    // document.querySelector("#topheader .navbar-nav").re  
    // $('#topheader .navbar-nav').find('li.active').removeClass('active');
    // $( this ).parent( 'li' ).addClass( 'active' );
    // });
  }
}
