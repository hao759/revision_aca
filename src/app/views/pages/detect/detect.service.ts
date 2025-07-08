import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment'
import { Helper } from "../../../Core/_helper";


@Injectable({
  providedIn: 'root',
})
export class DetectService {
  constructor(private httpClient: HttpClient) { }

  private rootAPI = environment.apiUrl + 'AttendanceAi/';

  // private urlEmployee = {
  //     urlgetList: 'ewo_ATD_getEmployeesPPT',
  //     urlExport:'ewo_ATD_exportEmployeesPPT'
  // }


  // GetListEmployeeAbbott(
  //     project_id: number,
  //     qc_id: number,
  //     pageNumber: number,
  //     rowPerPage: number,
  //     employee_code: any
  // ) {
  //     return this.httpClient.post(this.rootAPI + this.urlEmployee.urlgetList, {
  //         project_id,qc_id,pageNumber,rowPerPage,employee_code
  //     });
  // }

  apiUrl: any = "https://brand-detect4.acacy.vn/detect-brand"
  //  apiUrl: any = "http://210.245.20.218:44002/detect-brand"

  apidetect_attendance: any = "https://brand-detect4.acacy.vn/detect-attendance"

  api_revision: any = 'https://revision-api.acacy.vn/api/'
  // api_revision: any = 'https://localhost:32771/api/'

  uploadImage(selectedFile: any, idProject: any, promotion_id?: any) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', "application/json");
    headers.set('Accept', "multipart/form-data");
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('idProject', idProject);
    formData.append('promotion_id', promotion_id);

    return this.httpClient.post(this.apiUrl, formData)
  }

  upload_zip(file: File, projectId: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('project_id', projectId);

    return this.httpClient.post(this.api_revision + 'DetectAI/DetectAI_upload_zip', formData);
  }
  getall_upload_zip(
    project_id: number,
  ) {
    const formData = new FormData();
    formData.append('project_id', project_id.toString());
    return this.httpClient.post(this.api_revision + 'DetectAI/DetectAI_getall_upload_zip',
      formData,
    );
  }

  Get_Dynamic_detect_label(
    project_id: number,
    group_code: any
  ) {
    let formData = new FormData()
    formData.append('project_id', project_id.toString());
    formData.append('group_code', group_code.toString());
    return this.httpClient.post(this.api_revision + 'DetectAI/DetectAI_Get_Dynamic_detect_label',
      formData,
    );
  }
};