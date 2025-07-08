import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { EmployeeAbbottService } from './employee-abbott.service';
import { Helper } from '../../../Core/_helper';
import { saveAs } from 'file-saver';
import { FormsModule } from '@angular/forms'; 
import { EnumStatus } from '../../../Core/_enum';
import { AlignDirective, BadgeComponent, BadgeModule, BorderDirective, ButtonCloseDirective, ButtonDirective, CardBodyComponent, CardComponent, CarouselModule, ColComponent, CollapseDirective, InputGroupComponent, InputGroupTextDirective, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, RowComponent, SmartPaginationModule, SmartTableComponent, SmartTableModule, TableActiveDirective, TableColorDirective, TemplateIdDirective, TextColorDirective, ThemeDirective, SpinnerModule } from '@coreui/angular-pro';
import { TableModule,
  ButtonModule,
  MultiSelectModule
  ,ModalModule,
  DropdownModule
} from '@coreui/angular-pro';
import { PaginationModule } from '@coreui/angular-pro';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilFilter,cilArrowThickBottom,cilArrowThickFromBottom,cilColorBorder, cilXCircle  } from '@coreui/icons';

@Component({
  selector: 'app-employee-abbott',
  imports: [
    SmartTableModule,
    SmartPaginationModule,
    SmartTableModule,
    BadgeModule,
    CommonModule,
    CarouselModule,
    FormsModule,
    TableModule,
    PaginationModule,
    ButtonModule,
    IconModule,
    MultiSelectModule,
    ModalModule,
    SpinnerModule,
    DropdownModule
  ],
  providers:[IconSetService],
  templateUrl: './employee-abbott.component.html',
  styleUrl: './employee-abbott.component.scss'
})
export class EmployeeAbbottComponent {
  constructor(private employeeATD: EmployeeAbbottService,
    public iconSet: IconSetService
    ) {
      iconSet.icons = { cilFilter,cilArrowThickBottom,cilArrowThickFromBottom,cilColorBorder,cilXCircle  };
  }
  employeesOption: any = [];
  employeeProfiles:any = [];
  employee_code: any = '';
  projectIds: any = [{
    project_id: 55,
    project_name: 'attendance AI',
    selected: false,
  },{
     project_id: 44,
      project_name: 'Abbott',
      selected: true,
  }];
  selectedProject: any = null;
  projectIdRq: number = 44; //gan du an Abbott vao khi load trang
  isUpdateImg: boolean = false;
  isUpdateImg_2: boolean = false;

  newImageUrl_2: any ='';
  qc_id: number = 9997;//Abbott 9997

  ngOnInit() {
    console.log('call api get List employee');
    this.loadEmployee(1);
    console.log('Project_Ids:')
    console.log(this.projectIds);
    console.log(this.projectIdRq)
  }

  selectProjectId(){
    //multi select chỉ đc chọn 1
    console.log(this.selectedProject);
    this.projectIdRq = this.selectedProject;
  }
  isLoading: boolean = false;


  //chỗ này em chưa tối ưu code
  filterEmployee() {
     this.loadEmployee(1);
     if(this.employee_code == '') {
      this.currentPage = 1;
     }
    // console.log('Data Filter Employee');
    // console.log(this.projectIdRq);
    // if(this.projectIdRq !== undefined && this.projectIdRq !== null) {
    //   console.log('Co chon project_id trên select');
    //   this.isLoading = true;

    //   console.log(this.projectIdRq);
    //   this.employeeATD.GetListEmployeePPT(this.projectIdRq,this.pageNumberRq,this.rowPerPageRq,this.employee_code).subscribe((res: any)=> {
    //     if(res.result = EnumStatus.ok) {
    //       this.isLoading = false;
    //       this.employeeProfiles = res?.data;
    //       console.log(res?.data);
    //       if(res?.data.length == 0) {
    //         this.totalRecords = 0;
    //       }
    //       this.totalRecords = res.data[0].TotalRows;
    //       this.totalPages = this.calculateTotalPages(this.totalRecords, this.rows);
    //       console.log(this.employeeProfiles);
    //     }
    //   },(err) => {
    //     this.isLoading = false;
    //     console.log(err);
    //   })
    // }
    // else {
    //   this.isLoading = true;
    //   console.log('Ko chon project_id trên select')
    //   //ko chọn projectId => lấy projectId của dự án hiện tại bằng Helper
    //   this.employeeATD.GetListEmployeePPT(Helper.ProjectID(),this.pageNumberRq,this.rowPerPageRq,this.employee_code).subscribe((res: any)=> {
    //     if(res.result = EnumStatus.ok) {
    //       this.isLoading = false;
    //       this.employeeProfiles = res?.data;
    //       console.log(res?.data)
    //       this.totalRecords = res.data[0].TotalRows;
    //       this.totalPages = this.calculateTotalPages(this.totalRecords, this.rows);
    //       console.log(this.employeeProfiles);
    //     }
    //   },(err) => {
    //     this.isLoading = false;
    //     console.log(err);
    //   })
    // }
  }
  loadingImg: boolean = true;

