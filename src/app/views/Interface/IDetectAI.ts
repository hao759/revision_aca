import { IItem } from "@coreui/angular-pro";

export interface IDetectAIData extends IItem {
  detect_id: number;
  audit_id: number;
  employee?: string;
  shop_code?: string;
  shop_name?: string;
  shop_address?: string;
  shop_type?: string;
  show?: string;
  detected_date?: string;
  detect_verify: number;
  qc_update_date?: string;
  dataDetails?: IDetectAIDataDetail[];
  note?: string;
  resultQC?: string;
  photoDetails?: IDetectAIPhotoDetail[];
}
export interface IDetectAIDataDetail {
  row_num: number;
  detect_detail_id: number;
  sku_code?: string;
  sku_name?: string;
  sku_facing?: number;
  sku_facing_ai?: number;
  audit_id: number;
  sku_id: number
}
export interface IDataSync {
  AuditId: number;
  ProductId: number;
  Facing: number;
}
export interface IDataSync_2 {
  shop_code: string;
  shop_name: string;
  sumbc_shop: number;
}
export interface IDetectAIPhotoDetail {
  id: number;
  src?: string;
  title?: string;
  subtitle?: string;
  _index: number;
  photo_url: any

}

