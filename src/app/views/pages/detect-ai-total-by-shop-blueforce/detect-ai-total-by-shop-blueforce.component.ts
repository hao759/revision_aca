import { Component } from '@angular/core';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { brandSet, cilArrowCircleTop, cilFile, cilTrash, flagSet, freeSet } from '@coreui/icons';
import { Pf } from '../../../helper/pf';
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
  IColumn,
  IItem,
  CollapseDirective,
  TemplateIdDirective,
  TextColorDirective,
  BadgeComponent,
  AlignDirective,
  ThemeDirective,
  CarouselComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  CarouselCaptionComponent,
  CarouselControlComponent,
  BorderDirective,
  CarouselModule,
  ModalFooterComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalTitleDirective,

  ButtonCloseDirective,
  ModalBodyComponent,
  ToasterHostDirective,
  ModalModule,
  ToastModule,
} from '@coreui/angular-pro';
import { IDataSync_2, IDetectAIDataDetail } from '../../Interface/IDetectAI';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { DetectAIService } from '../../../services/detectai.service';
import { DetectAiTotalByShopComponentService } from '../detect-ai-total-by-shop/detect-ai-total-by-shop.component.service';
import { EnumStatus } from '../../../Core/_enum';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-detect-ai-total-by-shop-umer',
  imports: [RowComponent,
    ColComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    TableActiveDirective,
    TableColorDirective,
    DatePickerComponent_1,
    ModalModule,
    CommonModule,
    ToastModule,
    SmartPaginationModule,
    SmartTableComponent,
    SmartTableModule,
    SmartPaginationModule,
    SmartTableModule,
    BadgeModule,
    RouterLink,
    CollapseDirective,
    TemplateIdDirective,
    TextColorDirective,
    BadgeComponent,
    AlignDirective,
    ThemeDirective,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    BorderDirective,
    CommonModule,
    CarouselModule,
    // ReactiveFormsModule,
    FormsModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    DatePipe,
    LoadingBarHttpClientModule,
    NgSelectModule,
    JsonPipe,],
  templateUrl: './detect-ai-total-by-shop-blueforce.component.html',
  styleUrl: './detect-ai-total-by-shop-blueforce.component.scss'
})
export class DetectAiTotalByShopBlueforceComponent {


