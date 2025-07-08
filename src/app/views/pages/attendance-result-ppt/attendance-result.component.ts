import { Component } from '@angular/core';
import { AttendanceAIService } from './attendance-result-services';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilLockLocked, cilLockUnlocked, cilFace, cilSave, cilSearch, cilDataTransferDown, cilWindowMinimize } from '@coreui/icons';
import { ToastModule } from '@coreui/angular-pro'

import {
  RowComponent,
  ColComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  TableColorDirective,
  TableActiveDirective,
  DatePickerComponent as DatePickerComponent_1,
  SmartPaginationModule,
  SmartTableComponent,
  SmartTableModule,
  BadgeModule,
  CollapseDirective,
  TemplateIdDirective,
  TextColorDirective,
  BadgeComponent,
  AlignDirective,
  ThemeDirective,
  BorderDirective,
  CarouselModule,
  ModalFooterComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ButtonCloseDirective,
  ModalBodyComponent,
  ToasterHostDirective,
} from '@coreui/angular-pro';
import { Helper } from '../../../Core/_helper';
import { FormsModule } from '@angular/forms';
import { Pf } from '../../../helper/pf';

@Component({
  selector: 'app-attendance-result',
  // imports: [CommonModule],
  imports: [
    IconModule,
    FormsModule,
    RowComponent,
    ColComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    TableActiveDirective,
    TableColorDirective,
    DatePickerComponent_1,
    SmartPaginationModule,
    SmartTableComponent,
    SmartTableModule,
    SmartPaginationModule,
    SmartTableModule,
    BadgeModule,
    CollapseDirective,
    TemplateIdDirective,
    TextColorDirective,
    BadgeComponent,
    AlignDirective,
    ThemeDirective,
    BorderDirective,
    CommonModule,
    CarouselModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    ToastModule,
  ],
  providers: [IconSetService],
  templateUrl: './attendance-result.component.html',
  styleUrl: './attendance-result.component.scss'
})
export class AttendanceResultComponent {
  constructor(
    private _service: AttendanceAIService,
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilLockLocked, cilLockUnlocked, cilFace, cilSave, cilSearch, cilDataTransferDown, cilWindowMinimize };
  }

  user_id: number = 0;
  isIT: boolean = false;
  ngOnInit() {
    this.fromDate = new Date();
    this.toDate = new Date();
    this.user_id = Helper.loadUser().employee_id;
    this.isIT = (Helper.loadUser().employee_type_id == 1);
  }

  formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  columns = [
    { key: 'empid', label: 'Employee' },
    { key: 'ci_result', label: 'Kết quả checkin' },
    { key: 'ci_final_result', label: 'Kết quả checkin cuối cùng' },
    { key: 'ci_fail_reason', label: 'Lý do checkin thất bại' },
    { key: 'co_final_result', label: 'Kết quả checkout cuối cùng' },
    { key: 'co_fail_reason', label: 'Lý do checkout thất bại' },
  ];

  listFailAttendance = [
    { key: 'mask', label: 'Đeo khẩu trang' },
    { key: 'noFace', label: 'Không hiện diện khuôn mặt trong ảnh' },
    { key: 'notFullFace', label: 'Không chụp full mặt' },
    { key: 'otherDevice', label: 'Chụp qua thiết bị khác' },
    { key: 'sharedImage', label: 'Dùng chung hình' },
    { key: 'notMatchProfile', label: 'Không giống hình profile' }
  ];

  pageNumber = 1;
  rowPerPageEmp = 20;
  employee_code = '';

  attendanceStatus: { [key: number]: string } = {};
  selectedLabelsFail: { [key: number]: string[] } = {};
  selectedCheckFailCI: { [key: number]: string[] } = {};
  selectedCheckFailCO: { [key: number]: string[] } = {};

  handleCheckboxChange(index: number, label: string, event: Event, isCheckIn: boolean) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (!this.selectedCheckFailCI[index]) this.selectedCheckFailCI[index] = [];
    if (!this.selectedCheckFailCO[index]) this.selectedCheckFailCO[index] = [];
    if (!this.reasonCheckInFail[index]) this.reasonCheckInFail[index] = [];
    if (!this.reasonCheckOutFail[index]) this.reasonCheckOutFail[index] = [];

    const selectedCheckFail = isCheckIn ? this.selectedCheckFailCI : this.selectedCheckFailCO;
    const reasonCheckFail = isCheckIn ? this.reasonCheckInFail : this.reasonCheckOutFail;

    if (isChecked) {
      // Chưa tồn tại -> thêm vào
      if (!selectedCheckFail[index].includes(label)) {
        reasonCheckFail[index].push(label);
        selectedCheckFail[index] = [...reasonCheckFail[index]];
      }
    } else {
      // Bỏ chọn -> loại khỏi danh sách
      reasonCheckFail[index] = reasonCheckFail[index].filter(l => l !== label);
      selectedCheckFail[index] = [...reasonCheckFail[index]];
    }
  }

  project_id = 55 //ppt;
  ci_result = '';
  ci_final_result: { [key: number]: string } = {};
  ci_fail_reason = '';
  updateCheckAttendance(i: any) {
    this.ci_fail_reason = '';
    if (this.ci_final_result[i] == 'fail') {
      this.ci_fail_reason = this.selectedCheckFailCI[i].join(', ');
    }
    this.att_code = this.listAttendance[i].att_code;

    this._service.ReCheckAttendanceAI(
      Helper.ProjectID(),
      this.ci_result,
      this.att_code,
      this.ci_fail_reason,
      this.ci_final_result[i],
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        this.att_code = '';
        this.visible_toast = true;
        this.message_toast = "Cập nhật thành công";
        this.listAttendance[i].ci_final_result = this.ci_final_result[i];
        this.listAttendance[i].ci_fail_reason = this.ci_fail_reason;
        setTimeout(() => {
          this.visible_toast = false;
        }, 2000);
      } else {
        this.message_toast = "Cập nhật thất bại";
      }
    })
  }

  att_code = '';

  co_result = '';
  co_final_result: { [key: number]: string } = {};
  co_fail_reason = '';
  updateCheckAttendanceCO(i: any) {
    this.co_fail_reason = '';
    if (this.co_final_result[i] === 'fail') {
      this.co_fail_reason = this.selectedCheckFailCO[i].join(', ');
    }
    this.att_code = this.listAttendance[i].att_code;
    this._service.ReCheckCOAttendanceAI(
      this.project_id,
      this.att_code,
      this.co_result,
      this.co_fail_reason,
      this.co_final_result[i],
    ).subscribe((data: any) => {
      if (data.result == 'OK') {
        this.att_code = '';
        this.listAttendance[i].co_final_result = this.co_final_result[i];
        this.listAttendance[i].co_fail_reason = this.ci_fail_reason;
        // this.filter(this.currentPage);
        // this.toggleRow(i);
        this.visible_toast = true;
        this.message_toast = "Cập nhật thành công";
        setTimeout(() => {
          this.visible_toast = false;
        }, 2000);
        // this.filter(this.currentPage);
      } else {
        this.message_toast = "Cập nhật thất bại";
      }
    })
  }

  expandedRows: { [key: number]: boolean } = {};
  reasonCheckInFail: { [key: number]: string[] } = {};
  reasonCheckOutFail: { [key: number]: string[] } = {};
  expandedRowIndex: any;
  toggleRow(index: number) {
    this.expandedRows[index] = !this.expandedRows[index];

    if (this.listAttendance[index]) {
      this.reasonCheckInFail[index] = this.listAttendance[index].ci_fail_reason
        ? this.listAttendance[index].ci_fail_reason.split(',').map((item: any) => item.trim())
        : [];

      this.reasonCheckOutFail[index] = this.listAttendance[index].co_fail_reason
        ? this.listAttendance[index].co_fail_reason.split(',').map((item: any) => item.trim())
        : [];
    }

    this.ci_final_result[index] = this.listAttendance[index]?.ci_final_result || '';
    this.co_final_result[index] = this.listAttendance[index]?.co_final_result || '';
  }

  listAttendance: any;
  rowPerPage = 20;
  totalRow = 0;
  pagination = 1;

  fromDate: any;
  toDate: any;
  shop_code = '';
  isLoading: boolean = false;
  status = 0;
  ci_final_result_filter = '';
  co_final_result_filter = '';
  kqqc = '';

  resetKQQC() {
    this.ci_result = '';
    this.co_result = '';
    this.ci_final_result_filter = '';
    this.co_final_result_filter = '';
  }

  qc_lock = -1;
  guild_id = '';
  id_BC = '';
  filter(page: number) {
    this.resetKQQC();
    if (this.kqqc) {
      const [filterType, filterValue] = this.kqqc.split('-');
      switch (filterType) {
        case "ci_result":
          this.ci_result = filterValue;
          break;
        case "co_result":
          this.co_result = filterValue;
          break;
        case "ci_final_result":
          this.ci_final_result_filter = filterValue;
          break;
        case "co_final_result":
          this.co_final_result_filter = filterValue;
          break;
      }
    }
    this.pageNumber = page
    this.isLoading = true;
    this._service.ewo_ATD_filterAttendance(
      this.user_id,
      this.project_id,
      this.att_code,
      this.shop_code,
      Pf.DateToInt(this.fromDate!),
      Pf.DateToInt(this.toDate!),
      this.status = 0,
      this.ci_result,
      this.co_result,
      this.ci_final_result_filter,
      this.co_final_result_filter,
      this.guild_id,
      this.rowPerPage,
      this.pageNumber,
      this.qc_lock,
      this.id_BC
    )
      .subscribe((data: any) => {
        if (data.result == 'OK') {
          const res = data.data;
          this.listAttendance = res;
          this.isLoading = false;
          this.totalRow = this.listAttendance[0]?.TotalRows | 0;
          this.pagination = Math.ceil(this.totalRow / this.rowPerPage);
        }
      })
  }

  export() {
    this._service.ExportAttendanceAI(
      this.project_id,
    )
  }

  confirmLockVisible = false;
  lockAtdItem(item: any) {
    this.confirmLockVisible = false;
    if (item.qc_lock === 1) {
      return;
    }
    this._service.LockAttendanceAI(
      this.user_id,
      this.project_id,
      item.att_code,
      item.work_date
    )
      .subscribe((data: any) => {
        if (data.result == 'OK') {
          this.filter(this.currentPage);
        }
      });
  }
  selectedItemLock: any = null;
  openConfirmModal(item: any) {
    this.selectedItemLock = item;
    this.confirmLockVisible = true;
  }
  confirmAction() {
    this.lockAtdItem(this.selectedItemLock);
  }

  currentPage = 1;
  onPageChange($event: any) {
    // this.pageNumber = $event;
    this.currentPage = $event;
    this.filter($event);
  }
  isCheckedCI(i: number, label: string): boolean {
    return this.reasonCheckInFail[i]?.includes(label) ?? false;
  }
  isCheckedCO(i: number, label: string): boolean {
    return this.reasonCheckOutFail[i]?.includes(label) ?? false;
  }

  visible_toast = false;
  message_toast = "";
  updateSwitchATDAI_CI(item: any, attribute: string) {
    const type = "checkin"
    let verify = 0;
    switch (attribute) {
      case "faceId":
        verify = item.ci_FaceVerifyOk;
        break;
      case "logo":
        verify = item.ci_brandOk;
        break;
      case "location":
        verify = item.ci_LocationOk;
        break;
    }
    this._service.SwitchAttendanceDetectAI(
      this.project_id,
      item.att_code,
      type,
      attribute,
      verify,
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        this.visible_toast = true;
        this.message_toast = "Cập nhật thành công";
        setTimeout(() => {
          this.visible_toast = false;
        }, 2000);
      } else {
        this.message_toast = "Cập nhật thất bại";
      }
    });
  }

  updateSwitchATDAI_CO(item: any, attribute: string) {
    const type = "checkout"
    let verify = 0;
    switch (attribute) {
      case "faceId":
        verify = item.co_FaceVerifyOk;
        break;
      case "logo":
        verify = item.co_brandOk;
        break;
      case "location":
        verify = item.co_LocationOk;
        break;
    }
    this._service.SwitchAttendanceDetectAI(
      this.project_id,
      item.att_code,
      type,
      attribute,
      verify,
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        this.visible_toast = true;
        this.message_toast = "Cập nhật thành công";
        setTimeout(() => {
          this.visible_toast = false;
        }, 2000);
      } else {
        this.message_toast = "Cập nhật thất bại";
      }
    })
  }
}


