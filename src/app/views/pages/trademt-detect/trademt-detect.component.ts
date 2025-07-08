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
} from '@coreui/angular-pro';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { DetectAIService } from '../../../services/detectai.service';
import { EnumStatus } from '../../../Core/_enum';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  IDataSync,
  IDetectAIData,
  IDetectAIDataDetail,
  IDetectAIPhotoDetail,
} from '../../Interface/IDetectAI';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Helper } from '../../../Core/_helper';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-trademt-detect',
  imports: [
    RowComponent,
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
    SmartPaginationModule,
    SmartTableComponent,
    SmartTableModule,
    SmartPaginationModule,
    SmartTableModule,
    BadgeModule,
    CollapseDirective,
    TemplateIdDirective,
    TextColorDirective,
    NgClass,
    BadgeComponent,
    AlignDirective,
    ThemeDirective,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    RouterLink,
    BorderDirective,
    HttpClientModule,
    NgIf,
    CommonModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent,
    DatePipe,
    JsonPipe,
    NgSelectModule
  ],

  templateUrl: './trademt-detect.component.html',
  styleUrl: './trademt-detect.component.scss'
})
export class TrademtDetectComponent {
  constructor(
    private route: ActivatedRoute,
    public iconSet: IconSetService,
    private detectAIService: DetectAIService,
    private sanitizer: DomSanitizer
  ) {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet, cilTrash, cilArrowCircleTop, cilFile };
    this.sanitizer_var = sanitizer
  }
  isLoading: boolean = false;
  title = 'CoreUI-Angular Smart Table Example';
  sanitizer_var: any
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
    photo_url: ''
  });
  abc = "https://aiimg.acacy.vn/images/ml/2f6515679b664bdf33f8fb1916f3c0ac0e291fcb02ad6677bac71c99a490e523.svg"//https://media.geeksforgeeks.org/gfg-gg-logo.svg"
  fromDate: Date | null = new Date();
  toDate: Date | null = new Date();
  employee_code: string | null = null;
  shop_code: string | null = null;
  report_code: string | null = null;
  public calendarFromDate = new Date(Date.now());
  public calendarToDate = new Date(Date.now());
  filterData: IDetectAIData[] = [];
  dataSync: IDataSync[] = [];
  columns: IColumn[] = [
    {
      key: 'show',
      label: '',
      _style: { width: '3%' },
    },
    {
      key: 'detect_id',
      label: 'DetectId',
    },
    {
      key: 'audit_id',
      label: 'Id',
    },
    {
      key: 'employee',
      label: 'Nhân viên',
    },
    {
      key: 'shop_code',
      label: 'Mã cửa hàng',
    },
    {
      key: 'shop_name',
      label: 'Tên cửa hàng',
    },
    {
      key: 'shop_address',
      label: 'Địa chỉ',
    },
    {
      key: 'detected_date',
      label: 'Detected_Date',
    },
    {
      key: 'qc_update_date',
      label: 'QC Date',
    },
    {
      key: 'detect_verify',
      label: '',
      _style: { width: '10%' },
    },

  ];

  ngOnInit() {
    this.getSKULabel();
    this.abc = this.sanitizer_var.bypassSecurityTrustResourceUrl(this.abc)
  }
  getBadge(status: string) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }
  details_visible = Object.create({});
  item_visible = Object.create({});
  async toggleDetails(item: any) {
    if (!this.details_visible[item.detect_id]) {
      this.details_visible[item.detect_id] = { ...item };
    }
    this.details_visible[item.detect_id].visible =
      !this.details_visible[item.detect_id].visible;
    if (this.details_visible[item.detect_id].visible) {
      let datafinal = await this.detectAiDetail(item.detect_id);
      this.details_visible[item.detect_id].dataDetails = datafinal?.dataDetails;
      this.details_visible[item.detect_id].photoDetails =
        datafinal?.photoDetails;
      if (datafinal?.dataSync && datafinal?.dataSync.length > 0) {
        datafinal?.dataSync.forEach((data: any) => {
          if (data.Facing) {
            let dataItem: IDataSync = {
              AuditId: data.AuditId,
              ProductId: data.ProductId,
              Facing: data.Facing,
            };
            let index = this.dataSync.findIndex(
              (element: IDataSync) =>
                element.AuditId == data.AuditId &&
                element.ProductId == data.ProductId
            );
            if (index >= 0) {
              this.dataSync[index].Facing = dataItem.Facing;
            } else {
              this.dataSync.push(dataItem);
            }
          }
        });
      }
    }
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



  export(audit_id: any) {
    console.log("audit_id", audit_id)
    if (!audit_id)
      return
    // this.detectAIService.ewo_detectai_detail_export(audit_id)
    this.detectAIService.ewo_detectai_detail_export(audit_id)
    // .subscribe({
    //   next: (response) => {
    //     this.saveFileExcel(response, '.xlsx', 'atd_result');
    //   },
    //   error: (error) => {
    //     console.error('Export failed:', error);
    //   },
    //   complete: () => {
    //     this.isLoading = false;
    //   }
    // });
  }


  async detectAiDetail(item: any) {
    return new Promise<any>((resolve, reject) => {
      this.detectAIService.ewo_detectai_detail(item).subscribe((data: any) => {
        if (data.result == EnumStatus.ok) {
          const dataDetails = data.data.dataDetails.map((item: any) => {
            const {
              row_num,
              detect_detail_id,
              sku_code,
              sku_name,
              sku_facing,
              sku_facing_ai,
              audit_id,
              sku_id,
              detect_id
            } = {
              ...item,
            } as Partial<NonNullable<typeof item>>;
            return {
              row_num,
              detect_detail_id,
              sku_code,
              sku_name,
              sku_facing,
              sku_facing_ai,
              audit_id,
              sku_id,
              detect_id
            } as IDetectAIDataDetail;
          });
          const photoDetails = data.data.photoDetails.map((item: any) => {
            let { id, src, title, subtitle, _index, photo_url, detect_id } = { ...item } as Partial<
              NonNullable<typeof item>
            >;//??
            if (src)
              src = this.sanitizer_var.bypassSecurityTrustResourceUrl(src)

            return { id, src, title, subtitle, _index, photo_url, detect_id } as IDetectAIPhotoDetail;
          });
          const dataSync = data.data.dataDetails.map((item: any) => {
            const { audit_id, sku_code, sku_facing } = {
              ...item,
            } as Partial<NonNullable<typeof item>>;
            return {
              AuditId: audit_id,
              ProductId: Number(sku_code),
              Facing: sku_facing,
            } as IDataSync;
          });
          resolve({ dataDetails, photoDetails, dataSync });
        }
        resolve([]);
      });
    });
  }
  urlgallery: any;
  showImage(index: any, listphoto: IDetectAIPhotoDetail[]) {
    const changeindex = index;
    localStorage.setItem('listphoto', JSON.stringify(listphoto));
    localStorage.setItem('changeindex', changeindex);
    this.urlgallery = 'assets/ZoomImage/tool.html';
    document.open(
      <string>this.urlgallery,
      'image_default',
      'height=700,width=900,top=100,left= 539.647'
    );
  }
  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }
  selected_statusDetectURL: any = 1
  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  message: string = '';

  async AwaitSave(listData: IDetectAIDataDetail[]) {
    console.log("IDetectAIDataDetail============", listData)
    this.message = '';
    var data: any = {}
    data.listData = listData
    // data.cmtQC = note
    // data.resultQC = resultQC
    return new Promise<any>((resolve, reject) => {
      this.detectAIService
        .ewo_detectai_detail_save(data)
        .subscribe((data: any) => {
          if (data.result == EnumStatus.ok) {
            this.message = 'Lưu thành công...!';
            listData.forEach((data: any) => {
              let dataItem: IDataSync = {
                AuditId: data.audit_id,
                ProductId: Number(data.sku_code),
                Facing: data.sku_facing,
              };
              let index = this.dataSync.findIndex(
                (element: IDataSync) =>
                  element.AuditId == data.audit_id &&
                  element.ProductId == Number(data.sku_code)
              );
              if (index >= 0) {
                this.dataSync[index].Facing = dataItem.Facing;
              } else {
                this.dataSync.push(dataItem);
              }
            });
            resolve({ data });
          }
          resolve([]);
          reject(() => {
            this.message = 'Đã xảy ra lỗi...!';
          });
        });
    });
  }
  async AwaitQCSave(item: IDetectAIData) {
    this.message = '';
    return new Promise<any>((resolve, reject) => {
      this.detectAIService
        .ewo_detectai_qcsave(item.detect_id)
        .subscribe((data: any) => {
          if (data.result == EnumStatus.ok) {
            this.message = 'Xác nhận thành công...!';
            this.visible = !this.visible;
            resolve({ data });
          }
          resolve([]);
          reject(() => {
            this.message = 'Đã xảy ra lỗi...!';
            this.visible = !this.visible;
          });
        });
    });
  }

  async AwaitDataSync(list: IDataSync[]) {
    this.message = '';
    return new Promise<any>((resolve, reject) => {
      this.detectAIService.datasync_detail(list).subscribe((data: any) => {
        if (data.result == EnumStatus.ok) {
          resolve({ data });
        }
        resolve([]);
        reject(() => { });
      });
    });
  }
  async SaveDetail(listData: IDetectAIDataDetail[], fulldata: any) {

    listData.forEach((el) => {
      if (!el.sku_facing && el.sku_facing != 0) {
        el.sku_facing = el.sku_facing_ai;
      }
    });
    const data = await this.AwaitSave(listData);
    this.visible = !this.visible;
  }
  async SaveNote(fulldata: any) {
    console.log("fulldata.detect_id", fulldata.detect_id, fulldata.note, fulldata.resultQC)
    // let datasend = {
    //   detect_id: fulldata.detect_id,
    //   note: fulldata.note,
    //   resultQC: fulldata.resultQC ?? ""
    // }
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

  async QCSave(item: any) {
    if (
      !this.details_visible[item.detect_id] ||
      !this.details_visible[item.detect_id].dataDetails
    ) {
      this.message = 'Vui lòng kiểm tra kết quả chi tiết trước xác nhận...!';
      this.visible = !this.visible;
      return;
    }
    const dataItemDetails = this.details_visible[
      item.detect_id
    ].dataDetails.filter(
      (data: any) => item.audit_id == data.audit_id && !data.sku_facing
    );
    if (dataItemDetails.length > 0) {
      this.message = 'Vui lòng lưu hết kết quả chi tiết trước xác nhận...!';
      this.visible = !this.visible;
      return;
    }
    const data = await this.AwaitQCSave(item);
    if (!this.item_visible[item.detect_id]) {
      item.detect_verify = 1;
      let dt = new Date();
      item.qc_update_date = this.formatDate(dt);
      this.item_visible[item.detect_id] = { ...item };
    }
    if (
      item.detect_verify == 1 ||
      this.item_visible[item.detect_id]?.detect_verify == 1
    ) {
      this.message = 'Đã xác nhận...!';
      this.visible = !this.visible;
    }
    const dataSyncItem = this.dataSync.filter(
      (data) => item.audit_id == data.AuditId && data.Facing
    );
    const dataSync = await this.AwaitDataSync(dataSyncItem);
  }

  updateNote(detectId: string, value: string) {
    if (!this.details_visible[detectId]) {
      this.details_visible[detectId] = { note: '' }; // Initialize if undefined
    }
    console.log("value", value)
    this.details_visible[detectId].note = value; // Update the note
  }

  updateResultQC(detectId: any, event: Event, item: any) {
    if (this.details_visible[detectId]) {
      this.details_visible[detectId].resultQC = (event.target as HTMLSelectElement).value;
    }
  }


  totalPages = 2
  isShowData = false;
  Filter(pageNumber: number) {
    // console.log("selected_statusDetectURL", this.selected_statusDetectURL)
    // return
    this.isLoading = true;
    this.filterData = [];
    this.message = '';
    if (!this.fromDate) {
      this.message = 'Vui lòng chọn fromDate!';
      this.visible = true;
    }
    if (!this.toDate) {
      this.message = 'Vui lòng chọn toDate!';
      this.visible = true;
    }
    this.currentPage = pageNumber
    try {
      this.detectAIService
        .ewo_detectai_getall(
          Pf.DateToInt(this.fromDate!),
          Pf.DateToInt(this.toDate!),
          66,
          this.employee_code,
          this.shop_code,
          this.report_code,
          pageNumber,
          this.selected_statusDetectURL
        )
        .subscribe(
          (data: any) => {
            if (data.result == EnumStatus.ok) {
              this.isShowData = true;
              this.isLoading = false;
              this.totalPages = Math.ceil(data.data[0].TotalRows / 20);

              if (data.data && data.data.length) {
                this.filterData = data.data.map((item: any) => {
                  const {
                    detect_id,
                    audit_id,
                    employee,
                    shop_code,
                    shop_name,
                    shop_address,
                    shop_type,
                    show,
                    detected_date, detect_verify,
                    qc_update_date,
                    dataDetails,
                    photoDetails,
                    note,
                    resultQC
                  } = {
                    ...item,
                    show: null,
                    dataDetails: [],
                    photoDetails: [],
                  } as Partial<NonNullable<typeof item>>;
                  return {
                    detect_id,
                    audit_id,
                    employee,
                    shop_code,
                    shop_name,
                    shop_address,
                    shop_type,
                    show,
                    detected_date,
                    detect_verify,
                    qc_update_date,
                    dataDetails,
                    photoDetails,
                    note,
                    resultQC
                  } as IDetectAIData;
                });
              } else {
                this.message = 'Không có dữ liệu!';
                this.visible = true;
              }
            }
            this.isLoading = false;
          },
          (error) => {
            this.isLoading = false;
            this.message = 'Lỗi...!' + error;
            this.visible = !this.visible;
          }
        ), (error: any) => {
          this.message = 'Lỗi: ', error;
          this.visible = !this.visible;
        };
    } catch (error) {
      this.isLoading = false;
    }
  }
  formatDate(date: Date) {
    let datePart = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
      .map((n, i) => n.toString().padStart(2, '0'))
      .join('-');
    let timePart = [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map((n, i) => n.toString().padStart(2, '0'))
      .join(':');
    return datePart + ' ' + timePart;
  }
  // copyToClipboard(text: any) {
  //   navigator.clipboard.writeText(text).then(() => {
  //     this.message = 'Copy thành công...!';
  //     this.visible = true;
  //   }).catch(err => {
  //     console.error("Could not copy text: ", err);
  //   });
  // }
  downloadImage(imageUrl: any) {
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

  listSKU = [];

  getSKULabel() {
    this.detectAIService.
      ewo_detect_ai_getSkulabel(
        66
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

  sku_facing = 0;
  sku_id = 0;
  insertDetailSKU(detect_id: number, item: any) {
    console.log(this.sku_id)
    console.log(this.sku_facing)

    this.detectAIService.ewo_detectai_inserDetail(
      66,
      detect_id,
      Number(this.sku_id),
      Number(this.sku_facing)
    ).subscribe((data: any) => {
      this.sku_id = this.listSKU[-1];
      this.sku_facing = 0;
      this.toggleDetails(item)
      this.toggleDetails(item)
      console.log("data", data)


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

  RemoveItemDetail(item: any, itemqc: any) {
    this.detectAIService.ewo_detete_DetectAIDetail(
      66,
      item.detect_detail_id
    ).subscribe((data: any) => {
      this.toggleDetails(itemqc)
      this.toggleDetails(itemqc)
      this.message = 'Xóa thành công...!';
      this.visible = !this.visible;
    }, (error: any) => {
      this.message = 'Xóa lỗi: ' + error.message;
      this.visible = !this.visible;
    })
  }
  currentPage: number = 1
  onPageChange(event: any) {
    this.currentPage = event;
    console.log('Page :', this.currentPage)
    this.Filter(this.currentPage);
  }

  handleScrollOnTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  toggleModalCTBC_OSA = false;
  handleModalCTBC_OSA() {
    this.toggleModalCTBC_OSA = true;
  }
  // search_name_product: { [key: number]: string } = {};

  // filter_search_name_product(event: KeyboardEvent, detect_id: number) {
  //   const search = this.search_name_product[detect_id]?.toLowerCase().trim() || "";

  //   if (!this.details_visible[detect_id].originalDataDetails) {
  //     this.details_visible[detect_id].originalDataDetails = [...this.details_visible[detect_id].dataDetails];
  //   }

  //   if (search === "") {
  //     this.details_visible[detect_id].dataDetails = [...this.details_visible[detect_id].originalDataDetails];
  //   } else {
  //     this.details_visible[detect_id].dataDetails = this.details_visible[detect_id].originalDataDetails.filter((item: any) => {
  //       if (item.sku_name)
  //         return item.sku_name.toLowerCase().includes(search);
  //     });
  //   }
  // }
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
  onSkuFacingChange(itemdata: any, newValue: number) {
    console.log("item", itemdata)
    console.log("newValue", newValue)
    console.log("this.details_visible", this.details_visible)

    this.details_visible[itemdata.detect_id].dataDetails.forEach((item: any) => {
      if (item.row_num == itemdata.row_num) {
        item.sku_facing = newValue
        console.log("OKOK")
        return;
      }
    })

  }


}

