import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment'
import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root',
})
export class AttendanceAIService {
  constructor(private httpClient: HttpClient) { }

  private attendanceAbbottAPI = environment.apiUrl + 'AttendanceAi/';
  private attendanceQCAPI = environment.apiUrl + 'AttendanceAiCiCo/';
  private detectAI = environment.apiUrl + 'DetectAI/';

  GetListAttendanceAI(
    empid: number,
    att_code: string,
    work_date: number,
    status: number = 1,
  ) {
    return this.httpClient.post(this.attendanceAbbottAPI + 'ewo_attendance_ai_getall', {
      empid,
      att_code,
      work_date,
      status,
    });
  }

  ewo_ATD_filterAttendance(
    qc_id: number,
    project_id: number,
    att_code: string,
    shop_code: string,
    from_date: number,
    to_date: number,
    statusAI: number,
    statusQC: number,
    // ci_result: string,
    // co_result: string,
    // ci_final_result: string,//??
    // co_final_result: string,
    guild_id: string,
    rowPerPage: number,
    pageNumber: number,
    qc_lock: number,
    id_BC: string
  ) {
    return this.httpClient.post(this.attendanceAbbottAPI + 'ewo_ATD_filterAttendance', {
      qc_id,
      project_id,
      att_code,
      shop_code,
      from_date,
      to_date,
      statusAI,
      statusQC,
      // co_result,
      // ci_final_result,
      // co_final_result,
      guild_id,
      rowPerPage,
      pageNumber,
      qc_lock,
      id_BC
    });
  }

  // ewo_ATD_updateEmployees(
  //   user_id: number,
  //   project_id: number,
  //   type: string,
  //   att_code: string,
  //   fail_reason: string,
  //   final_result: string,
  //   work_date: number,
  //   ci_time: Date,
  //   id_BC: number,
  //   note: string
  // ) {
  //   return this.httpClient.post(this.attendanceAbbottAPI + 'ewo_ATD_updateEmployees', {
  //     user_id,
  //     project_id,
  //     type,
  //     att_code,
  //     fail_reason,
  //     final_result,
  //     work_date,
  //     ci_time,
  //     id_BC,
  //     note
  //   });
  // }

  
  ewo_ATD_updateEmployees(
    user_id: number,
    project_id: number,
    type: string,
    fail_reason: string,
    final_result: string,
    id_BC: number,
    note: string,
    faceVerifyOk:any,
    location:any,
    logo:any
  ) {
    return this.httpClient.post(this.attendanceAbbottAPI + 'ewo_ATD_updateEmployees_2', {
      user_id,
      project_id,
      type,
      fail_reason,
      final_result,
      id_BC,
      note,
            faceId:parseInt(faceVerifyOk),
      location:parseInt(location),
      logo:parseInt(logo),
      // faceId:faceVerifyOk,
      // location,
      // logo,
      
    });
  }

  recheck_ResultAICiCo(
    img1: string,
    img2: string,
    project_id: number,
    user_id: number,
    id_BC: number,
    type: string
  ) {
    return this.httpClient.post(this.attendanceQCAPI + 'recheck_ResultAICiCo', {
      img1,
      img2,
      user_id,
      project_id,
      id_BC,
      type
    });
  }

  ewo_ATD_lockAttendance(
    user_id: number,
    project_id: number,
    att_code: string,
    work_date: number,
    ci_time: Date,
    id_BC: number,
  ) {
    return this.httpClient.post(this.attendanceAbbottAPI + 'ewo_ATD_lockAttendance', {
      user_id,
      project_id,
      att_code,
      work_date,
      ci_time,
      id_BC
    })
  }

  ExportAttendanceAI(
    project_id: number,
    user_id: number,
    from_date: number,
    to_date: number,
    att_code: string,
    shop_code: string,
    statusAI: number,
    statusQC: number,

    guild_id: string,
    qc_lock: number,
    id_BC: string,
  ) {
    const url = this.attendanceAbbottAPI + 'ewo_ATD_exportAttendance';
    const options = {
      responseType: 'blob' as 'json',
    };

    const requestBody = {
      project_id,
      user_id,
      from_date,
      to_date,
      att_code,
      shop_code,
      statusAI,
      statusQC,
      guild_id,
      qc_lock,
      id_BC,
    };

    // return this.httpClient
    //   .post(url, requestBody, options)
    //   .subscribe((response) => {
    //     this.saveFile(response, '.xlsx', 'atd_result');
    //   });
    return this.httpClient.post(url, requestBody, options);
  }
  saveFile(response: any, title: any = '.xlsx', file_name: string = '') {
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
      title;

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
    ci_time: Date,
    id_BC: number,
  ) {
    return this.httpClient.post(this.attendanceAbbottAPI + 'ewo_ATD_switchAttendanceDetectAI', {
      user_id,
      project_id,
      att_code,
      type,
      attribute,
      verify,
      work_date,
      ci_time,
      id_BC
    });
  }


  detectAi_updateImgProfile(
    user_id: number,
    project_id: number,
    photo_link: string,
    att_code: string,
    employee_name: string,
    id_BC: number,
  ) {
    return this.httpClient.post(this.attendanceQCAPI + "detectAi_updateImgProfileCiCo", {
      user_id,
      project_id,
      photo_link,
      att_code,
      employee_name,
      id_BC
    })
  }

  detectAi_commentNote(
    att_code: string,
    ci_time: Date,
    work_date: number,
    project_id: number,
    user_id: number,
    comment: string,
    id_BC: number,
  ) {
    return this.httpClient.post(this.attendanceAbbottAPI + "detectAi_commentNote", {
      att_code,
      ci_time,
      work_date,
      project_id,
      user_id,
      comment,
      id_BC
    })
  }

  // ATD_ImportEmpLock(formData: FormData) {
  //   return this.httpClient.post(
  //     this.attendanceAbbottAPI + 'ATD_ImportEmpLock',
  //     formData
  //   );
  // }
  ATD_ImportEmpLock(formData: FormData) {
    const url = this.attendanceAbbottAPI + 'ATD_ImportEmpLock';
    const options = {
      responseType: 'blob' as 'json', // nhận về file
    };
    return this.httpClient.post(url, formData, options);
  }

  ATD_ImportEmpUnLock(formData: FormData) {
    const url = this.attendanceAbbottAPI + 'ATD_ImportEmpUnLock';
    const options = {
      responseType: 'blob' as 'json', // nhận về file
    };
    return this.httpClient.post(url, formData, options);
  }


  // ATD_ImportEmpUnLock(formData: FormData) {
  //   return this.httpClient.post(
  //     this.attendanceAbbottAPI + 'ATD_ImportEmpUnLock',
  //     formData
  //   );
  // }


  DetectAI_getTemplateCiCo(
    project_id: number,
    user_id: number,
  ) {
    const url = this.attendanceAbbottAPI + "DetectAI_getTemplateCiCo"
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

  DetectAI_getTemplateUnlockCiCo(
    project_id: number,
    user_id: number,
  ) {
    const url = this.attendanceAbbottAPI + "DetectAI_getTemplateUnlockCiCo"
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
      this.attendanceQCAPI + 'ewo_ATD_uploadImgProfile',
      formData
    );
  }
  get_color_font_shopcode_revision(project_id: number) {
    const url = this.detectAI + 'get_color_font_shopcode_revision';
    let formData = new FormData()
    formData.append('project_id', project_id.toString());

    return this.httpClient.post(url, formData);
  }

};
