import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDataComponent } from './user-data/user-data.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { DatePipePipe } from './date-pipe.pipe';
import { LogoHighlightDirective } from './logo-highlight.directive';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { UserRepoListComponent } from './user-repo-list/user-repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    UserDataComponent,
    SearchUserComponent,
    RepoListComponent,
    DatePipePipe,
    LogoHighlightDirective,
    GoalFormComponent,
    UserRepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
