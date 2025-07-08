import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { IDataSync, IDetectAIDataDetail } from '../views/Interface/IDetectAI';
import { saveAs } from "file-saver";
@Injectable({
  providedIn: 'root',
})
export class DetectAIService {
  constructor(private httpClient: HttpClient) { }
  private apiUrl = environment.apiUrl + 'DetectAI/';

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  ewo_detectai_getall(
    from_date: number,
    to_date: number,
    project_id: number,
    employee_code: string | null,
    shop_code: string | null,
    report_code: string | null,
    pageNumberRq?: number,
    selected_statusDetectURL?: number,
    promotion_id?: any
  ) {
    employee_code = employee_code == '' ? null : employee_code
    shop_code = shop_code == '' ? null : shop_code
    report_code = report_code == '' ? null : report_code
    promotion_id = promotion_id == '' ? null : promotion_id
    return this.httpClient.post(this.apiUrl + 'ewo_detectai_getall', {
      from_date,
      to_date,
      project_id,
      employee_code,
      shop_code,
      report_code,
      pageNumber: pageNumberRq,
      statusDetectURL: selected_statusDetectURL,
      promotion_id,
    });
  };
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

  ewo_detectai_detail(audit_id: number) {
    const body = new FormData();
    body.append('audit_id', audit_id.toString());
    return this.httpClient.post(this.apiUrl + 'ewo_detectai_detail', body);
  };
  ewo_detectai_detail_export(audit_id: any) {
    const body = new FormData();
    body.append('audit_id', audit_id.toString());
    const options = {
      responseType: 'blob' as 'json',
    };
    // return this.httpClient.post(this.apiUrl + 'ewo_detectai_detail_export', body)
    return this.httpClient
      .post(this.apiUrl + 'ewo_detectai_detail_export', body, options)
      .subscribe((response) => {
        this.saveFileExcel(response, '.xlsx', 'template');
      });
  };
  ewo_detectai_detail_save(data: any) {
    return this.httpClient.post(this.apiUrl + 'ewo_detectai_detail_save', data);
  };

    ewo_detectai_detail_save_TotalByshop(data: any,shopcode:any,auditdate:any,project_id:any) {
    return this.httpClient.post(this.apiUrl + `ewo_detectai_detail_save_TotalByshop?shopcode=${shopcode}&auditdate=${auditdate}&project_id=${project_id}`, data);
  };
  ewo_detectai_qcsave(detect_id: number) {
    const body = new FormData();
    body.append('detect_id', detect_id.toString());
    return this.httpClient.post(this.apiUrl + 'ewo_detectai_qcsave', body);
  };
  datasync_detail(data: IDataSync[]) {
    const body = new FormData();
    body.append('FUNCTION', "SYNCDATAQCAI");
    body.append('access_token', 'Z_AR#js9KHOw9b-$qyZDR5{fwbbgPG2024');
    body.append('Data', JSON.stringify(data));
    return this.httpClient.post(environment.apiDataSyncUrl + 'SyncDataQCAI.ashx', body);
  };

  ewo_ATD_getEmployees(data: any) {
    // return this.httpClient.post('https://localhost:32769/api/AttendanceAi/ewo_ATD_getEmployees', data);
    return this.httpClient.post(environment.apiUrl + 'AttendanceAi/ewo_ATD_getEmployees', data);
  };


  ewo_detect_ai_getSkulabel(
    project_id: number,
  ) {
    return this.httpClient.post(this.apiUrl + 'ewo_detect_ai_getSkulabel', {
      project_id,
    });
  }

  ewo_detectai_inserDetail(
    project_id: number,
    detect_id: any,
    sku_id: number,
    sku_facing: number,
  ) {
    return this.httpClient.post(this.apiUrl + 'ewo_detectai_inserDetail', {
      project_id,
      detect_id,
      sku_id,
      sku_facing,
    }
    )
  }
  ewo_detete_DetectAIDetail(
    project_id: number,
    detect_rsdt_id: number,
  ) {
    return this.httpClient.post(this.apiUrl + 'ewo_detete_DetectAIDetail', {
      project_id,
      qc_id: 9997,
      detect_rsdt_id
    }
    )
  }
  // DetectAI_update_note(data: any) {
  DetectAI_update_note(detect_id: any, note: any, resultQC: any) {
    return this.httpClient.post(this.apiUrl + 'DetectAI_update_note', {
      detect_id,
      note,
      resultQC
    });
  }
}
