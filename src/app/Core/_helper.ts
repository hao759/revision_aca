import { EnumLocalStorage, EnumStatus } from './_enum';
import { DatePipe } from '@angular/common';
import { EncryptDecryptService } from '../Service/encrypt-decrypt.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment';

export class Helper {
  static datePipe: DatePipe;

  static userProfile: any;
  public static loadUser() {
    let _u = localStorage.getItem(EnumLocalStorage.user);
    let currentUser = JSON.parse(
      EncryptDecryptService.PUBLIC_decryptUsingAES256(_u)
    );
    currentUser.employee[0]._status = currentUser.employee[0].status == 1 ? true : false;
    Helper.userProfile = currentUser.employee[0];
    return Helper.userProfile;
  }

  public static getPrams(name: string, activateRoute: ActivatedRoute) {
    let value = '';
    activateRoute.queryParams.subscribe((params: any) => {
      value = params[name];
    });
    return value;
  }
  static ProjectID() {
    const _p = localStorage.getItem('_p');

    let project_id = 0;
    if (_p) {
      project_id = parseInt(
        EncryptDecryptService.PUBLIC_decryptUsingAES256(_p)
      );
    }
    // const project_id = 12;

    if (project_id > 0 && window.location.hostname != 'localhost') {
      return project_id;
    } else {
      return environment.project_id;
    }

    // const domainUrl =
    //     window.location.protocol +
    //     '//' +
    //     window.location.hostname +
    //     ':' +
    //     window.location.port;

    // switch (domainUrl) {
    //     case 'https://demo.acacy.vn:':
    //         return 1;
    //     case 'https://it.acacy.vn:':
    //         return 12;
    //     case 'https://aso.acacy.vn:':
    //         return 13;
    //     case 'https://posm-audit.acacy.vn:':
    //         return 2;
    //     case 'https://install-qrcode.acacy.vn:':
    //         return 3;
    //     case 'https://ssav.acacy.vn:':
    //         return 41;
    //     case 'https://ssda.acacy.vn:':
    //         return 42;
    //     case 'https://dealer-pana.posmart.com.vn:':
    //         return 10;
    //     case 'https://activation.acacy.vn:':
    //         return 15;
    //     case 'https://ocd-audit.acacy.vn:':
    //         return 17;

    //     default:
    //         return environment.project_id;
    // }
  }
  public static getRouterDomain() {
    let host_name = window.location.origin + '/';

    if (window.location.pathname.includes('sys-a')) {
      host_name = host_name + 'sys-a/';
    }
    return host_name;
  }

  public static GetLanguage(key: string) {
    const language = JSON.parse(localStorage.getItem('language') + '');
    const key_language = localStorage.getItem('key_language') ?? 'vn';
    const L =
      Helper.IsNull(language) != true
        ? language.filter((k: any) => k.key == key)
        : [];
    if (L.length > 0) {
      return key_language == 'vn' ? L[0].vn : L[0].en;
    } else {
      return key;
    }
  }
  static getIconServiceStatus(status: string): string {
    switch (status) {
      case EnumStatus.info:
        return 'info';
      case EnumStatus.danger:
        return 'x';
      case EnumStatus.success:
        return 'check';
      case EnumStatus.warning:
        return 'exclamation';
      default:
        return '';
    }
  }
  public static dataURLtoFile(dataurl: any, filename: any) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  public static IsNull(value: any) {
    if (
      value == undefined ||
      value == null ||
      value == '' ||
      value == 'null'
    )
      return true;
    else return false;
  }
  public static IsNullTypeNumber(value: any) {
    if (
      value == undefined ||
      value == null ||
      value == '' ||
      value == 'null' ||
      value == 0
    )
      return true;
    else return false;
  }

  public static IsNullNumber(value: any) {
    if (
      (value == undefined ||
        value == null ||
        value == '' ||
        value == 'null') &&
      value != 0
    )
      return true;
    else return false;
  }
  public static checkMail(value: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }

  public static isValidLatitude(latitude: number): boolean {
    return latitude >= -90 && latitude <= 90;
  }

  public static isValidLongitude(longitude: number): boolean {
    return longitude >= -180 && longitude <= 180;
  }

