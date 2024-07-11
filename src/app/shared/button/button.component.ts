import { Component } from '@angular/core';

@Component({
  // examples to show multi-selector while not using a[appButton]
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
