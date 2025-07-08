import{a as at,b as ot}from"./chunk-76SCBUFZ.js";import{a as j}from"./chunk-MMQBQGI5.js";import{a as R}from"./chunk-CWM7VNHW.js";import"./chunk-26M4WOOW.js";import{a as F}from"./chunk-RJESRZJ5.js";import{_a as it,ea as tt,hb as nt,l as Je,s as Ze,z as et}from"./chunk-OVEX3KHJ.js";import"./chunk-FYYLBBTR.js";import{$ as De,Bb as qe,Cb as $e,Ga as Pe,H as ge,I as pe,L as he,Ma as Xe,N as ve,Na as Ne,Pa as Ye,Q as be,R as fe,U as Ce,V as we,Va as We,W,Wa as je,X as ye,_ as Se,aa as xe,ba as Ee,d as ce,da as ke,fb as ze,h as de,ia as Ie,ib as Oe,jb as Ue,kb as Re,m as me,ma as Te,na as Me,q as _e,sa as Fe,t as ue,ua as Be,va as Ve,vb as Ke,wb as Ge,xa as Ae,xb as Qe,ya as Le,yb as He}from"./chunk-55Y7RW7N.js";import{$b as Z,Ac as m,Bc as V,Cb as B,Cc as U,Fc as k,Gc as D,Hc as I,Hd as se,Lc as ne,Mc as ae,Qb as H,Rb as g,Ub as q,Vb as $,Yb as J,ac as ee,bc as a,cc as o,db as K,dc as v,eb as G,hc as S,ib as c,kc as h,mc as d,nb as Y,pc as M,ra as _,sa as u,ta as E,ua as N,vd as oe,wb as Q,wd as le,xd as re,yc as te,zc as ie}from"./chunk-XOKJR3V5.js";import{a as y,b as O,h as x}from"./chunk-WWX6BADO.js";var st=()=>({hover:!0,bordered:!0,striped:!1,responsive:!0}),ct=(s,p)=>p.src;function dt(s,p){s&1&&(a(0,"div",26),v(1,"i",27),a(2,"span",28),m(3,"\u0110ang load d\u1EEF li\u1EC7u"),o()())}function mt(s,p){if(s&1){let e=S();a(0,"button",20),h("click",function(){_(e);let t=d().item,n=d(2);return u(n.toggleDetails(t))}),E(),v(1,"svg",38),o()}if(s&2){let e=d().item,i=d(2);c(),M("name",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].visible)===!0?"cilMinus":"cilPlus")}}function _t(s,p){if(s&1){let e=S();a(0,"button",39),h("click",function(){_(e);let t=d().item,n=d(2);return u(n.QCSave(t))}),m(1),o()}if(s&2){let e=d().item,i=d(2);M("disabled",e.detect_verify==1||(i.item_visible[e.detect_id]==null?null:i.item_visible[e.detect_id].detect_verify)==1),c(),U(" ",e.detect_verify==1||(i.item_visible[e.detect_id]==null?null:i.item_visible[e.detect_id].detect_verify)==1?"\u0110\xE3 x\xE1c nh\u1EADn":"X\xE1c nh\u1EADn"," ")}}function ut(s,p){if(s&1&&m(0),s&2){let e=d().tdContent;U(" ",e," ")}}function gt(s,p){if(s&1&&(a(0,"td",35),B(1,mt,2,1,"button",36)(2,_t,2,2,"button",37)(3,ut,1,1),o()),s&2){let e,i,t,n,r=p.columnName,l=p.item;d();let f=te(5),b=d();q(b.details_visible[l.detect_id]!=null&&b.details_visible[l.detect_id].visible?"background-color:#f2f2f2":""),g("cAlign",(e=f.getTableDataCellProps(l,r))==null?null:e.align)("cTableActive",(i=f.getTableDataCellProps(l,r))==null?null:i.active)("cTableColor",(t=f.getTableDataCellProps(l,r))==null?null:t.color)("ngClass",f.getTableDataCellClass(l,r)),c(),J((n=r)==="show"?1:n==="detect_verify"?2:3)}}function pt(s,p){if(s&1){let e=S();a(0,"tr")(1,"td"),m(2),o(),a(3,"td"),m(4),o(),a(5,"td"),m(6),o(),a(7,"td"),m(8),o(),a(9,"td")(10,"c-input-group")(11,"input",67),I("ngModelChange",function(t){let n=_(e).$implicit;return D(n.sku_facing,t)||(n.sku_facing=t),u(t)}),o()()(),a(12,"td",68),h("click",function(){let t=_(e).$implicit,n=d().item,r=d(2);return u(r.RemoveItemDetail(t,n))}),E(),v(13,"svg",69),o()()}if(s&2){let e=p.$implicit,i=d().item,t=d(2);c(2),V(e.sku_id),c(2),V(e.sku_code),c(2),V(e.sku_name),c(2),V(e.sku_facing_ai),c(3),ie("text-align: center; ",e.sku_facing&&e.sku_facing_ai!=e.sku_facing?"font-weight: bold;color:red":"",""),M("disabled",(t.details_visible[i.detect_id]==null?null:t.details_visible[i.detect_id].detect_verify)==1),k("ngModel",e.sku_facing)}}function ht(s,p){if(s&1){let e=S();a(0,"img",75),h("click",function(){_(e);let t=d().$implicit,n=d(3);return u(n.openImageInNewWindow(t.photo_url,2))}),o()}if(s&2){let e=d().$implicit;M("alt",e.title),g("src",e.photo_url,K)}}function vt(s,p){if(s&1){let e=S();a(0,"div",76),h("click",function(){_(e);let t=d().$implicit,n=d(3);return u(n.openImageInNewWindow(t.src,1))}),v(1,"object",77),o()}if(s&2){let e=d().$implicit;c(),H("data",e.src,G)}}function bt(s,p){if(s&1){let e=S();a(0,"div",70)(1,"div",71),h("click",function(){let t=_(e).$implicit,n=d(3);return u(n.downloadImage(t.photo_url))}),E(),v(2,"svg",72),o(),B(3,ht,1,2,"img",73)(4,vt,2,1,"div",74),o()}if(s&2){let e=p.$implicit,i=p.$index;$(i===0?"carousel-item active":"carousel-item"),c(3),g("ngIf",!e.src),c(),g("ngIf",e.src)}}function ft(s,p){if(s&1){let e=S();a(0,"div",40)(1,"c-row",41)(2,"c-col",42)(3,"div",43)(4,"table",44)(5,"thead")(6,"tr")(7,"th",45),m(8,"#"),o(),a(9,"th",45),m(10,"M\xE3 s\u1EA3n ph\u1EA9m"),o(),a(11,"th",45),m(12,"T\xEAn s\u1EA3n ph\u1EA9m"),o(),a(13,"th",45),m(14,"Facing Detected"),o(),a(15,"th",45),m(16,"Facing"),o(),v(17,"th"),o()(),a(18,"tbody",46),B(19,pt,14,9,"tr",47),o()()(),a(20,"div",48)(21,"label"),m(22,"K\u1EBFt qu\u1EA3 QC: "),o(),a(23,"select",49),h("change",function(t){let n=_(e).item,r=d(2);return u(r.updateResultQC(n.detect_id,t))}),a(24,"option",50),m(25,"\u0110\xFAng"),o(),a(26,"option",51),m(27,"Sai"),o()()(),a(28,"div",52)(29,"label"),m(30,"S\u1EA3n ph\u1EA9m thi\u1EBFu: "),o(),a(31,"ng-select",53),I("ngModelChange",function(t){_(e);let n=d(2);return D(n.sku_id,t)||(n.sku_id=t),u(t)})("ngModelChange",function(t){_(e);let n=d(2);return D(n.selectedSKU,t)||(n.selectedSKU=t),u(t)}),o(),a(32,"c-input-group",54)(33,"input",55),I("ngModelChange",function(t){_(e);let n=d(2);return D(n.sku_facing,t)||(n.sku_facing=t),u(t)}),o()(),a(34,"button",20),h("click",function(){let t=_(e).item,n=d(2);return u(n.insertDetailSKU(t.detect_id,t))}),m(35,"X\xE1c nh\u1EADn"),o()(),a(36,"c-row")(37,"div",56)(38,"button",57),h("click",function(){let t=_(e).item,n=d(2);return u(n.SaveDetail(n.details_visible[t.detect_id]==null?null:n.details_visible[t.detect_id].dataDetails,n.details_visible[t.detect_id]))}),m(39,"L\u01B0u"),o(),a(40,"button",58),h("click",function(){let t=_(e).item,n=d(2);return u(n.SaveNote(n.details_visible[t.detect_id]))}),m(41,"L\u01B0u Note"),o()()(),a(42,"div",59)(43,"label",60),m(44,"Ghi ch\xFA: "),o(),a(45,"textarea",61),h("ngModelChange",function(t){let n=_(e).item,r=d(2);return u(r.updateNote(n.detect_id,t))}),o()()(),a(46,"c-col",62)(47,"c-carousel",63),v(48,"c-carousel-indicators"),a(49,"c-carousel-inner"),Z(50,bt,5,5,"div",64,ct),o(),v(52,"c-carousel-control",65)(53,"c-carousel-control",66),o()()()()}if(s&2){let e=p.item,i=d(2);g("visible",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].visible),c(19),g("ngForOf",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].dataDetails),c(4),g("value",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].resultQC),c(8),g("items",i.listSKU),k("ngModel",i.sku_id)("ngModel",i.selectedSKU),g("searchable",!0),c(2),k("ngModel",i.sku_facing),c(5),M("disabled",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].detect_verify)==1),c(2),M("disabled",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].detect_verify)==1),c(5),g("ngModel",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].note),c(2),g("dark",!0)("wrap",!1),c(3),ee(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].photoDetails)}}function Ct(s,p){if(s&1){let e=S();a(0,"c-row")(1,"c-col",29)(2,"c-card")(3,"c-card-body",30)(4,"c-smart-table",31,1),B(6,gt,4,8,"ng-template",32)(7,ft,54,13,"ng-template",33),o()(),a(8,"c-smart-pagination",34),h("activePageChange",function(t){_(e);let n=d();return u(n.onPageChange(t))}),o()()()()}if(s&2){let e=d();c(4),g("columns",e.columns)("itemsPerPageSelect",!0)("itemsPerPage",20)("items",e.filterData)("tableProps",ae(7,st)),c(4),g("activePage",e.currentPage)("pages",e.totalPages)}}function wt(s,p){s&1&&(a(0,"c-row")(1,"c-col",78)(2,"span"),m(3,"Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u"),o()()())}var $t=(()=>{class s{constructor(e,i,t,n){this.route=e,this.iconSet=i,this.detectAIService=t,this.sanitizer=n,this.isLoading=!1,this.title="CoreUI-Angular Smart Table Example",this.slides=new Array(3).fill({id:-1,src:"",title:"",subtitle:"",photo_url:""}),this.fromDate=new Date,this.toDate=new Date,this.employee_code=null,this.shop_code=null,this.report_code=null,this.calendarFromDate=new Date(Date.now()),this.calendarToDate=new Date(Date.now()),this.filterData=[],this.dataSync=[],this.columns=[{key:"show",label:"",_style:{width:"3%"}},{key:"detect_id",label:"DetectId"},{key:"audit_id",label:"Id"},{key:"employee",label:"Nh\xE2n vi\xEAn"},{key:"shop_code",label:"M\xE3 c\u1EEDa h\xE0ng"},{key:"shop_name",label:"T\xEAn c\u1EEDa h\xE0ng"},{key:"shop_address",label:"\u0110\u1ECBa ch\u1EC9"},{key:"detected_date",label:"Detected_Date"},{key:"qc_update_date",label:"QC Date"},{key:"detect_verify",label:"",_style:{width:"10%"}}],this.details_visible=Object.create({}),this.item_visible=Object.create({}),this.visible=!1,this.message="",this.totalPages=2,this.isShowData=!1,this.listSKU=[],this.sku_facing=0,this.sku_id=0,this.currentPage=1,this.toggleModalCTBC_OSA=!1,i.icons=O(y(y(y({},nt),Je),Ze),{cilTrash:it,cilArrowCircleTop:et,cilFile:tt}),this.sanitizer_var=n}ngOnInit(){this.getSKULabel()}getBadge(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}}toggleDetails(e){return x(this,null,function*(){if(this.details_visible[e.detect_id]||(this.details_visible[e.detect_id]=y({},e)),this.details_visible[e.detect_id].visible=!this.details_visible[e.detect_id].visible,this.details_visible[e.detect_id].visible){let i=yield this.detectAiDetail(e.detect_id);this.details_visible[e.detect_id].dataDetails=i?.dataDetails,this.details_visible[e.detect_id].photoDetails=i?.photoDetails,i?.dataSync&&i?.dataSync.length>0&&i?.dataSync.forEach(t=>{if(t.Facing){let n={AuditId:t.AuditId,ProductId:t.ProductId,Facing:t.Facing},r=this.dataSync.findIndex(l=>l.AuditId==t.AuditId&&l.ProductId==t.ProductId);r>=0?this.dataSync[r].Facing=n.Facing:this.dataSync.push(n)}})}})}detectAiDetail(e){return x(this,null,function*(){return new Promise((i,t)=>{this.detectAIService.ewo_detectai_detail(e).subscribe(n=>{if(n.result==F.ok){let r=n.data.dataDetails.map(b=>{let{row_num:C,detect_detail_id:w,sku_code:T,sku_name:A,sku_facing:L,sku_facing_ai:P,audit_id:X,sku_id:z}=y({},b);return{row_num:C,detect_detail_id:w,sku_code:T,sku_name:A,sku_facing:L,sku_facing_ai:P,audit_id:X,sku_id:z}}),l=n.data.photoDetails.map(b=>{let{id:C,src:w,title:T,subtitle:A,_index:L,photo_url:P,detect_id:X}=y({},b);return w&&(w=this.sanitizer_var.bypassSecurityTrustResourceUrl(w)),{id:C,src:w,title:T,subtitle:A,_index:L,photo_url:P,detect_id:X}}),f=n.data.dataDetails.map(b=>{let{audit_id:C,sku_code:w,sku_facing:T}=y({},b);return{AuditId:C,ProductId:Number(w),Facing:T}});i({dataDetails:r,photoDetails:l,dataSync:f})}i([])})})})}showImage(e,i){let t=e;localStorage.setItem("listphoto",JSON.stringify(i)),localStorage.setItem("changeindex",t),this.urlgallery="assets/ZoomImage/tool.html",document.open(this.urlgallery,"image_default","height=700,width=900,top=100,left= 539.647")}toggleLiveDemo(){this.visible=!this.visible}handleLiveDemoChange(e){this.visible=e}AwaitSave(e){return x(this,null,function*(){this.message="";var i={};return i.listData=e,new Promise((t,n)=>{this.detectAIService.ewo_detectai_detail_save(i).subscribe(r=>{r.result==F.ok&&(this.message="L\u01B0u th\xE0nh c\xF4ng...!",e.forEach(l=>{let f={AuditId:l.audit_id,ProductId:Number(l.sku_code),Facing:l.sku_facing},b=this.dataSync.findIndex(C=>C.AuditId==l.audit_id&&C.ProductId==Number(l.sku_code));b>=0?this.dataSync[b].Facing=f.Facing:this.dataSync.push(f)}),t({data:r})),t([]),n(()=>{this.message="\u0110\xE3 x\u1EA3y ra l\u1ED7i...!"})})})})}AwaitQCSave(e){return x(this,null,function*(){return this.message="",new Promise((i,t)=>{this.detectAIService.ewo_detectai_qcsave(e.detect_id).subscribe(n=>{n.result==F.ok&&(this.message="X\xE1c nh\u1EADn th\xE0nh c\xF4ng...!",this.visible=!this.visible,i({data:n})),i([]),t(()=>{this.message="\u0110\xE3 x\u1EA3y ra l\u1ED7i...!",this.visible=!this.visible})})})})}AwaitDataSync(e){return x(this,null,function*(){return this.message="",new Promise((i,t)=>{this.detectAIService.datasync_detail(e).subscribe(n=>{n.result==F.ok&&i({data:n}),i([]),t(()=>{})})})})}SaveDetail(e,i){return x(this,null,function*(){e.forEach(n=>{!n.sku_facing&&n.sku_facing!=0&&(n.sku_facing=n.sku_facing_ai)});let t=yield this.AwaitSave(e);this.visible=!this.visible})}SaveNote(e){return x(this,null,function*(){console.log("fulldata.detect_id",e.detect_id,e.note,e.resultQC),yield this.detectAIService.DetectAI_update_note(e.detect_id,e.note,e.resultQC).subscribe(i=>{i.data==1?(this.message="Note th\xE0nh c\xF4ng...!",this.visible=!this.visible):(this.message="L\u1ED7i...!",this.visible=!this.visible)})})}QCSave(e){return x(this,null,function*(){if(!this.details_visible[e.detect_id]||!this.details_visible[e.detect_id].dataDetails){this.message="Vui l\xF2ng ki\u1EC3m tra k\u1EBFt qu\u1EA3 chi ti\u1EBFt tr\u01B0\u1EDBc x\xE1c nh\u1EADn...!",this.visible=!this.visible;return}if(this.details_visible[e.detect_id].dataDetails.filter(l=>e.audit_id==l.audit_id&&!l.sku_facing).length>0){this.message="Vui l\xF2ng l\u01B0u h\u1EBFt k\u1EBFt qu\u1EA3 chi ti\u1EBFt tr\u01B0\u1EDBc x\xE1c nh\u1EADn...!",this.visible=!this.visible;return}let t=yield this.AwaitQCSave(e);if(!this.item_visible[e.detect_id]){e.detect_verify=1;let l=new Date;e.qc_update_date=this.formatDate(l),this.item_visible[e.detect_id]=y({},e)}(e.detect_verify==1||this.item_visible[e.detect_id]?.detect_verify==1)&&(this.message="\u0110\xE3 x\xE1c nh\u1EADn...!",this.visible=!this.visible);let n=this.dataSync.filter(l=>e.audit_id==l.AuditId&&l.Facing),r=yield this.AwaitDataSync(n)})}updateNote(e,i){this.details_visible[e]||(this.details_visible[e]={note:""}),console.log("value",i),this.details_visible[e].note=i}updateResultQC(e,i,t){this.details_visible[e]&&(this.details_visible[e].resultQC=i.target.value)}Filter(e){this.isLoading=!0,this.filterData=[],this.message="",this.fromDate||(this.message="Vui l\xF2ng ch\u1ECDn fromDate!",this.visible=!0),this.toDate||(this.message="Vui l\xF2ng ch\u1ECDn toDate!",this.visible=!0),this.currentPage=e;try{this.detectAIService.ewo_detectai_getall(R.DateToInt(this.fromDate),R.DateToInt(this.toDate),31,this.employee_code,this.shop_code,this.report_code,e).subscribe(i=>{i.result==F.ok&&(this.isShowData=!0,this.isLoading=!1,this.totalPages=Math.ceil(i.data[0].TotalRows/20),i.data&&i.data.length?this.filterData=i.data.map(t=>{let{detect_id:n,audit_id:r,employee:l,shop_code:f,shop_name:b,shop_address:C,shop_type:w,show:T,detected_date:A,detect_verify:L,qc_update_date:P,dataDetails:X,photoDetails:z,note:lt,resultQC:rt}=O(y({},t),{show:null,dataDetails:[],photoDetails:[]});return{detect_id:n,audit_id:r,employee:l,shop_code:f,shop_name:b,shop_address:C,shop_type:w,show:T,detected_date:A,detect_verify:L,qc_update_date:P,dataDetails:X,photoDetails:z,note:lt,resultQC:rt}}):(this.message="Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u!",this.visible=!0)),this.isLoading=!1},i=>{this.isLoading=!1,this.message="L\u1ED7i...!"+i,this.visible=!this.visible})}catch{this.isLoading=!1}}formatDate(e){let i=[e.getFullYear(),e.getMonth()+1,e.getDate()].map((n,r)=>n.toString().padStart(2,"0")).join("-"),t=[e.getHours(),e.getMinutes(),e.getSeconds()].map((n,r)=>n.toString().padStart(2,"0")).join(":");return i+" "+t}downloadImage(e){let i="downloaded-image.jpg";fetch(e).then(t=>t.blob()).then(t=>{let n=window.URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=i,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)}).catch(t=>console.error("Error downloading the image:",t))}getSKULabel(){this.detectAIService.ewo_detect_ai_getSkulabel(31).subscribe(e=>{e.result==F.ok&&(this.listSKU=e.data.sort((i,t)=>i.sku_name.localeCompare(t.sku_name)))},e=>{this.message="L\u1ED7i nh\xE3n ...!\u0110ang g\u1ECDi l\u1EA1i:      "+e.message,this.visible==!1&&(this.visible=!this.visible),setTimeout(()=>{this.getSKULabel()},1e3)})}insertDetailSKU(e,i){console.log(this.sku_id),console.log(this.sku_facing),this.detectAIService.ewo_detectai_inserDetail(31,e,Number(this.sku_id),Number(this.sku_facing)).subscribe(t=>{this.sku_id=this.listSKU[-1],this.sku_facing=0,this.toggleDetails(i),this.toggleDetails(i),console.log("data",t),t.data[0]&&t.data[0].message=="\u0110\xE3 t\u1ED3n t\u1EA1i nh\xE3n"?(this.message=t.data[0].message,this.visible=!this.visible):(this.message="Th\xEAm th\xE0nh c\xF4ng...!",this.visible=!this.visible)},t=>{this.message="Th\xEAm l\u1ED7i : "+t.message,console.log("error",t),this.visible=!this.visible})}RemoveItemDetail(e,i){this.detectAIService.ewo_detete_DetectAIDetail(31,e.detect_detail_id).subscribe(t=>{this.toggleDetails(i),this.toggleDetails(i),this.message="X\xF3a th\xE0nh c\xF4ng...!",this.visible=!this.visible},t=>{this.message="X\xF3a l\u1ED7i: "+t.message,this.visible=!this.visible})}onPageChange(e){this.currentPage=e,console.log("Page :",this.currentPage),this.Filter(this.currentPage)}handleScrollOnTop(){window.scrollTo({top:0,behavior:"smooth"})}handleModalCTBC_OSA(){this.toggleModalCTBC_OSA=!0}openImageInNewWindow(e,i){let t=e.changingThisBreaksApplicationSecurity,n=window.open("","_blank");n&&i==1&&n.document.write(`
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
  `)}onSkuFacingChange(e,i){console.log("item",e),console.log("newValue",i),console.log("this.details_visible",this.details_visible),this.details_visible[e.detect_id].dataDetails.forEach(t=>{if(t.row_num==e.row_num){t.sku_facing=i,console.log("OKOK");return}})}static{this.\u0275fac=function(i){return new(i||s)(Y(_e),Y(W),Y(j),Y(me))}}static{this.\u0275cmp=Q({type:s,selectors:[["app-blue-force-detect"]],features:[ne([W,j,ce])],decls:70,vars:13,consts:[["datePicker","cDatePicker"],["smartTable","cSmartTable"],[1,"mt-1","mb-1"],[1,"p-2"],["md","3"],[1,"clearfix"],[1,"pt-3"],["inputReadOnly","",3,"ngModelChange","ngModel","calendarDate"],[1,"input-prepend"],["cInputGroupText",""],["cIcon","","name","cilMagnifyingGlass"],["cFormControl","","placeholder","Nh\xE2n vi\xEAn","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","C\u1EEDa h\xE0ng","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","M\xE3 b\xE1o c\xE1o","type","text",3,"ngModelChange","ngModel"],["cButton","",3,"click"],["cIcon","","name","cilFile"],["id","liveDemoModal",3,"visible"],["cModalTitle",""],["cButtonClose","",3,"click"],["md","12"],["cButton","","color","primary",3,"click"],["class","fade show text-center p-5",4,"ngIf"],[4,"ngIf"],["id","liveDemoModal",3,"visibleChange","visible"],[1,"position-fixed","end-0","bottom-0","m-4",2,"cursor","pointer",3,"click"],["cIcon","","name","cilArrowCircleTop",1,"bg-white","rounded","p-2",2,"width","40px","height","40px"],[1,"fade","show","text-center","p-5"],[1,"spinner-grow","spinner-grow-sm","text-success"],[1,"m-1","text-success"],["xs","12"],[1,"card-data"],["header","","loading","",3,"columns","itemsPerPageSelect","itemsPerPage","items","tableProps"],["cTemplateId","tableData"],["cTemplateId","tableDetails"],["align","center",3,"activePageChange","activePage","pages"],[3,"cAlign","cTableActive","cTableColor","ngClass"],["cButton","","color","primary"],["cButton","","color","primary",3,"disabled"],["cIcon","",3,"name"],["cButton","","color","primary",3,"click","disabled"],["cCollapse","",3,"visible"],[1,"bg-light-subtle","p-1","w-100","text-center"],["lg","7"],[1,"table-container"],["cTable","",1,"table-container","table","table-bordered","table-hover"],["scope","col"],[2,"overflow","auto","max-height","500px"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","end","align-items","center","gap","5px"],[1,"form-select",2,"width","30%",3,"change","value"],["value","true"],["value","false"],[2,"display","flex","justify-content","end","align-items","center","gap","5px","margin-top","13px"],["bindLabel","sku_name","bindValue","sku_id","placeholder","Ch\u1ECDn s\u1EA3n ph\u1EA9m",1,"custom-ng-select",2,"min-width","380px",3,"ngModelChange","items","ngModel","searchable"],[1,"input-prepend",2,"width","fit-content"],["cFormControlplaceholder","Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng","type","text",2,"width","70px",3,"ngModelChange","ngModel"],[1,"float-left",2,"margin-top","13px"],["color","primary","cButton","","size","md","variant","outline",3,"click","disabled"],["color","primary","cButton","","size","md","variant","outline",2,"margin-left","15px",3,"click","disabled"],[1,""],[2,"float","left"],["name","",2,"width","100%",3,"ngModelChange","ngModel"],["lg","5"],[3,"dark","wrap"],["data-coreui-interval","-99999999",3,"class"],["caption","Previous","direction","prev",2,"z-index","-999",3,"routerLink"],["caption","Next","direction","next",3,"routerLink"],["cFormControl","","type","number","placeholder","blank = Facing Detected","name","sku_facing",3,"ngModelChange","ngModel","disabled"],[2,"cursor","pointer",3,"click"],["cIcon","","name","cilTrash",2,"color","brown"],["data-coreui-interval","-99999999"],[2,"cursor","pointer","text-align","left",3,"click"],["cIcon","","name","cil-arrow-thick-to-bottom","size","lg"],["class","d-block ","style","width: 90%;","loading","lazy",3,"src","alt","click",4,"ngIf"],[3,"click",4,"ngIf"],["loading","lazy",1,"d-block",2,"width","90%",3,"click","src","alt"],[3,"click"],["type","image/svg+xml",2,"pointer-events","none"],["xs","12",1,"text-center","p-5"]],template:function(i,t){if(i&1){let n=S();a(0,"c-card",2)(1,"c-row",3)(2,"c-col",4)(3,"span",5)(4,"h6",6),m(5,"T\u1EEB ng\xE0y"),o()(),a(6,"c-date-picker",7,0),I("ngModelChange",function(l){return _(n),D(t.fromDate,l)||(t.fromDate=l),u(l)}),o()(),a(8,"c-col",4)(9,"span",5)(10,"h6",6),m(11,"\u0110\u1EBFn ng\xE0y"),o()(),a(12,"c-date-picker",7,0),I("ngModelChange",function(l){return _(n),D(t.toDate,l)||(t.toDate=l),u(l)}),o()(),a(14,"c-col",4)(15,"span",5)(16,"h6",6),m(17,"Nh\xE2n vi\xEAn"),o()(),a(18,"c-input-group",8)(19,"span",9),E(),v(20,"svg",10),o(),N(),a(21,"input",11),I("ngModelChange",function(l){return _(n),D(t.employee_code,l)||(t.employee_code=l),u(l)}),o()()(),a(22,"c-col",4)(23,"span",5)(24,"h6",6),m(25,"C\u1EEDa h\xE0ng"),o()(),a(26,"c-input-group",8)(27,"span",9),E(),v(28,"svg",10),o(),N(),a(29,"input",12),I("ngModelChange",function(l){return _(n),D(t.shop_code,l)||(t.shop_code=l),u(l)}),o()()()(),a(30,"c-row",3)(31,"c-col",4)(32,"span",5)(33,"h6",6),m(34,"M\xE3 b\xE1o c\xE1o"),o()(),a(35,"c-input-group",8)(36,"span",9),E(),v(37,"svg",10),o(),N(),a(38,"input",13),I("ngModelChange",function(l){return _(n),D(t.report_code,l)||(t.report_code=l),u(l)}),o()()(),a(39,"c-col",4)(40,"span",5)(41,"h6",6),m(42,"-"),o()(),a(43,"button",14),h("click",function(){return _(n),u(t.handleModalCTBC_OSA())}),E(),v(44,"svg",15),m(45," Chi ti\u1EBFt b\xE1o c\xE1o"),o()(),N(),a(46,"c-modal",16)(47,"c-modal-header")(48,"h5",17),m(49,"Th\xF4ng tin chi ti\u1EBFt b\xE1o c\xE1o"),o(),a(50,"button",18),h("click",function(){return _(n),u(t.toggleModalCTBC_OSA=!1)}),o()(),v(51,"c-modal-body"),o()(),v(52,"hr"),a(53,"c-row",3)(54,"c-col",19)(55,"button",20),h("click",function(){return _(n),u(t.Filter(1))}),m(56,"T\xECm ki\u1EBFm"),o()()()(),a(57,"c-card"),B(58,dt,4,0,"div",21)(59,Ct,9,8,"c-row",22)(60,wt,4,0,"c-row",22),o(),a(61,"c-modal",23),h("visibleChange",function(l){return _(n),u(t.handleLiveDemoChange(l))}),a(62,"c-modal-header")(63,"h5",17),m(64,"Th\xF4ng b\xE1o"),o(),a(65,"button",18),h("click",function(){return _(n),u(t.toggleLiveDemo())}),o()(),a(66,"c-modal-body"),m(67),o()(),a(68,"div",24),h("click",function(){return _(n),u(t.handleScrollOnTop())}),E(),v(69,"svg",25),o()}i&2&&(c(6),k("ngModel",t.fromDate),g("calendarDate",t.calendarFromDate),c(6),k("ngModel",t.toDate),g("calendarDate",t.calendarToDate),c(9),k("ngModel",t.employee_code),c(8),k("ngModel",t.shop_code),c(9),k("ngModel",t.report_code),c(8),g("visible",t.toggleModalCTBC_OSA),c(12),g("ngIf",t.isLoading),c(),g("ngIf",t.filterData&&t.filterData.length>0),c(),g("ngIf",t.isShowData&&!t.isLoading&&t.filterData.length==0),c(),g("visible",t.visible),c(6),V(t.message))},dependencies:[je,We,Pe,Ne,ye,Xe,xe,Me,Te,He,Qe,Ye,Ge,Ke,qe,$e,Ie,De,Se,oe,ke,Fe,Ve,Ae,le,Be,ue,de,re,se,Le,we,be,fe,ge,ve,pe,Ce,he,Re,Oe,Ue,Ee,ze,ot,at],styles:[".card-data[_ngcontent-%COMP%]{padding:0!important}.pt-3[_ngcontent-%COMP%]{padding-top:0!important}.table-container[_ngcontent-%COMP%]{max-height:500px;overflow-y:auto}.table-container[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background:#fff;z-index:10}.custom-ng-select[_ngcontent-%COMP%]     .ng-dropdown-panel .ng-option{text-align:left}"]})}}return s})();export{$t as BlueForceDetectComponent};