  public static isValidGPSCoordinates(
    latitude: number,
    longitude: number
  ): boolean {
    return (
      this.isValidLatitude(latitude) && this.isValidLongitude(longitude)
    );
  }

  public static is_creditCard(value: string): boolean {
    const regexp =
      /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    if (regexp.test(value)) {
      return true;
    } else {
      return false;
    }
  }
  public static isValidPhoneNumber(phoneNumber: any) {
    // Loại bỏ các ký tự không phải số
    var cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Kiểm tra độ dài của số điện thoại
    if (cleanedNumber.length < 10 || cleanedNumber.length > 10) {
      return false;
    }

    // Kiểm tra định dạng số điện thoại bằng regular expression
    var phoneRegex =
      /^(\+?\d{1,3}[-.\s]?)?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
    return phoneRegex.test(cleanedNumber);
  }

  // 1996-08-06 => 19960806
  public static convertDateFormat(dateString: string): number {
    const numericString = dateString.replace(/-/g, '');
    const numericNumber = parseInt(numericString);

    return numericNumber;
  }

  public static transform(value: string): string {
    // Remove any non-digit characters
    const cleanedValue = value.replace(/\D/g, '');
    // Format the card number in groups of 4 digits
    const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formattedValue;
  }

  public static checkNumber(value: string) {
    try {
      const check = parseInt(value);
      return true;
    } catch (error) {
      return false;
    }
  }

  public static numberToString(number: number): string {
    return number.toString();
  }

  public static removeSpace(value: string): string {
    return value.replace(/\s+/g, '').toString();
  }

  public static number(value: any) {
    // ^[0-9]+$
    var numberRegex = /^[0-9]+$/;
    return numberRegex.test(value);
  }

  public static checkDecimal(value: any) {
    var decimalRegex = /^\d+(\.\d)?\d*$/;
    return decimalRegex.test(value);
  }
  public static colorArray(index: number) {
    const color = [
      '#b3ffd9',
      '#b3ffff',
      '#b3e6ff',
      '#b3b3ff',
      '#ffb3ff',
      '#ffb3d9',
      '#ffb3d1',
      '#ffffb3',
      '#ecffb3',
      '#e6ffb3',
      '#ccffb3',
      '#b3d1ff',
      '#c2c2f0',
      '#ffd1b3',
      '#ffb3b3',
      '#ffe6b3',
      '#c2c2f1',
      '#B0BEC5',
      '#EEEEEE',
      '#FFAB91',
      '#BCAAA4',
      '#FFCC80',
      '#FFF59D',
      '#FFE082',
      '#E6EE9C',
      '#C5E1A5',
      '#A5D6A7',
      '#80CBC4',
      '#81D4FA',
      '#80DEEA',
      '#90CAF9',
      '#B39DDB',
      '#9FA8DA',
      '#CE93D8',
      '#EF9A9A',
      '#F48FB1',
    ];
    try {
      return color[index];
    } catch (error) {
      return color[Math.floor(Math.random() * color.length)];
    }
  }
  public static colorRandom() {
    const color = [
      '#b3ffd9',
      '#b3ffff',
      '#b3e6ff',
      '#b3b3ff',
      '#ffb3ff',
      '#ffb3d9',
      '#ffb3cc',
      '#ffffb3',
      '#ecffb3',
      '#e6ffb3',
      '#ccffb3',
      '#b3d1ff',
      '#c2c2f0',
      '#ffd1b3',
      '#ffb3b3',
      '#ffe6b3',
      '#ffe6b3',
      '#EEEEEE',
      '#FFAB91',
      '#FFCC80',
      '#FFF59D',
      '#FFE082',
      '#E6EE9C',
      '#C5E1A5',
      '#A5D6A7',
      '#80CBC4',
      '#81D4FA',
      '#80DEEA',
      '#90CAF9',
      '#B39DDB',
      '#9FA8DA',
      '#CE93D8',
      '#EF9A9A',
      '#F48FB1',
    ];
    return color[Math.floor(Math.random() * color.length)];
  }

