import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetectAiTotalByShopComponentService {

  constructor(private httpClient: HttpClient) { }
  private apiUrl = environment.apiUrl + 'DetectAI/';

  GetAll_TotalByShop(
    from_date: number,
    to_date: number,
    project_id: number,
    pageNumberRq?: number,
  ) {

    // return this.httpClient.post(this.apiUrl + 'GetAll_TotalByShop', {
    //   from_date: 20250618,
    //   to_date: 20250619,
    //   project_id: 66,
    //   pageNumber: 1,// pageNumberRq,
    //   RowPerPage: 20
    // });
    return this.httpClient.post(this.apiUrl + 'GetAll_TotalByShop', {
      from_date,
      to_date,
      project_id,// 66,
      pageNumber: pageNumberRq,// pageNumberRq,
      RowPerPage: 20
    });
  };

  GetDetail_Sum_TotalByShop(
    from_date: number,
    to_date: number,
    project_id: number,
    shop_code: string
  ) {

    return this.httpClient.post(this.apiUrl + 'GetDetail_Sum_TotalByShop', {
      from_date: from_date,
      to_date: to_date,
      project_id,// 66,
      shopcode: shop_code// 'ACA_MT_62913017'
    });
  };
}

