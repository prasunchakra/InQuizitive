import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  quiz: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.quiz = params['quiz'];
    });
  }

  navigateToQuiz(quiz: string) {
    this.router.navigate([`/quiz/${quiz}`]);
  }
}
