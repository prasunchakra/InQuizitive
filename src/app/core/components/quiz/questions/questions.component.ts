import { Component, inject } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { AnswersComponent } from '../answers/answers.component';

@Component({
  selector: 'app-questions',
  imports: [AnswersComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  quizService = inject(QuizService);
}
