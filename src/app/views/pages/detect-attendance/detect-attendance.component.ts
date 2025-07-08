import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskFileService } from '../../../Service/task-file.service';
import { FormsModule } from '@angular/forms';
import {
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  ButtonDirective,
  FormDirective,
  FormControlDirective,
  SpinnerComponent,
  TableModule,
  FormModule
} from '@coreui/angular-pro';
import { IconDirective, IconModule } from '@coreui/icons-angular';
import { cilCheckCircle, cilXCircle } from '@coreui/icons';
import { DetectAIService } from '../../../services/detectai.service';

interface AttendanceResponse {
  img_out: string;
  logo: string;
  logo_ok: number;
  face_ok: number;
  hasProduct: number;
  location_ok: number;
}

interface ProjectType {
  id: string;
  name: string;
}

@Component({
  selector: 'app-detect-attendance',
  templateUrl: './detect-attendance.component.html',
  styleUrls: ['./detect-attendance.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    CardHeaderComponent,
    ButtonDirective,
    FormDirective,
    FormModule,
    FormControlDirective,
    SpinnerComponent,
    TableModule,
    IconModule,
    IconDirective
  ],
  providers: [TaskFileService, DetectAIService]
})
export class DetectAttendanceComponent {
  selectedImageIndex: number = 0;
  selectedProject: any
  projects: any

  imagePG: any = ''
  ngOnInit(): void {
    this.projects = [
      { employee_code: 'P00745', employee_name: "Lê Thị Minh Thơ" },
      { "employee_code": "502005", "employee_name": "Trần Thị Nhung" },
      { "employee_code": "P00080", "employee_name": "Nguyễn Mộng Tuyền" },
      { "employee_code": "P02724", "employee_name": "Nguyễn Thị Chí Diệu" },
      { "employee_code": "P31191", "employee_name": "Lâm Quốc Đạt" },
      { "employee_code": "P21208", "employee_name": "Huỳnh Thị Mỹ Hường" },
      { "employee_code": "P05090", "employee_name": "Đinh Hồ Kim Thanh" },
      { "employee_code": "P35825", "employee_name": "Trần Thị Thảo" },
      { "employee_code": "P25880", "employee_name": "Đặng Thị Kim Phượng" },
      { "employee_code": "P28448", "employee_name": "Huỳnh Thị Xuân Lào" }
    ]
    this.selectedProject = this.projects[0].employee_code;
    // this.selectedProject = this.projects[0].employee_code;
    this.detectAIService.ewo_ATD_getEmployees({ project_id: 0, employee_code: this.selectedProject }).subscribe((data: any) => {
      this.imagePG = data.data.image
    })
  }

  imageUrls: {
    predictedUrl: string,
    loading: boolean,
    detectResult?: AttendanceResponse
  }[] = [];
  isDragging = false;
  keepOldImages: boolean = false;
  icons = { cilCheckCircle, cilXCircle };

