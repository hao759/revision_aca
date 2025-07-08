import { Component } from '@angular/core';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilArrowCircleTop, cilCheckCircle, cilDataTransferDown, cilFace, cilLevelUp, cilLockLocked, cilLockUnlocked, cilPaperclip, cilSave, cilSearch, cilSend, cilSettings, cilWindowMinimize } from '@coreui/icons';
import { Helper } from '../../../Core/_helper';
import { Pf } from '../../../helper/pf';
import { saveAs } from "file-saver";
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import EXIF from 'exif-js';
// import * as exifr from 'exifr';
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
  ToastModule,
} from '@coreui/angular-pro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceQCService } from './attendance-result-qc-services';
import { EnumStatus } from '../../../Core/_enum';

@Component({
  selector: 'app-attendance-result-qc',
  imports: [
    IconModule,
    FormsModule,
    RowComponent,
    ColComponent,
    InputGroupComponent,
    LoadingBarHttpClientModule,
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
  templateUrl: './attendance-result-qc.component.html',
  styleUrl: './attendance-result-qc.component.scss'
})
export class AttendanceResultQcComponent {
  constructor(
    private _service: AttendanceQCService,
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilLockLocked, cilLockUnlocked, cilFace, cilSave, cilSearch, cilDataTransferDown, cilWindowMinimize, cilLevelUp, cilSend, cilSettings, cilPaperclip, cilArrowCircleTop, cilCheckCircle };
  }

  user_id = 0;
  isSup = false;
  ngOnInit() {
    this.user_id = Helper.loadUser().employee_id;
    this.isSup = (Helper.loadUser().employee_type_id == 3)
    this.fromDate = new Date();
    this.toDate = new Date();

  }

  listFailAttendance = [
    { key: 'mask', label: 'Đeo khẩu trang' },
    { key: 'noFace', label: 'Không hiện diện khuôn mặt trong ảnh' },
    { key: 'notFullFace', label: 'Không chụp full mặt' },
    { key: 'otherDevice', label: 'Chụp qua thiết bị khác' },
    { key: 'sharedImage', label: 'Dùng chung hình' },
    { key: 'notMatchProfile', label: 'Không giống hình profile' }
  ];

  formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  showImportFile = false;
  showImportFileLock = false;
  pageNumber = 1;
  rowPerPageEmp = 20;
  employee_code = '';

  attendanceStatus: { [key: number]: string } = {};
  selectedLabelsFail: { [key: number]: string[] } = {};
  selectedCheckFail: { [key: number]: string[] } = {};

  handleCheckboxChange(index: number, label: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    // Đảm bảo mảng tồn tại, nếu đã có sẵn dữ liệu thì giữ nguyên
    if (!this.selectedCheckFail[index]) {
      this.selectedCheckFail[index] = this.listAttendance[index]?.fail_reason?.split(', ') || [];
    }

    if (isChecked) {
      // Chỉ thêm nếu chưa có trong danh sách
      if (!this.selectedCheckFail[index].includes(label)) {
        this.selectedCheckFail[index] = [...this.selectedCheckFail[index], label];
      }
    } else {
      // Bỏ lý do đã bỏ chọn
      this.selectedCheckFail[index] = this.selectedCheckFail[index].filter(l => l !== label);
    }
  }

  project_id = 55 //ppt;
  result: any;
  final_result: { [key: number]: string } = {};
  fail_reason = '';
  type = '';
  time: Date = new Date();
  work_date: number = 0;
  updateCheckAttendance(i: any) {
    this.fail_reason = '';
    if (this.final_result[i] == 'false') {
      this.fail_reason = (this.selectedCheckFail[i] || []).filter(c => c.trim() !== "").join(', ');
      if (!this.fail_reason) {
        this.toggleToast("Hãy chọn lý do không đạt", "bg-danger");
        return;
      }
    }

    if (this.listAttendance[i].FaceVerifyOk == "0" && this.final_result[i] == 'true') {
      this.toggleToast("Sai logic! Không thể update", "bg-danger");
      return;
    }

    this.att_code = this.listAttendance[i].att_code;
    this.type = this.listAttendance[i].type;
    this.time = this.listAttendance[i].time;
    this.work_date = this.listAttendance[i].work_date;

    this._service.ReCheckAttendanceAI(
      this.user_id,
      Helper.ProjectID(),
      this.att_code,
      this.fail_reason,
      this.final_result[i],
      this.type,
      this.time,
      this.work_date,
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        this.listAttendance[i].final_result = this.final_result[i];
        this.listAttendance[i].fail_reason = this.fail_reason;
        this.toggleToast("Cập nhật thành công", "bg-success");
      } else {
        this.toast.message_toast = "Cập nhật thất bại";
      }
    })
  }

  att_code = '';

  co_result = '';
  co_final_result: { [key: number]: string } = {};


  expandedRows: { [key: number]: boolean } = {};
  reasonCheckFail: { [key: number]: string[] } = {};
  expandedRowIndex: any;
  toggleRow(index: number) {
    this.expandedRows[index] = !this.expandedRows[index];

    if (this.listAttendance[index]) {
      this.reasonCheckFail[index] = this.listAttendance[index].fail_reason
        ? this.listAttendance[index].fail_reason.split(',').map((item: any) => item.trim())
        : [];
    }
    this.final_result[index] = this.listAttendance[index]?.final_result || '';
    this.commentText[index] = this.listAttendance[index]?.comment || '';
  }

  listAttendance: any;
  rowPerPage = 20;
  totalRow = 0;
  pagination = 1;

  fromDate: any;
  toDate: any;
  shop_code = '';
  isLoading: boolean = false;
  statusQC = -1;
  final_result_filter: any;
  kqqc = '-1';
  kqai = '-1';
  typeFilter = '-1'
  qc_lock = -1;
  emp_code = "";
  id_BC = "";
  resetKQQC() {
    this.type = '';
    this.result = '';
    this.final_result_filter = '';
  }

  filter(page: number) {
    this.resetKQQC();
    this.statusQC = -1;
    // if (this.kqqc) {
    //   const [filterType, filter, filterResult] = this.kqqc.split('-');
    //   this.type = filterType;

    //   if (filterResult === 'null') {
    //     this.statusQC = filter === 'ai' ? 0 : 1;
    //   } else {
    //     this.statusQC = -1;
    //     if (filter === 'ai') {
    //       this.result = filterResult;
    //     } else {
    //       this.final_result_filter = filterResult;
    //     }
    //   }
    // }

    this.emp_code ? this.att_code = this.emp_code : this.att_code = '';

    if (!this.id_BC) {
      this.id_BC = ""
    }

    this.currentPage = page;
    this.expandedRows = {};
    this.pageNumber = page;

    this.isLoading = true;
    this._service.FilterAttendanceAI(
      this.user_id,
      this.project_id,
      this.att_code,
      this.shop_code,
      Pf.DateToInt(this.fromDate!),
      Pf.DateToInt(this.toDate!),
      this.kqai,
      this.kqqc,
      // this.result,
      // this.final_result_filter,
      this.rowPerPage,
      this.pageNumber,
      this.qc_lock,
      this.typeFilter,
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


  // export() {
  //   this._service.ExportAttendanceAI(
  //     this.project_id,
  //     this.user_id,
  //     Pf.DateToInt(this.fromDate!),
  //     Pf.DateToInt(this.toDate!),
  //     this.type,
  //     this.att_code,
  //     this.shop_code,
  //     this.statusQC,
  //     this.result,
  //     this.final_result_filter,
  //     this.qc_lock,
  //     this.id_BC
  //   )
  // }

  export() {
    this.isLoading = true;

    this._service.ExportAttendanceAI(
      this.project_id,
      this.user_id,
      Pf.DateToInt(this.fromDate!),
      Pf.DateToInt(this.toDate!),
      this.typeFilter,
      this.att_code,
      this.shop_code,
      this.kqai,
      this.kqqc,
      // this.result,
      // this.final_result_filter,
      this.qc_lock,
      this.id_BC
    ).subscribe({
      next: (response) => {
        this.saveFile(response, '.xlsx', 'atd_result');
      },
      error: (error) => {
        console.error('Export failed:', error);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
  saveFile(response: any, type: any = '.xlsx', file_name: string = '') {
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


  fileImport: any

  import() {
    if (!this.fileImport) {
      this.toggleToast("Không có file import nào!", "bg-danger");
      return;
    }
    const formDataUpload = new FormData();
    formDataUpload.append('files', this.fileImport);
    this.isLoading = true;
    this._service
      .ATD_ImportCiCo(
        formDataUpload,
        this.user_id,
        Helper.ProjectID()
      )
      .subscribe((data: any) => {
        if (data.result === "OK") {
          this.resetFileInput();
          this.isLoading = false;
          this.toggleToast("Import thành công", "bg-success");
        } else {
          this.isLoading = false;
          this.toggleToast(data.message, "bg-danger");
        }
      })
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileImport = file;
    }
  }

  resetFileInput() {
    const fileInput = document.getElementById("formFileImport") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
    this.fileImport = null;
  }

  getTemplate() {
    this._service.DetectAI_getTemplateCiCo(
      this.project_id,
      this.user_id
    )
  }

  confirmLockVisible = false;
  lockAtdItem(item: any) {
    this.confirmLockVisible = false;
    if (item.qc_lock !== 1 && !item.final_result) {
      this.toggleToast("Không thể khoá khi chưa QC", "bg-danger");
      return
    }

    this._service.LockAttendanceAI(
      this.user_id,
      this.project_id,
      item.att_code,
      item.work_date,
      item.type,
      item.time,
      item.id_BC
    )
      .subscribe((data: any) => {
        if (data.result == 'OK') {
          item.qc_lock = !item.qc_lock;
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

    item.qc_lock === 1 ? this.itemLock = 1 : this.itemLock = 0;

    this.selectedItemLock = item;
    this.confirmLockVisible = true;
  }
  confirmActionLock() {
    this.lockAtdItem(this.selectedItemLock);
  }

  currentPage = 1;
  onPageChange($event: any) {
    this.currentPage = $event;
    this.expandedRows = {};
    this.filter($event);
  }

  gotoPage: number = 1;
  jumpToPage() {
    this.currentPage = this.gotoPage
    this.filter(this.currentPage);
  }
  isChecked(i: number, label: string): boolean {
    return this.reasonCheckFail[i]?.includes(label) ?? false;
  }

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
  updateSwitchATDAI(item: any, attribute: string) {
    const type = item.type;
    let verify = 0;
    verify = item.FaceVerifyOk;

    this._service.SwitchAttendanceDetectAI(
      this.user_id,
      this.project_id,
      item.att_code,
      type,
      attribute,
      verify,
      item.work_date,
      item.time
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        this.toggleToast("Cập nhật thành công", "bg-success");
      } else {
        this.toggleToast("Cập nhật thất bại", "bg-danger");
      }
    });
  }

  commentText: { [key: number]: string } = {};
  submitComment(item: any, index: number) {
    this._service.detectAi_commentNoteCiCo(
      item.type,
      item.att_code,
      item.time,
      item.work_date,
      this.project_id,
      this.user_id,
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

  itemChangeImage: any;
  visableModalChangeImage = false;
  confirmChangeImage(item: any, i: any) {
    // console.log("confirmChangeImage", item)
    this.visableModalChangeImage = true;
    this.itemChangeImage = item;
    this.itemChangeImage.i = i;
  };

  visableModalUpdateImage = false;
  fileUpdateImg: any;
  confirmUpdateImage(item: any, i: any) {
    this.visableModalUpdateImage = true;
    this.itemChangeImage = item;
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
        this.itemChangeImage.id,
        this.itemChangeImage.att_code,
        formData
      )
        .subscribe((data: any) => {
          const res = data.data
          this.resetUploadImg()
          if (data.result == EnumStatus.ok) {
            this.toggleToast("Cập nhật thành công", "bg-success");
            this.itemChangeImage.image = res[0][""];
          } else {
            this.toggleToast("Cập nhật thất bại", "bg-danger");
          }
          this.visableModalUpdateImage = false;
        })
    } else {
      this.toggleToast("Không có ảnh để cập nhật", "bg-danger");
    }
  }

  resetUploadImg() {
    const fileInput = document.getElementById("uploadImage") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
    this.fileImport = null;
  }

  photo_link = '';
  makeProfile() {
    const item = this.itemChangeImage;
    if (!item.photo) {
      this.toggleToast("Không có ảnh để cập nhật", "bg-danger");
      return;
    }
    this.photo_link = item.photo;
    this._service.detectAi_updateImgProfileCiCo(
      this.user_id,
      this.project_id,
      this.photo_link,
      item.att_code,
      item.emp_name,
      item.id_BC,
    ).subscribe((data: any) => {
      if (data.result === "OK") {
        this.photo_link = '';
        item.image = item.photo;
        this.toggleToast("Cập nhật thành công", "bg-success");
        this.visableModalChangeImage = false
      } else {
        this.toast.message_toast = "Cập nhật ảnh thất bại";
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

  handleScrollOnTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  loadding_detect = false;
  handleDetectAI(i: any, item: any) {
    console.log(item);
    const img2 = item.image //Hình profile
    let img1 = item.photo;
    this.loadding_detect = true;

    this._service.recheck_ResultAICiCo(
      img1,
      img2,
      this.project_id,
      this.user_id,
      item.id,
      "",
    ).subscribe((data: any) => {
      if (data.result === EnumStatus.ok) {
        const res = data.data
        this.loadding_detect = false;
        this.listAttendance[i].result = res.faceVerifyAiOk == 1 ? "true" : (res.faceVerifyAiOk == 0 ? "false" : "")
        item.FaceVerifyAiOk = res.faceVerifyAiOk
        this.toggleToast("Detect thành công", "bg-success");
      }
    })
  }



















  // async checkImage() {
  //   const imageUrl = 'https://brand-detect4.acacy.vn/face_emp/ppt/cico/20250402/checkout20250401212614343.png';

  //   // Bước 1: Tải ảnh và đọc orientation
  //   const response = await fetch(imageUrl);
  //   const blob = await response.blob();
  //   const orientation = await exifr.orientation(blob);
  //   console.log('Orientation:', orientation);

  //   // Bước 2: Tạo HTMLImageElement để vẽ lại
  //   const img = new Image();
  //   img.crossOrigin = 'anonymous';
  //   img.onload = () => {
  //     const canvas = document.createElement('canvas');
  //     const ctx = canvas.getContext('2d')!;
  //     let width = img.width;
  //     let height = img.height;

  //     // Nếu orientation = 6 (xoay phải 90 độ)
  //     if (orientation === 6) {
  //       canvas.width = height;
  //       canvas.height = width;
  //       ctx.translate(canvas.width / 2, canvas.height / 2);
  //       ctx.rotate(90 * Math.PI / 180);
  //       ctx.drawImage(img, -width / 2, -height / 2);
  //     } else {
  //       // Không cần xoay
  //       canvas.width = width;
  //       canvas.height = height;
  //       ctx.drawImage(img, 0, 0);
  //     }

  //     // Bước 3: Tải ảnh đã xoay
  //     const link = document.createElement('a');
  //     link.href = canvas.toDataURL('image/jpeg');
  //     link.download = 'image_rotated.jpg';
  //     link.click();
  //   };

  //   img.src = URL.createObjectURL(blob);
  // }


  // async checkImage2() {
  //   const imageUrl = 'https://brand-detect4.acacy.vn/face_emp/ppt/cico/20250402/checkout20250401212614343.png';

  //   const response = await fetch(imageUrl);
  //   const blob = await response.blob();

  //   // Đọc thông tin orientation từ EXIF
  //   const orientation = await exifr.orientation(blob);
  //   console.log('Orientation:', orientation);

  //   const img = new Image();
  //   img.crossOrigin = 'anonymous';
  //   img.onload = () => {
  //     const canvas = document.createElement('canvas');
  //     const ctx = canvas.getContext('2d')!;
  //     const width = img.width;
  //     const height = img.height;

  //     if (orientation === 6 || orientation === 3 || orientation === 8) {
  //       // Cần xoay
  //       if (orientation === 6 || orientation === 8) {
  //         canvas.width = height;
  //         canvas.height = width;
  //       } else {
  //         canvas.width = width;
  //         canvas.height = height;
  //       }

  //       ctx.translate(canvas.width / 2, canvas.height / 2);
  //       let angle = 0;

  //       if (orientation === 6) angle = 90;
  //       if (orientation === 3) angle = 180;
  //       if (orientation === 8) angle = -90;

  //       ctx.rotate(angle * Math.PI / 180);
  //       ctx.drawImage(img, -width / 2, -height / 2);
  //     } else {
  //       // Không cần xoay
  //       canvas.width = width;
  //       canvas.height = height;
  //       ctx.drawImage(img, 0, 0);
  //     }

  //     // Tải ảnh
  //     const link = document.createElement('a');
  //     link.href = canvas.toDataURL('image/jpeg');
  //     link.download = 'image_rotated.jpg';
  //     link.click();
  //     if (!orientation || orientation === 1) {
  //       console.log('Ảnh không cần xoay. Orientation:', orientation);
  //     }
  //   };
  // }


  downloadImage1(imageUrl: any) {
    // const fileName = 'downloaded-image.jpg';
    console.log("imageUrlimageUrl", imageUrl)
    const currentTime = new Date();
    const filename =
      'image_download_' +
      // file_name +
      currentTime.getFullYear().toString() +
      (currentTime.getMonth() + 1) +
      currentTime.getDate() +
      currentTime
        .toLocaleTimeString()
        .replace(/[ ]|[,]|[:]/g, '')
        .trim() + '.' + imageUrl.split('.').pop();;

    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url); // Cleanup
      })
      .catch(error => console.error('Error downloading the image:', error));
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
      this.resetFileInputLock('lock');
    } else if (type == 'unlock') {

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
      this.resetFileInputLock('unlock');
    }
  }
  fileImportLock: any;
  fileImportUnlock: any;
  resetFileInputLock(type: string) {
    if (type == 'lock') {
      const fileInput = document.getElementById("formFileImportLock") as HTMLInputElement;
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

  getTemplateLock(type: string) {
    if (type == 'lock') {
      this._service.getTemplateLock_CiCo(
        this.project_id,
        this.user_id
      )
    } else {
      this._service.getTemplateUnLock_CiCo(
        this.project_id,
        this.user_id
      )
    }
  }

  onFileChangeLock(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      if (type == 'lock') {
        this.fileImportLock = file
      } else {
        this.fileImportUnlock = file
      }
    }
  }

}
