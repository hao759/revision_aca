import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment'
import { Helper } from "../../../Core/_helper";


@Injectable({
    providedIn: 'root',
})
export class EmployeeProfileService {
    constructor(private httpClient: HttpClient) { }

    private rootAPI = environment.apiUrl + 'AttendanceAi/';

    private urlEmployee = {
        urlgetList: 'ewo_ATD_getEmployeesPPT',
        urlExport:'ewo_ATD_exportEmployeesPPT'
    }


    GetListEmployeePPT(
        project_id: number,
        qc_id: number,
        pageNumber: number,
        rowPerPage: number,
        employee_code: any
    ) {
        return this.httpClient.post(this.rootAPI + this.urlEmployee.urlgetList, {
            project_id,qc_id,pageNumber,rowPerPage,employee_code
        });
    }

    exportEmployeePPT(project_id: number,qc_id:number) {
        console.log('EmployeePPT Export RawData: ');
        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
    
        return this.httpClient.post(this.rootAPI + this.urlEmployee.urlExport, {project_id,qc_id}, {
            headers: headers,
            responseType: 'blob'
        });
    }
    

};