  constructor(
    private service: DetectAiTotalByShopComponentService,
    public iconSet: IconSetService,
    private sanitizer: DomSanitizer,
    private detectAIService: DetectAIService,
  ) {

    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet, cilTrash, cilArrowCircleTop, cilFile };
    this.sanitizer_var = sanitizer
  }
  sanitizer_var: any
  public calendarFromDate = new Date(Date.now());
  public calendarToDate = new Date(Date.now());
  from_date: Date = new Date('2025-07-01');
  // from_date: Date = new Date();
  to_date: Date = new Date();
  isLoading: any = 'false'
  listShop: any = []
  filter(currentPage1: any) {
    this.listShop=[]
    this.service.GetAll_TotalByShop(Pf.DateToInt(this.from_date!), Pf.DateToInt(this.to_date!), 31, currentPage1).subscribe((data: any) => {
      this.totalPages = Math.ceil(data.data[0].TotalRows / 20);
      this.listShop = data.data
    })
  }
  totalPages = 2
  details_visible = Object.create({});

  columnShop = [
    {
      key: 'show',
      label: '',
      _style: { width: '3%' },
    },
    { key: 'RowNumber', label: '#', _style: { width: '5%' }, },
    { key: 'shop_code', label: 'Mã Shop', filter: true },
    { key: 'shop_name', label: 'Tên Shop' },
    { key: 'shop_address', label: 'Địa chỉ', },
    // {
    //   key: 'image',
    //   label: 'Hình ảnh',
    //   _style: { width: '20%' },
    //   filter: false,
    //   sorter: false
    // },
    // {
    //   key: 'sumbc_shop',
    //   label: 'Tổng báo cáo',
    //   _style: { width: '5%' },
    //   filter: false,
    //   sorter: false
    // }
  ];
  listSKU:any = [];

  ngOnInit(): void {
    this.getSKULabel()
    

  }
  getSKULabel() {
    this.detectAIService.
      ewo_detect_ai_getSkulabel(
        31
      )
      .subscribe((data: any) => {
        if (data.result == EnumStatus.ok) {
          this.listSKU = data.data.sort((a: any, b: any) => a.sku_name.localeCompare(b.sku_name));
        }
      }, (error: any) => {
        this.message = 'Lỗi nhãn ...!Đang gọi lại:      ' + error.message;
        if (this.visible == false)
          this.visible = !this.visible;

        setTimeout(() => {
          this.getSKULabel()
        }, 1000);

      })
  }

  columnProduct = [
    { key: 'sku_id', label: '#', _style: { width: '5%' }, },
    { key: 'sku_code', label: 'Mã sản phẩm', filter: true },
    { key: 'sku_name', label: 'Tên sản phẩm', filter: true },
    { key: 'sumAI', label: 'Tổng kết quả AI', },
    {
      key: 'sumQC',
      label: 'Tổng kết quả QC',
      _style: { width: '20%' },
      filter: false,
      sorter: false
    },
    // {
    //   key: 'sumbc_shop',
    //   label: 'Tổng báo cáo',
    //   _style: { width: '5%' },
    //   filter: false,
    //   sorter: false
    // }
  ];

  dataSync: IDataSync_2[] = [];
  async toggleDetails(item: any) {
    if (!this.details_visible[item.shop_code]) {
      this.details_visible[item.shop_code] = { ...item };
    }
    this.details_visible[item.shop_code].visible =
      !this.details_visible[item.shop_code].visible;
    if (this.details_visible[item.shop_code].visible) {
      await this.service.GetDetail_Sum_TotalByShop(Pf.DateToInt(this.from_date!), Pf.DateToInt(this.to_date!), 31, item.shop_code).subscribe((datafinal: any) => {
        const photoDetails = datafinal.data?.detectDetails.map((item: any) => {
          if (item.detect_url)
            item.detect_url = this.sanitizer_var.bypassSecurityTrustResourceUrl(item.detect_url)

          return {
            ...item,
            detect_url: item.detect_url
          }
        });
        this.details_visible[item.shop_code].productsDetails =
          datafinal.data?.productsDetails;
        this.details_visible[item.shop_code].detectDetails = photoDetails;
        // console.log('detectDetails', this.details_visible[item.shop_code].detectDetails);



        // if (datafinal.data?.dataSync && datafinal.data?.dataSync.length > 0) {
        //   datafinal.data?.dataSync.forEach((data: any) => {
        //     if (data.sumbc_shop) {
        //       let dataItem: IDataSync_2 = {
        //         shop_code: data.shop_code,
        //         shop_name: data.shop_name,
        //         sumbc_shop: data.sumbc_shop,
        //       };
        //       let index = this.dataSync.findIndex(
        //         (element: IDataSync_2) =>
        //           element.shop_code == data.AuditId &&
        //           element.shop_name == data.ProductId
        //       );
        //       if (index >= 0) {
        //         this.dataSync[index].sumbc_shop = dataItem.sumbc_shop;
        //       } else {
        //         this.dataSync.push(dataItem);
        //       }
        //     }
        //   });
        // }

      });
    }
  }


  // downloadImage(imageUrl: any) {
  //   // const fileName = 'downloaded-image.jpg';
  //   console.log("imageUrlimageUrl", imageUrl)
  //   const currentTime = new Date();
  //   const filename =
  //     'image_download_' +
  //     // file_name +
  //     currentTime.getFullYear().toString() +
  //     (currentTime.getMonth() + 1) +
  //     currentTime.getDate() +
  //     currentTime
  //       .toLocaleTimeString()
  //       .replace(/[ ]|[,]|[:]/g, '')
  //       .trim() + '.' + imageUrl.split('.').pop();;

  //   fetch(imageUrl)
  //     .then(response => response.blob())
  //     .then(blob => {
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = filename;
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //       window.URL.revokeObjectURL(url); // Cleanup
  //     })
  //     .catch(error => console.error('Error downloading the image:', error));
  // }

      async SaveDetail_Total(listData: any[],shop_code:any) {//, fulldata: any
  console.log("SaveDetail_Total",listData,shop_code, Pf.DateToInt(this.from_date!))
      // listData.forEach((el) => {
      //   if (!el.sku_facing && el.sku_facing != 0) {
      //     el.sku_facing = el.sku_facing_ai;
      //   }
      // });
      // this.visible = !this.visible;
      const data = await this.AwaitSave_Total(listData,shop_code,Pf.DateToInt(this.from_date!));
    }

    
