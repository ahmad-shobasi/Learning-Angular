import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  star = faStar;
}
