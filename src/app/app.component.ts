import { Component } from '@angular/core';
import { faChartBar, faCar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.min.css']
})
export class AppComponent {
  faChartBar = faChartBar;
  faCar = faCar;
}
