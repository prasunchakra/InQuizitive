import { Component, inject } from '@angular/core';
import { QuestionsComponent } from './questions/questions.component';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  imports: [QuestionsComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  quizService = inject(QuizService);
  constructor(private router: Router) {}
  retakeQuiz(): void {
    this.quizService.restart()
    this.router.navigate(['/quiz']);
  }

  shareOnFacebook(): void {
    const url = 'https://quiz.prasunchakra.com/home';
    const text = `I scored ${this.quizService.correctAnswers()}/${this.quizService.questions().length} in the Swami Vivekananda Quiz! Try it now!`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    window.open(facebookShareUrl, '_blank');
  }
  }
