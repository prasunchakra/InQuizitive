import { Routes } from '@angular/router';
import { QuizComponent } from './core/components/quiz/quiz.component';
import { HomeComponent } from './core/components/home/home.component';
import { LandingComponent } from './common/components/landing/landing.component';

export const routes: Routes = [
    {path: '', component:LandingComponent},
    {path: 'home/:quiz', component: HomeComponent},
    {path: 'quiz/:quiz', component: QuizComponent}
];
