import {Component, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';
import {GenresService} from './services/genres.service';
import {BrazilianStatesService} from './services/brazilian-states.service';
import {UsersListResponse} from './types/users-list-response';
import {GenresListResponse} from './types/genres-list-response';
import {StatesListResponse} from './types/states-list-response';
import {IUser} from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  userSelected: IUser = {} as IUser;
  userSelectedIndex: number | undefined;

  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];

  constructor(private readonly _usersService: UsersService,
              private readonly _genresService: GenresService,
              private readonly _brazilianStatesService: BrazilianStatesService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
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
