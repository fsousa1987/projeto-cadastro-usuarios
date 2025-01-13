import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GenresListResponse} from '../../types/genres-list-response';
import {StatesListResponse} from '../../types/states-list-response';
import {IUser} from '../../interfaces/user/user.interface';
import {getPasswordStrengthValue} from '../../utils/get-password-strength-value';
import {convertPtBrDateToDateObj} from '../../utils/convert-pt-br-date-to-date-obj';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {convertDateObjToPtBrDate} from '../../utils/convert-date-obj-to-pt-br-date';

@Component({
  selector: 'app-user-form',
  standalone: false,

  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {

  passwordStrengthValue = 0;

  dateValue: Date | null = null;
  minDate: Date | null = null;
  maxDate: Date | null = null;

  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnInit(): void {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const USER_CHANGED = changes['userSelected'];

    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) {
      return;
    }

    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value);
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }

}