async AwaitSave_Total(listData: any[],shop_code:any,auditdate:any) {
    this.message = '';
    var data: any = {}
    data.listData = listData

    return new Promise<any>((resolve, reject) => {
      this.detectAIService
        .ewo_detectai_detail_save_TotalByshop(data,shop_code,auditdate,31)
        .subscribe((data: any) => {
          if (data.result == EnumStatus.ok) {
            // this.message = 'Lưu thành công...!';
             this.toggleToast("Lưu thành công", "bg-success");
            // this.toggleLiveDemo2()
            // listData.forEach((data: any) => {
            //   let dataItem: IDataSync_2 = {
            //     AuditId: data.audit_id,
            //     ProductId: Number(data.sku_code),
            //     Facing: data.sku_facing,
            //   };
            //   let index = this.dataSync.findIndex(
            //     (element: IDataSync_2) =>
            //       element.AuditId == data.audit_id &&
            //       element.ProductId == Number(data.sku_code)
            //   );
            //   if (index >= 0) {
            //     this.dataSync[index].Facing = dataItem.Facing;
            //   } else {
            //     this.dataSync.push(dataItem);
            //   }
            // });
            resolve({ data });
          }
          resolve([]);
          reject(() => {
            this.message = 'Đã xảy ra lỗi...!';
          });
        });
    });
  }



    async SaveDetail(listData: any[]) {//, fulldata: any
  
      listData.forEach((el) => {
        if (!el.sku_facing && el.sku_facing != 0) {
          el.sku_facing = el.sku_facing_ai;
        }
      });
      this.visible = !this.visible;
      const data = await this.AwaitSave(listData);
    }
    async SaveNote(fulldata: any) {

      await this.detectAIService.DetectAI_update_note(fulldata.detect_id, fulldata.note, fulldata.resultQC).subscribe((data: any) => {
        if (data.data == 1) {
          this.message = 'Note thành công...!';
          this.visible = !this.visible;
        }
        else {
          this.message = 'Lỗi...!';
          this.visible = !this.visible;
        }
      }), (err: any) => {
        this.message = 'Lỗi...!' + err;
        this.visible = !this.visible;
      };
    }

async AwaitSave(listData: IDetectAIDataDetail[]) {
    this.message = '';
    var data: any = {}
    data.listData = listData

    return new Promise<any>((resolve, reject) => {
      this.detectAIService
        .ewo_detectai_detail_save(data)
        .subscribe((data: any) => {
          if (data.result == EnumStatus.ok) {
            // this.message = 'Lưu thành công...!';
            // this.toggleLiveDemo2()
             this.toggleToast("Lưu thành công", "bg-success");
            // listData.forEach((data: any) => {
            //   let dataItem: IDataSync_2 = {
            //     AuditId: data.audit_id,
            //     ProductId: Number(data.sku_code),
            //     Facing: data.sku_facing,
            //   };
            //   let index = this.dataSync.findIndex(
            //     (element: IDataSync_2) =>
            //       element.AuditId == data.audit_id &&
            //       element.ProductId == Number(data.sku_code)
            //   );
            //   if (index >= 0) {
            //     this.dataSync[index].Facing = dataItem.Facing;
            //   } else {
            //     this.dataSync.push(dataItem);
            //   }
            // });
            resolve({ data });
          }
          resolve([]);
          reject(() => {
            this.message = 'Đã xảy ra lỗi...!';
          });
        });
    });
  }