  public static getMonth() {
    let listResult = {
      SelectMonth: [
        {
          name: '',
          code: 0,
          month: '',
          totalDays: 0,
        },
      ],
      ListMonth: [
        {
          name: '',
          code: 0,
          month: '',
          totalDays: 0,
        },
      ],
    };
    const date = new Date();
    const year = date.getFullYear();
    const lastYear = date.getFullYear() - 1;
    const monthToday = date.getMonth() + 1;

    var newDate = new Date(year, monthToday + 1);
    const dateNext = newDate.getMonth();
    // const dateNext = 1

    // next month
    const previousMonth = dateNext.toString().padStart(2, '0');
    // const previousYear = newDate.getFullYear() + 1; //1227.10
    const previousYear = year + 1;
    listResult.ListMonth = [];
    listResult.SelectMonth = [];
    let listMonthCurr: any = [
      {
        name: '',
        code: 0,
        month: '',
        totalDays: 0,
      },
    ];
    let listMonthLast: any = [
      {
        name: '',
        code: 0,
        month: '',
        totalDays: 0,
      },
    ];

    for (let month = 1; month <= 12; month++) {
      const _monthList = month.toString().padStart(2, '0');
      const _name = `${year} - Tháng ${_monthList}`;
      const _code = parseInt(year + _monthList);
      const _month = _monthList;
      const _date = year + '-' + _monthList + '-01';
      const tempDate = new Date(_date);

      const _nameLast = `${lastYear} - Tháng ${_monthList}`;
      const _codeLast = parseInt(lastYear + _monthList);
      const _dateLast = lastYear + '-' + _monthList + '-01';
      const tempDateLast = new Date(_dateLast);

      const totalDays = new Date(
        tempDate.getFullYear(),
        tempDate.getMonth() + 1,
        0
      ).getDate();

      const totalDaysLast = new Date(
        tempDateLast.getFullYear(),
        tempDateLast.getMonth() + 1,
        0
      ).getDate();

      if (month == monthToday) {
        listResult.SelectMonth.push({
          name: `${year} - Tháng ${_month}`,
          code: parseInt(year + _month),
          month: _month,
          totalDays: totalDays,
        });
      }

      listMonthLast.push({
        name: _nameLast,
        code: _codeLast,
        month: _month,
        totalDays: totalDaysLast
      })

      listMonthCurr.push({
        name: _name,
        code: _code,
        month: _month,
        totalDays: totalDays
      });
    }
    listResult.ListMonth = [...listMonthLast, ...listMonthCurr];

    if (monthToday == 12) {
      listResult.ListMonth.push({
        name: `${previousYear} - Tháng ${previousMonth}`,
        code: parseInt(previousYear + previousMonth),
        month: previousMonth,
        totalDays: 31,
      });
    }

    return listResult;
  }

