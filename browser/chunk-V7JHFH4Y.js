import{a as ct,b as dt}from"./chunk-76SCBUFZ.js";import{a as st}from"./chunk-MMQBQGI5.js";import{a as G}from"./chunk-CWM7VNHW.js";import{a as pt}from"./chunk-26M4WOOW.js";import{a as V}from"./chunk-RJESRZJ5.js";import{_a as lt,ea as ot,hb as rt,l as it,s as nt,z as at}from"./chunk-OVEX3KHJ.js";import"./chunk-FYYLBBTR.js";import{$ as ke,Bb as et,Cb as tt,Ga as We,H as he,I as ve,L as fe,Ma as ze,N as be,Na as Ue,P as Ce,Pa as je,Q as we,R as ye,U as Se,V as De,Va as Oe,W as xe,Wa as Re,X as Te,_ as Ee,aa as Me,ba as Ie,da as Ve,fb as Ke,h as _e,ia as Pe,ib as Ge,jb as Qe,kb as He,m as ge,ma as Ae,na as Le,q as ue,sa as Fe,t as pe,ua as Be,va as Ne,vb as qe,wb as Je,xa as Xe,xb as Ze,ya as Ye,yb as $e}from"./chunk-55Y7RW7N.js";import{$b as te,Ac as u,Ad as ce,Bc as ne,Bd as de,Cb as I,Cc as z,Fc as x,Gc as w,Hc as T,Hd as me,Mc as U,Oc as ae,Qb as J,Rb as g,Ub as Z,Vb as $,Yb as ee,ac as ie,bc as o,cc as l,db as Q,dc as v,eb as H,ec as X,fc as Y,hc as C,ib as d,kc as h,mc as c,nb as N,pc as W,ra as m,sa as _,ta as k,ua as B,vd as oe,wb as q,xd as le,yc as K,yd as re,zd as se}from"./chunk-XOKJR3V5.js";import{a as D,b as R,g as ut,h as E}from"./chunk-WWX6BADO.js";var mt=ut(pt());var _t=()=>({hover:!0,bordered:!0,striped:!1,responsive:!0}),ht=()=>[200,1e3],vt=(r,p)=>({"text-align":"center","font-weight":r,color:p}),ft=(r,p)=>p.src;function bt(r,p){r&1&&(o(0,"div",28),v(1,"i",29),o(2,"span",30),u(3,"\u0110ang load d\u1EEF li\u1EC7u"),l()())}function Ct(r,p){if(r&1){let e=C();o(0,"button",40),h("click",function(){m(e);let t=c().item,n=c(2);return _(n.toggleDetails(t))})("dblclick",function(){m(e);let t=c().item,n=c(2);return _(n.export(t.detect_id))}),k(),v(1,"svg",41),l()}if(r&2){let e=c().item,i=c(2);d(),W("name",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].visible)===!0?"cilMinus":"cilPlus")}}function wt(r,p){if(r&1){let e=C();o(0,"button",42),h("click",function(){m(e);let t=c().item,n=c(2);return _(n.QCSave(t))}),u(1),l()}if(r&2){let e=c().item,i=c(2);d(),z(" ",e.detect_verify==1||(i.item_visible[e.detect_id]==null?null:i.item_visible[e.detect_id].detect_verify)==1?"\u0110\xE3 x\xE1c nh\u1EADn":"X\xE1c nh\u1EADn"," ")}}function yt(r,p){if(r&1&&u(0),r&2){let e=c().tdContent;z(" ",e," ")}}function St(r,p){if(r&1&&(o(0,"td",37),I(1,Ct,2,1,"button",38)(2,wt,2,1,"button",39)(3,yt,1,1),l()),r&2){let e,i,t,n,s=p.columnName,a=p.item;c();let b=K(5),f=c();Z(f.details_visible[a.detect_id]!=null&&f.details_visible[a.detect_id].visible?"background-color:#f2f2f2":""),g("cAlign",(e=b.getTableDataCellProps(a,s))==null?null:e.align)("cTableActive",(i=b.getTableDataCellProps(a,s))==null?null:i.active)("cTableColor",(t=b.getTableDataCellProps(a,s))==null?null:t.color)("ngClass",b.getTableDataCellClass(a,s)),d(),ee((n=s)==="show"?1:n==="detect_verify"?2:3)}}function Dt(r,p){if(r&1){let e=C();X(0),o(1,"c-input-group")(2,"input",70),T("ngModelChange",function(t){m(e);let n=c().item;return w(n.sku_facing,t)||(n.sku_facing=t),_(t)}),h("ngModelChange",function(t){m(e);let n=c().item,s=c(3);return _(s.onSkuFacingChange(n,t))}),l()(),Y()}if(r&2){let e=c().item,i=c(3);d(2),x("ngModel",e.sku_facing),g("ngStyle",ae(3,vt,e.sku_facing&&e.sku_facing_ai!==e.sku_facing?"bold":"",e.sku_facing&&e.sku_facing_ai!==e.sku_facing?"red":""))("disabled",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].detect_verify)===1)}}function xt(r,p){if(r&1){let e=C();X(0),o(1,"div",71),h("click",function(){m(e);let t=c().item,n=c(3);return _(n.RemoveItemDetail(t,t))}),k(),v(2,"svg",72),l(),Y()}}function Tt(r,p){if(r&1&&(X(0),u(1),Y()),r&2){let e=c().tdContent;d(),z(" ",e," ")}}function Et(r,p){if(r&1&&(o(0,"td",37),X(1,67),I(2,Dt,3,6,"ng-container",68)(3,xt,3,0,"ng-container",68)(4,Tt,2,1,"ng-container",69),Y(),l()),r&2){let e,i,t,n=p.columnName,s=p.item;c();let a=K(5);g("cAlign",(e=a.getTableDataCellProps(s,n))==null?null:e.align)("cTableActive",(i=a.getTableDataCellProps(s,n))==null?null:i.active)("cTableColor",(t=a.getTableDataCellProps(s,n))==null?null:t.color)("ngClass",a.getTableDataCellClass(s,n)),d(),g("ngSwitch",n),d(),g("ngSwitchCase","sku_facing"),d(),g("ngSwitchCase","actions")}}function kt(r,p){if(r&1){let e=C();o(0,"img",78),h("click",function(){m(e);let t=c().$implicit,n=c(3);return _(n.openImageInNewWindow(t.photo_url,2))}),l()}if(r&2){let e=c().$implicit;W("alt",e.title),g("src",e.photo_url,Q)}}function Mt(r,p){if(r&1){let e=C();o(0,"div",79),h("click",function(){m(e);let t=c().$implicit,n=c(3);return _(n.openImageInNewWindow(t.src,1))}),v(1,"object",80),l()}if(r&2){let e=c().$implicit;d(),J("data",e.src,H)}}function It(r,p){if(r&1){let e=C();o(0,"div",73)(1,"div",74),h("click",function(){let t=m(e).$implicit,n=c(3);return _(n.downloadImage(t.photo_url))}),k(),v(2,"svg",75),l(),I(3,kt,1,2,"img",76)(4,Mt,2,1,"div",77),l()}if(r&2){let e=p.$implicit,i=p.$index;$(i===0?"carousel-item active":"carousel-item"),d(3),g("ngIf",!e.src),d(),g("ngIf",e.src)}}function Vt(r,p){if(r&1){let e=C();o(0,"div",43)(1,"c-row",44)(2,"c-col",45)(3,"div",46)(4,"c-smart-table",47,1),I(6,Et,5,7,"ng-template",34),l()(),o(7,"div",48)(8,"label"),u(9,"K\u1EBFt qu\u1EA3 QC: "),l(),o(10,"select",49),h("change",function(t){let n=m(e).item,s=c(2);return _(s.updateResultQC(n.detect_id,t))}),o(11,"option",50),u(12,"\u0110\xFAng"),l(),o(13,"option",51),u(14,"Sai"),l()()(),o(15,"div",52)(16,"label"),u(17,"S\u1EA3n ph\u1EA9m thi\u1EBFu: "),l(),o(18,"ng-select",53),T("ngModelChange",function(t){m(e);let n=c(2);return w(n.sku_id,t)||(n.sku_id=t),_(t)})("ngModelChange",function(t){m(e);let n=c(2);return w(n.selectedSKU,t)||(n.selectedSKU=t),_(t)}),l(),o(19,"c-input-group",54)(20,"input",55),T("ngModelChange",function(t){m(e);let n=c(2);return w(n.sku_facing,t)||(n.sku_facing=t),_(t)}),l()(),o(21,"button",22),h("click",function(){let t=m(e).item,n=c(2);return _(n.insertDetailSKU(t.detect_id,t))}),u(22,"Th\xEAn s\u1EA3n ph\u1EA9m"),l()(),o(23,"c-row")(24,"div",56)(25,"button",57),h("click",function(){let t=m(e).item,n=c(2);return _(n.SaveDetail(n.details_visible[t.detect_id]==null?null:n.details_visible[t.detect_id].dataDetails,n.details_visible[t.detect_id]))}),u(26,"L\u01B0u"),l()()(),o(27,"label",58),u(28,"Ghi ch\xFA: "),l(),o(29,"div",59)(30,"textarea",60),h("ngModelChange",function(t){let n=m(e).item,s=c(2);return _(s.updateNote(n.detect_id,t))}),l(),o(31,"button",61),h("click",function(){let t=m(e).item,n=c(2);return _(n.SaveNote(n.details_visible[t.detect_id]))}),u(32,"L\u01B0u Note"),l()()(),o(33,"c-col",62)(34,"c-carousel",63),v(35,"c-carousel-indicators"),o(36,"c-carousel-inner"),te(37,It,5,5,"div",64,ft),l(),v(39,"c-carousel-control",65)(40,"c-carousel-control",66),l()()()()}if(r&2){let e=p.item,i=c(2);g("visible",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].visible),d(4),g("columns",i.columnss)("columnFilter",!0)("columnSorter",!0)("itemsPerPageSelect",!0)("itemsPerPage",200)("itemsPerPageOptions",U(20,ht))("items",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].dataDetails)("tableProps",U(21,_t)),d(6),g("value",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].resultQC),d(8),g("items",i.listSKU),x("ngModel",i.sku_id)("ngModel",i.selectedSKU),g("searchable",!0),d(2),x("ngModel",i.sku_facing),d(5),W("disabled",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].detect_verify)==1),d(5),g("ngModel",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].note),d(),W("disabled",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].detect_verify)==1),d(3),g("dark",!0)("wrap",!1),d(3),ie(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].photoDetails)}}function Pt(r,p){if(r&1){let e=C();o(0,"c-row")(1,"c-col",31)(2,"c-card")(3,"c-card-body",32)(4,"c-smart-table",33,1),I(6,St,4,8,"ng-template",34)(7,Vt,41,22,"ng-template",35),l()(),o(8,"c-smart-pagination",36),h("activePageChange",function(t){m(e);let n=c();return _(n.onPageChange(t))}),l()()()()}if(r&2){let e=c();d(4),g("columns",e.columns)("itemsPerPageSelect",!0)("itemsPerPage",20)("items",e.filterData)("tableProps",U(7,_t)),d(4),g("activePage",e.currentPage)("pages",e.totalPages)}}function At(r,p){r&1&&(o(0,"c-row")(1,"c-col",81)(2,"span"),u(3,"Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u"),l()()())}var di=(()=>{class r{constructor(e,i,t,n){this.route=e,this.iconSet=i,this.detectAIService=t,this.sanitizer=n,this.isLoading=!1,this.title="CoreUI-Angular Smart Table Example",this.slides=new Array(3).fill({id:-1,src:"",title:"",subtitle:"",photo_url:""}),this.abc="https://aiimg.acacy.vn/images/ml/2f6515679b664bdf33f8fb1916f3c0ac0e291fcb02ad6677bac71c99a490e523.svg",this.fromDate=new Date,this.toDate=new Date,this.employee_code=null,this.shop_code=null,this.report_code=null,this.calendarFromDate=new Date(Date.now()),this.calendarToDate=new Date(Date.now()),this.filterData=[],this.dataSync=[],this.columns=[{key:"show",label:"",_style:{width:"3%"}},{key:"detect_id",label:"DetectId"},{key:"audit_id",label:"Id"},{key:"employee",label:"Nh\xE2n vi\xEAn"},{key:"shop_code",label:"M\xE3 c\u1EEDa h\xE0ng"},{key:"shop_name",label:"T\xEAn c\u1EEDa h\xE0ng"},{key:"shop_address",label:"\u0110\u1ECBa ch\u1EC9"},{key:"detected_date",label:"Detected_Date"},{key:"qc_update_date",label:"QC Date"},{key:"detect_verify",label:"",_style:{width:"10%"}}],this.details_visible=Object.create({}),this.item_visible=Object.create({}),this.visible=!1,this.selected_statusDetectURL=1,this.message="",this.totalPages=2,this.isShowData=!1,this.listSKU=[],this.sku_facing=0,this.sku_id=0,this.currentPage=1,this.toggleModalCTBC_OSA=!1,this.columnss=[{key:"sku_id",label:"#",_style:{width:"5%"}},{key:"sku_code",label:"M\xE3 s\u1EA3n ph\u1EA9m"},{key:"sku_name",label:"T\xEAn s\u1EA3n ph\u1EA9m"},{key:"sku_facing_ai",label:"Facing Detected",_style:{width:"5%"}},{key:"sku_facing",label:"Facing",_style:{width:"20%"},filter:!1,sorter:!1},{key:"actions",label:"",_style:{width:"5%"},filter:!1,sorter:!1}],i.icons=R(D(D(D({},rt),it),nt),{cilTrash:lt,cilArrowCircleTop:at,cilFile:ot}),this.sanitizer_var=n}ngOnInit(){this.getSKULabel(),this.abc=this.sanitizer_var.bypassSecurityTrustResourceUrl(this.abc)}getBadge(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}}toggleDetails(e){return E(this,null,function*(){if(this.details_visible[e.detect_id]||(this.details_visible[e.detect_id]=D({},e)),this.details_visible[e.detect_id].visible=!this.details_visible[e.detect_id].visible,this.details_visible[e.detect_id].visible){let i=yield this.detectAiDetail(e.detect_id);this.details_visible[e.detect_id].dataDetails=i?.dataDetails,this.details_visible[e.detect_id].photoDetails=i?.photoDetails,i?.dataSync&&i?.dataSync.length>0&&i?.dataSync.forEach(t=>{if(t.Facing){let n={AuditId:t.AuditId,ProductId:t.ProductId,Facing:t.Facing},s=this.dataSync.findIndex(a=>a.AuditId==t.AuditId&&a.ProductId==t.ProductId);s>=0?this.dataSync[s].Facing=n.Facing:this.dataSync.push(n)}})}})}saveFileExcel(e,i=".xlsx",t=""){let n=new Date,s="download_"+t+"_"+n.getFullYear().toString()+(n.getMonth()+1)+n.getDate()+n.toLocaleTimeString().replace(/[ ]|[,]|[:]/g,"").trim()+i;(0,mt.saveAs)(e,s)}export(e){console.log("audit_id",e),e&&this.detectAIService.ewo_detectai_detail_export(e)}detectAiDetail(e){return E(this,null,function*(){return new Promise((i,t)=>{this.detectAIService.ewo_detectai_detail(e).subscribe(n=>{if(n.result==V.ok){let s=n.data.dataDetails.map(f=>{let{row_num:y,detect_detail_id:S,sku_code:M,sku_name:P,sku_facing:A,sku_facing_ai:L,audit_id:F,sku_id:j,detect_id:O}=D({},f);return{row_num:y,detect_detail_id:S,sku_code:M,sku_name:P,sku_facing:A,sku_facing_ai:L,audit_id:F,sku_id:j,detect_id:O}}),a=n.data.photoDetails.map(f=>{let{id:y,src:S,title:M,subtitle:P,_index:A,photo_url:L,detect_id:F}=D({},f);return S&&(S=this.sanitizer_var.bypassSecurityTrustResourceUrl(S)),{id:y,src:S,title:M,subtitle:P,_index:A,photo_url:L,detect_id:F}}),b=n.data.dataDetails.map(f=>{let{audit_id:y,sku_code:S,sku_facing:M}=D({},f);return{AuditId:y,ProductId:Number(S),Facing:M}});i({dataDetails:s,photoDetails:a,dataSync:b})}i([])})})})}showImage(e,i){let t=e;localStorage.setItem("listphoto",JSON.stringify(i)),localStorage.setItem("changeindex",t),this.urlgallery="assets/ZoomImage/tool.html",document.open(this.urlgallery,"image_default","height=700,width=900,top=100,left= 539.647")}toggleLiveDemo(){this.visible=!this.visible}handleLiveDemoChange(e){this.visible=e}AwaitSave(e){return E(this,null,function*(){console.log("IDetectAIDataDetail============",e),this.message="";var i={};return i.listData=e,new Promise((t,n)=>{this.detectAIService.ewo_detectai_detail_save(i).subscribe(s=>{s.result==V.ok&&(this.message="L\u01B0u th\xE0nh c\xF4ng...!",e.forEach(a=>{let b={AuditId:a.audit_id,ProductId:Number(a.sku_code),Facing:a.sku_facing},f=this.dataSync.findIndex(y=>y.AuditId==a.audit_id&&y.ProductId==Number(a.sku_code));f>=0?this.dataSync[f].Facing=b.Facing:this.dataSync.push(b)}),t({data:s})),t([]),n(()=>{this.message="\u0110\xE3 x\u1EA3y ra l\u1ED7i...!"})})})})}AwaitQCSave(e){return E(this,null,function*(){return this.message="",new Promise((i,t)=>{this.detectAIService.ewo_detectai_qcsave(e.detect_id).subscribe(n=>{n.result==V.ok&&(this.message="X\xE1c nh\u1EADn th\xE0nh c\xF4ng...!",this.visible=!this.visible,i({data:n})),i([]),t(()=>{this.message="\u0110\xE3 x\u1EA3y ra l\u1ED7i...!",this.visible=!this.visible})})})})}AwaitDataSync(e){return E(this,null,function*(){return this.message="",new Promise((i,t)=>{this.detectAIService.datasync_detail(e).subscribe(n=>{n.result==V.ok&&i({data:n}),i([]),t(()=>{})})})})}SaveDetail(e,i){return E(this,null,function*(){e.forEach(n=>{!n.sku_facing&&n.sku_facing!=0&&(n.sku_facing=n.sku_facing_ai)});let t=yield this.AwaitSave(e);this.visible=!this.visible})}SaveNote(e){return E(this,null,function*(){console.log("fulldata.detect_id",e.detect_id,e.note,e.resultQC),yield this.detectAIService.DetectAI_update_note(e.detect_id,e.note,e.resultQC).subscribe(i=>{i.data==1?(this.message="Note th\xE0nh c\xF4ng...!",this.visible=!this.visible):(this.message="L\u1ED7i...!",this.visible=!this.visible)})})}QCSave(e){return E(this,null,function*(){if(!this.details_visible[e.detect_id]||!this.details_visible[e.detect_id].dataDetails){this.message="Vui l\xF2ng ki\u1EC3m tra k\u1EBFt qu\u1EA3 chi ti\u1EBFt tr\u01B0\u1EDBc x\xE1c nh\u1EADn...!",this.visible=!this.visible;return}if(this.details_visible[e.detect_id].dataDetails.filter(a=>e.audit_id==a.audit_id&&!a.sku_facing).length>0){this.message="Vui l\xF2ng l\u01B0u h\u1EBFt k\u1EBFt qu\u1EA3 chi ti\u1EBFt tr\u01B0\u1EDBc x\xE1c nh\u1EADn...!",this.visible=!this.visible;return}let t=yield this.AwaitQCSave(e);if(!this.item_visible[e.detect_id]){e.detect_verify=1;let a=new Date;e.qc_update_date=this.formatDate(a),this.item_visible[e.detect_id]=D({},e)}(e.detect_verify==1||this.item_visible[e.detect_id]?.detect_verify==1)&&(this.message="\u0110\xE3 x\xE1c nh\u1EADn...!",this.visible=!this.visible);let n=this.dataSync.filter(a=>e.audit_id==a.AuditId&&a.Facing),s=yield this.AwaitDataSync(n)})}updateNote(e,i){this.details_visible[e]||(this.details_visible[e]={note:""}),console.log("value",i),this.details_visible[e].note=i}updateResultQC(e,i,t){this.details_visible[e]&&(this.details_visible[e].resultQC=i.target.value)}Filter(e){this.isLoading=!0,this.filterData=[],this.message="",this.fromDate||(this.message="Vui l\xF2ng ch\u1ECDn fromDate!",this.visible=!0),this.toDate||(this.message="Vui l\xF2ng ch\u1ECDn toDate!",this.visible=!0),this.currentPage=e;try{this.detectAIService.ewo_detectai_getall(G.DateToInt(this.fromDate),G.DateToInt(this.toDate),66,this.employee_code,this.shop_code,this.report_code,e,this.selected_statusDetectURL).subscribe(i=>{i.result==V.ok&&(this.isShowData=!0,this.isLoading=!1,this.totalPages=Math.ceil(i.data[0].TotalRows/20),i.data&&i.data.length?this.filterData=i.data.map(t=>{let{detect_id:n,audit_id:s,employee:a,shop_code:b,shop_name:f,shop_address:y,shop_type:S,show:M,detected_date:P,detect_verify:A,qc_update_date:L,dataDetails:F,photoDetails:j,note:O,resultQC:gt}=R(D({},t),{show:null,dataDetails:[],photoDetails:[]});return{detect_id:n,audit_id:s,employee:a,shop_code:b,shop_name:f,shop_address:y,shop_type:S,show:M,detected_date:P,detect_verify:A,qc_update_date:L,dataDetails:F,photoDetails:j,note:O,resultQC:gt}}):(this.message="Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u!",this.visible=!0)),this.isLoading=!1},i=>{this.isLoading=!1,this.message="L\u1ED7i...!"+i,this.visible=!this.visible})}catch{this.isLoading=!1}}formatDate(e){let i=[e.getFullYear(),e.getMonth()+1,e.getDate()].map((n,s)=>n.toString().padStart(2,"0")).join("-"),t=[e.getHours(),e.getMinutes(),e.getSeconds()].map((n,s)=>n.toString().padStart(2,"0")).join(":");return i+" "+t}downloadImage(e){console.log("imageUrlimageUrl",e);let i=new Date,t="image_download_"+i.getFullYear().toString()+(i.getMonth()+1)+i.getDate()+i.toLocaleTimeString().replace(/[ ]|[,]|[:]/g,"").trim()+"."+e.split(".").pop();fetch(e).then(n=>n.blob()).then(n=>{let s=window.URL.createObjectURL(n),a=document.createElement("a");a.href=s,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(s)}).catch(n=>console.error("Error downloading the image:",n))}getSKULabel(){this.detectAIService.ewo_detect_ai_getSkulabel(66).subscribe(e=>{e.result==V.ok&&(this.listSKU=e.data.sort((i,t)=>i.sku_name.localeCompare(t.sku_name)))},e=>{this.message="L\u1ED7i nh\xE3n ...!\u0110ang g\u1ECDi l\u1EA1i:      "+e.message,this.visible==!1&&(this.visible=!this.visible),setTimeout(()=>{this.getSKULabel()},1e3)})}insertDetailSKU(e,i){console.log(this.sku_id),console.log(this.sku_facing),this.detectAIService.ewo_detectai_inserDetail(66,e,Number(this.sku_id),Number(this.sku_facing)).subscribe(t=>{this.sku_id=this.listSKU[-1],this.sku_facing=0,this.toggleDetails(i),this.toggleDetails(i),console.log("data",t),t.data[0]&&t.data[0].message=="\u0110\xE3 t\u1ED3n t\u1EA1i nh\xE3n"?(this.message=t.data[0].message,this.visible=!this.visible):(this.message="Th\xEAm th\xE0nh c\xF4ng...!",this.visible=!this.visible)},t=>{this.message="Th\xEAm l\u1ED7i : "+t.message,console.log("error",t),this.visible=!this.visible})}RemoveItemDetail(e,i){this.detectAIService.ewo_detete_DetectAIDetail(66,e.detect_detail_id).subscribe(t=>{this.toggleDetails(i),this.toggleDetails(i),this.message="X\xF3a th\xE0nh c\xF4ng...!",this.visible=!this.visible},t=>{this.message="X\xF3a l\u1ED7i: "+t.message,this.visible=!this.visible})}onPageChange(e){this.currentPage=e,console.log("Page :",this.currentPage),this.Filter(this.currentPage)}handleScrollOnTop(){window.scrollTo({top:0,behavior:"smooth"})}handleModalCTBC_OSA(){this.toggleModalCTBC_OSA=!0}openImageInNewWindow(e,i){let t=e.changingThisBreaksApplicationSecurity,n=window.open("","_blank");n&&i==1&&n.document.write(`
      <html>
        <head>
          <title>Image Viewer</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              overflow: hidden;
              background: #1E1E1E;
              cursor: grab;
            }
            body.dragging {
              cursor: grabbing;
            }
            .viewer-container {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            object {
              max-width: none;
              max-height: none;
              object-fit: contain;
              transform-origin: top left;
              transition: transform 0.05s ease-out;
              pointer-events: none;
            }
            .zoom-level {
              background: rgba(0,0,0,0.5);
              color: white;
              padding: 5px 10px;
              border-radius: 4px;
              position: fixed;
              top: 20px;
              right: 20px;
              font-family: sans-serif;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="viewer-container" id="container"></div>
          <div class="zoom-level" id="zoomLevel">100%</div>
          <script>
            const imageUrl = "${t}";
            const objectElement = document.createElement('object');
            objectElement.data = imageUrl;
            objectElement.id = 'image';
            objectElement.type = 'image/svg+xml';
            // objectElement.width = '100%';
            // objectElement.height = '100%';
            document.getElementById('container').appendChild(objectElement);

            const container = document.getElementById('container');
            const zoomLevel = document.getElementById('zoomLevel');
            let image = null;
            let scale = 1;
            let translateX = 0;
            let translateY = 0;
            const MAX_SCALE = 12;

            function updateTransform() {
              if (image) {
                image.style.transform = \`translate(\${translateX}px, \${translateY}px) scale(\${scale})\`;
                zoomLevel.textContent = \`\${Math.round(scale * 100)}%\`;
              }
            }

            // Mouse wheel zoom at cursor
            container.addEventListener('wheel', (e) => {
              e.preventDefault();
              if (!image) return;

              const rect = image.getBoundingClientRect();
              const mouseX = e.clientX - rect.left;
              const mouseY = e.clientY - rect.top;

              const prevScale = scale;
              const delta = e.deltaY > 0 ? -0.15 : 0.15;
              scale = Math.min(Math.max(0.1, scale + delta), MAX_SCALE);
              const scaleFactor = scale / prevScale;

              translateX -= (mouseX - translateX) * (scaleFactor - 1);
              translateY -= (mouseY - translateY) * (scaleFactor - 1);

              updateTransform();
            });

            // Dragging
            let isDragging = false;
            let dragStartX = 0;
            let dragStartY = 0;

            container.addEventListener('mousedown', (e) => {
              isDragging = true;
              dragStartX = e.clientX - translateX;
              dragStartY = e.clientY - translateY;
              document.body.classList.add('dragging');
            });

            container.addEventListener('mousemove', (e) => {
              if (!isDragging) return;
              translateX = e.clientX - dragStartX;
              translateY = e.clientY - dragStartY;
              updateTransform();
            });

            container.addEventListener('mouseup', () => {
              isDragging = false;
              document.body.classList.remove('dragging');
            });

            container.addEventListener('mouseleave', () => {
              isDragging = false;
              document.body.classList.remove('dragging');
            });

            objectElement.addEventListener('load', () => {
              image = objectElement;
              updateTransform();
            });
          <\/script>
        </body>
      </html>
    `),n&&i==2&&n.document.write(`
    <html>
      <head>
        <title>Image Viewer</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: #1E1E1E;
            cursor: grab;
          }
          body.dragging {
            cursor: grabbing;
          }
          .viewer-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
          #image {
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: top left;
            transition: transform 0.05s ease-out;
            will-change: transform;
            pointer-events: none; /* \u2705 FIX chu\u1ED9t d\xEDnh \u1EA3nh */
          }
          .zoom-level {
            background: rgba(0,0,0,0.5);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            position: fixed;
            top: 20px;
            right: 20px;
            font-family: sans-serif;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="viewer-container" id="container">
          <img src="${e}" id="image">
        </div>
        <div class="zoom-level" id="zoomLevel">100%</div>
        <script>
          const container = document.getElementById('container');
          const image = document.getElementById('image');
          const zoomLevel = document.getElementById('zoomLevel');

          let scale = 1;
          let translateX = 0;
          let translateY = 0;
          const MAX_SCALE = 12;

          function updateTransform() {
            image.style.transform = \`translate(\${translateX}px, \${translateY}px) scale(\${scale})\`;
            zoomLevel.textContent = \`\${Math.round(scale * 100)}%\`;
          }

          container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const rect = image.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const prevScale = scale;
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            scale = Math.min(Math.max(0.1, scale + delta), MAX_SCALE);
            const scaleFactor = scale / prevScale;

            translateX -= (mouseX - translateX) * (scaleFactor - 1);
            translateY -= (mouseY - translateY) * (scaleFactor - 1);

            updateTransform();
          });

          let isDragging = false;
          let dragStartX = 0;
          let dragStartY = 0;

          container.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragStartX = e.clientX - translateX;
            dragStartY = e.clientY - translateY;
            document.body.classList.add('dragging');
          });

          container.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            translateX = e.clientX - dragStartX;
            translateY = e.clientY - dragStartY;
            updateTransform();
          });

          container.addEventListener('mouseup', () => {
            isDragging = false;
            document.body.classList.remove('dragging');
          });

          container.addEventListener('mouseleave', () => {
            isDragging = false;
            document.body.classList.remove('dragging');
          });

          updateTransform();
        <\/script>
      </body>
    </html>
  `)}onSkuFacingChange(e,i){console.log("item",e),console.log("newValue",i),console.log("this.details_visible",this.details_visible),this.details_visible[e.detect_id].dataDetails.forEach(t=>{if(t.row_num==e.row_num){t.sku_facing=i,console.log("OKOK");return}})}static{this.\u0275fac=function(i){return new(i||r)(N(ue),N(xe),N(st),N(ge))}}static{this.\u0275cmp=q({type:r,selectors:[["app-trademt-detect"]],decls:81,vars:17,consts:[["datePicker","cDatePicker"],["smartTable","cSmartTable"],[1,"mt-1","mb-1"],[1,"p-2"],["md","3"],[1,"clearfix"],[1,"pt-3"],["inputReadOnly","",3,"ngModelChange","ngModel","calendarDate"],[1,"input-prepend"],["cInputGroupText",""],["cIcon","","name","cilMagnifyingGlass"],["cFormControl","","placeholder","Nh\xE2n vi\xEAn","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","C\u1EEDa h\xE0ng","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","M\xE3 b\xE1o c\xE1o","type","text",3,"ngModelChange","ngModel"],["cSelect","",2,"width","100%","padding","6px 12px","border","1px solid #dbdfe6",3,"ngModelChange","ngModel"],[3,"value"],["cButton","",3,"click"],["cIcon","","name","cilFile"],["id","liveDemoModal",3,"visible"],["cModalTitle",""],["cButtonClose","",3,"click"],["md","12"],["cButton","","color","primary",3,"click"],["class","fade show text-center p-5",4,"ngIf"],[4,"ngIf"],["id","liveDemoModal",3,"visibleChange","visible"],[1,"position-fixed","end-0","bottom-0","m-4",2,"cursor","pointer",3,"click"],["cIcon","","name","cilArrowCircleTop",1,"bg-white","rounded","p-2",2,"width","40px","height","40px"],[1,"fade","show","text-center","p-5"],[1,"spinner-grow","spinner-grow-sm","text-success"],[1,"m-1","text-success"],["xs","12"],[1,"card-data"],["header","","loading","",3,"columns","itemsPerPageSelect","itemsPerPage","items","tableProps"],["cTemplateId","tableData"],["cTemplateId","tableDetails"],["align","center",3,"activePageChange","activePage","pages"],[3,"cAlign","cTableActive","cTableColor","ngClass"],["cButton","","color","primary"],["disabled","","cButton","","color","primary"],["cButton","","color","primary",3,"click","dblclick"],["cIcon","",3,"name"],["disabled","","cButton","","color","primary",3,"click"],["cCollapse","",3,"visible"],[1,"bg-light-subtle","p-1","w-100","text-center"],["lg","7"],[1,"table-container"],["header","","loading","",3,"columns","columnFilter","columnSorter","itemsPerPageSelect","itemsPerPage","itemsPerPageOptions","items","tableProps"],[2,"display","flex","justify-content","end","align-items","center","gap","5px"],[1,"form-select",2,"width","30%",3,"change","value"],["value","true"],["value","false"],[2,"display","flex","justify-content","end","align-items","center","gap","5px","margin-top","13px"],["bindLabel","sku_name","bindValue","sku_id","placeholder","Ch\u1ECDn s\u1EA3n ph\u1EA9m",1,"custom-ng-select",2,"min-width","380px",3,"ngModelChange","items","ngModel","searchable"],[1,"input-prepend",2,"width","fit-content"],["cFormControl","","cFormControlplaceholder","Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng","type","text",2,"width","70px",3,"ngModelChange","ngModel"],[1,"float-left",2,"margin-top","13px"],["color","primary","cButton","","size","md","variant","outline",3,"click","disabled"],[2,"display","flex"],[1,"",2,"display","flex"],["name","",2,"width","100%",3,"ngModelChange","ngModel"],["color","primary","cButton","","size","md","variant","outline",2,"margin-left","15px",3,"click","disabled"],["lg","5"],[3,"dark","wrap"],["data-coreui-interval","-99999999",3,"class"],["caption","Previous","direction","prev",2,"z-index","-999",3,"routerLink"],["caption","Next","direction","next",3,"routerLink"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["cFormControl","","type","number","placeholder","blank = Facing Detected","name","sku_facing",3,"ngModelChange","ngModel","ngStyle","disabled"],[2,"cursor","pointer",3,"click"],["cIcon","","name","cilTrash",2,"color","brown"],["data-coreui-interval","-99999999"],[2,"cursor","pointer","text-align","left",3,"click"],["cIcon","","name","cil-arrow-thick-to-bottom","size","lg"],["class","d-block ","style","width: 90%;","loading","lazy",3,"src","alt","click",4,"ngIf"],[3,"click",4,"ngIf"],["loading","lazy",1,"d-block",2,"width","90%",3,"click","src","alt"],[3,"click"],["type","image/svg+xml",2,"pointer-events","none"],["xs","12",1,"text-center","p-5"]],template:function(i,t){if(i&1){let n=C();o(0,"c-card",2)(1,"c-row",3)(2,"c-col",4)(3,"span",5)(4,"h6",6),u(5,"T\u1EEB ng\xE0y"),l()(),o(6,"c-date-picker",7,0),T("ngModelChange",function(a){return m(n),w(t.fromDate,a)||(t.fromDate=a),_(a)}),l()(),o(8,"c-col",4)(9,"span",5)(10,"h6",6),u(11,"\u0110\u1EBFn ng\xE0y"),l()(),o(12,"c-date-picker",7,0),T("ngModelChange",function(a){return m(n),w(t.toDate,a)||(t.toDate=a),_(a)}),l()(),o(14,"c-col",4)(15,"span",5)(16,"h6",6),u(17,"Nh\xE2n vi\xEAn"),l()(),o(18,"c-input-group",8)(19,"span",9),k(),v(20,"svg",10),l(),B(),o(21,"input",11),T("ngModelChange",function(a){return m(n),w(t.employee_code,a)||(t.employee_code=a),_(a)}),l()()(),o(22,"c-col",4)(23,"span",5)(24,"h6",6),u(25,"C\u1EEDa h\xE0ng"),l()(),o(26,"c-input-group",8)(27,"span",9),k(),v(28,"svg",10),l(),B(),o(29,"input",12),T("ngModelChange",function(a){return m(n),w(t.shop_code,a)||(t.shop_code=a),_(a)}),l()()()(),o(30,"c-row",3)(31,"c-col",4)(32,"span",5)(33,"h6",6),u(34,"M\xE3 b\xE1o c\xE1o"),l()(),o(35,"c-input-group",8)(36,"span",9),k(),v(37,"svg",10),l(),B(),o(38,"input",13),T("ngModelChange",function(a){return m(n),w(t.report_code,a)||(t.report_code=a),_(a)}),l()()(),o(39,"c-col",4)(40,"span",5)(41,"h6",6),u(42,"H\xECnh Detect"),l()(),o(43,"select",14),T("ngModelChange",function(a){return m(n),w(t.selected_statusDetectURL,a)||(t.selected_statusDetectURL=a),_(a)}),o(44,"option",15),u(45,"T\u1EA5t c\u1EA3"),l(),o(46,"option",15),u(47,"C\xF3 h\xECnh detect"),l(),o(48,"option",15),u(49,"Ch\u01B0a c\xF3 h\xECnh detect"),l()()(),o(50,"c-col",4)(51,"span",5)(52,"h6",6),u(53,"-"),l()(),o(54,"button",16),h("click",function(){return m(n),_(t.handleModalCTBC_OSA())}),k(),v(55,"svg",17),u(56," Chi ti\u1EBFt b\xE1o c\xE1o"),l()(),B(),o(57,"c-modal",18)(58,"c-modal-header")(59,"h5",19),u(60,"Th\xF4ng tin chi ti\u1EBFt b\xE1o c\xE1o"),l(),o(61,"button",20),h("click",function(){return m(n),_(t.toggleModalCTBC_OSA=!1)}),l()(),v(62,"c-modal-body"),l()(),v(63,"hr"),o(64,"c-row",3)(65,"c-col",21)(66,"button",22),h("click",function(){return m(n),_(t.Filter(1))}),u(67,"T\xECm ki\u1EBFm"),l()()()(),o(68,"c-card"),I(69,bt,4,0,"div",23)(70,Pt,9,8,"c-row",24)(71,At,4,0,"c-row",24),l(),o(72,"c-modal",25),h("visibleChange",function(a){return m(n),_(t.handleLiveDemoChange(a))}),o(73,"c-modal-header")(74,"h5",19),u(75,"Th\xF4ng b\xE1o"),l(),o(76,"button",20),h("click",function(){return m(n),_(t.toggleLiveDemo())}),l()(),o(77,"c-modal-body"),u(78),l()(),o(79,"div",26),h("click",function(){return m(n),_(t.handleScrollOnTop())}),k(),v(80,"svg",27),l()}i&2&&(d(6),x("ngModel",t.fromDate),g("calendarDate",t.calendarFromDate),d(6),x("ngModel",t.toDate),g("calendarDate",t.calendarToDate),d(9),x("ngModel",t.employee_code),d(8),x("ngModel",t.shop_code),d(9),x("ngModel",t.report_code),d(5),x("ngModel",t.selected_statusDetectURL),d(),g("value",-1),d(2),g("value",1),d(2),g("value",0),d(9),g("visible",t.toggleModalCTBC_OSA),d(12),g("ngIf",t.isLoading),d(),g("ngIf",t.filterData&&t.filterData.length>0),d(),g("ngIf",t.isShowData&&!t.isLoading&&t.filterData.length==0),d(),g("visible",t.visible),d(6),ne(t.message))},dependencies:[Re,Oe,We,Ue,Te,ze,Me,Le,Ae,$e,Ze,je,Je,qe,et,tt,Pe,ke,Ee,oe,Ve,Fe,Ne,Xe,Be,pe,_e,le,me,de,re,se,ce,Ye,De,we,ye,he,be,Ce,ve,Se,fe,He,Ge,Qe,Ie,Ke,dt,ct],styles:[".card-data[_ngcontent-%COMP%]{padding:0!important}.pt-3[_ngcontent-%COMP%]{padding-top:0!important}.table-container[_ngcontent-%COMP%]{max-height:90vh;overflow-y:auto}.table-container[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background:#fff;z-index:10}.custom-ng-select[_ngcontent-%COMP%]     .ng-dropdown-panel .ng-option{text-align:left}"]})}}return r})();export{di as TrademtDetectComponent};
