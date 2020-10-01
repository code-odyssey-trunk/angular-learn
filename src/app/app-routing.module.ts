import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { List1Component } from './list1/list1.component'
import { FeedbackComponent } from './feedback/feedback.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list1', component: List1Component },
  { path: 'feedback', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