  public static getMonthJSE_Nemo() {
    let listResult = {
      SelectMonth: [
        {
          name: '',
          code: 0,
          month: '',
          totalDays: 0,
        },
      ],
      ListMonth: [
        {
          name: '',
          code: 0,
          month: '',
          totalDays: 0,
        },
      ],
    };
    const date = new Date();
    const year = date.getFullYear();
    const lastYear = date.getFullYear() - 1;
    const monthToday = date.getMonth() + 1;

    var newDate = new Date(year, monthToday + 1);
    const dateNext = newDate.getMonth();

    const previousMonth = dateNext.toString().padStart(2, '0');
    const previousYear = date.getFullYear() + 1;
    listResult.ListMonth = [];
    listResult.SelectMonth = [];
    let listMonthCurr: any = [
      {
        name: '',
        code: 0,
        month: '',
        totalDays: 0,
      },
    ];
    let listMonthLast: any = [
      {
        name: '',
        code: 0,
        month: '',
        totalDays: 0,
      },
    ];

    // Populate months for the current year
    for (let month = 1; month <= 12; month++) {
      const _monthList = month.toString().padStart(2, '0');
      const _name = `${year} - Tháng ${_monthList}`;
      const _code = parseInt(year + _monthList);
      const _month = _monthList;
      const _date = year + '-' + _monthList + '-01';
      const tempDate = new Date(_date);

      const _nameLast = `${lastYear} - Tháng ${_monthList}`;
      const _codeLast = parseInt(lastYear + _monthList);
      const _dateLast = lastYear + '-' + _monthList + '-01';
      const tempDateLast = new Date(_dateLast);

      const totalDays = new Date(
        tempDate.getFullYear(),
        tempDate.getMonth() + 1,
        0
      ).getDate();

      const totalDaysLast = new Date(
        tempDateLast.getFullYear(),
        tempDateLast.getMonth() + 1,
        0
      ).getDate();

      if (month === monthToday) {
        listResult.SelectMonth.push({
          name: `${year} - Tháng ${_month}`,
          code: _code,
          month: _month,
          totalDays: totalDays,
        });
      }

      listMonthLast.push({
        name: _nameLast,
        code: _codeLast,
        month: _month,
        totalDays: totalDaysLast
      })

      listMonthCurr.push({
        name: _name,
        code: _code,
        month: _month,
        totalDays: totalDays
      });

      // listResult.ListMonth.push({
      //     name: _name,
      //     code: _code,
      //     month: _month,
      //     totalDays: totalDays,
      // });
    }
    listResult.ListMonth = [...listMonthLast, ...listMonthCurr];

    // Add next month for December
    if (monthToday === 12) {
      listResult.ListMonth.push({
        name: `${previousYear} - Tháng ${previousMonth}`,
        code: parseInt(previousYear + previousMonth),
        month: previousMonth,
        totalDays: 31,
      });
    }

    // Add months for the year 2025
    // for (let month = 1; month <= 12; month++) {
    //     const _monthList = month.toString().padStart(2, '0');
    //     const _name = `${previousYear} - Tháng ${_monthList}`;
    //     const _code = parseInt(previousYear + _monthList);
    //     const _month = _monthList;
    //     const _date = `${previousYear}-` + _monthList + '-01';
    //     const tempDate = new Date(_date);

    //     const totalDays = new Date(
    //         tempDate.getFullYear(),
    //         tempDate.getMonth() + 1,
    //         0
    //     ).getDate();

    //     listResult.ListMonth.push({
    //         name: _name,
    //         code: _code,
    //         month: _month,
    //         totalDays: totalDays,
    //     });
    // }

    return listResult;
  }

