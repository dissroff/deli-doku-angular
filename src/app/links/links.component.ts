import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Links, LinksArchive } from '../links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  @Input() isMobile = false;
  @Output() linkClicked: EventEmitter<any> = new EventEmitter();
  links: string[] = Links;
  linksArchive: string[] = LinksArchive;
  isArchive: boolean;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.initHeader();
  }

  onSelect(link: string) {
    if (link === 'archive') {
      this.router.navigate(['archive']);
      this.isArchive = true;
    } else {
      this.router.navigate(['/']);
      this.isArchive = false
    }
    if (this.isMobile) {
      this.linkClicked.emit(null);
    }
  }

  private initHeader() {
    this.isArchive = this.location.path() === '/archive';
  }

}
