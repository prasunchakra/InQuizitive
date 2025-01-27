import { Component, inject } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { AnswersComponent } from '../answers/answers.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-questions',
  imports: [AnswersComponent],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  quiz: string = '';
  quizService = inject(QuizService);
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.quiz = params['quiz'];
      this.quizService.setQuiz(this.quiz);
    });
  }
}
