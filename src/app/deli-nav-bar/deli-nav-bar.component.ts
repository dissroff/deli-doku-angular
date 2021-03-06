import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Links } from '../links';
import { WindowRefService } from '../window-ref.service';
import { trigger, animate, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-deli-nav-bar',
  templateUrl: './deli-nav-bar.component.html',
  styleUrls: ['./deli-nav-bar.component.css'],
  animations: [
  ]
})
export class DeliNavBarComponent {

  @Input() isScrolled: Boolean;

  links: string[] = Links;
  showNavBar: Boolean = false;
  bigScreen: Boolean = false;

  constructor(
      private router: Router,
      private winRef: WindowRefService) {
        if (winRef.nativeWindow.outerWidth > 768) {
          this.bigScreen = true;
        }
      }

  onSelect(link: string) {
    this.router.navigate([`/${link}`]);
    if (this.bigScreen === false) {
      this.closeNavBar()
    }
  }

  openNavBar() {
    this.showNavBar = true;
  }

  closeNavBar(link?) {
    if (link) {
      window.location.hash = link;
    }

    this.showNavBar = false;
  }

  facebookNavigate() {
      window.open('https://www.facebook.com/delidokubp/', '_blank');
  }

}
