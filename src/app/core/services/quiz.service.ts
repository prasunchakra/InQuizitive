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
    const questions: QuestionInterface[] =  [
      {
        question: 'What was Swami Vivekananda’s primary message to the youth of India?',
        incorrectAnswers: [
          'Focus only on academic success',
          'Follow Western culture',
          'Avoid spiritual practices',
        ],
        correctAnswer: 'Be strong, fearless, and work towards self-improvement',
      },
      {
        question: 'Which teaching of Swami Vivekananda emphasizes unity in diversity?',
        incorrectAnswers: [
          'Truth is absolute',
          'Spirituality is for monks only',
          'Only one religion leads to God',
        ],
        correctAnswer: 'All religions are different paths leading to the same truth',
      },
      {
        question: 'According to Swami Vivekananda, what is the greatest strength of youth?',
        incorrectAnswers: [
          'Wealth',
          'Fame',
          'Physical power',
        ],
        correctAnswer: 'A focused mind and a strong will',
      },
      {
        question: 'What was Swami Vivekananda’s view on education?',
        incorrectAnswers: [
          'Education should only focus on earning wealth',
          'Education should be restricted to a privileged few',
          'Education should prioritize memorization over understanding',
        ],
        correctAnswer: 'Education should focus on character building and self-reliance',
      },
      {
        question: 'Swami Vivekananda believed that spiritual awakening among youth could lead to what?',
        incorrectAnswers: [
          'Increased political dominance',
          'Greater material wealth',
          'Isolation from society',
        ],
        correctAnswer: 'The transformation and upliftment of society',
      },
      {
        question: 'Which famous quote by Swami Vivekananda inspires youth to take responsibility for their lives?',
        incorrectAnswers: [
          '"Be satisfied with what you have"',
          '"Blame others for your misfortunes"',
          '"Wait for the perfect moment to act"',
        ],
        correctAnswer: '"Arise, awake, and stop not till the goal is reached"',
      },
      {
        question: 'Swami Vivekananda’s contribution to social reform emphasized which of the following?',
        incorrectAnswers: [
          'Promoting caste divisions',
          'Focusing only on industrial development',
          'Encouraging dependence on foreign nations',
        ],
        correctAnswer: 'Eradicating caste discrimination and empowering the underprivileged',
      },
      {
        question: 'What did Swami Vivekananda teach about service to others?',
        incorrectAnswers: [
          'It is optional and only for monks',
          'It distracts from personal spiritual growth',
          'It should only be offered to those of the same religion',
        ],
        correctAnswer: 'Serving humanity is the highest form of worship',
      },
      {
        question: 'According to Swami Vivekananda, what was the purpose of youth empowerment?',
        incorrectAnswers: [
          'To dominate other nations',
          'To achieve personal fame',
          'To escape societal responsibilities',
        ],
        correctAnswer: 'To transform India into a strong, self-reliant nation',
      },
      {
        question: 'Swami Vivekananda’s teachings emphasized the importance of which quality in achieving success?',
        incorrectAnswers: [
          'Luck',
          'Wealth',
          'Connections',
        ],
        correctAnswer: 'Self-confidence and perseverance',
      },
      {
        question: 'Where did Swami Vivekananda deliver his famous speech beginning with "Sisters and Brothers of America"?',
        incorrectAnswers: [
          'New York',
          'Los Angeles',
          'Boston',
        ],
        correctAnswer: 'Chicago',
      },
      {
        question: 'In which year was Swami Vivekananda born?',
        incorrectAnswers: [
          '1860',
          '1862',
          '1870',
        ],
        correctAnswer: '1863',
      },
      {
        question: 'What was Swami Vivekananda’s birth name?',
        incorrectAnswers: [
          'Ramakrishna',
          'Satyendranath',
          'Narasimha',
        ],
        correctAnswer: 'Narendranath Datta',
      },
      {
        question: 'What is the significance of January 12 in India?',
        incorrectAnswers: [
          'Gandhi Jayanti',
          'Teacher’s Day',
          'Youth Empowerment Day',
        ],
        correctAnswer: 'National Youth Day',
      },
      {
        question: 'Which Indian spiritual leader inspired Swami Vivekananda?',
        incorrectAnswers: [
          'Sri Aurobindo',
          'Mahatma Gandhi',
          'Rabindranath Tagore',
        ],
        correctAnswer: 'Ramakrishna Paramahansa',
      },
      {
        question: 'Which organization was founded by Swami Vivekananda?',
        incorrectAnswers: [
          'Arya Samaj',
          'Brahmo Samaj',
          'Theosophical Society',
        ],
        correctAnswer: 'Ramakrishna Mission',
      },
      {
        question: 'Swami Vivekananda introduced Indian philosophy to the Western world through which school of thought?',
        incorrectAnswers: [
          'Sankhya',
          'Nyaya',
          'Vaisheshika',
        ],
        correctAnswer: 'Vedanta',
      },
      {
        question: 'What was the main theme of Swami Vivekananda’s teachings?',
        incorrectAnswers: [
          'Political reform',
          'Economic development',
          'Environmental protection',
        ],
        correctAnswer: 'Youth empowerment and spiritual awakening',
      },
      {
        question: 'Which scripture did Swami Vivekananda heavily promote as a source of spiritual knowledge?',
        incorrectAnswers: [
          'The Quran',
          'The Bible',
          'The Ramayana',
        ],
        correctAnswer: 'The Bhagavad Gita',
      },
      {
        question: 'In which city did Swami Vivekananda pass away?',
        incorrectAnswers: [
          'Varanasi',
          'Delhi',
          'Mumbai',
        ],
        correctAnswer: 'Kolkata',
      },
    
    ]; 
    return questions.sort(() => Math.random() - 0.5);   
  }
  selectAnswer(answer: string) {
    this.selectedAnswer.set(answer);
    if (answer === this.currentQuestion().correctAnswer) {
      this.correctAnswers.set(this.correctAnswers() + 1);
    }
  }
}
