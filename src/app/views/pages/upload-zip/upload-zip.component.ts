import { Component, ElementRef, numberAttribute, ViewChild } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, ImgDirective, } from '@coreui/angular-pro';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from '@coreui/angular-pro'
import { DetectService } from '../detect/detect.service';
@Component({
  selector: 'app-upload-zip',
  imports: [ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, ImgDirective, FormsModule, CommonModule, ToastModule],
  templateUrl: './upload-zip.component.html',
  styleUrl: './upload-zip.component.scss'
})
export class UploadZipComponent {
  constructor(
    // private messageService: MessageService,
    private service: DetectService,
    private router: Router,
    private el: ElementRef,
  ) { }
  countZip!: any
  projectList!: any
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.projectList = [
      { name: 'UMER', project_id: 30, promotion_id: 1 },
      { name: 'Ken', project_id: 34, promotion_id: 1 },
      { name: 'Pepsi', project_id: 31, promotion_id: 1 },
    ]
    this.selected_project = this.projectList[0].project_id
  }
  preloading: any
  selected_project: any
  result: any[] = []

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
    }, 4000);
  }

  onUpload(event: any) {
    if (event.srcElement.files.length < 1)
      return
    this.countZip = event.srcElement.files.length
    console.log("event", event)
    // this.qty_image = event.srcElement.files.length;
    // this.dem = event.srcElement.files.length;
    // this.loading = true;
    // this.result = [];
    this.preloading = true
    for (let i = 0; i < event.srcElement.files.length; i++) {
      console.log("event.srcElement", event.srcElement.files[i]);
      this.callAPI(event.srcElement.files[i]);
    }

  }

  callAPI(file: any) {
    this.subscription = this.service.upload_zip(file, this.selected_project).subscribe(
      (data: any) => {
        // var qty_product = this.handleProductsList(data.products);
        if (data.message == 0)
          this.toggleToast(this.countZip - 1 + ' Tồn tại file: ' + data.fileName, "bg-danger");
        else
          this.toggleToast(this.countZip - 1 + ' Tải thành công: ' + data.fileName, "bg-success");

        this.countZip--
        if (this.countZip == 0)
          this.preloading = false
      },
      (error: any) => {
        console.log(error);
        this.countZip--
        if (this.countZip == 0)
          this.preloading = false
        this.toggleToast(error, "bg-danger");
      }
    );
  }

  Filter() {
    this.subscription = this.service.getall_upload_zip(this.selected_project).subscribe(
      (data: any) => {
        console.log("data", data)
        // var data = 
        // let rs = this.handleList(data);
        // console.log("rs", rs)
        this.result = data
      },
      (error: any) => {
        console.log(error);
        // this.preloading = false
        this.toggleToast("Có lỗi xảy ra, vui lòng thử lại", "bg-danger");
      }
    );
  }

  handleList(listresult: any[]) {
    return listresult.map((item: any) => {
      item.created_date.replace("T", " ");
      console.log("created_date", item.created_date)
    })

  }




  subscription!: Subscription;
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
