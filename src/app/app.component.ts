import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthQuery } from './auth/data-access/auth.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hackathon-kanban-board';

  isLoggedIn$: Observable<boolean>;

  constructor(
    private authQuery: AuthQuery
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authQuery.isLoggedIn$;
  }
}
