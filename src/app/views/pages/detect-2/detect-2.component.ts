import { Component, ElementRef, numberAttribute, ViewChild } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, ImgDirective, } from '@coreui/angular-pro';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DetectService } from '../detect/detect.service';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from '@coreui/angular-pro'

@Component({
  selector: 'app-detect-2',
  imports: [ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, ImgDirective, FormsModule, CommonModule, ToastModule],
  templateUrl: './detect-2.component.html',
  styleUrl: './detect-2.component.scss'
})
export class Detect2Component {

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
  // responsiveOptions: any;
  result: any[] = [];
  qty_image: any;
  menu_id = 144;

  selectProjected: any
  projectList!: any

  // check_permissions() {
  //   if (JSON.parse(localStorage.getItem('menu') + '') != null) {
  //     const menu = JSON.parse(localStorage.getItem('menu') + '').filter(
  //       (item: any) => item.menu_id == this.menu_id && item.check == 1
  //     );
  //     if (menu.length > 0) {
  //     } else {
  //       this.router.navigate(['/empty']);
  //     }
  //   }
  // }
  preloading: any
  drop!: any
  ngOnInit() {
    // this.check_permissions();//??
    this.items = [{ label: ' MASTER' }, { label: 'Detect' }];

    this.home = { icon: 'pi pi-home', routerLink: '/detect' };
    this.drop = this.el.nativeElement.querySelector('#drop');

    this.projectList = [
      { name: 'UMER PROMOTION Demo', code: 6, idProject: 30, promotion_id: 1 },
      { name: 'UMER Demo', code: 1, idProject: 30, promotion_id: 1 },
      { name: 'PEPSI ALL', code: 0, idProject: 31, promotion_id: 2 },
      { name: 'PEPSI Demo', code: 3, idProject: 31, promotion_id: 1 },
      // { name: 'ABBOTT_LOGO Demo', code: 3, idProject: 44, promotion_id: 1 },
      { name: 'KEN Demo', code: 2, idProject: 34, promotion_id: 1 },
      { name: 'OTHER Demo', code: 4, idProject: 99, promotion_id: 1 },
    ];
    this.selected_project = this.projectList[0].code
  }
  @ViewChild('fileUploader') fileUploader: any;
  clearFiles(fileUploader: any) {
    fileUploader.clear();
  }

