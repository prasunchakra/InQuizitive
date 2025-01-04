import { Component, inject } from '@angular/core';
import { QuestionsComponent } from './questions/questions.component';
import { QuizService } from '../../services/quiz.service';
@Component({
  selector: 'app-quiz',
  imports: [QuestionsComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  quizService = inject(QuizService);
}
