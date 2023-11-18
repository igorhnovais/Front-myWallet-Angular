import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faBars = faBars
  showMenu = false

  toggleMenu(){
    this.showMenu = !this.showMenu
  }
}
