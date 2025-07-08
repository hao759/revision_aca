import { Component, ElementRef, numberAttribute, ViewChild } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, ImgDirective, } from '@coreui/angular-pro';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from '@coreui/angular-pro'
import { DetectService } from './detect.service';
@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrl: './detect.component.scss',
  imports: [ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, ImgDirective, FormsModule, CommonModule, ToastModule]
})
export class DetectComponent {
  title = 'DetectImg';
  uploadedFiles: any[] = [];
  loading: any = false;
  dem!: any;
  products!: any;
  constructor(
    // private messageService: MessageService,
    private service: DetectService,
    private router: Router,
    private el: ElementRef,
  ) { }
  items?: any;
  productss!: any[];
  home: any;

  result: any[] = [];
  qty_image: any;
  selectProjected: any
  projectList!: any
  preloading: any
  // drop!: any
  selected_projectfull: any
  productList: any = [[], [], [], [], [], [], []]
  ngOnInit() {
    this.items = [{ label: ' MASTER' }, { label: 'Detect' }];

    this.home = { icon: 'pi pi-home', routerLink: '/detect' };

    this.projectList = [
      { name: 'UMER PROMOTION Demo', code: 6, idProject: 30, promotion_id: 1, group_code: '' },
      { name: 'KEN Demo', code: 2, idProject: 34, promotion_id: 1, group_code: '' },
      { name: 'UMER Demo', code: 1, idProject: 30, promotion_id: 1, group_code: '' },
      { name: 'PEPSI ALL', code: 0, idProject: 31, promotion_id: 2, group_code: '' },
      { name: 'PEPSI Demo', code: 3, idProject: 31, promotion_id: 1, group_code: '' },
      { name: 'OTHER Demo', code: 4, idProject: 99, promotion_id: 1, group_code: '' },
    ];
    this.selected_project = this.projectList[0].code
  }
  @ViewChild('fileUploader') fileUploader: any;
  clearFiles(fileUploader: any) {
    fileUploader.clear();
  }

  getProjectSelectd(code: number) {
    return this.projectList.filter((item: any) =>
      item.code == code
    );
  }

