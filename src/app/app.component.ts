import { Component } from '@angular/core';
import { HeadersComponent } from './common/components/headers/headers.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeadersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quiztified';
}
