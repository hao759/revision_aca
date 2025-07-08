import { Component } from '@angular/core';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { brandSet, cilArrowCircleTop, cilDrinkAlcohol, cilFile, cilTrash, flagSet, freeSet } from '@coreui/icons';
import { Pf } from '../../../helper/pf';
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
  selector: 'app-ken-detect',
  templateUrl: './ken-detect.component.html',
  styleUrl: './ken-detect.component.scss',
  providers: [IconSetService, DetectAIService, HttpClient],
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
})
export class KenDetectComponent {
  constructor(
    private route: ActivatedRoute,
    public iconSet: IconSetService,
    private detectAIService: DetectAIService
  ) {
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet, cilTrash, cilArrowCircleTop, cilFile, cilDrinkAlcohol };
  }
  isLoading: boolean = false;
  title = 'CoreUI-Angular Smart Table Example';
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
    photo_url: ''
  });
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
              sku_id
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
              sku_id
            } as IDetectAIDataDetail;
          });
          const photoDetails = data.data.photoDetails.map((item: any) => {
            const { id, src, title, subtitle, _index, photo_url } = { ...item } as Partial<
              NonNullable<typeof item>
            >;
            return { id, src, title, subtitle, _index, photo_url } as IDetectAIPhotoDetail;
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

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
  message: string = '';

  async AwaitSave(listData: IDetectAIDataDetail[]) {
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
    // console.log("this.item_visible[item.detect_id]?.note", fulldata)
    // console.log(this.details_visible[item.detect_id])
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
          34,
          this.employee_code,
          this.shop_code,
          this.report_code,
          pageNumber
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
    const fileName = 'downloaded-image.jpg';

    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
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
        34
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
      34,
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
      34,
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
}