  getProjectSelectd(code: number) {
    return this.projectList.filter((item: any) =>
      //  {
      // console.log('item', item, code)
      item.code == code
      // }
    );
  }
  selected_projectfull: any
  onUpload(event: any) {
    console.log("(this.selected_project", this.selected_project)
    if (event.srcElement.files.length < 1)
      return;
    this.selected_projectfull = this.getProjectSelectd(this.selected_project)[0]
    console.log('this.getProjectSelectd(this.selected_project)', this.getProjectSelectd(this.selected_project))
    // console.log("this.selected_projectfull.idProject, this.selected_projectfull.promotion_id", this.selected_projectfull)
    // this.preloading = true
    // this.drop.classList.add('hide1');

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

  copyToClipboard(text: any) {

    navigator.clipboard.writeText(text).then(() => {
      // this.messageService.add({
      //     severity: 'success',
      //     summary: 'Copied',
      //     detail: text,
      // });
      this.toggleToast("Copy thành công" + text, "bg-success");
    }).catch(err => {
      this.toggleToast("Copy lỗi" + text, "bg-danger");
    });
  }

  callAPI(file: any) {

    this.subscription = this.service.uploadImage(file, this.selected_projectfull.idProject, this.selected_projectfull.promotion_id).subscribe(
      (data: any) => {
        var qty_product = this.handleProductsList(data.products);
        console.log("data", data)
        this.result.push({
          product: data.products,
          img:
            'https://brand-detect4.acacy.vn/img_pred/' +
            data.img_out,
          qty_product,
          nameFile: file.name,
          qty_productapi: data.brands.length !== 0 ? data.brands.length : 0
        });
        console.log("result", this.result)
        this.preloading = false
        // this.checkApicon();
        // if(this.fileUploader)
        // this.fileUploader.clear();
      },
      (error: any) => {
        console.log(error);
        this.preloading = false
        // this.messageService.add({ severity: 'error', detail: "Có lỗi xảy ra, vui lòng thử lại" });
        // this.checkApicon();
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
      for (let data of this.productList[this.selected_projectfull.code])
        if (dataapi.product_name == data.product_code) {
          // dataapi.product_name = data.product_name;
          qty_product += dataapi.qty;
          dataapi.id = data.id;
          dataapi.bgColor = data.bgColor;
          return;
        }
    });
    // if (listProduct?.[0]?.bgColor == null)
    this.handleColor(listProduct)
    return qty_product;
  }
  handleColor(listProduct: any[]) {
    listProduct.forEach((item: any, i: number) => {
      if (!item.bgColor)
        item.bgColor = this.list_bgColor[Math.floor(Math.random() * this.length_list_bgColor)]
    })
    // console.log("listProduct", listProduct)
    listProduct.sort((a, b) => a.id - b.id);
  }

  UnileverList: any[] = [
    { product_code: "CLEAR Mát Lạnh Bạc Hà 630g/880g", qty: 0, id: 1, bgColor: "rgb(78, 128, 127)" },
    { product_code: "PS KDR Ngừa Sâu Răng Vượt Trội 100g/180g/230g", qty: 0, id: 2, bgColor: "rgb(255, 76, 76)" },
    { product_code: "SUNSILK DG óng mượt rạng ngời 650g/900g", qty: 0, id: 3, bgColor: "rgb(39, 77, 96)" },
    { product_code: "LIFEBUOY XP BVVT 90g/125g", qty: 0, id: 4, bgColor: "rgb(94, 121, 202)" },
    { product_code: "LIFEBUOY DG dưỡng tóc óng ả 640g", qty: 0, id: 5, bgColor: "rgb(165, 76, 202)" },
    { product_code: "CLOSEUP KDR Thơm Mát Dài Lâu 140g/180g/230g", qty: 0, id: 6, bgColor: "rgb(188, 165, 72)" },
    { product_code: "SUNSILK DG mềm mượt diệu kì 650g/900g", qty: 0, id: 7, bgColor: "rgb(255, 179, 50)" },
    { product_code: "PS KDR Bảo Vệ 123 180g/230g", qty: 0, id: 8, bgColor: "rgb(133, 58, 0)" },
    { product_code: "CLEAR Cool Sport Bạc Hà 630g/900g", qty: 0, id: 9, bgColor: "rgb(236, 104, 104)" },
    { product_code: "PS KDR Trà Xanh 180g/230g", qty: 0, id: 10, bgColor: "rgb(128, 185, 128)" },
    { product_code: "PS KDR Than Hoạt Tính 180g/230g", qty: 0, id: 11, bgColor: "rgb(0, 188, 178)" },
    { product_code: "DOVE DG PHHT 640g/880g", qty: 0, id: 12, bgColor: "rgb(76, 140, 174)" },
    { product_code: "PS BCR", qty: 0, id: 13, bgColor: "rgb(200, 120, 120)" },
    { product_code: "LIFEBUOY XP chăm sóc da với tinh chất sữa 90g/125g", qty: 0, id: 14, bgColor: "rgb(113, 161, 210)" },
    { product_code: "LIFEBUOY DG mềm mượt và kháng khuẩn 640g", qty: 0, id: 15, bgColor: "rgb(255, 128, 191)" },
    { product_code: "CLEAR thảo dược cổ truyền 630g", qty: 0, id: 16, bgColor: "rgb(163, 64, 84)" },
    { product_code: "CLOSEUP KDR Tinh Thể Băng Tuyết 140g/180g/230g", qty: 0, id: 17, bgColor: "rgb(200, 159, 128)" },
    { product_code: "LIFEBUOY NRT BVVT Chai 180g/450g", qty: 0, id: 17, bgColor: "rgb(94, 159, 107)" },
    { product_code: "HAZELINE SRM Tràm Trà 50g/100g", qty: 0, id: 19, bgColor: "rgb(100, 97, 148)" },
    { product_code: "HAZELINE SRM Nghệ Hoa Cúc 50g/100g", qty: 0, id: 20, bgColor: "rgb(0, 115, 103)" },
    { product_code: "LIFEBUOY ST BVVT CHAI MỚI 800g/888g", qty: 0, id: 21, bgColor: "rgb(84, 140, 110)" },
    { product_code: "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 800g/888g", qty: 0, id: 22, bgColor: "rgb(105, 59, 255)" },
    { product_code: "CLOSEUP KDR Dầu Quất 180g/230g", qty: 0, id: 23, bgColor: "rgb(91, 82, 129)" },
    { product_code: "CLEAR Warm Forest 600g/840g", qty: 0, id: 24, bgColor: "rgb(255, 101, 174)" },
    { product_code: "CLEAR Mát Lạnh Bạc Hà 170g/340g", qty: 0, id: 25, bgColor: "rgb(10, 112, 117)" },
    { product_code: "CLEAR thảo dược cổ truyền 140g/340g", qty: 0, id: 26, bgColor: "rgb(94, 145, 156)" },
    { product_code: "LIFEBUOY NRT Sữa Dưỡng Ẩm Chai 180g/450g", qty: 0, id: 27, bgColor: "rgb(28, 143, 202)" },
    { product_code: "Old_DOVE DG PHHT 640g/880g", qty: 0, id: 28, bgColor: "rgb(27, 25, 49)" },
    { product_code: "DOVE DG Ngăn gãy rụng 640g/880g", qty: 0, id: 29, bgColor: "rgb(82, 44, 93)" },
    { product_code: "CLOSEUP KDR Muối Biển 180g/230g", qty: 0, id: 30, bgColor: "rgb(255, 130, 139)" },
    { product_code: "SUNSILK DG óng mượt rạng ngời 170g/320g", qty: 0, id: 31, bgColor: "rgb(3, 18, 47)" },
    { product_code: "LIFEBUOY DG dưỡng tóc óng ả 170g/320g", qty: 0, id: 32, bgColor: "rgb(255, 128, 153)" },
    { product_code: "LUX XP Phong lan 105g", qty: 0, id: 33, bgColor: "rgb(12, 150, 156)" },
    { product_code: "CLEAR 48h 630g/880g", qty: 0, id: 34, bgColor: "rgb(142, 170, 224)" },
    { product_code: "SUNSILK DG mềm mượt diệu kì 170g/320g", qty: 0, id: 35, bgColor: "rgb(0, 159, 0)" },
    { product_code: "LIFEBUOY ST BVVT CHAI MỚI 350g", qty: 0, id: 36, bgColor: "rgb(255, 128, 128)" },
    { product_code: "SUNSILK DX óng mượt rạng ngời 170g/320g", qty: 0, id: 37, bgColor: "rgb(241, 145, 109)" },
    { product_code: "LIFEBUOY ST Matcha & Khổ Qua Chai 800g", qty: 0, id: 38, bgColor: "rgb(68, 23, 78)" },
    { product_code: "SUNSILK DX óng mượt rạng ngời 640g", qty: 0, id: 39, bgColor: "rgb(102, 34, 73)" },
    { product_code: "SUNSILK DX mềm mượt diệu kì 170g/320g", qty: 0, id: 40, bgColor: "rgb(24, 26, 47)" },
    { product_code: "DOVE DX PHHT 170g/320g", qty: 0, id: 41, bgColor: "rgb(36, 46, 73)" },
    { product_code: "CLEAR Botanique 9 thảo dược quý 630g/900g", qty: 0, id: 42, bgColor: "rgb(180, 129, 45)" },
    { product_code: "DOVE DX PHHT 610g", qty: 0, id: 43, bgColor: "rgb(84, 22, 43)" },
    { product_code: "LIFEBUOY XP Matcha & Khổ Qua 90g/125g", qty: 0, id: 44, bgColor: "rgb(13, 30, 76)" },
    { product_code: "HAZELINE ST Yến Mạch Dâu Tằm Chai 670g/800g/1kg", qty: 0, id: 45, bgColor: "rgb(95, 126, 162)" },
    { product_code: "LIFEBUOY ST Thảo Dược & Hoa Sen Chai 800g", qty: 0, id: 46, bgColor: "rgb(38, 65, 94)" },
    { product_code: "CLEAR Cool Sport Bạc Hà 170g/340g", qty: 0, id: 47, bgColor: "rgb(11, 27, 50)" },
    { product_code: "SUNSILK DG natural dưỡng ngăn gãy rụng 650g", qty: 0, id: 48, bgColor: "rgb(3, 47, 48)" },
    { product_code: "HAZELINE ST Hoa Ly Chai 670g/800g/1kg", qty: 0, id: 49, bgColor: "rgb(107, 163, 190)" },
    { product_code: "LUX ST Hoa thiên điểu 570g", qty: 0, id: 50, bgColor: "rgb(25, 48, 92)" },
    { product_code: "CLOSEUP KDR Than Hoạt Tính 180g/230g", qty: 0, id: 51, bgColor: "rgb(65, 56, 97)" },
    { product_code: "PS KDR Muối Hồng Hoa Cúc 180g/230g", qty: 0, id: 52, bgColor: "rgb(174, 125, 172)" },
    { product_code: "Ponds SRM dưỡng sáng da Niasorcinol 50g/100g", qty: 0, id: 53, bgColor: "rgb(21, 0, 22)" },
    { product_code: "LUX ST Phong lan Chai 570g", qty: 0, id: 54, bgColor: "rgb(41, 16, 74)" },
    { product_code: "Ponds SRM than tre Activated Charcoal 50g/100g", qty: 0, id: 55, bgColor: "rgb(132, 81, 98)" },
    { product_code: "HAZELINE ST Hoa Bưởi Chai 800g", qty: 0, id: 56, bgColor: "rgb(78, 128, 127)" }, // Lặp lại từ đầu
    { product_code: "SUNSILK DX natural dưỡng ngăn gãy rụng 320g", qty: 0, id: 57, bgColor: "rgb(255, 76, 76)" },
    { product_code: "LIFEBUOY ST BVVT CHAI MỚI 1kg/1.1kg", qty: 0, id: 58, bgColor: "rgb(39, 77, 96)" },
    { product_code: "SUNSILK DX mềm mượt diệu kì 640g", qty: 0, id: 59, bgColor: "rgb(94, 121, 202)" },
    { product_code: "Old_DOVE DG Ngăn gãy rụng 640g/880g", qty: 0, id: 60, bgColor: "rgb(165, 76, 202)" },
    { product_code: "DOVE DX Ngăn gãy rụng 170g/320g", qty: 0, id: 61, bgColor: "rgb(188, 165, 72)" },
    { product_code: "PS KDR Bé Ngoan 35g", qty: 0, id: 62, bgColor: "rgb(255, 179, 50)" },
    { product_code: "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 350g", qty: 0, id: 63, bgColor: "rgb(133, 58, 0)" },
    { product_code: "HAZELINE ST Matcha Lựu Đỏ Chai 670g/800g/1kg", qty: 0, id: 64, bgColor: "rgb(236, 104, 104)" },
    { product_code: "DOVE DG PHHT 170g/325g", qty: 0, id: 65, bgColor: "rgb(128, 185, 128)" },
    { product_code: "CLEAR Deep Cleanse 630g/900g", qty: 0, id: 66, bgColor: "rgb(0, 188, 178)" },
    { product_code: "Old_DOVE DX PHHT 610g", qty: 0, id: 67, bgColor: "rgb(76, 140, 174)" },
    { product_code: "Ponds SRM chống lão hoá 100g", qty: 0, id: 68, bgColor: "rgb(200, 120, 120)" },
    { product_code: "LIFEBUOY XP Mát Lạnh Sảng Khoái 90g/125g", qty: 0, id: 69, bgColor: "rgb(113, 161, 210)" },
    { product_code: "CLEAR Deep Ocean 600g/840g", qty: 0, id: 70, bgColor: "rgb(255, 128, 191)" },
    { product_code: "CLEAR Hoa anh đào 630g", qty: 0, id: 71, bgColor: "rgb(163, 64, 84)" },
    { product_code: "HAZELINE SRM Yến Mạch Dâu Tằm 50g/100g", qty: 0, id: 72, bgColor: "rgb(200, 159, 128)" },
    { product_code: "Old_PS KDR Than hoạt tính 180g/230g", qty: 0, id: 73, bgColor: "rgb(94, 159, 107)" },
    { product_code: "TRESEMME DG Keratin Smooth 340g/640g/850g", qty: 0, id: 74, bgColor: "rgb(100, 97, 148)" },
    { product_code: "DOVE ST hoa anh đào 500g/900g", qty: 0, id: 75, bgColor: "rgb(0, 115, 103)" },
    { product_code: "Old_DOVE ST dưỡng ẩm 500g/900g", qty: 0, id: 76, bgColor: "rgb(84, 140, 110)" },
    { product_code: "Old_Ponds SRM than tre Activated Charcoal 50g/100g", qty: 0, id: 77, bgColor: "rgb(105, 59, 255)" },
    { product_code: "PS KDR Banking Soda & Hương Thảo 180g/230g", qty: 0, id: 78, bgColor: "rgb(91, 82, 129)" },
    { product_code: "LIFEBUOY ST Thảo Dược & Hoa Sen CHAI CŨ 800g", qty: 0, id: 79, bgColor: "rgb(255, 101, 174)" },
    { product_code: "DOVE ST dưỡng ẩm 500g/900g", qty: 0, id: 80, bgColor: "rgb(10, 112, 117)" },
    { product_code: "Old_CLEAR 48h 630g/880g", qty: 0, id: 81, bgColor: "rgb(94, 145, 156)" },
    { product_code: "LIFEBUOY XP Thiên Nhiên 90g/125g", qty: 0, id: 82, bgColor: "rgb(28, 143, 202)" },
    { product_code: "Old_CLEAR Mát Lạnh Bạc Hà 630g/880g", qty: 0, id: 83, bgColor: "rgb(27, 25, 49)" },
    { product_code: "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 1kg", qty: 0, id: 84, bgColor: "rgb(82, 44, 93)" },
    { product_code: "CLOSEUP BCR", qty: 0, id: 85, bgColor: "rgb(255, 130, 139)" },
    { product_code: "Old_Ponds SRM dưỡng sáng da Niasorcinol 50g/100g", qty: 0, id: 86, bgColor: "rgb(3, 18, 47)" },
    { product_code: "Old_DOVE DX PHHT 170g/320g", qty: 0, id: 87, bgColor: "rgb(255, 128, 153)" },
    { product_code: "LIFEBUOY NRT Chanh Khử Mùi Chai 180g/450g", qty: 0, id: 88, bgColor: "rgb(12, 150, 156)" },
    { product_code: "Ponds kem dưỡng sáng da ban ngày 30g/45g", qty: 0, id: 89, bgColor: "rgb(142, 170, 224)" },
    { product_code: "Old_PS KDR Trà Xanh 180g/230g", qty: 0, id: 90, bgColor: "rgb(0, 159, 0)" },
    { product_code: "Old_DOVE ST hoa anh đào 500g/900g", qty: 0, id: 91, bgColor: "rgb(255, 128, 128)" },
    { product_code: "Old_CLEAR Cool Sport Bạc Hà 630g/900g", qty: 0, id: 92, bgColor: "rgb(241, 145, 109)" },
    { product_code: "Old_DOVE DG PHHT 170g/325g", qty: 0, id: 93, bgColor: "rgb(68, 23, 78)" }
  ];
  // UnileverList: any[] = [
  //     {
  //         product_code: "Background",
  //         qty: 0,
  //         id: 0,
  //         bgColor: 'rgb(255, 255, 255)',
  //     },
  //     {
  //         product_code: "P/S KĐR Trắng Răng Than Hoạt Tính & Tre Tuýp 180g",
  //         qty: 0,
  //         id: 1,
  //         bgColor: 'rgb(237, 139, 0)',
  //     },
  //     {
  //         product_code: "LIFEBUOY Sữa Tắm Bảo Vệ Vượt Trội Chai 800g",
  //         qty: 0,
  //         id: 2,
  //         bgColor: 'rgb(218, 41, 28)',
  //     },
  //     {
  //         product_code: "LIFEBUOY ST Bvvt Chai 800g",
  //         qty: 0,
  //         id: 3,
  //         bgColor: 'rgb(208, 0, 111)',
  //     },
  //     {
  //         product_code: "DOVE Kem Xả PHHT 1 Phút Siêu Dưỡng Tuýp 320g",
  //         qty: 0,
  //         id: 4,
  //         bgColor: 'rgb(138, 27, 97)',
  //     },
  //     {
  //         product_code: "DOVE Dầu gội phục hồi tóc hư tổn Chai 640g",
  //         qty: 0,
  //         id: 5,
  //         bgColor: 'rgb(0, 133, 202)',
  //     },
  //     {
  //         product_code: "Old_DOVE Dầu gội phục hồi tóc hư tổn Chai 640g",
  //         qty: 0,
  //         id: 6,
  //         bgColor: 'rgb(0, 179, 136)',
  //     },
  //     {
  //         product_code: "COMFORT NXV Đậm Đặc 1 Lần Xả Hương Ban Mai Túi 1.8L",
  //         qty: 0,
  //         id: 7,

  //         bgColor: 'rgb(223, 25, 149)',
  //     },
  //     {
  //         product_code: "COMFORT NXV ĐĐ 1 Lần Xả Hương Ban Mai Túi 1.8L",
  //         qty: 0,
  //         id: 8,
  //         bgColor: 'rgb(220, 107, 47)',
  //     },
  //     {
  //         product_code: "OMO NG KhửMùi Thơm Thư Thái CTrước Túi 3.6kg",
  //         qty: 0,
  //         id: 9,
  //         bgColor: 'rgb(155, 39, 67)',
  //     },
  //     {
  //         product_code: "DOVE Kem Xả PHHT 1Phút SiêuDưỡng Tuýp 320g",
  //         product_name: "DOVE Kem Xả PHHT 1Phút SiêuDưỡng Tuýp 320g",
  //         qty: 0,
  //         id: 10,
  //         bgColor: 'rgb(107, 165, 57)',
  //     },
  //     {
  //         product_code: "OMO NG KhửMùi Thơm Thư Thái CửaTrước Túi 3.6kg",
  //         qty: 0,
  //         id: 11,
  //         bgColor: 'rgb(0, 94, 184)',
  //     },
  //     {
  //         product_code: "OMO Nước Giặt CF Tinh Dầu Thơm Túi 3.6kg",
  //         qty: 0,
  //         id: 12,
  //         bgColor: 'rgb(172, 79, 198)',
  //     },
  //     {
  //         product_code: "SUNLIGHT NRC Thiên Nhiên Gốc Thực Vật Chai 750g",
  //         qty: 0,
  //         id: 13,
  //         bgColor: 'rgb(112, 47, 138)',
  //     },
  //     {
  //         product_code: "SUNLIGHT NRC Thiên Nhiên Gừng Chai 750g",
  //         qty: 0,
  //         id: 14,

  //         bgColor: 'rgb(175, 22, 133)',
  //     },
  //     {
  //         product_code: "OMO THƯ THÁI_KM",
  //         qty: 0,
  //         id: 15,
  //         bgColor: 'rgb(0, 169, 224)',
  //     },
  //     {
  //         product_code: "DG DOVE_KM",
  //         qty: 0,
  //         id: 16,
  //         bgColor: 'rgb(0, 130, 100)',
  //     },
  //     {
  //         product_code: "OMO COMFORT TDT_KM",
  //         qty: 0,
  //         id: 17,
  //         bgColor: 'rgb(0, 163, 173)',
  //     },
  //     {
  //         product_code: "NRC SUNLIGHT  GỐC THỰC VẬT_KM",
  //         qty: 0,
  //         id: 18,
  //         bgColor: 'rgb(191,13,62)',
  //     },
  //     {
  //         product_code: "NRC SUNLIGHT GỪNG_KM",
  //         qty: 0,
  //         id: 19,
  //         bgColor: 'rgb(229,114,0)',
  //     },
  //     {
  //         product_code: "LIFEBUOY BVVT_KM",
  //         qty: 0,
  //         id: 20,
  //         bgColor: 'rgb(187, 179, 35)',
  //     },
  //     {
  //         product_code: "NXV BAN MAI_KM",
  //         qty: 0,
  //         id: 21,
  //         bgColor: 'rgb(148, 147, 0)',
  //     },
  // ]



  pepsiList: any[] = [
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 630g/880g",
      "qty": 0,
      "id": 1,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "PS KDR Ngừa Sâu Răng Vượt Trội 100g/180g/230g",
      "qty": 0,
      "id": 2,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "CLEAR Cool Sport Bạc Hà 630g/900g",
      "qty": 0,
      "id": 3,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "CLOSEUP KDR Thơm Mát Dài Lâu 140g/180g/230g",
      "qty": 0,
      "id": 4,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 650g/900g",
      "qty": 0,
      "id": 5,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "LIFEBUOY XP BVVT 90g/125g",
      "qty": 0,
      "id": 6,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "PS KDR Than Hoạt Tính 180g/230g",
      "qty": 0,
      "id": 7,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "CLEAR thảo dược cổ truyền 630g",
      "qty": 0,
      "id": 8,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "PS KDR Bảo Vệ 123 180g/230g",
      "qty": 0,
      "id": 9,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "PS KDR Trà Xanh 180g/230g",
      "qty": 0,
      "id": 10,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "LIFEBUOY DG dưỡng tóc óng ả 640g",
      "qty": 0,
      "id": 11,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "SUNSILK DG mềm mượt diệu kì 650g/900g",
      "qty": 0,
      "id": 12,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "PS BCR",
      "qty": 0,
      "id": 13,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "LIFEBUOY XP chăm sóc da với tinh chất sữa 90g/125g",
      "qty": 0,
      "id": 14,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "CLEAR thảo dược cổ truyền 140g/340g",
      "qty": 0,
      "id": 15,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "DOVE DG PHHT 640g/880g",
      "qty": 0,
      "id": 16,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "CLEAR 900g",
      "qty": 0,
      "id": 17,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "CLOSEUP KDR Tinh Thể Băng Tuyết 140g/180g/230g",
      "qty": 0,
      "id": 18,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "LIFEBUOY DG mềm mượt và kháng khuẩn 640g",
      "qty": 0,
      "id": 19,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "HAZELINE SRM Tràm Trà 50g/100g",
      "qty": 0,
      "id": 20,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "HAZELINE SRM Nghệ Hoa Cúc 50g/100g",
      "qty": 0,
      "id": 21,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 22,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "LIFEBUOY NRT BVVT Chai 180g/450g",
      "qty": 0,
      "id": 23,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "CLOSEUP KDR Dầu Quất 180g/230g",
      "qty": 0,
      "id": 24,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "CLEAR Warm Forest 600g/840g",
      "qty": 0,
      "id": 25,
      "bgColor": "rgb(10, 112, 117)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 26,
      "bgColor": "rgb(94, 145, 156)"
    },
    {
      "product_code": "CLOSEUP KDR Muối Biển 180g/230g",
      "qty": 0,
      "id": 27,
      "bgColor": "rgb(28, 143, 202)"
    },
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 170g/340g",
      "qty": 0,
      "id": 28,
      "bgColor": "rgb(27, 25, 49)"
    },
    {
      "product_code": "Pond SRM dưỡng sáng da Niasorcinol 50g/100g",
      "qty": 0,
      "id": 29,
      "bgColor": "rgb(82, 44, 93)"
    },
    {
      "product_code": "LIFEBUOY NRT Sữa Dưỡng Ẩm Chai 180g/450g",
      "qty": 0,
      "id": 30,
      "bgColor": "rgb(255, 130, 139)"
    },
    {
      "product_code": "Old_DOVE DG PHHT 640g/880g",
      "qty": 0,
      "id": 31,
      "bgColor": "rgb(3, 18, 47)"
    },
    {
      "product_code": "LUX XP Phong lan 105g",
      "qty": 0,
      "id": 32,
      "bgColor": "rgb(255, 128, 153)"
    },
    {
      "product_code": "Pond SRM than tre Activated Charcoal 50g/100g",
      "qty": 0,
      "id": 33,
      "bgColor": "rgb(12, 150, 156)"
    },
    {
      "product_code": "DOVE DG Ngăn gãy rụng 640g/880g",
      "qty": 0,
      "id": 34,
      "bgColor": "rgb(142, 170, 224)"
    },
    {
      "product_code": "HAZELINE ST Yến Mạch Dâu Tằm Chai 670g/800g/1kg",
      "qty": 0,
      "id": 35,
      "bgColor": "rgb(0, 159, 0)"
    },
    {
      "product_code": "CLEAR 48h 630g/880g",
      "qty": 0,
      "id": 36,
      "bgColor": "rgb(255, 128, 128)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 170g/320g",
      "qty": 0,
      "id": 37,
      "bgColor": "rgb(241, 145, 109)"
    },
    {
      "product_code": "HAZELINE ST Hoa Ly Chai 670g/800g/1kg",
      "qty": 0,
      "id": 38,
      "bgColor": "rgb(68, 23, 78)"
    },
    {
      "product_code": "LIFEBUOY ST Matcha & Khổ Qua Chai 800g",
      "qty": 0,
      "id": 39,
      "bgColor": "rgb(102, 34, 73)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 350g",
      "qty": 0,
      "id": 40,
      "bgColor": "rgb(24, 26, 47)"
    },
    {
      "product_code": "SUNSILK DG mềm mượt diệu kì 170g/320g",
      "qty": 0,
      "id": 41,
      "bgColor": "rgb(36, 46, 73)"
    },
    {
      "product_code": "LIFEBUOY DG dưỡng tóc óng ả 170g/320g",
      "qty": 0,
      "id": 42,
      "bgColor": "rgb(180, 129, 45)"
    },
    {
      "product_code": "SUNSILK DX óng mượt rạng ngời 170g/320g",
      "qty": 0,
      "id": 43,
      "bgColor": "rgb(84, 22, 43)"
    },
    {
      "product_code": "DOVE DX PHHT 170g/320g",
      "qty": 0,
      "id": 44,
      "bgColor": "rgb(13, 30, 76)"
    },
    {
      "product_code": "SUNSILK DX mềm mượt diệu kì 170g/320g",
      "qty": 0,
      "id": 45,
      "bgColor": "rgb(95, 126, 162)"
    },
    {
      "product_code": "LIFEBUOY ST Thảo Dược & Hoa Sen Chai 800g",
      "qty": 0,
      "id": 46,
      "bgColor": "rgb(38, 65, 94)"
    },
    {
      "product_code": "CLOSEUP KDR Than Hoạt Tính 180g/230g",
      "qty": 0,
      "id": 47,
      "bgColor": "rgb(11, 27, 50)"
    },
    {
      "product_code": "Pond SRM chống lão hoá 100g",
      "qty": 0,
      "id": 48,
      "bgColor": "rgb(3, 47, 48)"
    },
    {
      "product_code": "Old_Pond SRM than tre Activated Charcoal 50g/100g",
      "qty": 0,
      "id": 49,
      "bgColor": "rgb(107, 163, 190)"
    },
    {
      "product_code": "HAZELINE ST Matcha Lựu Đỏ Chai 670g/800g/1kg",
      "qty": 0,
      "id": 50,
      "bgColor": "rgb(25, 48, 92)"
    },
    {
      "product_code": "HAZELINE ST Hoa Bưởi Chai 800g",
      "qty": 0,
      "id": 51,
      "bgColor": "rgb(65, 56, 97)"
    },
    {
      "product_code": "BESTFOODS vị xương ống & tuỷ 1kg/2kg",
      "qty": 0,
      "id": 52,
      "bgColor": "rgb(174, 125, 172)"
    },
    {
      "product_code": "LUX ST Hoa thiên điểu 570g",
      "qty": 0,
      "id": 53,
      "bgColor": "rgb(21, 0, 22)"
    },
    {
      "product_code": "LIFEBUOY XP Matcha & Khổ Qua 90g/125g",
      "qty": 0,
      "id": 54,
      "bgColor": "rgb(41, 16, 74)"
    },
    {
      "product_code": "Old_PS KDR Than hoạt tính 180g/230g",
      "qty": 0,
      "id": 55,
      "bgColor": "rgb(132, 81, 98)"
    },
    {
      "product_code": "LUX ST Phong lan Chai 570g",
      "qty": 0,
      "id": 56,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "CLEAR Cool Sport Bạc Hà 170g/340g",
      "qty": 0,
      "id": 57,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "SUNSILK DX óng mượt rạng ngời 640g",
      "qty": 0,
      "id": 58,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "SUNSILK DG natural dưỡng ngăn gãy rụng 650g",
      "qty": 0,
      "id": 59,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "PS KDR Muối Hồng Hoa Cúc 180g/230g",
      "qty": 0,
      "id": 60,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "DOVE DX PHHT 610g",
      "qty": 0,
      "id": 61,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "CLEAR Botanique 9 thảo dược quý 630g/900g",
      "qty": 0,
      "id": 62,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "KNORR Thịt thăn,xương ống & tuỷ 50g/170g/400g/900g/1.2kg",
      "qty": 0,
      "id": 63,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "Pond kem dưỡng sáng da ban ngày 30g/45g",
      "qty": 0,
      "id": 64,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "CLEAR Deep Ocean 600g/840g",
      "qty": 0,
      "id": 65,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "Old_Pond SRM dưỡng sáng da Niasorcinol 50g/100g",
      "qty": 0,
      "id": 66,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "DOVE DX Ngăn gãy rụng 170g/320g",
      "qty": 0,
      "id": 67,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "Old_DOVE ST dưỡng ẩm 500g/900g",
      "qty": 0,
      "id": 68,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "Pond kem dưỡng sáng da ban đêm 30g/45g",
      "qty": 0,
      "id": 69,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "SUNSILK DX natural dưỡng ngăn gãy rụng 320g",
      "qty": 0,
      "id": 70,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 1kg/1.1kg",
      "qty": 0,
      "id": 71,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "Old_DOVE DG Ngăn gãy rụng 640g/880g",
      "qty": 0,
      "id": 72,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "VASELINE SDT dưỡng da ban ngày 330ml",
      "qty": 0,
      "id": 73,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "KNORR hạt nêm nấm hương Organic gói 50/170/380g",
      "qty": 0,
      "id": 74,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "PS KDR Bé Ngoan 35g",
      "qty": 0,
      "id": 75,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 350g",
      "qty": 0,
      "id": 76,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "SUNSILK DX mềm mượt diệu kì 640g",
      "qty": 0,
      "id": 77,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "CLEAR Deep Cleanse 630g/900g",
      "qty": 0,
      "id": 78,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "DOVE ST dưỡng ẩm 500g/900g",
      "qty": 0,
      "id": 79,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "Old_DOVE DX PHHT 610g",
      "qty": 0,
      "id": 80,
      "bgColor": "rgb(10, 112, 117)"
    },
    {
      "product_code": "HAZELINE SRM Yến Mạch Dâu Tằm 50g/100g",
      "qty": 0,
      "id": 81,
      "bgColor": "rgb(94, 145, 156)"
    },
    {
      "product_code": "Pond kem dưỡng chống lão hoá ban ngày 45g",
      "qty": 0,
      "id": 82,
      "bgColor": "rgb(28, 143, 202)"
    },
    {
      "product_code": "CLEAR Hoa anh đào 630g",
      "qty": 0,
      "id": 83,
      "bgColor": "rgb(27, 25, 49)"
    },
    {
      "product_code": "VASELINE SDT dưỡng da ban đêm 330ml",
      "qty": 0,
      "id": 84,
      "bgColor": "rgb(82, 44, 93)"
    },
    {
      "product_code": "Old_CLEAR Mát Lạnh Bạc Hà 630g/880g",
      "qty": 0,
      "id": 85,
      "bgColor": "rgb(255, 130, 139)"
    },
    {
      "product_code": "VASELINE SDT chống nắng SPF 50+ TUÝP 330ml/70ml",
      "qty": 0,
      "id": 86,
      "bgColor": "rgb(3, 18, 47)"
    },
    {
      "product_code": "DOVE ST hoa anh đào 500g/900g",
      "qty": 0,
      "id": 87,
      "bgColor": "rgb(255, 128, 153)"
    },
    {
      "product_code": "DOVE DG PHHT 170g/325g",
      "qty": 0,
      "id": 88,
      "bgColor": "rgb(12, 150, 156)"
    },
    {
      "product_code": "Pond kem dưỡng chống lão hoá ban đêm 45g",
      "qty": 0,
      "id": 89,
      "bgColor": "rgb(142, 170, 224)"
    },
    {
      "product_code": "LIFEBUOY ST Thảo Dược & Hoa Sen CHAI CŨ 800g/200ml",
      "qty": 0,
      "id": 90,
      "bgColor": "rgb(0, 159, 0)"
    },
    {
      "product_code": "Old_DOVE ST hoa anh đào 500g/900g",
      "qty": 0,
      "id": 91,
      "bgColor": "rgb(255, 128, 128)"
    },
    {
      "product_code": "LIFEBUOY XP Mát Lạnh Sảng Khoái 90g/125g",
      "qty": 0,
      "id": 92,
      "bgColor": "rgb(241, 145, 109)"
    },
    {
      "product_code": "KNORR nước mắm ngon tròn vị chai 750ml",
      "qty": 0,
      "id": 93,
      "bgColor": "rgb(68, 23, 78)"
    },
    {
      "product_code": "Old_DOVE DG PHHT 170g/325g",
      "qty": 0,
      "id": 94,
      "bgColor": "rgb(102, 34, 73)"
    },
    {
      "product_code": "TRESEMME DG Keratin Smooth 340g/640g/850g",
      "qty": 0,
      "id": 95,
      "bgColor": "rgb(24, 26, 47)"
    },
    {
      "product_code": "Old_CLEAR 48h 630g/880g",
      "qty": 0,
      "id": 96,
      "bgColor": "rgb(36, 46, 73)"
    },
    {
      "product_code": "LIFEBUOY XP Thiên Nhiên 90g/125g",
      "qty": 0,
      "id": 97,
      "bgColor": "rgb(180, 129, 45)"
    },
    {
      "product_code": "LIFEBUOY NRT Chanh Khử Mùi Chai 180g/450g",
      "qty": 0,
      "id": 98,
      "bgColor": "rgb(84, 22, 43)"
    },
    {
      "product_code": "Old_DOVE DX PHHT 170g/320g",
      "qty": 0,
      "id": 99,
      "bgColor": "rgb(13, 30, 76)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 1kg",
      "qty": 0,
      "id": 100,
      "bgColor": "rgb(95, 126, 162)"
    },
    {
      "product_code": "Old_PS KDR Trà Xanh 180g/230g",
      "qty": 0,
      "id": 101,
      "bgColor": "rgb(38, 65, 94)"
    },
    {
      "product_code": "PS KDR Banking Soda & Hương Thảo 180g/230g",
      "qty": 0,
      "id": 102,
      "bgColor": "rgb(11, 27, 50)"
    },
    {
      "product_code": "KNORR nước mắm ngon tròn vị chai 242ml",
      "qty": 0,
      "id": 103,
      "bgColor": "rgb(3, 47, 48)"
    },
    {
      "product_code": "CLEAR active cool bạc hà 630g",
      "qty": 0,
      "id": 104,
      "bgColor": "rgb(107, 163, 190)"
    },
    {
      "product_code": "SUNLIGHT NRC Chanh100 chai 750g",
      "qty": 0,
      "id": 105,
      "bgColor": "rgb(25, 48, 92)"
    },
    {
      "product_code": "CLOSEUP BCR",
      "qty": 0,
      "id": 106,
      "bgColor": "rgb(65, 56, 97)"
    },
    {
      "product_code": "LUX XP Hồng pháp 105g",
      "qty": 0,
      "id": 107,
      "bgColor": "rgb(174, 125, 172)"
    },
    {
      "product_code": "Pond SRM dưỡng sáng đều màu 100g",
      "qty": 0,
      "id": 108,
      "bgColor": "rgb(21, 0, 22)"
    },
    {
      "product_code": "Old_CLEAR Mát Lạnh Bạc Hà 170g/340g",
      "qty": 0,
      "id": 109,
      "bgColor": "rgb(41, 16, 74)"
    },
    {
      "product_code": "Old_CLEAR Cool Sport Bạc Hà 630g/900g",
      "qty": 0,
      "id": 110,
      "bgColor": "rgb(132, 81, 98)"
    },
    {
      "product_code": "PS KDR GumExpert Trắng răng 100g",
      "qty": 0,
      "id": 111,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "LIFEBUOY ST Matcha & Khổ Qua CHAI CŨ 800g",
      "qty": 0,
      "id": 112,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "Old_DOVE DX Ngăn gãy rụng 170g/320g",
      "qty": 0,
      "id": 113,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "DOVE DG Ngăn gãy rụng 325g",
      "qty": 0,
      "id": 114,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 1.4kg",
      "qty": 0,
      "id": 115,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "Old_PS KDR Muối hồng hoa cúc 180g/230g",
      "qty": 0,
      "id": 116,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 1.4kg",
      "qty": 0,
      "id": 117,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 1.4kg",
      "qty": 0,
      "id": 118,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "LIFEBUOY ST Mát Lạnh Sảng Khoái CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 119,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "Old_Pond kem dưỡng sáng da ban đêm 45g",
      "qty": 0,
      "id": 120,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI CŨ 800g",
      "qty": 0,
      "id": 121,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "TRESEMME DX Keratin Smooth 480g/620g",
      "qty": 0,
      "id": 122,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI CŨ 250g",
      "qty": 0,
      "id": 123,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "CLEAR Warm Forest 170/320g",
      "qty": 0,
      "id": 124,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "VIM NT diệt khuẩn chai 500ml/880ml",
      "qty": 0,
      "id": 125,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "SUNLIGHT NLS hoa hạ bạc hà chai 1kg",
      "qty": 0,
      "id": 126,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "SUNSILK DG natural mềm mượt tỏa hương 650g",
      "qty": 0,
      "id": 127,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "Pond kem dưỡng sáng đều màu ban ngày 50g",
      "qty": 0,
      "id": 128,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "SUNLIGHT NRC lô hội chai 750g",
      "qty": 0,
      "id": 129,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "SUNLIGHT NLS hoa lily hương thảo chai 1kg",
      "qty": 0,
      "id": 130,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "LIFEBUOY NRT BVVT Túi 400g",
      "qty": 0,
      "id": 131,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "LIFEBUOY ST Muối hồng CHAI CŨ 800g",
      "qty": 0,
      "id": 132,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "Old_Pond kem dưỡng chống lão hoá ban ngày 45g",
      "qty": 0,
      "id": 133,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI CŨ 800g",
      "qty": 0,
      "id": 134,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "DOVE DG Hoa sen",
      "qty": 0,
      "id": 135,
      "bgColor": "rgb(10, 112, 117)"
    }
  ]




  pepsiList_all: any[] = [
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 630g/880g",
      "qty": 0,
      "id": 1,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "PS KDR Ngừa Sâu Răng Vượt Trội 100g/180g/230g",
      "qty": 0,
      "id": 2,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "CLEAR Cool Sport Bạc Hà 630g/900g",
      "qty": 0,
      "id": 3,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "CLOSEUP KDR Thơm Mát Dài Lâu 140g/180g/230g",
      "qty": 0,
      "id": 4,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 650g/900g",
      "qty": 0,
      "id": 5,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "LIFEBUOY XP BVVT 90g/125g",
      "qty": 0,
      "id": 6,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "PS KDR Than Hoạt Tính 180g/230g",
      "qty": 0,
      "id": 7,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "CLEAR thảo dược cổ truyền 630g",
      "qty": 0,
      "id": 8,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "PS KDR Bảo Vệ 123 180g/230g",
      "qty": 0,
      "id": 9,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "PS KDR Trà Xanh 180g/230g",
      "qty": 0,
      "id": 10,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "LIFEBUOY DG dưỡng tóc óng ả 640g",
      "qty": 0,
      "id": 11,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "SUNSILK DG mềm mượt diệu kì 650g/900g",
      "qty": 0,
      "id": 12,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "PS BCR",
      "qty": 0,
      "id": 13,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "LIFEBUOY XP chăm sóc da với tinh chất sữa 90g/125g",
      "qty": 0,
      "id": 14,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "CLEAR thảo dược cổ truyền 140g/340g",
      "qty": 0,
      "id": 15,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "DOVE DG PHHT 640g/880g",
      "qty": 0,
      "id": 16,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "CLEAR 900g",
      "qty": 0,
      "id": 17,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "CLOSEUP KDR Tinh Thể Băng Tuyết 140g/180g/230g",
      "qty": 0,
      "id": 18,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "LIFEBUOY DG mềm mượt và kháng khuẩn 640g",
      "qty": 0,
      "id": 19,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "HAZELINE SRM Tràm Trà 50g/100g",
      "qty": 0,
      "id": 20,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "HAZELINE SRM Nghệ Hoa Cúc 50g/100g",
      "qty": 0,
      "id": 21,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 22,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "LIFEBUOY NRT BVVT Chai 180g/450g",
      "qty": 0,
      "id": 23,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "CLOSEUP KDR Dầu Quất 180g/230g",
      "qty": 0,
      "id": 24,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "CLEAR Warm Forest 600g/840g",
      "qty": 0,
      "id": 25,
      "bgColor": "rgb(10, 112, 117)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 26,
      "bgColor": "rgb(94, 145, 156)"
    },
    {
      "product_code": "CLOSEUP KDR Muối Biển 180g/230g",
      "qty": 0,
      "id": 27,
      "bgColor": "rgb(28, 143, 202)"
    },
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 170g/340g",
      "qty": 0,
      "id": 28,
      "bgColor": "rgb(27, 25, 49)"
    },
    {
      "product_code": "Pond SRM dưỡng sáng da Niasorcinol 50g/100g",
      "qty": 0,
      "id": 29,
      "bgColor": "rgb(82, 44, 93)"
    },
    {
      "product_code": "LIFEBUOY NRT Sữa Dưỡng Ẩm Chai 180g/450g",
      "qty": 0,
      "id": 30,
      "bgColor": "rgb(255, 130, 139)"
    },
    {
      "product_code": "Old_DOVE DG PHHT 640g/880g",
      "qty": 0,
      "id": 31,
      "bgColor": "rgb(3, 18, 47)"
    },
    {
      "product_code": "LUX XP Phong lan 105g",
      "qty": 0,
      "id": 32,
      "bgColor": "rgb(255, 128, 153)"
    },
    {
      "product_code": "Pond SRM than tre Activated Charcoal 50g/100g",
      "qty": 0,
      "id": 33,
      "bgColor": "rgb(12, 150, 156)"
    },
    {
      "product_code": "DOVE DG Ngăn gãy rụng 640g/880g",
      "qty": 0,
      "id": 34,
      "bgColor": "rgb(142, 170, 224)"
    },
    {
      "product_code": "HAZELINE ST Yến Mạch Dâu Tằm Chai 670g/800g/1kg",
      "qty": 0,
      "id": 35,
      "bgColor": "rgb(0, 159, 0)"
    },
    {
      "product_code": "CLEAR 48h 630g/880g",
      "qty": 0,
      "id": 36,
      "bgColor": "rgb(255, 128, 128)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 170g/320g",
      "qty": 0,
      "id": 37,
      "bgColor": "rgb(241, 145, 109)"
    },
    {
      "product_code": "HAZELINE ST Hoa Ly Chai 670g/800g/1kg",
      "qty": 0,
      "id": 38,
      "bgColor": "rgb(68, 23, 78)"
    },
    {
      "product_code": "LIFEBUOY ST Matcha & Khổ Qua Chai 800g",
      "qty": 0,
      "id": 39,
      "bgColor": "rgb(102, 34, 73)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 350g",
      "qty": 0,
      "id": 40,
      "bgColor": "rgb(24, 26, 47)"
    },
    {
      "product_code": "SUNSILK DG mềm mượt diệu kì 170g/320g",
      "qty": 0,
      "id": 41,
      "bgColor": "rgb(36, 46, 73)"
    },
    {
      "product_code": "LIFEBUOY DG dưỡng tóc óng ả 170g/320g",
      "qty": 0,
      "id": 42,
      "bgColor": "rgb(180, 129, 45)"
    },
    {
      "product_code": "SUNSILK DX óng mượt rạng ngời 170g/320g",
      "qty": 0,
      "id": 43,
      "bgColor": "rgb(84, 22, 43)"
    },
    {
      "product_code": "DOVE DX PHHT 170g/320g",
      "qty": 0,
      "id": 44,
      "bgColor": "rgb(13, 30, 76)"
    },
    {
      "product_code": "SUNSILK DX mềm mượt diệu kì 170g/320g",
      "qty": 0,
      "id": 45,
      "bgColor": "rgb(95, 126, 162)"
    },
    {
      "product_code": "LIFEBUOY ST Thảo Dược & Hoa Sen Chai 800g",
      "qty": 0,
      "id": 46,
      "bgColor": "rgb(38, 65, 94)"
    },
    {
      "product_code": "CLOSEUP KDR Than Hoạt Tính 180g/230g",
      "qty": 0,
      "id": 47,
      "bgColor": "rgb(11, 27, 50)"
    },
    {
      "product_code": "Pond SRM chống lão hoá 100g",
      "qty": 0,
      "id": 48,
      "bgColor": "rgb(3, 47, 48)"
    },
    {
      "product_code": "Old_Pond SRM than tre Activated Charcoal 50g/100g",
      "qty": 0,
      "id": 49,
      "bgColor": "rgb(107, 163, 190)"
    },
    {
      "product_code": "HAZELINE ST Matcha Lựu Đỏ Chai 670g/800g/1kg",
      "qty": 0,
      "id": 50,
      "bgColor": "rgb(25, 48, 92)"
    },
    {
      "product_code": "HAZELINE ST Hoa Bưởi Chai 800g",
      "qty": 0,
      "id": 51,
      "bgColor": "rgb(65, 56, 97)"
    },
    {
      "product_code": "BESTFOODS vị xương ống & tuỷ 1kg/2kg",
      "qty": 0,
      "id": 52,
      "bgColor": "rgb(174, 125, 172)"
    },
    {
      "product_code": "LUX ST Hoa thiên điểu 570g",
      "qty": 0,
      "id": 53,
      "bgColor": "rgb(21, 0, 22)"
    },
    {
      "product_code": "LIFEBUOY XP Matcha & Khổ Qua 90g/125g",
      "qty": 0,
      "id": 54,
      "bgColor": "rgb(41, 16, 74)"
    },
    {
      "product_code": "Old_PS KDR Than hoạt tính 180g/230g",
      "qty": 0,
      "id": 55,
      "bgColor": "rgb(132, 81, 98)"
    },
    {
      "product_code": "LUX ST Phong lan Chai 570g",
      "qty": 0,
      "id": 56,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "CLEAR Cool Sport Bạc Hà 170g/340g",
      "qty": 0,
      "id": 57,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "SUNSILK DX óng mượt rạng ngời 640g",
      "qty": 0,
      "id": 58,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "SUNSILK DG natural dưỡng ngăn gãy rụng 650g",
      "qty": 0,
      "id": 59,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "PS KDR Muối Hồng Hoa Cúc 180g/230g",
      "qty": 0,
      "id": 60,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "DOVE DX PHHT 610g",
      "qty": 0,
      "id": 61,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "CLEAR Botanique 9 thảo dược quý 630g/900g",
      "qty": 0,
      "id": 62,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "KNORR Thịt thăn,xương ống & tuỷ 50g/170g/400g/900g/1.2kg",
      "qty": 0,
      "id": 63,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "Pond kem dưỡng sáng da ban ngày 30g/45g",
      "qty": 0,
      "id": 64,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "CLEAR Deep Ocean 600g/840g",
      "qty": 0,
      "id": 65,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "Old_Pond SRM dưỡng sáng da Niasorcinol 50g/100g",
      "qty": 0,
      "id": 66,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "DOVE DX Ngăn gãy rụng 170g/320g",
      "qty": 0,
      "id": 67,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "Old_DOVE ST dưỡng ẩm 500g/900g",
      "qty": 0,
      "id": 68,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "Pond kem dưỡng sáng da ban đêm 30g/45g",
      "qty": 0,
      "id": 69,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "SUNSILK DX natural dưỡng ngăn gãy rụng 320g",
      "qty": 0,
      "id": 70,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 1kg/1.1kg",
      "qty": 0,
      "id": 71,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "Old_DOVE DG Ngăn gãy rụng 640g/880g",
      "qty": 0,
      "id": 72,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "VASELINE SDT dưỡng da ban ngày 330ml",
      "qty": 0,
      "id": 73,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "KNORR hạt nêm nấm hương Organic gói 50/170/380g",
      "qty": 0,
      "id": 74,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "PS KDR Bé Ngoan 35g",
      "qty": 0,
      "id": 75,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 350g",
      "qty": 0,
      "id": 76,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "SUNSILK DX mềm mượt diệu kì 640g",
      "qty": 0,
      "id": 77,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "CLEAR Deep Cleanse 630g/900g",
      "qty": 0,
      "id": 78,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "DOVE ST dưỡng ẩm 500g/900g",
      "qty": 0,
      "id": 79,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "Old_DOVE DX PHHT 610g",
      "qty": 0,
      "id": 80,
      "bgColor": "rgb(10, 112, 117)"
    },
    {
      "product_code": "HAZELINE SRM Yến Mạch Dâu Tằm 50g/100g",
      "qty": 0,
      "id": 81,
      "bgColor": "rgb(94, 145, 156)"
    },
    {
      "product_code": "Pond kem dưỡng chống lão hoá ban ngày 45g",
      "qty": 0,
      "id": 82,
      "bgColor": "rgb(28, 143, 202)"
    },
    {
      "product_code": "CLEAR Hoa anh đào 630g",
      "qty": 0,
      "id": 83,
      "bgColor": "rgb(27, 25, 49)"
    },
    {
      "product_code": "VASELINE SDT dưỡng da ban đêm 330ml",
      "qty": 0,
      "id": 84,
      "bgColor": "rgb(82, 44, 93)"
    },
    {
      "product_code": "Old_CLEAR Mát Lạnh Bạc Hà 630g/880g",
      "qty": 0,
      "id": 85,
      "bgColor": "rgb(255, 130, 139)"
    },
    {
      "product_code": "VASELINE SDT chống nắng SPF 50+ TUÝP 330ml/70ml",
      "qty": 0,
      "id": 86,
      "bgColor": "rgb(3, 18, 47)"
    },
    {
      "product_code": "DOVE ST hoa anh đào 500g/900g",
      "qty": 0,
      "id": 87,
      "bgColor": "rgb(255, 128, 153)"
    },
    {
      "product_code": "DOVE DG PHHT 170g/325g",
      "qty": 0,
      "id": 88,
      "bgColor": "rgb(12, 150, 156)"
    },
    {
      "product_code": "Pond kem dưỡng chống lão hoá ban đêm 45g",
      "qty": 0,
      "id": 89,
      "bgColor": "rgb(142, 170, 224)"
    },
    {
      "product_code": "LIFEBUOY ST Thảo Dược & Hoa Sen CHAI CŨ 800g/200ml",
      "qty": 0,
      "id": 90,
      "bgColor": "rgb(0, 159, 0)"
    },
    {
      "product_code": "Old_DOVE ST hoa anh đào 500g/900g",
      "qty": 0,
      "id": 91,
      "bgColor": "rgb(255, 128, 128)"
    },
    {
      "product_code": "LIFEBUOY XP Mát Lạnh Sảng Khoái 90g/125g",
      "qty": 0,
      "id": 92,
      "bgColor": "rgb(241, 145, 109)"
    },
    {
      "product_code": "KNORR nước mắm ngon tròn vị chai 750ml",
      "qty": 0,
      "id": 93,
      "bgColor": "rgb(68, 23, 78)"
    },
    {
      "product_code": "Old_DOVE DG PHHT 170g/325g",
      "qty": 0,
      "id": 94,
      "bgColor": "rgb(102, 34, 73)"
    },
    {
      "product_code": "TRESEMME DG Keratin Smooth 340g/640g/850g",
      "qty": 0,
      "id": 95,
      "bgColor": "rgb(24, 26, 47)"
    },
    {
      "product_code": "Old_CLEAR 48h 630g/880g",
      "qty": 0,
      "id": 96,
      "bgColor": "rgb(36, 46, 73)"
    },
    {
      "product_code": "LIFEBUOY XP Thiên Nhiên 90g/125g",
      "qty": 0,
      "id": 97,
      "bgColor": "rgb(180, 129, 45)"
    },
    {
      "product_code": "LIFEBUOY NRT Chanh Khử Mùi Chai 180g/450g",
      "qty": 0,
      "id": 98,
      "bgColor": "rgb(84, 22, 43)"
    },
    {
      "product_code": "Old_DOVE DX PHHT 170g/320g",
      "qty": 0,
      "id": 99,
      "bgColor": "rgb(13, 30, 76)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 1kg",
      "qty": 0,
      "id": 100,
      "bgColor": "rgb(95, 126, 162)"
    },
    {
      "product_code": "Old_PS KDR Trà Xanh 180g/230g",
      "qty": 0,
      "id": 101,
      "bgColor": "rgb(38, 65, 94)"
    },
    {
      "product_code": "PS KDR Banking Soda & Hương Thảo 180g/230g",
      "qty": 0,
      "id": 102,
      "bgColor": "rgb(11, 27, 50)"
    },
    {
      "product_code": "KNORR nước mắm ngon tròn vị chai 242ml",
      "qty": 0,
      "id": 103,
      "bgColor": "rgb(3, 47, 48)"
    },
    {
      "product_code": "CLEAR active cool bạc hà 630g",
      "qty": 0,
      "id": 104,
      "bgColor": "rgb(107, 163, 190)"
    },
    {
      "product_code": "SUNLIGHT NRC Chanh100 chai 750g",
      "qty": 0,
      "id": 105,
      "bgColor": "rgb(25, 48, 92)"
    },
    {
      "product_code": "CLOSEUP BCR",
      "qty": 0,
      "id": 106,
      "bgColor": "rgb(65, 56, 97)"
    },
    {
      "product_code": "LUX XP Hồng pháp 105g",
      "qty": 0,
      "id": 107,
      "bgColor": "rgb(174, 125, 172)"
    },
    {
      "product_code": "Pond SRM dưỡng sáng đều màu 100g",
      "qty": 0,
      "id": 108,
      "bgColor": "rgb(21, 0, 22)"
    },
    {
      "product_code": "Old_CLEAR Mát Lạnh Bạc Hà 170g/340g",
      "qty": 0,
      "id": 109,
      "bgColor": "rgb(41, 16, 74)"
    },
    {
      "product_code": "Old_CLEAR Cool Sport Bạc Hà 630g/900g",
      "qty": 0,
      "id": 110,
      "bgColor": "rgb(132, 81, 98)"
    },
    {
      "product_code": "PS KDR GumExpert Trắng răng 100g",
      "qty": 0,
      "id": 111,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "LIFEBUOY ST Matcha & Khổ Qua CHAI CŨ 800g",
      "qty": 0,
      "id": 112,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "Old_DOVE DX Ngăn gãy rụng 170g/320g",
      "qty": 0,
      "id": 113,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "DOVE DG Ngăn gãy rụng 325g",
      "qty": 0,
      "id": 114,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 1.4kg",
      "qty": 0,
      "id": 115,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "Old_PS KDR Muối hồng hoa cúc 180g/230g",
      "qty": 0,
      "id": 116,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 1.4kg",
      "qty": 0,
      "id": 117,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 1.4kg",
      "qty": 0,
      "id": 118,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "LIFEBUOY ST Mát Lạnh Sảng Khoái CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 119,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "Old_Pond kem dưỡng sáng da ban đêm 45g",
      "qty": 0,
      "id": 120,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI CŨ 800g",
      "qty": 0,
      "id": 121,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "TRESEMME DX Keratin Smooth 480g/620g",
      "qty": 0,
      "id": 122,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI CŨ 250g",
      "qty": 0,
      "id": 123,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "CLEAR Warm Forest 170/320g",
      "qty": 0,
      "id": 124,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "VIM NT diệt khuẩn chai 500ml/880ml",
      "qty": 0,
      "id": 125,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "SUNLIGHT NLS hoa hạ bạc hà chai 1kg",
      "qty": 0,
      "id": 126,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "SUNSILK DG natural mềm mượt tỏa hương 650g",
      "qty": 0,
      "id": 127,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "Pond kem dưỡng sáng đều màu ban ngày 50g",
      "qty": 0,
      "id": 128,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "SUNLIGHT NRC lô hội chai 750g",
      "qty": 0,
      "id": 129,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "SUNLIGHT NLS hoa lily hương thảo chai 1kg",
      "qty": 0,
      "id": 130,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "LIFEBUOY NRT BVVT Túi 400g",
      "qty": 0,
      "id": 131,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "LIFEBUOY ST Muối hồng CHAI CŨ 800g",
      "qty": 0,
      "id": 132,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "Old_Pond kem dưỡng chống lão hoá ban ngày 45g",
      "qty": 0,
      "id": 133,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI CŨ 800g",
      "qty": 0,
      "id": 134,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "DOVE DG Hoa sen",
      "qty": 0,
      "id": 135,
      "bgColor": "rgb(10, 112, 117)"
    }
  ]

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

  UnileverList_PROMOTION: any[] = [
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 630g/880g",
      "qty": 0,
      "id": 1,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "PS KDR Ngừa Sâu Răng Vượt Trội 100g/180g/230g",
      "qty": 0,
      "id": 2,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "CLEAR Cool Sport Bạc Hà 630g/900g",
      "qty": 0,
      "id": 3,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "CLOSEUP KDR Thơm Mát Dài Lâu 140g/180g/230g",
      "qty": 0,
      "id": 4,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 650g/900g",
      "qty": 0,
      "id": 5,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "LIFEBUOY XP BVVT 90g/125g",
      "qty": 0,
      "id": 6,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "PS KDR Than Hoạt Tính 180g/230g",
      "qty": 0,
      "id": 7,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "CLEAR thảo dược cổ truyền 630g",
      "qty": 0,
      "id": 8,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "PS KDR Bảo Vệ 123 180g/230g",
      "qty": 0,
      "id": 9,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "PS KDR Trà Xanh 180g/230g",
      "qty": 0,
      "id": 10,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "LIFEBUOY DG dưỡng tóc óng ả 640g",
      "qty": 0,
      "id": 11,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "SUNSILK DG mềm mượt diệu kì 650g/900g",
      "qty": 0,
      "id": 12,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "PS BCR",
      "qty": 0,
      "id": 13,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "LIFEBUOY XP chăm sóc da với tinh chất sữa 90g/125g",
      "qty": 0,
      "id": 14,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "CLEAR thảo dược cổ truyền 140g/340g",
      "qty": 0,
      "id": 15,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "DOVE DG PHHT 640g/880g",
      "qty": 0,
      "id": 16,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "CLEAR 900g",
      "qty": 0,
      "id": 17,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "CLOSEUP KDR Tinh Thể Băng Tuyết 140g/180g/230g",
      "qty": 0,
      "id": 18,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "LIFEBUOY DG mềm mượt và kháng khuẩn 640g",
      "qty": 0,
      "id": 19,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "HAZELINE SRM Tràm Trà 50g/100g",
      "qty": 0,
      "id": 20,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "HAZELINE SRM Nghệ Hoa Cúc 50g/100g",
      "qty": 0,
      "id": 21,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 22,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "LIFEBUOY NRT BVVT Chai 180g/450g",
      "qty": 0,
      "id": 23,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "CLOSEUP KDR Dầu Quất 180g/230g",
      "qty": 0,
      "id": 24,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "CLEAR Warm Forest 600g/840g",
      "qty": 0,
      "id": 25,
      "bgColor": "rgb(10, 112, 117)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 26,
      "bgColor": "rgb(94, 145, 156)"
    },
    {
      "product_code": "CLOSEUP KDR Muối Biển 180g/230g",
      "qty": 0,
      "id": 27,
      "bgColor": "rgb(28, 143, 202)"
    },
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 170g/340g",
      "qty": 0,
      "id": 28,
      "bgColor": "rgb(27, 25, 49)"
    },
    {
      "product_code": "Pond SRM dưỡng sáng da Niasorcinol 50g/100g",
      "qty": 0,
      "id": 29,
      "bgColor": "rgb(82, 44, 93)"
    },
    {
      "product_code": "LIFEBUOY NRT Sữa Dưỡng Ẩm Chai 180g/450g",
      "qty": 0,
      "id": 30,
      "bgColor": "rgb(255, 130, 139)"
    },
    {
      "product_code": "Old_DOVE DG PHHT 640g/880g",
      "qty": 0,
      "id": 31,
      "bgColor": "rgb(3, 18, 47)"
    },
    {
      "product_code": "LUX XP Phong lan 105g",
      "qty": 0,
      "id": 32,
      "bgColor": "rgb(255, 128, 153)"
    },
    {
      "product_code": "Pond SRM than tre Activated Charcoal 50g/100g",
      "qty": 0,
      "id": 33,
      "bgColor": "rgb(12, 150, 156)"
    },
    {
      "product_code": "DOVE DG Ngăn gãy rụng 640g/880g",
      "qty": 0,
      "id": 34,
      "bgColor": "rgb(142, 170, 224)"
    },
    {
      "product_code": "HAZELINE ST Yến Mạch Dâu Tằm Chai 670g/800g/1kg",
      "qty": 0,
      "id": 35,
      "bgColor": "rgb(0, 159, 0)"
    },
    {
      "product_code": "CLEAR 48h 630g/880g",
      "qty": 0,
      "id": 36,
      "bgColor": "rgb(255, 128, 128)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 170g/320g",
      "qty": 0,
      "id": 37,
      "bgColor": "rgb(241, 145, 109)"
    },
    {
      "product_code": "HAZELINE ST Hoa Ly Chai 670g/800g/1kg",
      "qty": 0,
      "id": 38,
      "bgColor": "rgb(68, 23, 78)"
    },
    {
      "product_code": "LIFEBUOY ST Matcha & Khổ Qua Chai 800g",
      "qty": 0,
      "id": 39,
      "bgColor": "rgb(102, 34, 73)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 350g",
      "qty": 0,
      "id": 40,
      "bgColor": "rgb(24, 26, 47)"
    },
    {
      "product_code": "SUNSILK DG mềm mượt diệu kì 170g/320g",
      "qty": 0,
      "id": 41,
      "bgColor": "rgb(36, 46, 73)"
    },
    {
      "product_code": "LIFEBUOY DG dưỡng tóc óng ả 170g/320g",
      "qty": 0,
      "id": 42,
      "bgColor": "rgb(180, 129, 45)"
    },
    {
      "product_code": "SUNSILK DX óng mượt rạng ngời 170g/320g",
      "qty": 0,
      "id": 43,
      "bgColor": "rgb(84, 22, 43)"
    },
    {
      "product_code": "DOVE DX PHHT 170g/320g",
      "qty": 0,
      "id": 44,
      "bgColor": "rgb(13, 30, 76)"
    },
    {
      "product_code": "SUNSILK DX mềm mượt diệu kì 170g/320g",
      "qty": 0,
      "id": 45,
      "bgColor": "rgb(95, 126, 162)"
    },
    {
      "product_code": "LIFEBUOY ST Thảo Dược & Hoa Sen Chai 800g",
      "qty": 0,
      "id": 46,
      "bgColor": "rgb(38, 65, 94)"
    },
    {
      "product_code": "CLOSEUP KDR Than Hoạt Tính 180g/230g",
      "qty": 0,
      "id": 47,
      "bgColor": "rgb(11, 27, 50)"
    },
    {
      "product_code": "Pond SRM chống lão hoá 100g",
      "qty": 0,
      "id": 48,
      "bgColor": "rgb(3, 47, 48)"
    },
    {
      "product_code": "Old_Pond SRM than tre Activated Charcoal 50g/100g",
      "qty": 0,
      "id": 49,
      "bgColor": "rgb(107, 163, 190)"
    },
    {
      "product_code": "HAZELINE ST Matcha Lựu Đỏ Chai 670g/800g/1kg",
      "qty": 0,
      "id": 50,
      "bgColor": "rgb(25, 48, 92)"
    },
    {
      "product_code": "HAZELINE ST Hoa Bưởi Chai 800g",
      "qty": 0,
      "id": 51,
      "bgColor": "rgb(65, 56, 97)"
    },
    {
      "product_code": "BESTFOODS vị xương ống & tuỷ 1kg/2kg",
      "qty": 0,
      "id": 52,
      "bgColor": "rgb(174, 125, 172)"
    },
    {
      "product_code": "LUX ST Hoa thiên điểu 570g",
      "qty": 0,
      "id": 53,
      "bgColor": "rgb(21, 0, 22)"
    },
    {
      "product_code": "LIFEBUOY XP Matcha & Khổ Qua 90g/125g",
      "qty": 0,
      "id": 54,
      "bgColor": "rgb(41, 16, 74)"
    },
    {
      "product_code": "Old_PS KDR Than hoạt tính 180g/230g",
      "qty": 0,
      "id": 55,
      "bgColor": "rgb(132, 81, 98)"
    },
    {
      "product_code": "LUX ST Phong lan Chai 570g",
      "qty": 0,
      "id": 56,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "CLEAR Cool Sport Bạc Hà 170g/340g",
      "qty": 0,
      "id": 57,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "SUNSILK DX óng mượt rạng ngời 640g",
      "qty": 0,
      "id": 58,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "SUNSILK DG natural dưỡng ngăn gãy rụng 650g",
      "qty": 0,
      "id": 59,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "PS KDR Muối Hồng Hoa Cúc 180g/230g",
      "qty": 0,
      "id": 60,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "DOVE DX PHHT 610g",
      "qty": 0,
      "id": 61,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "CLEAR Botanique 9 thảo dược quý 630g/900g",
      "qty": 0,
      "id": 62,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "KNORR Thịt thăn,xương ống & tuỷ 50g/170g/400g/900g/1.2kg",
      "qty": 0,
      "id": 63,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "Pond kem dưỡng sáng da ban ngày 30g/45g",
      "qty": 0,
      "id": 64,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "CLEAR Deep Ocean 600g/840g",
      "qty": 0,
      "id": 65,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "Old_Pond SRM dưỡng sáng da Niasorcinol 50g/100g",
      "qty": 0,
      "id": 66,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "DOVE DX Ngăn gãy rụng 170g/320g",
      "qty": 0,
      "id": 67,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "Old_DOVE ST dưỡng ẩm 500g/900g",
      "qty": 0,
      "id": 68,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "Pond kem dưỡng sáng da ban đêm 30g/45g",
      "qty": 0,
      "id": 69,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "SUNSILK DX natural dưỡng ngăn gãy rụng 320g",
      "qty": 0,
      "id": 70,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 1kg/1.1kg",
      "qty": 0,
      "id": 71,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "Old_DOVE DG Ngăn gãy rụng 640g/880g",
      "qty": 0,
      "id": 72,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "VASELINE SDT dưỡng da ban ngày 330ml",
      "qty": 0,
      "id": 73,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "KNORR hạt nêm nấm hương Organic gói 50/170/380g",
      "qty": 0,
      "id": 74,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "PS KDR Bé Ngoan 35g",
      "qty": 0,
      "id": 75,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 350g",
      "qty": 0,
      "id": 76,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "SUNSILK DX mềm mượt diệu kì 640g",
      "qty": 0,
      "id": 77,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "CLEAR Deep Cleanse 630g/900g",
      "qty": 0,
      "id": 78,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "DOVE ST dưỡng ẩm 500g/900g",
      "qty": 0,
      "id": 79,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "Old_DOVE DX PHHT 610g",
      "qty": 0,
      "id": 80,
      "bgColor": "rgb(10, 112, 117)"
    },
    {
      "product_code": "HAZELINE SRM Yến Mạch Dâu Tằm 50g/100g",
      "qty": 0,
      "id": 81,
      "bgColor": "rgb(94, 145, 156)"
    },
    {
      "product_code": "Pond kem dưỡng chống lão hoá ban ngày 45g",
      "qty": 0,
      "id": 82,
      "bgColor": "rgb(28, 143, 202)"
    },
    {
      "product_code": "CLEAR Hoa anh đào 630g",
      "qty": 0,
      "id": 83,
      "bgColor": "rgb(27, 25, 49)"
    },
    {
      "product_code": "VASELINE SDT dưỡng da ban đêm 330ml",
      "qty": 0,
      "id": 84,
      "bgColor": "rgb(82, 44, 93)"
    },
    {
      "product_code": "Old_CLEAR Mát Lạnh Bạc Hà 630g/880g",
      "qty": 0,
      "id": 85,
      "bgColor": "rgb(255, 130, 139)"
    },
    {
      "product_code": "VASELINE SDT chống nắng SPF 50+ TUÝP 330ml/70ml",
      "qty": 0,
      "id": 86,
      "bgColor": "rgb(3, 18, 47)"
    },
    {
      "product_code": "DOVE ST hoa anh đào 500g/900g",
      "qty": 0,
      "id": 87,
      "bgColor": "rgb(255, 128, 153)"
    },
    {
      "product_code": "DOVE DG PHHT 170g/325g",
      "qty": 0,
      "id": 88,
      "bgColor": "rgb(12, 150, 156)"
    },
    {
      "product_code": "Pond kem dưỡng chống lão hoá ban đêm 45g",
      "qty": 0,
      "id": 89,
      "bgColor": "rgb(142, 170, 224)"
    },
    {
      "product_code": "LIFEBUOY ST Thảo Dược & Hoa Sen CHAI CŨ 800g/200ml",
      "qty": 0,
      "id": 90,
      "bgColor": "rgb(0, 159, 0)"
    },
    {
      "product_code": "Old_DOVE ST hoa anh đào 500g/900g",
      "qty": 0,
      "id": 91,
      "bgColor": "rgb(255, 128, 128)"
    },
    {
      "product_code": "LIFEBUOY XP Mát Lạnh Sảng Khoái 90g/125g",
      "qty": 0,
      "id": 92,
      "bgColor": "rgb(241, 145, 109)"
    },
    {
      "product_code": "KNORR nước mắm ngon tròn vị chai 750ml",
      "qty": 0,
      "id": 93,
      "bgColor": "rgb(68, 23, 78)"
    },
    {
      "product_code": "Old_DOVE DG PHHT 170g/325g",
      "qty": 0,
      "id": 94,
      "bgColor": "rgb(102, 34, 73)"
    },
    {
      "product_code": "TRESEMME DG Keratin Smooth 340g/640g/850g",
      "qty": 0,
      "id": 95,
      "bgColor": "rgb(24, 26, 47)"
    },
    {
      "product_code": "Old_CLEAR 48h 630g/880g",
      "qty": 0,
      "id": 96,
      "bgColor": "rgb(36, 46, 73)"
    },
    {
      "product_code": "LIFEBUOY XP Thiên Nhiên 90g/125g",
      "qty": 0,
      "id": 97,
      "bgColor": "rgb(180, 129, 45)"
    },
    {
      "product_code": "LIFEBUOY NRT Chanh Khử Mùi Chai 180g/450g",
      "qty": 0,
      "id": 98,
      "bgColor": "rgb(84, 22, 43)"
    },
    {
      "product_code": "Old_DOVE DX PHHT 170g/320g",
      "qty": 0,
      "id": 99,
      "bgColor": "rgb(13, 30, 76)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI MỚI 1kg",
      "qty": 0,
      "id": 100,
      "bgColor": "rgb(95, 126, 162)"
    },
    {
      "product_code": "Old_PS KDR Trà Xanh 180g/230g",
      "qty": 0,
      "id": 101,
      "bgColor": "rgb(38, 65, 94)"
    },
    {
      "product_code": "PS KDR Banking Soda & Hương Thảo 180g/230g",
      "qty": 0,
      "id": 102,
      "bgColor": "rgb(11, 27, 50)"
    },
    {
      "product_code": "KNORR nước mắm ngon tròn vị chai 242ml",
      "qty": 0,
      "id": 103,
      "bgColor": "rgb(3, 47, 48)"
    },
    {
      "product_code": "CLEAR active cool bạc hà 630g",
      "qty": 0,
      "id": 104,
      "bgColor": "rgb(107, 163, 190)"
    },
    {
      "product_code": "SUNLIGHT NRC Chanh100 chai 750g",
      "qty": 0,
      "id": 105,
      "bgColor": "rgb(25, 48, 92)"
    },
    {
      "product_code": "CLOSEUP BCR",
      "qty": 0,
      "id": 106,
      "bgColor": "rgb(65, 56, 97)"
    },
    {
      "product_code": "LUX XP Hồng pháp 105g",
      "qty": 0,
      "id": 107,
      "bgColor": "rgb(174, 125, 172)"
    },
    {
      "product_code": "Pond SRM dưỡng sáng đều màu 100g",
      "qty": 0,
      "id": 108,
      "bgColor": "rgb(21, 0, 22)"
    },
    {
      "product_code": "Old_CLEAR Mát Lạnh Bạc Hà 170g/340g",
      "qty": 0,
      "id": 109,
      "bgColor": "rgb(41, 16, 74)"
    },
    {
      "product_code": "Old_CLEAR Cool Sport Bạc Hà 630g/900g",
      "qty": 0,
      "id": 110,
      "bgColor": "rgb(132, 81, 98)"
    },
    {
      "product_code": "PS KDR GumExpert Trắng răng 100g",
      "qty": 0,
      "id": 111,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "LIFEBUOY ST Matcha & Khổ Qua CHAI CŨ 800g",
      "qty": 0,
      "id": 112,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "Old_DOVE DX Ngăn gãy rụng 170g/320g",
      "qty": 0,
      "id": 113,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "DOVE DG Ngăn gãy rụng 325g",
      "qty": 0,
      "id": 114,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "CLEAR Mát Lạnh Bạc Hà 1.4kg",
      "qty": 0,
      "id": 115,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "Old_PS KDR Muối hồng hoa cúc 180g/230g",
      "qty": 0,
      "id": 116,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI MỚI 1.4kg",
      "qty": 0,
      "id": 117,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "SUNSILK DG óng mượt rạng ngời 1.4kg",
      "qty": 0,
      "id": 118,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "LIFEBUOY ST Mát Lạnh Sảng Khoái CHAI MỚI 800g/888g",
      "qty": 0,
      "id": 119,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "Old_Pond kem dưỡng sáng da ban đêm 45g",
      "qty": 0,
      "id": 120,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "LIFEBUOY ST sữa dưỡng ẩm CHAI CŨ 800g",
      "qty": 0,
      "id": 121,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "TRESEMME DX Keratin Smooth 480g/620g",
      "qty": 0,
      "id": 122,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI CŨ 250g",
      "qty": 0,
      "id": 123,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "CLEAR Warm Forest 170/320g",
      "qty": 0,
      "id": 124,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "VIM NT diệt khuẩn chai 500ml/880ml",
      "qty": 0,
      "id": 125,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "SUNLIGHT NLS hoa hạ bạc hà chai 1kg",
      "qty": 0,
      "id": 126,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "SUNSILK DG natural mềm mượt tỏa hương 650g",
      "qty": 0,
      "id": 127,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "Pond kem dưỡng sáng đều màu ban ngày 50g",
      "qty": 0,
      "id": 128,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "SUNLIGHT NRC lô hội chai 750g",
      "qty": 0,
      "id": 129,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "SUNLIGHT NLS hoa lily hương thảo chai 1kg",
      "qty": 0,
      "id": 130,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "LIFEBUOY NRT BVVT Túi 400g",
      "qty": 0,
      "id": 131,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "LIFEBUOY ST Muối hồng CHAI CŨ 800g",
      "qty": 0,
      "id": 132,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "Old_Pond kem dưỡng chống lão hoá ban ngày 45g",
      "qty": 0,
      "id": 133,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "LIFEBUOY ST BVVT CHAI CŨ 800g",
      "qty": 0,
      "id": 134,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "DOVE DG Hoa sen",
      "qty": 0,
      "id": 135,
      "bgColor": "rgb(10, 112, 117)"
    }
  ]

  length_list_bgColor: number = this.list_bgColor.length
  Ken_demo: any[] = [
    {
      "product_code": "Tiger lon cao 250ml/330ml",
      "qty": 0,
      "id": 1,
      "bgColor": "rgb(78, 128, 127)"
    },
    {
      "product_code": "Tiger crystal lon cao 250ml/330ml",
      "qty": 0,
      "id": 2,
      "bgColor": "rgb(255, 76, 76)"
    },
    {
      "product_code": "Bia Việt lon 330ml",
      "qty": 0,
      "id": 3,
      "bgColor": "rgb(39, 77, 96)"
    },
    {
      "product_code": "Heineken Silver lon 250ml/330ml",
      "qty": 0,
      "id": 4,
      "bgColor": "rgb(94, 121, 202)"
    },
    {
      "product_code": "Tiger crystal chai 330ml",
      "qty": 0,
      "id": 5,
      "bgColor": "rgb(165, 76, 202)"
    },
    {
      "product_code": "Larue Smooth lon 330ml",
      "qty": 0,
      "id": 6,
      "bgColor": "rgb(188, 165, 72)"
    },
    {
      "product_code": "Heineken Silver lon CUP 250ml/330ml",
      "qty": 0,
      "id": 7,
      "bgColor": "rgb(255, 179, 50)"
    },
    {
      "product_code": "Heineken lon 250ml/330ml",
      "qty": 0,
      "id": 8,
      "bgColor": "rgb(133, 58, 0)"
    },
    {
      "product_code": "Larue Special lon 330ml",
      "qty": 0,
      "id": 9,
      "bgColor": "rgb(236, 104, 104)"
    },
    {
      "product_code": "Bia Việt chai 355ml",
      "qty": 0,
      "id": 10,
      "bgColor": "rgb(128, 185, 128)"
    },
    {
      "product_code": "Tiger chai 330ml",
      "qty": 0,
      "id": 11,
      "bgColor": "rgb(0, 188, 178)"
    },
    {
      "product_code": "Larue blue 330ml",
      "qty": 0,
      "id": 12,
      "bgColor": "rgb(76, 140, 174)"
    },
    {
      "product_code": "Bivina lon 330ml",
      "qty": 0,
      "id": 13,
      "bgColor": "rgb(200, 120, 120)"
    },
    {
      "product_code": "Old_Tiger lon cao 250ml/330ml",
      "qty": 0,
      "id": 14,
      "bgColor": "rgb(113, 161, 210)"
    },
    {
      "product_code": "Heineken Silver chai 330ml",
      "qty": 0,
      "id": 15,
      "bgColor": "rgb(255, 128, 191)"
    },
    {
      "product_code": "Heineken Silver lon 250ml",
      "qty": 0,
      "id": 16,
      "bgColor": "rgb(163, 64, 84)"
    },
    {
      "product_code": "Heineken chai 330ml",
      "qty": 0,
      "id": 17,
      "bgColor": "rgb(200, 159, 128)"
    },
    {
      "product_code": "Larue blue chai 355ml",
      "qty": 0,
      "id": 18,
      "bgColor": "rgb(94, 159, 107)"
    },
    {
      "product_code": "Heineken 0.0 lon 330ml",
      "qty": 0,
      "id": 19,
      "bgColor": "rgb(100, 97, 148)"
    },
    {
      "product_code": "Tiger lon 250ml",
      "qty": 0,
      "id": 20,
      "bgColor": "rgb(0, 115, 103)"
    },
    {
      "product_code": "Heineken Silver lon CUP 250ml",
      "qty": 0,
      "id": 21,
      "bgColor": "rgb(84, 140, 110)"
    },
    {
      "product_code": "Old_Tiger crystal lon cao 250ml/330ml",
      "qty": 0,
      "id": 22,
      "bgColor": "rgb(105, 59, 255)"
    },
    {
      "product_code": "Strongbow Táo Vàng lon 320ml/330ml",
      "qty": 0,
      "id": 23,
      "bgColor": "rgb(91, 82, 129)"
    },
    {
      "product_code": "Strongbow Dâu Đỏ lon 320ml/330ml",
      "qty": 0,
      "id": 24,
      "bgColor": "rgb(255, 101, 174)"
    },
    {
      "product_code": "Strongbow Nho Đen lon 320ml/330ml",
      "qty": 0,
      "id": 25,
      "bgColor": "rgb(10, 112, 117)"
    },
    {
      "product_code": "Tiger crystal lon 250ml",
      "qty": 0,
      "id": 26,
      "bgColor": "rgb(94, 145, 156)"
    },
    {
      "product_code": "Tiger platinum lon 330ml",
      "qty": 0,
      "id": 27,
      "bgColor": "rgb(28, 143, 202)"
    },
    {
      "product_code": "Bivina chai 450ml",
      "qty": 0,
      "id": 28,
      "bgColor": "rgb(27, 25, 49)"
    },
    {
      "product_code": "KenSil_Lon_250ml",
      "qty": 0,
      "id": 29,
      "bgColor": "rgb(82, 44, 93)"
    },
    {
      "product_code": "Heineken lon 250ml",
      "qty": 0,
      "id": 30,
      "bgColor": "rgb(255, 130, 139)"
    },
    {
      "product_code": "THUNG_Heineken Sliver Cool Pack lon 250ml/330ml",
      "qty": 0,
      "id": 31,
      "bgColor": "rgb(3, 18, 47)"
    },
    {
      "product_code": "Edelweiss chai 330ml",
      "qty": 0,
      "id": 32,
      "bgColor": "rgb(255, 128, 153)"
    },
    {
      "product_code": "Edelweiss lon 330ml",
      "qty": 0,
      "id": 33,
      "bgColor": "rgb(12, 150, 156)"
    },
    {
      "product_code": "Tiger Soju Mận lon 330ml",
      "qty": 0,
      "id": 34,
      "bgColor": "rgb(142, 170, 224)"
    },
    {
      "product_code": "Tiger Soju Mận chai 330ml",
      "qty": 0,
      "id": 35,
      "bgColor": "rgb(0, 159, 0)"
    },
    {
      "product_code": "Strongbow Đào lon 320ml/330ml",
      "qty": 0,
      "id": 36,
      "bgColor": "rgb(255, 128, 128)"
    },
    {
      "product_code": "Tiger lon thấp 330ml",
      "qty": 0,
      "id": 37,
      "bgColor": "rgb(241, 145, 109)"
    },
    {
      "product_code": "Heineken lon CUP 250ml/330ml",
      "qty": 0,
      "id": 38,
      "bgColor": "rgb(68, 23, 78)"
    },
    {
      "product_code": "19_Tiger_lon_thap",
      "qty": 0,
      "id": 39,
      "bgColor": "rgb(102, 34, 73)"
    },
    {
      "product_code": "Strongbow Táo Vàng chai 330ml",
      "qty": 0,
      "id": 40,
      "bgColor": "rgb(24, 26, 47)"
    },
    {
      "product_code": "Tiger Soju Dưa Lưới chai 330ml",
      "qty": 0,
      "id": 41,
      "bgColor": "rgb(36, 46, 73)"
    },
    {
      "product_code": "Tiger Soju Dưa Lưới lon 330ml",
      "qty": 0,
      "id": 42,
      "bgColor": "rgb(180, 129, 45)"
    },
    {
      "product_code": "Heineken lon TET 250ml/330ml",
      "qty": 0,
      "id": 43,
      "bgColor": "rgb(84, 22, 43)"
    },
    {
      "product_code": "Strongbow Kiwi Thanh Long lon 320ml/330ml",
      "qty": 0,
      "id": 44,
      "bgColor": "rgb(13, 30, 76)"
    },
    {
      "product_code": "Strongbow Dâu Đỏ chai 330ml",
      "qty": 0,
      "id": 45,
      "bgColor": "rgb(95, 126, 162)"
    },
    {
      "product_code": "Loc_Ken0",
      "qty": 0,
      "id": 46,
      "bgColor": "rgb(38, 65, 94)"
    }
  ]


  productList: any = [
    this.pepsiList,
    // [],
    this.UnileverList,
    this.Ken_demo,
    this.pepsiList,
    [],
    this.pepsiList_all,
    this.UnileverList_PROMOTION
  ]
  subscription!: Subscription;
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
