import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment'
import { saveAs } from "file-saver";
// import EXIF from 'exif-js';
@Injectable({
  providedIn: 'root',
})
export class AttendanceQCService {
  constructor(private httpClient: HttpClient) { }

  private rootAPI = environment.apiUrl + 'DetectAI/';
  private attendanceCiCoAPI = environment.apiUrl + 'AttendanceAiCiCo/';

  GetListAttendanceAI(
    empid: number,
    att_code: string,
    work_date: number,
    status: number = 1,
  ) {
    return this.httpClient.post(this.rootAPI + 'ewo_attendance_ai_getall', {
      empid,
      att_code,
      work_date,
      status,
    });
  }

  FilterAttendanceAI(
    qc_id: number,
    project_id: number,
    att_code: string,
    shop_code: string,
    from_date: number,
    to_date: number,
    statusAI: string,
    statusQC: string,
    // result: string,
    // final_result: string,
    rowPerPage: number,
    pageNumber: number,
    qc_lock: number,
    type: string,
    id_BC: string
  ) {
    return this.httpClient.post(this.attendanceCiCoAPI + 'ewo_ATD_filterAttendance', {
      qc_id,
      project_id,
      att_code,
      shop_code,
      from_date,
      to_date,
      statusAI,
      statusQC,
      // result,
      // final_result,
      rowPerPage,
      pageNumber,
      qc_lock,
      type,
      id_BC
    });
  }


  ReCheckAttendanceAI(
    user_id: number,
    project_id: number,
    att_code: string,
    fail_reason: string,
    final_result: string,
    type: string,
    time: Date,
    work_date: number,
  ) {
    return this.httpClient.post(this.attendanceCiCoAPI + 'ewo_ATD_updateEmployees', {
      user_id,
      project_id,
      att_code,
      fail_reason,
      final_result,
      type,
      time,
      work_date,
    });
  }


  LockAttendanceAI(
    user_id: number,
    project_id: number,
    att_code: string,
    work_date: number,
    type: string,
    time: Date,
    id_BC: number,
  ) {
    return this.httpClient.post(this.attendanceCiCoAPI + 'ewo_ATD_lockAttendance', {
      user_id,
      project_id,
      att_code,
      work_date,
      type,
      time,
      id_BC
    })
  }


  // ExportAttendanceAI(
  //   project_id: number,
  //   qc_id: number,
  //   from_date: number,
  //   to_date: number,
  //   type: string,
  //   att_code: string,
  //   shop_code: string,
  //   statusQC: number,
  //   result: string,
  //   final_result: string,
  //   qc_lock: number,
  //   id_BC:string,
  // ) {
  //   const url = this.attendanceCiCoAPI + 'ewo_ATD_exportAttendance';
  //   const options = {
  //     responseType: 'blob' as 'json',
  //   };

  //   const requestBody = {
  //     project_id,
  //     qc_id,
  //     from_date,
  //     to_date,
  //     type,
  //     att_code,
  //     shop_code,
  //     statusQC,
  //     result,
  //     final_result,
  //     qc_lock,
  //     id_BC
  //   };

  //   return this.httpClient
  //     .post(url, requestBody, options)
  //     .subscribe((response) => {
  //       this.saveFile(response, '.xlsx', 'atd_result');
  //     });
  // }
  ExportAttendanceAI(
    project_id: number,
    qc_id: number,
    from_date: number,
    to_date: number,
    typeFilter: string,
    att_code: string,
    shop_code: string,
    statusAI: string,
    statusQC: string,
    // result: string,
    // final_result: string,
    qc_lock: number,
    id_BC: string,
  ) {
    const url = this.attendanceCiCoAPI + 'ewo_ATD_exportAttendance';
    const options = {
      responseType: 'blob' as 'json',
    };

    const requestBody = {
      project_id,
      qc_id,
      from_date,
      to_date,
      type: typeFilter,
      att_code,
      shop_code,
      statusAI,
      statusQC,
      // result,
      // final_result,
      qc_lock,
      id_BC
    };

    return this.httpClient.post(url, requestBody, options);
  }
  ATD_ImportEmpUnLock(formData: FormData) {
    const url = this.attendanceCiCoAPI + 'ATD_ImportEmpUnLock';
    const options = {
      responseType: 'blob' as 'json',
    };
    return this.httpClient.post(url, formData, options);
  }

  ATD_ImportEmpLock(formData: FormData) {
    const url = this.attendanceCiCoAPI + 'ATD_ImportEmpLock';
    const options = {
      responseType: 'blob' as 'json',
    };
    return this.httpClient.post(url, formData, options);
  }

