import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment'
import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root',
})
export class AttendanceAIService {
  constructor(private httpClient: HttpClient) { }

  private rootAPI = environment.apiUrl + 'DetectAI/';
  private attendanceAPI = environment.apiUrl + 'AttendanceAi/';

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

  ewo_ATD_filterAttendance(
    qc_id: number,
    project_id: number,
    att_code: string,
    shop_code: string,
    from_date: number,
    to_date: number,
    statusQC: number,
    ci_result: string,
    co_result: string,
    ci_final_result: string,
    co_final_result: string,
    guild_id: string,
    rowPerPage: number,
    pageNumber: number,
    qc_lock: number,
    id_BC: string
  ) {
    return this.httpClient.post(this.attendanceAPI + 'ewo_ATD_filterAttendance', {
      qc_id,
      project_id,
      att_code,
      shop_code,
      from_date,
      to_date,
      statusQC,
      ci_result,
      co_result,
      ci_final_result,
      co_final_result,
      guild_id,
      rowPerPage,
      pageNumber,
      qc_lock,
      id_BC
    });
  }


  ReCheckAttendanceAI(
    project_id: number,
    ci_result: string,
    att_code: string,
    ci_fail_reason: string,
    ci_final_result: string,
  ) {
    return this.httpClient.post(this.attendanceAPI + 'ewo_ATD_updateEmployees', {
      project_id,
      ci_result,
      att_code,
      ci_fail_reason,
      ci_final_result,
    });
  }

  // ReCheckAttendanceAI(
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
  //   return this.httpClient.post(this.attendanceAPI + 'ewo_ATD_updateEmployees', {
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

  ReCheckCOAttendanceAI(
    project_id: number,
    att_code: string,
    co_result: string,
    co_fail_reason: string,
    co_final_result: string,
  ) {
    return this.httpClient.post(this.attendanceAPI + 'ewo_ATD_updateEmployeesCO', {
      project_id,
      att_code,
      co_result,
      co_fail_reason,
      co_final_result,
    });
  }

  LockAttendanceAI(
    qc_id: number,
    project_id: number,
    att_code: string,
    work_date: number,
  ) {
    return this.httpClient.post(this.attendanceAPI + 'ewo_ATD_lockAttendance', {
      qc_id,
      project_id,
      att_code,
      work_date,
    })
  }

  // LockAttendanceAI(
  //   user_id: number,
  //   project_id: number,
  //   att_code: string,
  //   work_date: number,
  //   ci_time: Date,
  //   id_BC: number,
  // ) {
  //   return this.httpClient.post(this.attendanceAPI + 'ewo_ATD_lockAttendance', {
  //     user_id,
  //     project_id,
  //     att_code,
  //     work_date,
  //     ci_time,
  //     id_BC
  //   })
  // }

  ExportAttendanceAI(
    project_id: number,
  ) {
    const url = this.attendanceAPI + 'ewo_ATD_exportAttendance';
    const options = {
      responseType: 'blob' as 'json',
    };

    const requestBody = {
      project_id,
    };

    return this.httpClient
      .post(url, requestBody, options)
      .subscribe((response) => {
        this.saveFile(response, '.xlsx', 'atd_result');
      });
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
    project_id: number,
    att_code: string,
    type: string,
    attribute: string,
    verify: number,
  ) {
    return this.httpClient.post(this.attendanceAPI + 'ewo_ATD_switchAttendanceDetectAI', {
      project_id,
      att_code,
      type,
      attribute,
      verify,
    });
  }
};
