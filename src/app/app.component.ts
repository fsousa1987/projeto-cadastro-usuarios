import {Component, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';
import {GenresService} from './services/genres.service';
import {BrazilianStatesService} from './services/brazilian-states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersList: any = [];
  genresList: any = [];
  statesList: any = [];

  constructor(private readonly _usersService: UsersService,
              private readonly _genresService: GenresService,
              private readonly _brazilianStatesService: BrazilianStatesService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
    });
  }

  private getStates() {
    this._brazilianStatesService.getStates().subscribe((statesListResponse) => {
      this.statesList = statesListResponse;
    });
  }
}