  async onUpload(event: any) {
    // console.log("(this.selected_project", this.selected_project)
    if (event.srcElement.files.length < 1)
      return;
    this.selected_projectfull = this.getProjectSelectd(this.selected_project)[0]
    console.log("this.selected_projectfull", this.selected_projectfull)
    if (!this.productList[this.selected_project][0]) {
      // console.log("api")
      await this.get_lable_project(this.selected_projectfull.idProject, this.selected_projectfull.group_code)
    }
    this.qty_image = event.srcElement.files.length;
    this.dem = event.srcElement.files.length;
    this.loading = true;
    this.result = [];
    this.preloading = true
    for (let i = 0; i < event.srcElement.files.length; i++) {
      console.log("event.srcElement", event.srcElement.files[i]);
      this.callAPI(event.srcElement.files[i]);
    }

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


  async get_lable_project(project_id: any, group_code: any) {
    this.subscription = this.service.Get_Dynamic_detect_label(project_id, group_code).subscribe(//this.selected_projectfull.idProject
      (data: any) => {
        console.log("data Get_Dynamic_detect_label", data)
        // this.result = data
        this.productList[this.selected_project] = data.data
      },
      (error: any) => {
        // console.log(error);
        this.toggleToast("Có lỗi xảy ra, vui lòng thử lại", "bg-danger");
      }
    );
  }

  copyToClipboard(text: any) {
    navigator.clipboard.writeText(text).then(() => {
      this.toggleToast("Copy thành công" + text, "bg-success");
    }).catch(err => {
      this.toggleToast("Copy lỗi " + text, "bg-danger");
    });
  }

  callAPI(file: any) {
    this.subscription = this.service.uploadImage(file, this.selected_projectfull.idProject, this.selected_projectfull.promotion_id).subscribe(
      (data: any) => {
        var qty_product = this.handleProductsList(data.products);
        this.result.push({
          product: data.products,
          img:
            'https://brand-detect4.acacy.vn/img_pred/' +
            data.img_out,
          qty_product,
          nameFile: file.name,
          qty_productapi: data.brands.length !== 0 ? data.brands.length : 0
        });
        this.preloading = false

      },
      (error: any) => {
        console.log(error);
        this.preloading = false
        this.toggleToast("Có lỗi xảy ra, vui lòng thử lại", "bg-danger");
      }
    );
  }

  selected_project: any

  // checkApicon() {
  //     this.preloading = false
  //     this.dem--;
  //     if (this.dem == 0) {
  //         this.loading = false;
  //         this.drop.classList.remove('hide1');
  //         if (this.fileUploader !== undefined)
  //             this.clearFiles(this.fileUploader);
  //     }
  // }
  urlgallery: any;
  addImageZoom(img: any) {
    const listphoto = [{
      id: 1,
      src: img,
      title: " ",
      image_time: "item.image_time",
      _index: 1,
    }]

    const changeindex = 1;
    localStorage.setItem('listphoto', JSON.stringify(listphoto));
    localStorage.setItem('changeindex', JSON.stringify(changeindex));

    this.urlgallery = 'assets/ZoomImage/tool.html';
    document.open(
      <string>this.urlgallery,
      'image_default',
      'height=700,width=900,top=100,left= 539.647'
    );
  }

  onDoubleClick(e: any) {
    if (localStorage.getItem("detailDetect"))
      localStorage.removeItem("detailDetect");
    this.addImageZoom(e.srcElement.currentSrc)
  }


  handleProductsList(listProduct: any[]) {
    var qty_product = 0;
    listProduct.forEach((dataapi: any) => {
      for (let data of this.productList[this.selected_project])
        if (dataapi.product_name == data.SkuLabel) {
          // dataapi.product_name = data.product_name;
          qty_product += dataapi.qty;
          dataapi.id = data.id;
          return;
        }
    });

    this.handleColor(listProduct)
    return qty_product;
  }

  handleColor(listProduct: any[]) {
    listProduct.forEach((item: any, i: number) => {
      // if (!item.bgColor)
      item.bgColor = this.list_bgColor[Math.floor(Math.random() * this.length_list_bgColor)]
    })
    listProduct.sort((a, b) => a.id - b.id);
  }


  list_bgColor = [
    "rgb(78, 128, 127)", "rgb(255, 76, 76)", "rgb(39, 77, 96)", "rgb(94, 121, 202)",
    "rgb(165, 76, 202)", "rgb(188, 165, 72)", "rgb(255, 179, 50)", "rgb(133, 58, 0)",
    "rgb(236, 104, 104)", "rgb(128, 185, 128)", "rgb(0, 188, 178)", "rgb(76, 140, 174)",
    "rgb(200, 120, 120)", "rgb(113, 161, 210)", "rgb(255, 128, 191)", "rgb(163, 64, 84)",
    "rgb(200, 159, 128)", "rgb(94, 159, 107)", "rgb(100, 97, 148)", "rgb(0, 115, 103)",
    "rgb(84, 140, 110)", "rgb(105, 59, 255)", "rgb(91, 82, 129)", "rgb(255, 101, 174)",
    "rgb(10, 112, 117)", "rgb(94, 145, 156)", "rgb(28, 143, 202)", "rgb(27, 25, 49)",
    "rgb(82, 44, 93)", "rgb(255, 130, 139)", "rgb(3, 18, 47)", "rgb(255, 128, 153)",
    "rgb(12, 150, 156)", "rgb(142, 170, 224)", "rgb(0, 159, 0)", "rgb(255, 128, 128)",
    "rgb(241, 145, 109)", "rgb(68, 23, 78)", "rgb(102, 34, 73)",
    "rgb(24, 26, 47)", "rgb(36, 46, 73)", "rgb(180, 129, 45)", "rgb(84, 22, 43)",
    "rgb(13, 30, 76)", "rgb(95, 126, 162)", "rgb(38, 65, 94)", "rgb(11, 27, 50)",
    "rgb(3, 47, 48)", "rgb(107, 163, 190)", "rgb(25, 48, 92)", "rgb(65, 56, 97)",
    "rgb(174, 125, 172)", "rgb(21, 0, 22)", "rgb(41, 16, 74)", "rgb(132, 81, 98)"
  ]

  length_list_bgColor: number = this.list_bgColor.length


  subscription!: Subscription;
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}











