  DetectAI_getTemplateCiCo(
    project_id: number,
    user_id: number
  ) {
    const url = this.attendanceCiCoAPI + 'DetectAI_getTemplateCiCo';
    const options = {
      responseType: 'blob' as 'json',
    };

    const requestBody = {
      project_id,
      user_id
    };

    return this.httpClient
      .post(url, requestBody, options)
      .subscribe((response) => {
        this.saveFile(response, '.xlsx', 'template');
      });
  }
  saveFile(response: any, type: any = '.xlsx', file_name: string = '') {
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

  SwitchAttendanceDetectAI(
    user_id: number,
    project_id: number,
    att_code: string,
    type: string,
    attribute: string,
    verify: number,
    work_date: number,
    time: Date
  ) {
    return this.httpClient.post(this.attendanceCiCoAPI + 'ewo_ATD_switchAttendanceDetectAI', {
      user_id,
      project_id,
      att_code,
      type,
      attribute,
      verify,
      work_date,
      time
    });
  }


  ATD_ImportCiCo(
    formDataUpload: FormData,
    user_id: number,
    project_id: number
  ) {
    formDataUpload.append('project_id', project_id.toString());
    formDataUpload.append('user_id', user_id.toString());
    return this.httpClient.post(
      this.attendanceCiCoAPI + 'ATD_ImportCiCo',
      formDataUpload
    );
  }

  detectAi_commentNoteCiCo(
    type: string,
    att_code: string,
    time: Date,
    work_date: number,
    project_id: number,
    qc_id: number,
    user_id: number,
    comment: string,
    id_BC: number,
  ) {
    return this.httpClient.post(this.attendanceCiCoAPI + 'detectAi_commentNoteCiCo', {
      type,
      att_code,
      time,
      work_date,
      project_id,
      qc_id,
      user_id,
      comment,
      id_BC
    })
  }

  detectAi_updateImgProfileCiCo(
    user_id: number,
    project_id: number,
    photo_link: string,
    att_code: string,
    employee_name: string,
    id_BC: number,
  ) {
    return this.httpClient.post(this.attendanceCiCoAPI + "detectAi_updateImgProfileCiCo", {
      user_id,
      project_id,
      photo_link,
      att_code,
      employee_name,
      id_BC
    })
  }

  recheck_ResultAICiCo(
    img1: string,
    img2: string,
    project_id: number,
    user_id: number,
    id_BC: number,
    type: string
  ) {
    return this.httpClient.post(this.attendanceCiCoAPI + 'recheck_ResultAICiCo', {
      img1,
      img2,
      user_id,
      project_id,
      id_BC,
      type
    });
  }

  ewo_ATD_uploadImgProfile(
    user_id: number,
    project_id: number,
    id_BC: number,
    emp_code: number,
    formData: FormData,
  ) {
    formData.append('user_id', user_id.toString());
    formData.append('project_id', project_id.toString());
    formData.append('id_BC', id_BC.toString());
    formData.append('emp_code', emp_code.toString());

    return this.httpClient.post(
      this.attendanceCiCoAPI + 'ewo_ATD_uploadImgProfile',
      formData
    );
  }
  getTemplateLock_CiCo(
    project_id: number,
    user_id: number,
  ) {
    const url = this.attendanceCiCoAPI + "getTemplateLock_CiCo"
    const options = {
      responseType: 'blob' as 'json',
    };

    const requestBody = {
      project_id,
      user_id
    };

    return this.httpClient
      .post(url, requestBody, options)
      .subscribe((response) => {
        this.saveFile(response, '.xlsx', 'template');
      });
  }
  getTemplateUnLock_CiCo(
    project_id: number,
    user_id: number,
  ) {
    const url = this.attendanceCiCoAPI + "getTemplateUnLock_CiCo"
    const options = {
      responseType: 'blob' as 'json',
    };

    const requestBody = {
      project_id,
      user_id
    };

    return this.httpClient
      .post(url, requestBody, options)
      .subscribe((response) => {
        this.saveFile(response, '.xlsx', 'template');
      });
  }


  //   rotateAndDownloadImage(imageUrl: string) {
  //     const img = new Image();
  //     img.crossOrigin = "anonymous";

  //     img.onload = () => {
  //       EXIF.getData(img, () => {
  //         const orientation = EXIF.getTag(img, "Orientation");
  //         console.log("EXIF Orientation:", orientation);

  //         let canvas = document.createElement("canvas");
  //         let ctx = canvas.getContext("2d");

  //         // Default: giữ nguyên kích thước gốc
  //         let width = img.width;
  //         let height = img.height;

  //         // Nếu orientation là 6 (xoay phải 90 độ) hoặc 8 (xoay trái)
  //         if (orientation === 6 || orientation === 8) {
  //           canvas.width = height;
  //           canvas.height = width;
  //           ctx?.translate(canvas.width / 2, canvas.height / 2);
  //           const angle = orientation === 6 ? 90 : -90;
  //           ctx?.rotate((angle * Math.PI) / 180);
  //           ctx?.drawImage(img, -width / 2, -height / 2);
  //         } else {
  //           // Không cần xoay
  //           canvas.width = width;
  //           canvas.height = height;
  //           ctx?.drawImage(img, 0, 0);
  //         }

  //         // Tải ảnh đã xử lý
  //         const link = document.createElement("a");
  //         link.href = canvas.toDataURL("image/jpeg");
  //         link.download = "image_processed.jpg";
  //         link.click();
  //       });
  //     };

  //     img.src = imageUrl;
  //   }
  // };
}