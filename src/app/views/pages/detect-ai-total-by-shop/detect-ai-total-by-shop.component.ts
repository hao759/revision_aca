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
} from '@coreui/angular-pro';
import { DetectAiTotalByShopComponentService } from './detect-ai-total-by-shop.component.service';
import { IDataSync_2 } from '../../Interface/IDetectAI';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { DetectAIService } from '../../../services/detectai.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@Component({
  selector: 'app-detect-ai-total-by-shop',
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
    ReactiveFormsModule,
    FormsModule,
    ModalComponent,
    ModalHeaderComponent,
    LoadingBarHttpClientModule,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    DatePipe,
    JsonPipe,],
  templateUrl: './detect-ai-total-by-shop.component.html',
  styleUrl: './detect-ai-total-by-shop.component.scss'
})
export class DetectAITotalByShopComponent {
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
  from_date: Date = new Date();
  to_date: Date = new Date();
  isLoading: any = 'false'
  listShop: any = []
  filter(currentPage1: any) {
    this.service.GetAll_TotalByShop(Pf.DateToInt(this.from_date!), Pf.DateToInt(this.to_date!), 66, currentPage1).subscribe((data: any) => {
      console.log(data.data)
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
    // console.log("this.item", item)
    if (!this.details_visible[item.shop_code]) {
      this.details_visible[item.shop_code] = { ...item };
    }
    this.details_visible[item.shop_code].visible =
      !this.details_visible[item.shop_code].visible;
    if (this.details_visible[item.shop_code].visible) {
      await this.service.GetDetail_Sum_TotalByShop(Pf.DateToInt(this.from_date!), Pf.DateToInt(this.to_date!), 66, item.shop_code).subscribe((datafinal: any) => {
        // console.log("datafinal.data", datafinal.data)
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

  handleLiveDemoChange(event: any) {
    // console.log("handleLiveDemoChange", event)
    this.visible = event;
    // console.log("this.details_visible[item.shop_code].visible", this.details_visible)
  }

  handleSelectedImg(slide: any) {
    console.log("slide.detect_id", slide.detect_id)
    localStorage.setItem("detect_id", slide.detect_id)
    this.detectAIService.ewo_detectai_detail(slide.detect_id).subscribe((data: any) => {
      console.log("data", data)
      this.selecteddetectDetect = data.data
      console.log(" this.selecteddetectDetect.photoDetails[0].photo_url", this.selecteddetectDetect.photoDetails[0].src)
      if (this.selecteddetectDetect?.photoDetails[0].src)
        this.selecteddetectDetect.photoDetails[0].src = this.sanitizer_var.bypassSecurityTrustResourceUrl(this.selecteddetectDetect?.photoDetails[0].src)
    })
    // for (const [key, value] of Object.entries(this.details_visible)) {
    //   console.log("Key:", key);       // VD: ACA_MT_62911898
    //   // console.log("Value:", value);   // VD: { name: "Shop 1", value: 123 }
    //   if ((value as any).detectDetails[0].detect_id == slide.detect_id) {
    //     this.selecteddetectDetect = this.details_visible[key]
    //     console.log("selecteddetectDetect=============", this.selecteddetectDetect)
    //     return
    //   }
    // }
  }

  selecteddetectDetect: any
  // selectedproductsDetails: any

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
  currentPage: number = 1
  onPageChange(event: any) {
    this.currentPage = event;
    // console.log('Page :', this.currentPage)
    this.filter(this.currentPage);
  }

}
