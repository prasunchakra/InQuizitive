import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadersComponent } from './common/components/headers/headers.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeadersComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quiztified';
}
