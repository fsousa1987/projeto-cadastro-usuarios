import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GenresListResponse} from '../../types/genres-list-response';
import {StatesListResponse} from '../../types/states-list-response';
import {IUser} from '../../interfaces/user/user.interface';
import {getPasswordStrengthValue} from '../../utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  standalone: false,

  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {

  passwordStrengthValue = 0;

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnChanges(changes: SimpleChanges): void {
    const USER_CHANGED = changes['userSelected'];

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }
}
