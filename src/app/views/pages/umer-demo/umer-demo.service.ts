import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UmerDemoService {

  constructor(private httpClient: HttpClient) { }

  //   curl --location 'http://210.245.20.237:44004/detect?project_id=30&audit_id=9999&audit_date=20250624&shop_code=1031799&emp_code=83789&project_name=unime-ps&kpi_name=10799&unique_code=10799' \
  // --form 'file=@"/D:/KhoanhHinhThucTap/Unime_1/Image_Test/test_Ke_LB_1.jpg"'

  uploadImage(project_id: any, audit_id: any, audit_date: any, shop_code: any, emp_code: any, project_name: any, kpi_name: any, unique_code: any, selectedFile: any) {
    let headers = new HttpHeaders();
    // headers.set('Content-Type', "application/json");
    headers.set('Accept', "multipart/form-data");
    const formData = new FormData();
    formData.append('file', selectedFile);

    return this.httpClient.post(`http://210.245.20.237:44004/detect?project_id=${project_id}&audit_id=${audit_id}&audit_date=${audit_date}&shop_code=${shop_code}&emp_code=${emp_code}&project_name=${project_name}&kpi_name=${kpi_name}&unique_code=${unique_code}`, formData)
  }

  //   curl --location 'https://aiapi.acacy.vn/api/promo/detect-result?project_id=30&work_date=20250321&shop_code=3697375&employee_code=12092' \
  // --form 'project_id="30"' \
  // --form 'detect_date="20250306"'




  uploadImageToDetect(project_id: any, work_date: any, shop_code: any, employee_code: any, detect_date: any) {
    // uploadImageToDetect() {
    let headers = new HttpHeaders();
    // headers.set('Content-Type', "application/json");
    headers.set('Accept', "multipart/form-data");
    const formData = new FormData();
    // formData.append('project_id', project_id);
    // formData.append('detect_date', detect_date);

    formData.append('project_id', project_id);
    formData.append('detect_date', detect_date);

    return this.httpClient.post(`https://aiapi.acacy.vn/api/promo/detect-result?project_id=${project_id}&work_date=${work_date}&shop_code=${shop_code}&employee_code=${employee_code}`, formData)
    // return this.httpClient.post(`https://aiapi.acacy.vn/api/promo/detect-result?project_id=30&work_date=20250321&shop_code=3697375&employee_code=12092`, formData)
  }

}
