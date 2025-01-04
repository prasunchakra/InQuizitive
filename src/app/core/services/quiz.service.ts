import { Injectable, signal, computed } from '@angular/core';
import { QuestionInterface } from '../types/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions = signal<QuestionInterface[]>(this.getMockQuestions());
  currentQuestionIndex = signal<number>(0);
  currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);
  currentAnswerOptions = computed(() => this.shuffleAnswers(this.currentQuestion()));
  selectedAnswer = signal<string | null>(null);
  correctAnswers = signal<number>(0);
  showResults = computed<boolean>(() => this.currentQuestionIndex() === this.questions().length-1);

  constructor() { }

  goToNextQuestion() {
    const currentQuestionIndex = this.showResults()
    ? this.currentQuestionIndex()
    : this.currentQuestionIndex() + 1;
    this.currentQuestionIndex.set(currentQuestionIndex);
    this.selectedAnswer.set(null);
  }
  restart() {
    this.currentQuestionIndex.set(0);
    this.selectedAnswer.set(null);
    this.correctAnswers.set(0);
  }
  shuffleAnswers(question: QuestionInterface): string[] {
    const unshuffledAnswers = [
      question.correctAnswer,
      ...question.incorrectAnswers,
    ];

    return unshuffledAnswers
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }
  getMockQuestions(): QuestionInterface[] {
    return [
      {
        question: 'What is Django?',
        incorrectAnswers: [
          'A Python library for data analysis',
          'A JavaScript framework for front-end development',
          'A Ruby-based web framework',
        ],
        correctAnswer: 'A high-level Python Web framework',
      },
      {
        question: 'Which architectural pattern does Django follow?',
        incorrectAnswers: [
          'Model-View-Presenter (MVP)',
          'Model-Controller-View (MCV)',
          'Model-Adapter-View (MAV)',
        ],
        correctAnswer: 'Model-View-Template (MVT)',
      },
      {
        question: 'Which command is used to create a new Django project?',
        incorrectAnswers: [
          'django newproject <name>',
          'django-admin build <name>',
          'django new <name>',
        ],
        correctAnswer: 'django-admin startproject <name>',
      },
      {
        question: 'Which command is used to create a new Django app within a project?',
        incorrectAnswers: [
          'django-admin createapp <app_name>',
          'django createapp <app_name>',
          'django startapplication <app_name>',
        ],
        correctAnswer: 'python manage.py startapp <app_name>',
      },
      {
        question: 'Where do you define installed apps in a Django project?',
        incorrectAnswers: [
          'In the views.py file',
          'In the models.py file',
          'In the admin.py file',
        ],
        correctAnswer: 'In the settings.py file under INSTALLED_APPS',
      },
      {
        question: 'Which file is typically used to configure URLs in a Django project?',
        incorrectAnswers: [
          'routing.py',
          'views.py',
          'models.py',
        ],
        correctAnswer: 'urls.py',
      },
      {
        question: 'Which command is used to apply database migrations in Django?',
        incorrectAnswers: [
          'python manage.py build',
          'python manage.py runserver',
          'python manage.py collectstatic',
        ],
        correctAnswer: 'python manage.py migrate',
      },
      {
        question: 'Which default database does Django use if not specified otherwise?',
        incorrectAnswers: [
          'MySQL',
          'PostgreSQL',
          'MongoDB',
        ],
        correctAnswer: 'SQLite',
      },
    ];    
  }
  selectAnswer(answer: string) {
    this.selectedAnswer.set(answer);
    if (answer === this.currentQuestion().correctAnswer) {
      this.correctAnswers.set(this.correctAnswers() + 1);
    }
  }
}
