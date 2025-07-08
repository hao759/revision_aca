import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilLockLocked, cilLockUnlocked, cilFace, cilSave, cilSearch, cilDataTransferDown, cilWindowMinimize, cilSettings, cilArrowCircleTop, cilSend, cilCheckCircle, cilXCircle, cilLevelUp, cilPaperclip } from '@coreui/icons';
import { ToastModule } from '@coreui/angular-pro'
import { saveAs } from "file-saver";
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
import { FormsModule } from '@angular/forms';
import { Pf } from '../../../helper/pf';
import { AttendanceAIService } from './attendance-result-abbott-services';
import { Helper } from '../../../Core/_helper';
import { EnumStatus } from '../../../Core/_enum';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { provideLoadingBar } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-attendance-result',
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
    LoadingBarHttpClientModule,
  ],
  providers: [IconSetService],
  templateUrl: './attendance-result-abbott.component.html',
  styleUrl: './attendance-result-abbott.component.scss'
})
export class AttendanceResultAbbottComponent {
  constructor(
    private _service: AttendanceAIService,
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilLockLocked, cilLockUnlocked, cilFace, cilSave, cilSearch, cilDataTransferDown, cilWindowMinimize, cilSettings, cilArrowCircleTop, cilSend, cilCheckCircle, cilXCircle, cilLevelUp, cilPaperclip };
  }

  user_id = 0;
  isSup = false;
  ngOnInit() {
    this.user_id = Helper.loadUser().employee_id;
    this.isSup = (Helper.loadUser().employee_type_id == 3)
    this.get_color_font_shopcode_revision()
    this.fromDate = new Date();
    this.toDate = new Date();
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
    { key: '100020', label: 'Chụp không thấy rõ mặt, mờ, nhòe,tối' },
    { key: '100021', label: 'Đeo khẩu trang' },
    { key: '100022', label: 'Hình không được chụp trực tiếp' },
    { key: '100023', label: 'Hình chụp không khớp với thông tin hồ sơ' },
    { key: '100024', label: 'Hình chụp không thể hiện trong khu vực CH' },
    { key: '100025', label: 'Không có hình' },
    { key: '1', label: 'Lý do khác' },
  ];

  getFailReasonText(key: number): string {
    const reasons = key;
    return `Không đạt: ${reasons}`;
  }

  project_id = 44 //abbott;
  ci_result: any = "";
  co_result: any = "";
  final_result: { [key: number]: string } = {};
  co_final_result: { [key: number]: string } = {};
  result_qc = '';
  fail_reason = '';
  ci_time: any;
  work_date = 0;
  ci_final_result_filter: any = "";
  co_final_result_filter: any = "";
  qc_lock = -1;
  id_BC = '';
  guild_id = '';
  // filter(page: number) {
  //   this.currentPage = page;
  //   this.resetKQQC();//??

  //   if (this.kqai) {
  //     const [filterType, filterValue] = this.kqai.split('-');
  //     switch (filterType) {
  //       case "":
  //         this.status = Number(filterValue);
  //         break;
  //       case "checkin":
  //         this.ci_result = filterValue;
  //         this.status = -1;
  //         break;
  //       case "checkout":
  //         this.co_result = filterValue;
  //         this.status = -1;
  //         break;
  //     }
  //   }
  //   if (this.kqqc) {
  //     const [filterType, filterValue] = this.kqqc.split('-');

  //     switch (filterType) {
  //       case "":
  //         this.status = Number(filterValue);
  //         break;
  //       case "checkin":
  //         this.ci_final_result_filter = filterValue;
  //         this.status = -1;
  //         break;
  //       case "checkout":
  //         this.co_final_result_filter = filterValue;
  //         this.status = -1;
  //         break;
  //     }
  //   }

  //   if (this.emp_code) {
  //     this.att_code = this.emp_code
  //   }

  //   this.expandedRows = {};

  //   this.pageNumber = page
  //   this.isLoading = true;
  //   this._service.ewo_ATD_filterAttendance(
  //     this.user_id,
  //     this.project_id,
  //     this.att_code,
  //     this.shop_code,
  //     Pf.DateToInt(this.fromDate!),
  //     Pf.DateToInt(this.toDate!),
  //     this.status,
  //     this.ci_result,
  //     this.co_result,
  //     this.ci_final_result_filter,
  //     this.co_final_result_filter,
  //     this.guild_id,
  //     this.rowPerPage,
  //     this.pageNumber,
  //     this.qc_lock,
  //     this.id_BC,
  //   )
  //     .subscribe((data: any) => {
  //       if (data.result == 'OK') {
  //         const res = data.data;
  //         this.listAttendance = res;
  //         this.initAttendanceData();
  //         this.att_code = '';
  //         this.isLoading = false;
  //         this.totalRow = this.listAttendance[0]?.TotalRows | 0;
  //         this.pagination = Math.ceil(this.totalRow / this.rowPerPage);
  //       }
  //     })
  // }
  filter(page: number) {
    this.currentPage = page;
    this.resetKQQC();//??


    if (this.emp_code) {
      this.att_code = this.emp_code
    }

    this.expandedRows = {};

    this.pageNumber = page
    this.isLoading = true;
    this._service.ewo_ATD_filterAttendance(
      this.user_id,
      this.project_id,
      this.att_code,
      this.shop_code,
      Pf.DateToInt(this.fromDate!),
      Pf.DateToInt(this.toDate!),
      this.kqai,
      this.kqqc,
      this.guild_id,
      this.rowPerPage,
      this.pageNumber,
      this.qc_lock,
      this.id_BC,
    )
      .subscribe((data: any) => {
        if (data.result == 'OK') {
          const res = data.data;
          this.listAttendance = res;
          this.initAttendanceData();
          this.att_code = '';
          this.isLoading = false;
          this.totalRow = this.listAttendance[0]?.TotalRows | 0;
          this.pagination = Math.ceil(this.totalRow / this.rowPerPage);
        }
      })
  }



  export() {

    if (this.emp_code) {
      this.att_code = this.emp_code
    }
    this.isLoading = true;
    this._service.ExportAttendanceAI(
      this.project_id,
      this.user_id,
      Pf.DateToInt(this.fromDate!),
      Pf.DateToInt(this.toDate!),
      this.att_code,
      this.shop_code,
      this.kqai,
      this.kqqc,
      // this.ci_result,
      // this.co_result,
      // this.ci_final_result_filter,
      // this.co_final_result_filter,
      this.guild_id,
      this.qc_lock,
      this.id_BC,
    ).subscribe({
      next: (response) => {
        this.saveFileExcel(response, '.xlsx', 'atd_result');
      },
      error: (error) => {
        console.error('Export failed:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
  saveFileExcel(response: any, type: any = '.xlsx', file_name: string = '') {
    const currentTime = new Date();
    const filename =
      'download_' +
      file_name +
      '_' +
      currentTime.getFullYear().toString() +
      (currentTime.getMonth() + 1) +
      currentTime.getDate() +
      currentTime
        .toLocaleTimeString()
        .replace(/[ ]|[,]|[:]/g, '')
        .trim() +
      type;

    saveAs(response, filename);
  }

  att_code = '';
  emp_code = '';


  expandedRows: { [key: number]: boolean } = {};
  // reasonCheckInFail: { [key: number]: string[] } = {};
  // reasonCheckOutFail: { [key: number]: string[] } = {};

  reasonCheckInFail: { [key: number]: string } = {};
  reasonCheckOutFail: { [key: number]: string } = {};

  expandedRowIndex: any;

  // toggleRow(index: number) {
  //   this.expandedRows[index] = !this.expandedRows[index];

  //   const attendance = this.listAttendance[index];
  //   if (attendance) {
  //     // Check-In
  //     this.reasonCheckInFail[index] = attendance.ci_reason_id?.trim() || '';

  //     this.selectedCheckFailCI[index] = this.reasonCheckInFail[index] || '';

  //     // Check-Out
  //     this.reasonCheckOutFail[index] = attendance.co_reason_id?.trim() || '';
  //     this.selectedCheckFailCO[index] = this.reasonCheckOutFail[index];

  //     // Ghi chú
  //     this.commentText[index] = attendance.comment || '';

  //     // Kết quả cuối
  //     this.final_result[index] = attendance.ci_final_result || '';
  //     this.co_final_result[index] = attendance.co_final_result || '';

  //     //Hiển thị lý do khác
  //     this.visiableReasonAnotherCI = this.reasonCheckInFail[index] == '1';
  //     this.visiableReasonAnotherCO = this.reasonCheckOutFail[index] == '1';

  //     // Ghi chú nếu là "Khác"
  //     this.reasonAnotherFailCI[index] = attendance.ci_note || '';
  //     this.reasonAnotherFailCO[index] = attendance.co_note || '';
  //   }
  // }


  initAttendanceData() {
    this.listAttendance.forEach((attendance: any, index: any) => {
      // Check-In
      this.reasonCheckInFail[index] = attendance.ci_reason_id?.trim() || '';
      this.selectedCheckFailCI[index] = this.reasonCheckInFail[index] || '';

      // Check-Out
      this.reasonCheckOutFail[index] = attendance.co_reason_id?.trim() || '';
      this.selectedCheckFailCO[index] = this.reasonCheckOutFail[index];

      // Ghi chú
      this.commentText[index] = attendance.comment || '';

      // Kết quả cuối
      this.final_result[index] = attendance.ci_final_result || '';
      this.co_final_result[index] = attendance.co_final_result || '';

      // Hiển thị lý do khác
      this.visiableReasonAnotherCI[index] = this.reasonCheckInFail[index] === '1';
      this.visiableReasonAnotherCO[index] = this.reasonCheckOutFail[index] === '1';

      // Ghi chú nếu là "Khác"
      this.reasonAnotherFailCI[index] = attendance.ci_note || '';
      this.reasonAnotherFailCO[index] = attendance.co_note || '';
    });
  }



  pageNumber = 1;
  rowPerPageEmp = 20;
  employee_code = '';

  attendanceStatus: { [key: number]: string } = {};
  selectedLabelsFail: { [key: number]: string[] } = {};

  // Checkbox - Không Đạt
  // selectedCheckFailCI: { [key: number]: string[] } = {};
  // selectedCheckFailCO: { [key: number]: string[] } = {};

  // Radio - Không Đạt
  selectedCheckFailCI: { [key: number]: string } = {};
  selectedCheckFailCO: { [key: number]: string } = {};

  visiableReasonAnotherCI: boolean[] = [];
  visiableReasonAnotherCO: boolean[] = [];

  loadding_detect_ci = false;
  loadding_detect_co = false;
  handleDetectAI(i: any, item: any, type: string) {
    const img2 = item.image //Hình profile
    let img1 = '';
    if (type == 'checkin') {
      img1 = item.ci_photo
      this.loadding_detect_ci = true;
    } else {
      img1 = item.co_photo
      this.loadding_detect_co = true;
    }
    this._service.recheck_ResultAICiCo(
      img1,
      img2,
      this.project_id,
      this.user_id,
      item.id,
      type,
    ).subscribe((data: any) => {
      if (data.result === EnumStatus.ok) {
        if (type == 'checkin') {
          this.loadding_detect_ci = false;
        } else {
          this.loadding_detect_co = false;
        }
        this.listAttendance[i].brandAiOk = data.brandAiOk
        this.listAttendance[i].faceVerifyAiOk = data.faceVerifyAiOk
        this.listAttendance[i].locationAiOk = data.locationAiOk
        this.toggleToast("Detect thành công", "bg-success");
      }
    })
  }

  // handleCheckboxChange(index: number, key: string, event: Event, isCheckIn: boolean) {
  //   const isChecked = (event.target as HTMLInputElement).checked;

  //   if (key === '1') {
  //     if (isCheckIn) {
  //       this.visiableReasonAnotherCI = isChecked;
  //     } else {
  //       this.visiableReasonAnotherCO = isChecked;
  //     }
  //   }

  //   if (!this.selectedCheckFailCI[index]) this.selectedCheckFailCI[index] = [];
  //   if (!this.selectedCheckFailCO[index]) this.selectedCheckFailCO[index] = [];
  //   if (!this.reasonCheckInFail[index]) this.reasonCheckInFail[index] = [];
  //   if (!this.reasonCheckOutFail[index]) this.reasonCheckOutFail[index] = [];

  //   const selectedCheckFail = isCheckIn ? this.selectedCheckFailCI : this.selectedCheckFailCO;
  //   const reasonCheckFail = isCheckIn ? this.reasonCheckInFail : this.reasonCheckOutFail;

  //   if (isChecked) {
  //     // Chưa tồn tại -> thêm vào
  //     if (!selectedCheckFail[index].includes(key)) {
  //       reasonCheckFail[index].push(key);
  //       selectedCheckFail[index] = [...reasonCheckFail[index]];

  //     }
  //   } else {
  //     reasonCheckFail[index] = reasonCheckFail[index].filter(l => l !== key);
  //     selectedCheckFail[index] = [...reasonCheckFail[index]];
  //   }
  // }

  handleRadioChange(index: number, key: string, event: Event, isCheckIn: boolean) {
    const isChecked = (event.target as HTMLInputElement).checked;

    // console.log(this.selectedCheckFailCI[index])
    // console.log(key)
    if (isCheckIn) {
      this.selectedCheckFailCI[index] = key;

      // this.visiableReasonAnotherCI = key === '1' && isChecked;
      this.visiableReasonAnotherCI[index] = key === '1' && isChecked;
    } else {
      this.selectedCheckFailCO[index] = key;

      // this.visiableReasonAnotherCO = key === '1' && isChecked;
      this.visiableReasonAnotherCO[index] = key === '1' && isChecked;
    }



    if (isCheckIn) {
      this.selectedCheckFailCI[index] = key;
    } else {
      this.selectedCheckFailCO[index] = key;
    }

  }

  reasonAnotherFailCI: { [key: number]: string } = {};
  reasonAnotherFailCO: { [key: number]: string } = {};
  //??
  updateCheckAttendance(i: any, type: string) {
    this.fail_reason = '';
    let note = '';
    let fail_reson_label = '';
    let selectedKeys;

    if (type == 'checkin') {
      if ((this.listAttendance[i].ci_FaceVerifyOk == "0" || this.listAttendance[i].ci_LocationOk == "0" || this.listAttendance[i].ci_brandOk == "0") && this.final_result[i] == 'true') {
        this.toggleToast("Sai logic! Không thể update", "bg-danger");
        return;
      }

      if ((this.listAttendance[i].ci_FaceVerifyOk == "1" && this.listAttendance[i].ci_LocationOk == "1" && this.listAttendance[i].ci_brandOk == "1") && this.final_result[i] == 'false') {
        this.toggleToast("Sai logic! Không thể update", "bg-danger");
        return;
      }

      if (this.final_result[i] == 'false') {
        // this.fail_reason = (this.selectedCheckFailCI[i] || []).filter(c => c.trim() !== "").join(', ');
        this.fail_reason = this.selectedCheckFailCI[i] || '';

        if (!this.selectedCheckFailCI[i]) {
          this.toggleToast("Hãy chọn lý do không đạt của " + type, "bg-danger");
          return;
        }

        if (this.selectedCheckFailCI[i] === '1' && !this.reasonAnotherFailCI[i]) {
          this.toggleToast("Hãy nhập lý do không đạt của " + type, "bg-danger");
          return;
        }

        selectedKeys = this.selectedCheckFailCI[i]
        fail_reson_label = this.getFailReasonLabels(selectedKeys);
      }
      this.result_qc = this.final_result[i]

      if (this.selectedCheckFailCI[i] == '1') {
        note = this.reasonAnotherFailCI[i]
      } else {
        note = "";
      }
    } else {
      if ((this.listAttendance[i].co_FaceVerifyOk == "0" || this.listAttendance[i].co_LocationOk == "0" || this.listAttendance[i].co_brandOk == "0") && this.co_final_result[i] == 'true') {
        this.toggleToast("Sai logic! Không thể update", "bg-danger");
        return;
      }
            if ((this.listAttendance[i].co_FaceVerifyOk == "1" && this.listAttendance[i].co_LocationOk == "1" && this.listAttendance[i].co_brandOk == "1") && this.co_final_result[i] == 'false') {
        this.toggleToast("Sai logic! Không thể update", "bg-danger");
        return;
      }

      if (this.co_final_result[i] == 'false') {
        this.fail_reason = this.selectedCheckFailCO[i] || '';
        if (!this.selectedCheckFailCO[i]) {
          this.toggleToast("Hãy chọn lý do không đạt của " + type, "bg-danger");
          return;
        }

        if (this.selectedCheckFailCO[i] === '1' && !this.reasonAnotherFailCO[i]) {
          this.toggleToast("Hãy nhập lý do không đạt của " + type, "bg-danger");
          return;
        }

        selectedKeys = this.selectedCheckFailCO[i]
        fail_reson_label = this.getFailReasonLabels(selectedKeys);
      }

      this.result_qc = this.co_final_result[i]

      if (this.selectedCheckFailCO[i] == '1') {
        note = this.reasonAnotherFailCO[i]
      } else {
        note = "";
      }
    }

    this.att_code = this.listAttendance[i].att_code;
    this.ci_time = this.listAttendance[i].ci_time;

    this._service.ewo_ATD_updateEmployees(
      this.user_id,
      this.project_id,
      type,
      
      // this.att_code,
      this.fail_reason,
      this.result_qc,
      // this.listAttendance[i].work_date,
      // this.ci_time,
      this.listAttendance[i].id,
      note,
      type=='checkin'?this.listAttendance[i].ci_FaceVerifyOk:this.listAttendance[i].co_FaceVerifyOk,
       type=='checkin'?this.listAttendance[i].ci_LocationOk:this.listAttendance[i].co_LocationOk,
        type=='checkin'?this.listAttendance[i].ci_brandOk:this.listAttendance[i].co_brandOk,
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        this.att_code = '';
        if (type == "checkin") {
          this.listAttendance[i].ci_final_result = this.result_qc;
          this.listAttendance[i].ci_note = note;
          this.listAttendance[i].ci_reason_id = Number(this.fail_reason);
          this.listAttendance[i].ci_fail_reason = fail_reson_label;
        } else {
          this.listAttendance[i].co_final_result = this.result_qc;
          this.listAttendance[i].co_note = note;
          this.listAttendance[i].co_reason_id = Number(this.fail_reason);
          this.listAttendance[i].co_fail_reason = fail_reson_label;
        }

        this.toggleToast("Cập nhật thành công", "bg-success");
      } else {
        this.message_toast = "Cập nhật thất bại";
      }
    },(err:any)=>{
      this.toggleToast("Cập nhật thất bại ", "bg-danger");
    })
  }

  getFailReasonLabels(keys: string): string {
    return keys
      .split(',') // chuyển "1,2,3" → ["1", "2", "3"]
      .map(key => {
        const item = this.listFailAttendance.find(f => f.key === key.trim());
        return item ? item.label : key.trim();
      })
      .filter(label => label.trim() !== "")
      .join(', ');
  }

  kqqc = -1;
  kqai = -1;

  resetKQQC() {
    this.ci_result = '';
    this.co_result = '';
    this.ci_final_result_filter = '';
    this.co_final_result_filter = '';
  }

  listAttendance: any;
  rowPerPage = 20;
  totalRow = 0;
  pagination = 1;

  fromDate: any;
  toDate: any;
  shop_code = '';
  isLoading: boolean = false;
  status = -1;


  confirmLockVisible = false;
  lockAtdItem(item: any) {
    this.confirmLockVisible = false;

    if (item.qc_lock !== 1 && !item.ci_final_result || !item.co_final_result) {
      this.toggleToast("Không thể khóa khi chưa QC xong", "bg-danger");
      return;
    }

    this._service.ewo_ATD_lockAttendance(
      this.user_id,
      this.project_id,
      item.att_code,
      item.work_date,
      item.ci_time,
      item.id_BC
    )
      .subscribe((data: any) => {
        if (data.result == 'OK') {
          item.qc_lock == 1 ? item.qc_lock = 0 : item.qc_lock = 1;

          item.qc_lock == 1 ? this.toggleToast("Khóa thành công", "bg-success") : this.toggleToast("Mở khóa thành công", "bg-success");
        }
      });
  }
  selectedItemLock: any = null;
  itemLock = 0;
  openConfirmModal(item: any) {
    if (!this.isSup) {
      // this.toggleToast("Bạn không có chức năng lock ATD", "bg-danger");
      return;
    }

    item.qc_lock == 1 ? this.itemLock = 1 : this.itemLock = 0;

    this.selectedItemLock = item;
    this.confirmLockVisible = true;
  }
  confirmAction() {
    this.lockAtdItem(this.selectedItemLock);
  }

  currentPage = 1;
  onPageChange($event: any) {
    this.currentPage = $event;
    this.filter($event);
  }
  isCheckedCI(i: number, key: string): boolean {
    // return this.reasonCheckInFail[i]?.includes(key) ?? false;
    return this.reasonCheckInFail[i] == key ? true : false;
  }
  isCheckedCO(i: number, key: string): boolean {
    // return this.reasonCheckOutFail[i]?.includes(label) ?? false;
    return this.reasonCheckOutFail[i] == key ? true : false;
  }

  visible_toast = false;
  message_toast = "";
  // updateSwitchATDAI_CI(item: any, attribute: string) {
  //   const type = "checkin"
  //   let verify: any = 0;
  //   switch (attribute) {
  //     case "faceId":
  //       verify = item.ci_FaceVerifyOk;
  //       break;
  //     case "logo":
  //       verify = item.ci_brandOk;
  //       break;
  //     case "location":
  //       verify = item.ci_LocationOk;
  //       break;
  //   }

  //   if (item.ci_final_result == 'true' && (verify == 0 || verify == null)) {
  //     this.toggleToast("Sai logic! Không thể update", "bg-danger");
  //     return;
  //   }
  //   if (verify === "null" || verify === null) {
  //     verify = null;
  //   }

  //   this._service.SwitchAttendanceDetectAI(
  //     this.user_id,
  //     this.project_id,
  //     item.att_code,
  //     type,
  //     attribute,
  //     verify,
  //     item.work_date,
  //     item.ci_time,
  //     item.id_BC
  //   ).subscribe((data: any) => {
  //     if (data.result === "OK") {
  //       this.toggleToast("Cập nhật thành công", "bg-success");
  //     } else {
  //       this.message_toast = "Cập nhật thất bại";
  //     }
  //   });
  // }

  // updateSwitchATDAI_CO(item: any, attribute: string) {
  //   const type = "checkout"
  //   let verify: any = 0;
  //   switch (attribute) {
  //     case "faceId":
  //       verify = item.co_FaceVerifyOk;
  //       break;
  //     case "logo":
  //       verify = item.co_brandOk;
  //       break;
  //     case "location":
  //       verify = item.co_LocationOk;
  //       break;
  //   }

  //   if (item.co_final_result == 'true' && (verify == 0 || verify == null)) {
  //     this.toggleToast("Sai logic! Không thể update", "bg-danger");
  //     return;
  //   }

  //   if (verify === "null" || verify === null) {
  //     verify = null;
  //   }


  //   this._service.SwitchAttendanceDetectAI(
  //     this.user_id,
  //     this.project_id,
  //     item.att_code,
  //     type,
  //     attribute,
  //     verify,
  //     item.work_date,
  //     item.ci_time,
  //     item.id_BC
  //   ).subscribe((data: any) => {
  //     if (data.result === "OK") {
  //       this.toggleToast("Cập nhật thành công", "bg-success");
  //     } else {
  //       this.message_toast = "Cập nhật thất bại";
  //     }
  //   })
  // }

  toast = {
    visible_toast: false,
    message_toast: "",
    background: "",
  }

  toggleToast(message: string, background: string) {
    this.toast.visible_toast = true;
    this.toast.background = background;
    this.toast.message_toast = message;
    setTimeout(() => {
      this.toast.visible_toast = false;
    }, 2000);
  }

  chooseModalProfile = false;
  makeProfile(item: any, i: any, type: string) {
    this.chooseModalProfile = false;
    if (!item.ci_photo) {
      this.toggleToast("Không có ảnh để cập nhật", "bg-danger");
      return;
    }

    let photo_link;
    if (type === 'checkin') {
      photo_link = item.ci_photo;
    } else {
      photo_link = item.co_photo;
    }

    this._service.detectAi_updateImgProfile(
      this.user_id,
      this.project_id,
      photo_link,
      item.att_code,
      item.emp_name,
      item.id
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        item.image = photo_link;
        this.toggleToast("Cập nhật thành công", "bg-success");
      } else {
        this.toast.message_toast = "Cập nhật ảnh thất bại";
      }
    })
  }

  makeImageProfile(item: any) {
    this.chooseModalProfile = false;

    const photo_link = this.imageProfile;

    this._service.detectAi_updateImgProfile(
      this.user_id,
      this.project_id,
      photo_link,
      item.att_code,
      item.emp_name,
      item.id
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        item.image = item.ci_photo;
        this.toggleToast("Cập nhật thành công", "bg-success");
      } else {
        this.toast.message_toast = "Cập nhật ảnh thất bại";
      }
    })
  }


  imageProfile: any

  gotoPage: number = 1;
  jumpToPage() {
    this.currentPage = this.gotoPage
    this.filter(this.currentPage);
  }

  handleScrollOnTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  commentText: { [key: number]: string } = {};
  submitComment(item: any, index: number) {
    this._service.detectAi_commentNote(
      item.att_code,
      item.ci_time,
      item.work_date,
      this.project_id,
      this.user_id,
      this.commentText[index],
      item.id_BC
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        this.listAttendance[index].comment = this.commentText[index];
        this.toggleToast("Cập nhật thành công", "bg-success");
      } else {
        this.toast.message_toast = "Comment thất bại";
      }
    })
  }

  selectedImage: string | null = null;
  showImagePopup(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closePopup() {
    this.selectedImage = null;
  }


  visableModalChangeImage = false;
  itemChangeImage = {
    item: [],
    i: 0,
    type: ''
  }
  confirmChangeImage(item: any, i: any, type: string) {
    this.visableModalChangeImage = true;
    this.itemChangeImage.item = item;
    this.itemChangeImage.i = i;
    this.itemChangeImage.type = type;
  };

  confirmActionChangeImage() {
    this.makeProfile(this.itemChangeImage.item, this.itemChangeImage.i, this.itemChangeImage.type);
    this.visableModalChangeImage = false;
  }

  visableModalUpdateImage = false;
  fileUpdateImg: any;
  itemUpdateImage: any;
  confirmUpdateImage(item: any, i: any) {
    this.visableModalUpdateImage = true;
    this.itemUpdateImage = item;
  }
  resetFileImg() {
    const fileInput = document.getElementById("fileImg") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
    this.fileUpdateImg = null;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileUpdateImg = file;
    }
  }

  handleUpdateImg() {
    const formData = new FormData();
    formData.append('files', this.fileUpdateImg);

    if (this.fileUpdateImg) {
      this._service.ewo_ATD_uploadImgProfile(
        this.user_id,
        this.project_id,
        this.itemUpdateImage.id,
        this.itemUpdateImage.att_code,
        formData
      )
        .subscribe((data: any) => {
          const res = data.data
          if (data.result == EnumStatus.ok) {
            this.toggleToast("Cập nhật thành công", "bg-success");
            this.resetFileImg()
            this.itemUpdateImage.image = res[0][""];
          } else {
            this.toggleToast("Cập nhật thất bại", "bg-danger");
            this.resetFileImg()
          }
          this.visableModalUpdateImage = false;
        })
    } else {
      this.toggleToast("Không có ảnh để cập nhật", "bg-danger");
    }
  }

  showImportFile = false;

  getTemplate(type: string) {
    if (type == 'lock') {
      this._service.DetectAI_getTemplateCiCo(
        this.project_id,
        this.user_id
      )
    } else {
      this._service.DetectAI_getTemplateUnlockCiCo(
        this.project_id,
        this.user_id
      )
    }
  }

  fileImportLock: any;
  fileImportUnlock: any;
  onFileChange(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      if (type == 'lock') {
        this.fileImportLock = file
      } else {
        this.fileImportUnlock = file
      }
    }
  }

  importFileLock(type: string) {
    const formData = new FormData();
    // formData.append('files', this.fileImportLock); // API yêu cầu key là "files"
    formData.append('user_id', this.user_id.toString());
    formData.append('project_id', this.project_id.toString());

    if (type == 'lock') {
      formData.append('files', this.fileImportLock)
      if (!this.fileImportLock) {
        this.toggleToast("Chưa có file nào import", "bg-danger")
        return;
      }
    } else if (type == 'unlock') {
      formData.append('files', this.fileImportUnlock)
      if (!this.fileImportUnlock) {
        this.toggleToast("Chưa có file nào import", "bg-danger")
        return;
      }
    }

    if (type == 'lock') {
      // this._service.ATD_ImportEmpLock(
      //   formData
      // ).subscribe((data: any) => {
      //   if (data.result == EnumStatus.error) {
      //     this.toggleToast(data.message, "bg-danger");
      //     return;
      //   }
      // })
      this._service.ATD_ImportEmpLock(formData).subscribe((response: any) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const json = JSON.parse(reader.result as string);
            if (json.result == 'ERROR')
              this.toggleToast(json.message, "bg-danger");
            else
              if (json.result == 'OK')
                this.toggleToast(json.message, "bg-success");
              else {
                this.toggleToast("Thao tác không xác định", "bg-warning");
              }
          } catch (e) {
            this.saveFile(response, '.xlsx', 'result_LockATD');
            this.toggleToast("Có lỗi xảy ra! Nhận file kết quả", "bg-danger");
          }
        };
        reader.readAsText(response);
      }, error => {
        this.toggleToast("Lỗi tải file .", "bg-danger");
      });

      // this.toggleToast("Khóa thành công", "bg-success");
      this.resetFileInput('lock');
    } else if (type == 'unlock') {
      // this._service.ATD_ImportEmpUnLock(
      //   formData
      // ).subscribe((data: any) => {
      //   if (data.result == EnumStatus.error) {
      //     this.toggleToast(data.message, "bg-danger");
      //     return;
      //   }
      // })

      // this.toggleToast("Mở khóa thành công", "bg-success");
      this._service.ATD_ImportEmpUnLock(formData).subscribe((response: any) => {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const json = JSON.parse(reader.result as string);
            if (json.result == 'ERROR')
              this.toggleToast(json.message, "bg-danger");
            else
              if (json.result == 'OK')
                this.toggleToast(json.message, "bg-success");
              else {
                this.toggleToast("Thao tác không xác định", "bg-warning");
              }
          } catch (e) {
            this.saveFile(response, '.xlsx', 'result_UnLockATD');
            this.toggleToast("Có lỗi xảy ra! Nhận file kết quả", "bg-danger");
          }
        };
        reader.readAsText(response);
      }, error => {
        this.toggleToast("Lỗi tải file .", "bg-danger");
      });
      this.resetFileInput('unlock');
    }
  }


  resetFileInput(type: string) {
    if (type == 'lock') {
      const fileInput = document.getElementById("formFileImport") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      this.fileImportLock = null;
    } else {
      const fileInput = document.getElementById("formFileImportUnlock") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      this.fileImportUnlock = null;
    }
  }

  ewo_ATD_uploadImgProfile() {

  }
  saveFile(data: Blob, extension: string, fileName: string) {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const currentTime = new Date();
    fileName =
      'download_' +
      fileName +
      '_' +
      currentTime.getFullYear().toString() +
      (currentTime.getMonth() + 1) +
      currentTime.getDate() +
      currentTime
        .toLocaleTimeString()
        .replace(/[ ]|[,]|[:]/g, '')
        .trim()
    // +      title;
    a.download = `${fileName}${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  get_color_font_shopcode_revision() {
    this._service.get_color_font_shopcode_revision(44).subscribe((data: any) => {
      // console.log("get_color_font_shopcode_revision", data.data[0])
      this.color_font_shopcode = JSON.parse(data.data[0].group_class).color_font.hex
      this.list_shop = JSON.parse(data.data[0].config)
      console.log(this.color_font_shopcode)
      // console.log(this.list_shop)
    })
  }

    onChangSwitch(valuePre: string,dataitem:any,type:string,property:string) {//'location','checkin')"
    console.log('dataitem changed to:', dataitem);
    return
    console.log('valuePre', valuePre);
  }
  color_font_shopcode: any
  list_shop: any

}


