import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  useClass = true;

  ngOnInit() {
    this.updateContainerVisibility();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.updateContainerVisibility();
  }

  updateContainerVisibility() {
    this.useClass = window.innerWidth >= 768;
  }
}
