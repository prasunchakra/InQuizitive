import { Component } from '@angular/core';
import { QuizComponent } from './core/components/quiz/quiz.component';

@Component({
  selector: 'app-root',
  imports: [QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quiztified';
}