  constructor(private http: HttpClient, private detectAIService: DetectAIService) {

  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      this.handleFiles(Array.from(files));
    }
  }

  removeImage(index: number) {
    this.imageUrls.splice(index, 1);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(Array.from(files));
    }
  }

  private async uploadAndPredict(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('project_id', '31');

    try {
      const response = await this.http.post<AttendanceResponse>(
        'https://brand-detect4.acacy.vn/detect-attendance',
        formData,
        {
          headers: new HttpHeaders({
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjIzMTAiLCJlbXBsb3llZV9pZCI6IjIyMzEwIiwibG9naW5fbmFtZSI6Iml0ZGVtbzEiLCJIYXNoIjoiS1I5TFhFSklYQS1ZRE43VjJINTRKIiwiVXNlckRhdGEiOiJ7XCJSb2xlc1wiOltdfSIsImVtcGxveWVlX3R5cGVfaWQiOiIzIiwibmJmIjoxNzM4NzQ3NjU2LCJleHAiOjE3NDEzMzk2NTYsImlhdCI6MTczODc0NzY1Nn0.IGQAr1MQxCLk05N44JZJPiAbGLYJ1a0WajrpUKAxEBY'
          })
        }
      ).toPromise();

      if (response) {
        return {
          url: `https://brand-detect4.acacy.vn/img_pred/${response.img_out}`,
          result: response
        };
      }
      return null;

    } catch (error) {
      console.error('Upload error:', error);
      return null;
    }
  }

  private handleFiles(files: File[]) {
    // Clear previous images if keepOldImages is false
    if (!this.keepOldImages) {
      this.imageUrls = [];
    }

    for (let file of files) {
      if (file.type.match(/image\/*/) == null) continue;
      if (file.size > 5 * 1024 * 1024) continue;

      const imageEntry = {
        predictedUrl: '',
        loading: true
      };
      this.imageUrls.push(imageEntry);

      const index = this.imageUrls.length - 1;
      this.uploadAndPredict(file).then(result => {
        if (result) {
          this.imageUrls[index].predictedUrl = result.url;
          this.imageUrls[index].detectResult = result.result;
        }
        this.imageUrls[index].loading = false;
      });
    }
  }



  onProjectChange(event: any) {
    this.selectedProject = event.target.value;
    var a = this.detectAIService.ewo_ATD_getEmployees({ project_id: 0, employee_code: this.selectedProject }).subscribe((data: any) => {
      this.imagePG = data.data.image
    })
    console.log('a', a)
  }

  onKeepImagesChange(event: any) {
    this.keepOldImages = event.target.value === 'true';
  }

  onImageSelect(index: number) {
    this.selectedImageIndex = index;
  }

  openImageInNewWindow(imageUrl: string) {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
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
              body:active {
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
              img {
                max-width: 100%;
                max-height: 100vh;
                object-fit: contain;
                transform-origin: center center;
                transition: transform 0.1s ease-out;
              }
              .zoom-controls {
                position: fixed;
                bottom: 20px;
                right: 20px;
                display: flex;
                gap: 10px;
                z-index: 1000;
              }
              button {
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                padding: 8px 15px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
              }
              button:hover {
                background: rgba(255,255,255,0.3);
              }
              .zoom-level {
                background: rgba(0,0,0,0.5);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                position: fixed;
                top: 20px;
                right: 20px;
              }
            </style>
          </head>
          <body>
            <div class="viewer-container" id="container">
              <img src="${imageUrl}" id="image">
            </div>
            <div class="zoom-controls">
              <button onclick="zoomIn()">+</button>
              <button onclick="zoomOut()">-</button>
              <button onclick="resetZoom()">Reset</button>
            </div>
            <div class="zoom-level" id="zoomLevel">100%</div>
            <script>
              const container = document.getElementById('container');
              const image = document.getElementById('image');
              const zoomLevel = document.getElementById('zoomLevel');
              let scale = 1;
              let dragging = false;
              let startX, startY, translateX = 0, translateY = 0;

              // Zoom functions
              function updateTransform() {
                image.style.transform = \`translate(\${translateX}px, \${translateY}px) scale(\${scale})\`;
                zoomLevel.textContent = \`\${Math.round(scale * 100)}%\`;
              }

              function zoomIn() {
                scale = Math.min(scale + 0.1, 5);
                updateTransform();
              }

              function zoomOut() {
                scale = Math.max(scale - 0.1, 0.1);
                updateTransform();
              }

              function resetZoom() {
                scale = 1;
                translateX = 0;
                translateY = 0;
                updateTransform();
              }

              // Mouse wheel zoom
              container.addEventListener('wheel', (e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.1 : 0.1;
                scale = Math.min(Math.max(0.1, scale + delta), 5);
                updateTransform();
              });

              // Drag functionality
              container.addEventListener('mousedown', (e) => {
                dragging = true;
                startX = e.clientX - translateX;
                startY = e.clientY - translateY;
                container.style.cursor = 'grabbing';
              });

              container.addEventListener('mousemove', (e) => {
                if (dragging) {
                  translateX = e.clientX - startX;
                  translateY = e.clientY - startY;
                  updateTransform();
                }
              });

              container.addEventListener('mouseup', () => {
                dragging = false;
                container.style.cursor = 'grab';
              });

              container.addEventListener('mouseleave', () => {
                dragging = false;
                container.style.cursor = 'grab';
              });
            </script>
          </body>
        </html>
      `);
    }
  }
}