  currentPage: number = 1;
  rowPerPageRq : number = 0;
  pageNumberRq: number = 0;;
  totalRecords: number = 0;
  rows: number = 20;

  //tính total pages
  calculateTotalPages(totalRecords: number, itemsPerPage: number = 20): number {
    return Math.ceil(totalRecords / itemsPerPage);
  }
  replaceWithDefaultImage(event: any) {
    event.target.src = "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-avatar-vector-isolated-on-white-background-png-image_4979074.jpg";
    this.loadingImg = false; 
  }

  onImageLoad() {
    console.log('Load anh thanh cong')
    this.loadingImg = false; // Khi ảnh load xong, ẩn dòng chữ
  }

  onPageChange(event: any) {
    console.log(event);
    this.currentPage = event;
    console.log('Page hien tai:', this.currentPage)
    this.loadEmployee(this.currentPage);
  }

  totalPages: any = 0;
  loadEmployee(pageNumber: number) {
    this.currentPage = pageNumber;
    this.isLoading = true;
    this.rowPerPageRq = this.rows;
    this.pageNumberRq = pageNumber;
    console.log('Data Filter Employee');
    console.log(this.projectIdRq);
    if(this.projectIdRq !== undefined && this.projectIdRq !== null) {
      console.log('Co chon project_id trên select');
      this.isLoading = true;

      console.log(this.projectIdRq);
      this.employeeATD.GetListEmployeeAbbott(this.projectIdRq,this.qc_id,this.pageNumberRq,this.rowPerPageRq,this.employee_code).subscribe((res: any)=> {
        if(res.result = EnumStatus.ok) {
          this.isLoading = false;
          this.employeeProfiles = res?.data;
          console.log(res?.data);
          if(res?.data.length == 0) {
            this.totalRecords = 0;
          }
          this.totalRecords = res.data[0].TotalRows;
          this.totalPages = this.calculateTotalPages(this.totalRecords, this.rows);
          console.log(this.employeeProfiles);
        }
      },(err) => {
        this.isLoading = false;
        console.log(err);
      })
    }
    // else {
    //   this.isLoading = true;
    //   console.log('Ko chon project_id trên select')
    //   this.employeeATD.GetListEmployeeAbbott(this.projectIds[1].project_id,this.qc_id,this.pageNumberRq,this.rowPerPageRq,this.employee_code).subscribe((res: any)=> {
    //     if(res.result = EnumStatus.ok) {
    //       this.isLoading = false;
    //       this.employeeProfiles = res?.data;
    //       console.log(res?.data)
    //       this.totalRecords = res.data[0].TotalRows;
    //       this.totalPages = this.calculateTotalPages(this.totalRecords, this.rows);
    //       console.log(this.employeeProfiles);
    //     }
    //   },(err: any) => {
    //     this.isLoading = false;
    //     console.log(err);
    //   })
    // }
  }

