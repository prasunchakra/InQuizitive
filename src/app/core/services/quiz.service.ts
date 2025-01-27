import { Injectable, signal, computed } from '@angular/core';
import { QuestionInterface } from '../types/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuiz: string = '';
  questions = signal<QuestionInterface[]>(this.getMockQuestions());
  currentQuestionIndex = signal<number>(0);
  currentQuestion = computed(() => this.questions()[this.currentQuestionIndex()]);
  currentAnswerOptions = computed(() => this.shuffleAnswers(this.currentQuestion()));
  selectedAnswer = signal<string | null>(null);
  correctAnswers = signal<number>(0);
  showResults = computed<boolean>(() => this.currentQuestionIndex() === this.questions().length-1);

  constructor() { }
  
  setQuiz(quiz: string) {
    console.log("setQuiz", quiz);
    this.currentQuiz = quiz;
    this.questions.set(this.getMockQuestions());
  }

  getQuiz(): string {
    return this.currentQuiz;
  }

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
    let questions: QuestionInterface[] = [];
    if (this.currentQuiz === 'national-youth-day') {
      questions =  [
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
    
    ]; }
    else if (this.currentQuiz === 'netaji-subhas') {
      questions =  [
        {
          question: "When was Netaji Subhas Chandra Bose born?",
          incorrectAnswers: [
            "January 26, 1899",
            "December 25, 1896",
            "January 15, 1898",
          ],
          correctAnswer: "January 23, 1897",
        },
        {
          question: "In which city was Subhas Chandra Bose born?",
          incorrectAnswers: [
            "Kolkata",
            "Mumbai",
            "Delhi",
          ],
          correctAnswer: "Cuttack",
        },
        {
          question: "What was the name of the army formed by Netaji to fight against British rule?",
          incorrectAnswers: [
            "Indian National Congress",
            "Ghadar Party",
            "Swaraj Dal",
          ],
          correctAnswer: "Azad Hind Fauj",
        },
        {
          question: "Which famous slogan did Netaji Subhas Chandra Bose give to inspire Indians?",
          incorrectAnswers: [
            "Satyameva Jayate",
            "Quit India",
            "Inquilab Zindabad",
          ],
          correctAnswer: "Give me blood, and I will give you freedom",
        },
        {
          question: "On which date is Netaji’s birth anniversary observed in India every year?",
          incorrectAnswers: [
            "January 26",
            "January 30",
            "February 1"
          ],
          correctAnswer: "January 23",
        },
          {
          question: "Which prestigious examination did Netaji clear in England before resigning to join India's freedom struggle?",
          incorrectAnswers: [
            "IAS (Indian Administrative Service)",
            "IFS (Indian Foreign Service)",
            "IPS (Indian Police Service)"
          ],
          correctAnswer: "ICS (Indian Civil Service)",
        },
        {
          question: "In which year did Netaji Subhas Chandra Bose establish the Forward Bloc?",
          incorrectAnswers: [
            "1928",
            "1935",
            "1942"
          ],
          correctAnswer: "1939",
          },
        {
          question: "Which country became a key base for Netaji to organize the Azad Hind Fauj and proclaim the provisional government of Free India?",
          incorrectAnswers: [
            "Germany",
            "Japan",
            "Italy"
          ],
          correctAnswer: "Singapore",
        },
        {
          question: "The famous motto of the Indian National Army (INA) under Netaji was:",
          incorrectAnswers: [
            "Satya, Dharma, Nyaya (Truth, Righteousness, Justice)",
            "Azadi, Adhikar, Aman (Freedom, Rights, Peace)",
            "Swaraj, Samata, Satya (Self-Rule, Equality, Truth)"
          ],
          correctAnswer: "Ittehad, Itmad aur Qurbani (Unity, Faith, and Sacrifice)",
        },
        {
          question: "Which fellow revolutionary initially invited Subhas Chandra Bose to lead the Indian National Army?",
          incorrectAnswers: [
            "Bhagat Singh",
            "Rajguru",
            "Lala Lajpat Rai"
          ],
          correctAnswer: "Rash Behari Bose",
        },
      
        {
          question: "Under which alias did Netaji secretly leave his residence in India to evade British surveillance in 1941?",
          incorrectAnswers: [
            "Prasad",
            "Azad",
            "Gurbaksh Singh"
          ],
          correctAnswer: "Ziauddin",
        },
        {
          question: "From which radio station did Netaji first address Indians after reaching Germany?",
          incorrectAnswers: [
            "Free India Radio",
            "Berlin Shortwave Service",
            "Radio Tokyo"
          ],
          correctAnswer: "Azad Hind Radio",
        },
        {
          question: "What was the name of the currency introduced by the provisional government led by Netaji?",
          incorrectAnswers: [
            "Indian Freedom Bonds",
            "Bharat Mata Notes",
            "Provisional Rupee"
          ],
          correctAnswer: "Azad Hind Banknotes",
        },
        {
          question: "In which major World War II campaign did the INA under Netaji participate against the British forces?",
          incorrectAnswers: [
            "North African Campaign",
            "Battle of Britain",
            "Invasion of Italy"
          ],
          correctAnswer: "Burma Campaign",
        },
        {
          question: "During his time in Europe, which world leader did Netaji Subhas Chandra Bose meet in May 1942 to seek support for India's freedom?",
          incorrectAnswers: [
            "Benito Mussolini",
            "Winston Churchill",
            "Charles de Gaulle"
          ],
          correctAnswer: "Adolf Hitler",
        },
      ]
    }
    else if (this.currentQuiz === 'republic-day') {
      questions =  [
        {
          question: "When is Republic Day celebrated in India?",
          incorrectAnswers: [
            "August 15",
            "October 2",
            "January 1",
          ],
          correctAnswer: "January 26",
        },
        {
          question: "In which year was the first Republic Day celebrated in India?",
          incorrectAnswers: [
            "1947",
            "1952",
            "1949",
          ],
          correctAnswer: "1950",
        },
        {
          question: "Who was the first President of India to hoist the flag on Republic Day?",
          incorrectAnswers: [
            "Jawaharlal Nehru",
            "Dr. S. Radhakrishnan",
            "V.V. Giri",
          ],
          correctAnswer: "Dr. Rajendra Prasad",
        },
        {
          question: "What is the significance of Republic Day?",
          incorrectAnswers: [
            "It marks India's independence from British rule",
            "It celebrates India's first general elections",
            "It commemorates Mahatma Gandhi's birth anniversary",
          ],
          correctAnswer: "It marks the adoption of the Indian Constitution",
        },
        {
          question: "Who was the chief architect of the Indian Constitution?",
          incorrectAnswers: [
            "Sardar Patel",
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
          ],
          correctAnswer: "Dr. B.R. Ambedkar",
        },
        {
          question: "Which of the following is NOT a fundamental right under the Indian Constitution?",
          incorrectAnswers: [
            "Right to Equality",
            "Right to Freedom",
            "Right to Education",
          ],
          correctAnswer: "Right to Property",
        },
        {
          question: "Which location hosts the official Republic Day parade in New Delhi?",
          incorrectAnswers: [
            "India Gate",
            "Red Fort",
            "Rashtrapati Bhavan",
          ],
          correctAnswer: "Rajpath",
        },
        {
          question: "Which of these countries was the first to be the Chief Guest at Republic Day celebrations?",
          incorrectAnswers: [
            "United States",
            "France",
            "United Kingdom",
          ],
          correctAnswer: "Indonesia",
        },
        {
          question: "Which military force leads the Republic Day parade every year?",
          incorrectAnswers: [
            "Indian Navy",
            "Indian Air Force",
            "Indian Police Service",
          ],
          correctAnswer: "Indian Army",
        },
        {
          question: "What is the highest civilian award presented during the Republic Day celebrations?",
          incorrectAnswers: [
            "Padma Shri",
            "Padma Bhushan",
            "Padma Vibhushan",
          ],
          correctAnswer: "Bharat Ratna",
        },
        {
          question: "How many articles were originally present in the Indian Constitution?",
          incorrectAnswers: [
            "393",
            "444",
            "512",
          ],
          correctAnswer: "395",
        },
        {
          question: "What is the significance of the 'Beating Retreat' ceremony?",
          incorrectAnswers: [
            "It marks the beginning of Republic Day celebrations",
            "It is held on Republic Day morning",
            "It honors the President of India",
          ],
          correctAnswer: "It marks the end of Republic Day celebrations",
        },
        {
          question: "The Indian Constitution was adopted on January 26 to honor which historical event?",
          incorrectAnswers: [
            "Quit India Movement",
            "Dandi March",
            "The passing of the Rowlatt Act",
          ],
          correctAnswer: "Purna Swaraj Resolution of 1929",
        },
        {
          question: "Which Indian state's tableau won the best prize during Republic Day 2024?",
          incorrectAnswers: [
            "Maharashtra",
            "Uttar Pradesh",
            "Tamil Nadu",
          ],
          correctAnswer: "Odisha",
        },
        {
          question: "What phrase is inscribed below the national emblem of India?",
          incorrectAnswers: [
            "Jai Hind",
            "Bharat Mata Ki Jai",
            "Vande Mataram",
          ],
          correctAnswer: "Satyameva Jayate",
        }
      ]      
    }
    return questions.sort(() => Math.random() - 0.5);   
  }
  selectAnswer(answer: string) {
    this.selectedAnswer.set(answer);
    if (answer === this.currentQuestion().correctAnswer) {
      this.correctAnswers.set(this.correctAnswers() + 1);
    }
  }
}
