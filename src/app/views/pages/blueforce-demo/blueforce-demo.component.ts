import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { cilLockLocked, cilLockUnlocked, cilFace, cilSave, cilSearch, cilDataTransferDown, cilWindowMinimize, cilSettings, cilArrowCircleTop, cilSend, cilCheckCircle, cilXCircle, cilLevelUp, cilPaperclip } from '@coreui/icons';
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
import { FormsModule } from '@angular/forms';
import { Pf } from '../../../helper/pf';
// import { AttendanceAIService } from './attendance-result-abbott-services';
import { Helper } from '../../../Core/_helper';
import { EnumStatus } from '../../../Core/_enum';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { provideLoadingBar } from '@ngx-loading-bar/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UmerDemoService } from '../umer-demo/umer-demo.service';

@Component({
  selector: 'app-umer-demo',
  imports: [
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
    SmartPaginationModule,
    SmartTableComponent,
    SmartTableModule,
    BadgeModule,
    CollapseDirective,
    CommonModule,
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
    FormsModule,
    ToastModule,
    ModalBodyComponent,
    ToasterHostDirective,
  ],
  templateUrl: './blueforce-demo.component.html',
  styleUrl: './blueforce-demo.component.scss'
})
export class BlueforceDemoComponent {
  audit_id: any = 9999
  audit_date: any = 20250624
  shop_code: any// = 1031799
  emp_code: any = 83789
  project_id: any = 31
  project_name: any = 'blueforce'
  kpi_name: any = 10799
  unique_code: any = 10799
  constructor(private service: UmerDemoService, private sanitizer: DomSanitizer,) { this.sanitizer_var = sanitizer }
  sanitizer_var: any


  async onUpload(event: any) {
    if (event.srcElement.files.length < 1)
      return;
    this.isLoading = true

    const now = new Date();
    this.detect_productsTotal = null
    this.detect_photosTotal = null
    const yyyymmdd = now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, '0') +
      String(now.getDate()).padStart(2, '0');

    this.count_total_img = event.srcElement.files.length

    for (let i = 0; i < event.srcElement.files.length; i++) {
      console.log("event.srcElement", event.srcElement.files[i]);

      this.service.uploadImage(this.project_id, this.audit_id, this.audit_date, this.shop_code, this.emp_code, this.project_name, this.kpi_name, this.unique_code, event.srcElement.files[i]).subscribe((data: any) => {
        setTimeout(() => { this.callImg(yyyymmdd) }, 3000)
      }, (err: any) => {
        console.log(err)
        this.isLoading = false
        // setTimeout(() => { this.callImg() }, 3000)
      })
    }


  }
  randomNineDigitNumber() {
    return Math.floor(Math.random() * 900000000) + 100000000;
  }
  ngOnInit(): void {
    this.unique_code = this.randomNineDigitNumber()
this.shop_code = this.randomNineDigitNumber()
  }
  columnss = [
    // { key: 'sku_id', label: '#', _style: { width: '5%' }, },
    // {
    //   key: 'index',
    //   label: '#',
    //   _style: { width: '3%', 'text-align': 'center' },
    // },
    { key: 'product_code', label: 'Mã sản phẩm' },
    { key: 'osa', label: 'OSA', filter: false, },
    { key: 'facing', label: 'Facing Detected', filter: false, },
    {
      key: 'quantity',
      label: 'Số lượng',
      _style: { width: '20%' },
      filter: false,
      sorter: false
    },

  ];

  isLoading = false
  @ViewChild('smartTable') smartTable: any;

  getDisplayedIndex(item: any): number {
    const list = this.smartTable?.getDisplayedItems?.() || [];
    return list.findIndex((i: any) => i === item) + 1;
  }

  count_total_img: any




  callImg(detect_date: any) {

    this.service.uploadImageToDetect(this.project_id, this.audit_date, this.shop_code, this.emp_code, detect_date).subscribe((data: any) => {
      if(data.result!='ERROR')
      {
this.count_total_img--
      console.log("count_total_img", this.count_total_img)
      if (!this.count_total_img) {
        this.detect_productsTotal = data.data.detect_products
        this.detect_photosTotal = data.data.detect_photos.map((item: any) => {
          let img = this.sanitizer_var.bypassSecurityTrustResourceUrl(item.url_detect)
          return {
            ...item,
            url_detect: img
          }
        })
        this.isLoading = false
      }
      }
      else
      {
this.isLoading = false
this.toggleToast(data.data, "bg-danger");
      }

    })

  }


  detect_productsTotal: any
  detect_photosTotal: any


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






  @ViewChild('fileUploader') fileUploader: any;
  clearFiles(fileUploader: any) {
    fileUploader.clear();
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

}