  // exportEmployeesPPT(project_id_export: number,project: any){
  //   this.isLoading = true;
  //   console.log('Export PPT');
  //   console.log('Project Id export la: ', project_id_export);
  //     this.employeeATD.exportEmployeePPT(project_id_export).subscribe((response: any) => {
  //       this.isLoading = false;
  //       const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
  //       saveAs(blob, `EmployeesPPT- ${project.project_name} - ${project_id_export}.xlsx`);
  //     },error => {
  //       this.isLoading = false;
  //       console.log('Error downloading file', error);
  //     })
  // }

  resetInput() {
    this.employee_code = '';
    this.loadEmployee(1);
  }

  exportEmployeesAbbott(){
    this.isLoading = true;
    console.log('Export Abbott');
      this.employeeATD.exportEmployee(44,this.qc_id).subscribe((response: any) => {
        this.isLoading = false;
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
        saveAs(blob, `EmployeesAbbott-44.xlsx`);
      },error => {
        this.isLoading = false;
        console.log('Error downloading file', error);
      })
  }

  showImportDialog: boolean = false;
  showImportTemplate() {
    this.showImportDialog = true;
  }

  importFileEmployeePPT() {
    //gọi service call api import
    console.log('Import File Employee');

  }

    dataColumnError: any = [];
    dataRowError: any;

    //clear Data Import
    clearDataImport(){
      this.dataColumnError = undefined;
      this.dataRowError = undefined;
    }

  file!: any;
  // On file Select
  onChange(event: any) {
      this.clearDataImport();
      this.file = event.target.files[0];
      console.log('Khong co file: ');
      console.log(this.file);
  }

  updateImage(typeImg: number) {
    console.log('updatImage');
    if(typeImg == 1) {
      console.log('Call api update Image Emloyee');
      console.log('Gui anh len server...')
      console.log(this.newImageUrl);
    }
    else {
      console.log('Call api Update Image Face 2');
      console.log('Gui anh len server...')
      console.log(this.newImageUrl2);
    }
  }
  oldEmpCode: any = '';
  oldEmpName: any = '';
  oldImgUrl: any = '';
  oldImgUrl_2: any = '';
  showUpdateImage(item: any,type: number) {
    console.log(item);
    this.oldEmpCode = item.employee_code;
    this.oldEmpName = item.employee_name;
    this.oldImgUrl = item.image;
    this.oldImgUrl_2 = item.image_face_2;
    if(type == 1) {
      this.isUpdateImg = true;
    }
    else{
      this.isUpdateImg_2 = true;

    }
    console.log(this.isUpdateImg);
  }

  @ViewChild('myInputFile') 
  myInputFile: any;
  clearFileInput() {
    this.myInputFile.nativeElement.value = null;
    this.file = undefined;
  }

newImageUrl: string | ArrayBuffer | null = null;
previewImage: string | ArrayBuffer | null = null;
newImageUrl2: string | ArrayBuffer | null = null;
previewImage2: string | ArrayBuffer | null = null;

onFileSelected(event: Event,type:number) {
  const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      console.log('Anh moi la:', reader.result);
      if(type == 1) {
      reader.onload = () => {
        this.previewImage = reader.result; // Hiển thị ảnh xem trước
        this.newImageUrl = reader.result; // Lưu URL ảnh (có thể gửi lên server)
      }; }
      else {
        reader.onload = () => {
          this.previewImage2 = reader.result; // Hiển thị ảnh xem trước
          this.newImageUrl2 = reader.result; // Lưu URL ảnh (có thể gửi lên server)
        };
      }
      reader.readAsDataURL(file);
    }
}

resetImgUpdate() {
  this.isUpdateImg = false;
  this.isUpdateImg_2 = false;
  this.newImageUrl = null;
  this.previewImage = null;
  this.newImageUrl2 = null;
  this.previewImage2 = null;
}

//   saveFile(response: any, title: any = '.xlsx', file_name: string = '') {
//     const currentTime = new Date();
//     const filename =
//         'download_' +
//         file_name +
//         '_' +
//         currentTime.getFullYear().toString() +
//         (currentTime.getMonth() + 1) +
//         currentTime.getDate() +
//         currentTime
//             .toLocaleTimeString()
//             .replace(/[ ]|[,]|[:]/g, '')
//             .trim() +
//         title;

//     saveAs(response, filename);
// }
}