  // 202311 => '2023-03-05'
  public static convertDate(str: any) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }

  public static convertDateTime(str: any): any {
    console.log(
      '🚀 ~ file: _helper.ts:291 ~ Helper ~ convertDateTime ~ str:',
      str
    );

    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    var time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return [date.getFullYear(), mnth, day].join('-') + ' ' + time;
  }

  public static getCurrentDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let currDate = `${day > 9 ? day : '0' + day}/${month > 9 ? month : '0' + month
      }/${year}`;
    return currDate;
  }

  public static getCurrentDateWithoutSlash() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let currDate = `${day > 9 ? day : '0' + day}${month > 9 ? month : '0' + month
      }${year}`;
    return currDate;
  }

  // 20240101 => "2024-01-01"
  public static convertDateStr(value: any): any {
    const valueStr = `${value}`;
    const year = valueStr.slice(0, 4);
    const month = valueStr.slice(4, 6);
    const day = valueStr.slice(6);
    return `${year}-${month}-${day}`;
  }
  // 20240101 => "01/01/2024"
  public static convertDateStr1(value: any): any {
    const valueStr = `${value}`;
    const year = valueStr.slice(0, 4);
    const month = valueStr.slice(4, 6);
    const day = valueStr.slice(6);
    return `${day}/${month}/${year}`;
  }
  // 20240101 => "01012024"
  public static convertDateStr1WithoutSlash(value: any): any {
    const valueStr = `${value}`;
    const year = valueStr.slice(0, 4);
    const month = valueStr.slice(4, 6);
    const day = valueStr.slice(6);
    return `${day}${month}${year}`;
  }

  // '202311' => '2023 - Tháng 11'
  public static transformYearMonth(value: any): any {
    const year = value?.slice(0, 4);
    const month = value?.slice(4);
    return `${year} - Tháng ${month}`;
  }

  // '2023-03-05' => 20230305
  public static transformDateInt(str: any) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    var dateStr = [date.getFullYear(), mnth, day].join('');
    return parseInt(dateStr);
  }
  // '2023-03-05' => 05/03
  public static transformDayMonthInt(str: any) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [day, mnth].join('/');
  }
  // '2023-03-05' => 05/03/23
  public static transformDayMonthYearInt(str: any) {
    var date = new Date(str),
      year = ('0' + date.getFullYear()).slice(-2),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [day, mnth, year].join('/');
  }

  // '2023-03-05' => 05/03/2023
  public static transformDayMonthYear(str: any) {
    var date = new Date(str),
      year = date.getFullYear(),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);

    return [day, mnth, year].join('/');
  }

  // "2024-06-02T17:00:00.000Z" thành định dạng "20240603"
  public static convertDateInt(dateString: any): any {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return parseInt(`${year}${month}${day}`);
  }
  public static getYearMonth(): any {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    return parseInt(`${year}${month}`);
  }
  public static getFormatedDate(date: Date, format: string): string | null {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = String(date.getFullYear());

    return format
      .replace('dd', dd)
      .replace('MM', mm)
      .replace('yyyy', yyyy);
  }
  // "2024-06-02T17:00:00.000Z" thành định dạng 'dd/MM/yyyy HH:mm:ss'
  public static convertDateTimeImage(dateString: any, format?: any): any {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    return format == 'dd/MM/yyyy'
      ? [day, month, year].join('/') +
      ` ${this.time(h)}:${this.time(m)}:${this.time(s)}`
      : [year, month, day].join('/') +
      ` ${this.time(h)}:${this.time(m)}:${this.time(s)}`;
  }
  // "2024-06-02T17:00:00.000Z" thành định dạng 'dd/MM/yyyy'
  public static convertDateNoTime(dateString: any, format?: any): any {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return format == 'dd/MM/yyyy'
      ? [day, month, year].join('/')
      : [year, month, day].join('/');
  }
  public static time(r: any) {
    return r > 9 ? r : `0${r}`;
  }

  public static checkDuplicates(arr: string[]): any {
    const counts: { [key: string]: number } = {};

    for (const item of arr) {
      counts[item] = (counts[item] || 0) + 1;
    }

    for (const item in counts) {
      if (counts[item] > 1) {
        return item;
      }
    }

    // No duplicates found
  }
  public static viewDataTable(view: any): any {
    return !view;
  }
  public static time_in_store(
    startTimeStr: any,
    created_time_in: any,
    endTimeStr: any,
    created_time_out: any
  ): any {
    // Tạo đối tượng Date cho các thời gian
    const time1 = new Date(`${created_time_in}T${startTimeStr}`);
    const time2 = new Date(`${created_time_out}T${endTimeStr}`);

    // Tính toán khoảng thời gian giữa hai thời gian
    const differenceInMillis = time2.getTime() - time1.getTime();

    // Chuyển đổi khoảng thời gian từ milliseconds sang giờ, phút, giây
    const hours = Math.floor(differenceInMillis / (1000 * 60 * 60));
    const minutes = Math.floor(
      (differenceInMillis % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((differenceInMillis % (1000 * 60)) / 1000);

    const hours1 = this.editTime(hours);
    const minutes1 = this.editTime(minutes);
    const seconds1 = this.editTime(seconds);

    return hours1 + ':' + minutes1 + ':' + seconds1; // Kết quả in ra: 0:4:14
  }

  public static editTime(time: any): any {
    return time.toString().length == 1 ? `0${time}` : time;
  }

  // Hàm loại bỏ các đối tượng trùng lặp
  public static removeDuplicates(array: any[]): any[] {
    let uniqueArray: any[] = [];
    let uniqueIds: { [name: string]: boolean } = {}; // Sử dụng object để lưu trữ id đã xuất hiện

    array.forEach((item) => {
      // Nếu id không tồn tại trong uniqueIds, thêm vào uniqueArray và uniqueIds
      if (!uniqueIds[item.name]) {
        uniqueArray.push(item);
        uniqueIds[item.name] = true;
      }
    });

    return uniqueArray;
  }
  public static isGuid(value: any) {
    const guidPattern =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return guidPattern.test(value);
  }
  public static getFormattedDateTime(currentDate: Date): any {
    return (
      this.datePipe.transform(currentDate, 'dd/MM/yyyy HH:mm:ss') || ''
    );
  }

  // Gom các phần tử con có thuộc tính giống nhau vào 1 mảng nhỏ trong mảng lớn ban đầu
  public static compressedArray(data: any, attribute: any) {
    data.reduce((acc: any, current: any) => {
      let group = acc.find(
        (item: any) => item.attribute === current.attribute
      );

      if (group) {
        group.childArr.push(current);
      } else {
        acc.push({
          childArr: [current],
        });
      }

      return acc;
    }, []);
  }

  // lọc ra các giá trị unique trong array theo employee_id
  public static groupedDataUnique(data: any) {
    let arr = [];
    arr = data.filter(
      (value: any, index: any, self: any) =>
        self.findIndex(
          (m: any) => m.employee_id === value.employee_id
        ) === index
    );

    return arr;
  }

  // lọc ra các giá trị unique trong array theo question_id
  public static groupedDataUniqueQuestion(data: any) {
    let arr = [];
    arr = data.filter(
      (value: any, index: any, self: any) =>
        self.findIndex(
          (m: any) => m.question_id === value.question_id
        ) === index
    );

    return arr;
  }

  public static stringProcess(name: any): any {
    // let name = "[40,41,42,43,44,45,46]";
    // Step 1: Remove the square brackets and split the string by commas to get an array of strings
    let valuesArray = name.replace('[', '').replace(']', '').split(',');

    // Step 2: Convert the array of strings into an array of objects
    let values = valuesArray.map((code: any) => {
      return { code: parseInt(code.trim()) };
    });

    return values;
  }

  // Sắp xếp tăng dần theo key của từng object trong array:
  // array.sort(compareValuesArrObjAsc('key'))
  public static compareValuesArrObjAsc(key: any, order: string = 'asc') {
    return function (a: any, b: any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA =
        typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB =
        typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order == 'desc' ? comparison * -1 : comparison;
    };
  }
  // Sắp xếp giảm dần theo key của từng object trong array:
  // array.sort(compareValuesArrObjAsc('key'))
  public static compareValuesArrObjDesc(key: any, order: string = 'desc') {
    return function (a: any, b: any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA =
        typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB =
        typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA < varB) {
        comparison = 1;
      } else if (varA > varB) {
        comparison = -1;
      }
      return order == 'asc' ? comparison * -1 : comparison;
    };
  }

  // 1357000000 -> 1,36B
  // 7430000 -> 7,43M
  public static formatAmount(amount: number): string {
    if (amount >= 1000000000) {
      return (amount / 1000000000).toFixed(2).replace('.', ',') + 'B';
    } else if (amount >= 1000000) {
      return (amount / 1000000).toFixed(2).replace('.', ',') + 'M';
    } else if (amount < 1000000) {
      return (
        amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'đ'
      );
    } else {
      return amount.toString();
    }
  }

  // 1357000000 -> 1.357.000.000
  // 7430000 -> 7.430.000
  public static formatCurrencyUnit(money: number) {
    if (money !== null) {
      return money?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    } else {
      return;
    }
  }
  /*
      const now = new Date('2024-08-20');
  const { fromDate, toDate } = this.getWeekRange(now);
  console.log(`From Date: ${fromDate}, To Date: ${toDate}`);
  */
  public static getWeekRange(date: Date): any {
    const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Calculate the start of the week (Monday)
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - (day === 0 ? 6 : day - 1));

    // Calculate the end of the week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    // Format dates as 'YYYYMMDD'
    const fromDate = this.formatDate(startOfWeek);
    const toDate = this.formatDate(endOfWeek);

    return { fromDate, toDate };
  }
  public static formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add 1 because getMonth() returns 0-11
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}${month}${day}`;
  }
  public static checkTypeQuestion(
    support_data: any,
    question_type: any,
    typeOf: any
  ): any {
    if (
      support_data == 'int' &&
      question_type == 'number' &&
      typeOf == 'int'
    ) {
      // int	number	int
      return 2;
    } else if (
      support_data == 'decimal' &&
      question_type == 'number' &&
      typeOf == 'decimal'
    ) {
      //decimal	number	decimal
      return 3;
    } else if (
      support_data == 'date' &&
      question_type == 'text' &&
      typeOf == 'string'
    ) {
      //date	text	string
      return 4;
    } else if (
      support_data == 'datetime' &&
      question_type == 'text' &&
      typeOf == 'string'
    ) {
      return 5;
    } else if (
      (support_data == 'Yes-No' || support_data == 'Right-Wrong') &&
      question_type == 'check' &&
      typeOf == 'int'
    ) {
      if (support_data == 'Yes-No') {
        // this.stateOptions = [
        //     { label: 'Có', value: 'Có', value_int: 1 },
        //     { label: 'Không', value: 'Không', value_int: 0 },
        // ];
        return 6;
      } else {
        // this.stateOptions = [
        //     { label: 'Đúng', value: 'Đúng', value_int: 1 },
        //     { label: 'Sai', value: 'Sai', value_int: 0 },
        // ];
        return 17;
      }
    } else if (
      support_data == 'list-select' &&
      question_type == 'select' &&
      typeOf == 'int'
    ) {
      return 18;
    } else if (
      support_data == null &&
      question_type == 'audio' &&
      typeOf == 'string'
    ) {
      return 19;
    } else if (
      support_data == null &&
      question_type == 'video' &&
      typeOf == 'string'
    ) {
      return 20;
    } else if (
      support_data == 'otp' &&
      question_type == 'text' &&
      typeOf == 'string'
    ) {
      return 21;
    } else if (
      support_data == null &&
      question_type == 'select' &&
      typeOf == 'int'
    ) {
      return 7;
    } else if (
      support_data == null &&
      question_type == 'multi-select' &&
      typeOf == 'int'
    ) {
      return 8;
    } else if (
      support_data == 'Provinces' &&
      question_type == 'text' &&
      typeOf == 'int'
    ) {
      return 9;
    } else if (
      support_data == 'Districts' &&
      question_type == 'text' &&
      typeOf == 'int'
    ) {
      return 10;
    } else if (
      support_data == 'Wards' &&
      question_type == 'text' &&
      typeOf == 'int'
    ) {
      return 11;
    } else if (
      support_data == null &&
      question_type == 'final' &&
      typeOf == 'int'
    ) {
      return 12;
    } else if (
      support_data == null &&
      question_type == 'image' &&
      typeOf == 'string'
    ) {
      return 13;
    } else if (
      support_data == 'string' &&
      question_type == 'qr' &&
      typeOf == 'string'
    ) {
      return 14;
    } else if (
      support_data == 'select-product' &&
      question_type == 'text' &&
      typeOf == 'int'
    ) {
      return 15;
    } else if (
      support_data == 'multi-select-product' &&
      question_type == 'text' &&
      typeOf == 'int'
    ) {
      return 16;
    } else {
      return 1;
    }
    /*
text	select-product	int	Chọn sản phẩm
text	multi-select-product	int	Chọn nhiều sản phẩm
*/
  }

  public static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16).toUpperCase();
      }
    );
  }

  public static hideQuestionAudioAndQr(questions: any) {
    questions.forEach((e: any) => {
      if (e.question_type == 'qr' || e.question_type == 'audio') {
        e.status = 0;
      }
    });
    questions = questions.filter((e: any) => e.status == 1);
    return questions;
  }

  // Tính tổng các giá trị giống nhau có type number của từng mảng trong một object
  public static sumValueOfAllAttributeOfArrInObj(data: any) {
    const result = data.reduce((acc: any, record: any) => {
      for (const [key, value] of Object.entries(record)) {
        if (typeof value === "number") {
          acc[key] = (acc[key] || 0) + value;
        }
      }
      return acc;
    }, {});

    return result;
  }

  // Copy một obj ra một obj mới mà không bị dính tham chiếu
  public static deepCopy<T>(obj: T): T {
    // Nếu obj là null hoặc không phải object, trả về chính nó
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    // Nếu obj là mảng, sao chép từng phần tử
    if (Array.isArray(obj)) {
      return obj.map((item) => this.deepCopy(item)) as unknown as T;
    }

    // Nếu obj là object, sao chép từng thuộc tính
    const copiedObj = {} as { [key: string]: any };
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copiedObj[key] = this.deepCopy(
          (obj as { [key: string]: any })[key]
        );
      }
    }
    return copiedObj as T;
  }

  // format số điện thoại => 0587764127 -> 058.776.4127
  public static formatPhoneNumber(phoneNumber: any) {
    if (phoneNumber !== "" && phoneNumber !== null && phoneNumber !== undefined) {
      return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1.$2.$3');
    } else {
      return;
    }
  }
}