message:any
  downloadImage(imageUrl: string) {
    if (!imageUrl || typeof imageUrl !== 'string') {
      console.error('Invalid image URL:', imageUrl);
      return;
    }

    try {
      const currentTime = new Date();
      const timeStr = currentTime.toTimeString().split(' ')[0].replace(/:/g, '');
      const dateStr = currentTime.toISOString().slice(0, 10).replace(/-/g, '');
      const ext = new URL(imageUrl).pathname.split('.').pop()?.split('?')[0] || 'jpg';
      const filename = `image_download_${dateStr}_${timeStr}.${ext}`;

      fetch(imageUrl)
        .then(response => {
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          return response.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error(error.message || error);
          alert(error.message || 'Unknown error');
        });
    } catch (err) {
      console.error('Error parsing URL or downloading:', err);
    }
  }

  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;

  }
    toggleLiveDemo2() {
    this.visible2 = !this.visible2;

  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
    handleLiveDemoChange2(event: any) {
    this.visible2 = event;
  }
visible2:any
  handleSelectedImg(slide: any,handleSelectedImg:any) {
    this.selected_shop_code=handleSelectedImg
    console.log("handleSelectedImg",handleSelectedImg)
    localStorage.setItem("detect_id", slide.detect_id)
   this.getdetectDetail(slide.detect_id)

  }

  getdetectDetail(detect_id:any){
    this.selecteddetectDetect=null
 this.detectAIService.ewo_detectai_detail(detect_id).subscribe((data: any) => {
      this.selecteddetectDetect = data.data
      if (this.selecteddetectDetect?.photoDetails[0].src)
        this.selecteddetectDetect.photoDetails[0].src = this.sanitizer_var.bypassSecurityTrustResourceUrl(this.selecteddetectDetect?.photoDetails[0].src)
    })
  }

selected_shop_code:any
  selecteddetectDetect: any
  // selectedproductsDetails: any
  onSkuFacingChange(itemdata: any, newValue: number,selecteddetectDetect:any) {
console.log("itemdata",itemdata)
console.log("this.selecteddetectDetect",this.selecteddetectDetect)
console.log("details_visible", this.details_visible[this.selected_shop_code].productsDetails)
    // this.details_visible[this.selected_shop_code].productsDetails.forEach((item: any) => {
    this.selecteddetectDetect?.dataDetails.forEach((item: any) => {
      if (item.sku_id == itemdata.sku_id) {
        item.sku_facing = newValue
        console.log("OKOK")
        return;
      }
    })

  }
selectedSKU:any
    onSkuFacingChange_2(itemdata: any, newValue: number,shop_code:any) {
console.log("itemdata",itemdata)
console.log("shop_code", this.details_visible[shop_code])
    // this.details_visible[this.selected_shop_code].productsDetails.forEach((item: any) => {
    this.details_visible[shop_code]?.productsDetails.forEach((item: any) => {
      if (item.sku_id == itemdata.sku_id) {
        item.sumQC = newValue
        console.log("OKOK")
        return;
      }
    })

  }
  columnss = [
    { key: 'sku_id', label: '#', _style: { width: '5%' }, },
    { key: 'sku_code', label: 'Mã sản phẩm' },
    { key: 'sku_name', label: 'Tên sản phẩm' },
    { key: 'sku_facing_ai', label: 'Facing Detected', _style: { width: '5%' }, },
    {
      key: 'sku_facing',
      label: 'Facing',
      _style: { width: '20%' },
      filter: false,
      sorter: false
    },
    {
      key: 'actions',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false
    }
  ];

  toast = {
    visible_toast: false,
    message_toast: "xoa",
    background: "",
  }
    // visible_toast = false;
  // message_toast = "";

  toggleToast(message: string, background: string) {
    console.log("toast",message,background)
    this.toast.visible_toast = true;
    this.toast.background = background;
    this.toast.message_toast = message;
    setTimeout(() => {
      this.toast.visible_toast = false;
    }, 2000);
  }

    RemoveItemDetail(item: any) {
      console.log("item",item)
     let detect_id= localStorage.getItem("detect_id")
     this.detectAIService.ewo_detete_DetectAIDetail(
       31,
       item.detect_detail_id
      ).subscribe((data: any) => {
        this.toggleToast("Xóa thành công", "bg-success");
        this.getdetectDetail(detect_id)
        console.log("Xóa thành công")
      // this.message = 'Xóa thành công...!';
      // this.visible2 = !this.visible2;
    }, (error: any) => {
      this.message = 'Xóa lỗi: ' + error.message;
      this.visible2 = !this.visible2;
    })
  }

  openImageInNewWindow(imageUrl1: any, type: number) {
    const imageUrl = imageUrl1.changingThisBreaksApplicationSecurity;
    const newWindow = window.open('', '_blank');
    if (newWindow && type == 1) {
      newWindow.document.write(`
      <html>
        <head>
          <title>Image Viewer</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              overflow: hidden;
              background: #1E1E1E;
              cursor: grab;
            }
            body.dragging {
              cursor: grabbing;
            }
            .viewer-container {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            object {
              max-width: none;
              max-height: none;
              object-fit: contain;
              transform-origin: top left;
              transition: transform 0.05s ease-out;
              pointer-events: none;
            }
            .zoom-level {
              background: rgba(0,0,0,0.5);
              color: white;
              padding: 5px 10px;
              border-radius: 4px;
              position: fixed;
              top: 20px;
              right: 20px;
              font-family: sans-serif;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="viewer-container" id="container"></div>
          <div class="zoom-level" id="zoomLevel">100%</div>
          <script>
            const imageUrl = "${imageUrl}";
            const objectElement = document.createElement('object');
            objectElement.data = imageUrl;
            objectElement.id = 'image';
            objectElement.type = 'image/svg+xml';
            // objectElement.width = '100%';
            // objectElement.height = '100%';
            document.getElementById('container').appendChild(objectElement);

            const container = document.getElementById('container');
            const zoomLevel = document.getElementById('zoomLevel');
            let image = null;
            let scale = 1;
            let translateX = 0;
            let translateY = 0;
            const MAX_SCALE = 12;

            function updateTransform() {
              if (image) {
                image.style.transform = \`translate(\${translateX}px, \${translateY}px) scale(\${scale})\`;
                zoomLevel.textContent = \`\${Math.round(scale * 100)}%\`;
              }
            }

            // Mouse wheel zoom at cursor
            container.addEventListener('wheel', (e) => {
              e.preventDefault();
              if (!image) return;

              const rect = image.getBoundingClientRect();
              const mouseX = e.clientX - rect.left;
              const mouseY = e.clientY - rect.top;

              const prevScale = scale;
              const delta = e.deltaY > 0 ? -0.15 : 0.15;
              scale = Math.min(Math.max(0.1, scale + delta), MAX_SCALE);
              const scaleFactor = scale / prevScale;

              translateX -= (mouseX - translateX) * (scaleFactor - 1);
              translateY -= (mouseY - translateY) * (scaleFactor - 1);

              updateTransform();
            });

            // Dragging
            let isDragging = false;
            let dragStartX = 0;
            let dragStartY = 0;

            container.addEventListener('mousedown', (e) => {
              isDragging = true;
              dragStartX = e.clientX - translateX;
              dragStartY = e.clientY - translateY;
              document.body.classList.add('dragging');
            });

            container.addEventListener('mousemove', (e) => {
              if (!isDragging) return;
              translateX = e.clientX - dragStartX;
              translateY = e.clientY - dragStartY;
              updateTransform();
            });

            container.addEventListener('mouseup', () => {
              isDragging = false;
              document.body.classList.remove('dragging');
            });

            container.addEventListener('mouseleave', () => {
              isDragging = false;
              document.body.classList.remove('dragging');
            });

            objectElement.addEventListener('load', () => {
              image = objectElement;
              updateTransform();
            });
          </script>
        </body>
      </html>
    `);
    }
    if (newWindow && type == 2) {
      newWindow.document.write(`
    <html>
      <head>
        <title>Image Viewer</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: #1E1E1E;
            cursor: grab;
          }
          body.dragging {
            cursor: grabbing;
          }
          .viewer-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
          #image {
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: top left;
            transition: transform 0.05s ease-out;
            will-change: transform;
            pointer-events: none; /* ✅ FIX chuột dính ảnh */
          }
          .zoom-level {
            background: rgba(0,0,0,0.5);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            position: fixed;
            top: 20px;
            right: 20px;
            font-family: sans-serif;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="viewer-container" id="container">
          <img src="${imageUrl1}" id="image">
        </div>
        <div class="zoom-level" id="zoomLevel">100%</div>
        <script>
          const container = document.getElementById('container');
          const image = document.getElementById('image');
          const zoomLevel = document.getElementById('zoomLevel');

          let scale = 1;
          let translateX = 0;
          let translateY = 0;
          const MAX_SCALE = 12;

          function updateTransform() {
            image.style.transform = \`translate(\${translateX}px, \${translateY}px) scale(\${scale})\`;
            zoomLevel.textContent = \`\${Math.round(scale * 100)}%\`;
          }

          container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const rect = image.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const prevScale = scale;
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            scale = Math.min(Math.max(0.1, scale + delta), MAX_SCALE);
            const scaleFactor = scale / prevScale;

            translateX -= (mouseX - translateX) * (scaleFactor - 1);
            translateY -= (mouseY - translateY) * (scaleFactor - 1);

            updateTransform();
          });

          let isDragging = false;
          let dragStartX = 0;
          let dragStartY = 0;

          container.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragStartX = e.clientX - translateX;
            dragStartY = e.clientY - translateY;
            document.body.classList.add('dragging');
          });

          container.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            translateX = e.clientX - dragStartX;
            translateY = e.clientY - dragStartY;
            updateTransform();
          });

          container.addEventListener('mouseup', () => {
            isDragging = false;
            document.body.classList.remove('dragging');
          });

          container.addEventListener('mouseleave', () => {
            isDragging = false;
            document.body.classList.remove('dragging');
          });

          updateTransform();
        </script>
      </body>
    </html>
  `);
    }



  }

  // insertDetailSKU(){}
  currentPage: number = 1
  onPageChange(event: any) {
    this.currentPage = event;
    // console.log('Page :', this.currentPage)
    this.filter(this.currentPage);
  }
  
  sku_facing = 0;
  sku_id = 0;
  insertDetailSKU() {//item: any
    console.log(this.selectedSKU)
    console.log(this.sku_facing)
  let detect_id= localStorage.getItem("detect_id")
    this.detectAIService.ewo_detectai_inserDetail(
      31,
      detect_id,
      Number(this.selectedSKU),
      Number(this.sku_facing)
    ).subscribe((data: any) => {
      this.selectedSKU = this.listSKU[-1];
      this.sku_facing = 0;
       this.toggleToast("Thêm thành công", "bg-success");
      this.getdetectDetail(detect_id)


      if (data.data[0] && data.data[0].message == 'Đã tồn tại nhãn') {
        this.message = data.data[0].message;
        this.visible = !this.visible;
      }
      else {
        this.message = 'Thêm thành công...!';
        this.visible = !this.visible;
      }
    }, (error: any) => {
      this.message = 'Thêm lỗi : ' + error.message;
      console.log("error", error)
      this.visible = !this.visible;
    })
  }
  

}

