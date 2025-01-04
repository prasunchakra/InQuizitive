import { Component, computed, inject, input } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answers',
  imports: [CommonModule],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.scss'
})
export class AnswersComponent {
  answerText = input.required<string>();
  answerIndex = input.required<number>();
  quizService = inject(QuizService);
  letterMapping = ['A', 'B', 'C', 'D'];
  isCorrectAnswer = computed(() => !!this.quizService.selectedAnswer() && this.answerText() === this.quizService.currentQuestion().correctAnswer);
  isWrongAnswer = computed(() => this.answerText() !== this.quizService.currentQuestion().correctAnswer && this.quizService.selectedAnswer() === this.answerText());
}
