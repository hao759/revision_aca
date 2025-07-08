import{a as rt}from"./chunk-4AD2TD6K.js";import{a as nt,b as ot}from"./chunk-76SCBUFZ.js";import{b as lt,c as at}from"./chunk-EJMYRJUN.js";import{a as it}from"./chunk-MMQBQGI5.js";import{a as x}from"./chunk-CWM7VNHW.js";import"./chunk-26M4WOOW.js";import{a as L}from"./chunk-RJESRZJ5.js";import{_a as et,ea as Ze,hb as tt,l as He,s as qe,z as Je}from"./chunk-OVEX3KHJ.js";import"./chunk-FYYLBBTR.js";import{$ as ge,Bb as Re,Cb as $e,Ga as Be,H as ae,I as re,Jb as Ke,Kb as We,L as ce,Lb as Ge,Ma as Ee,N as se,Nb as Qe,Pa as Me,U as de,Va as Ae,W as me,Wa as Ie,X as _e,_ as pe,aa as ue,ba as he,da as fe,fb as Pe,gb as Ve,hb as Le,ia as ve,ib as Fe,jb as ze,kb as Xe,lb as Ye,m as oe,ma as Ce,na as be,sa as Se,t as le,ta as we,ua as ye,va as Te,vb as Ne,wa as De,wb as Ue,xa as xe,xb as je,ya as ke,yb as Oe}from"./chunk-55Y7RW7N.js";import{$b as U,Ac as f,Ad as te,Bc as Q,Bd as ie,Cb as b,Cc as B,Fc as E,Gc as M,Hc as A,Hd as ne,Mc as D,Oc as H,Qb as Y,Rb as m,Vb as N,Yb as G,ac as j,bc as a,cc as s,db as z,dc as C,eb as X,ec as S,fc as w,hc as v,ib as c,kc as u,mc as l,nb as V,pc as O,ra as p,sa as g,ta as P,ua as K,vd as q,wb as W,xd as J,yc as T,yd as Z,zd as ee}from"./chunk-XOKJR3V5.js";import{a as k,b as F,h as y}from"./chunk-WWX6BADO.js";var ct=()=>[200,1e3],R=()=>({hover:!0,bordered:!0,striped:!1,responsive:!0}),st=()=>[500,1e3],dt=()=>({"text-align":"center"}),mt=(o,_)=>({"text-align":"center","font-weight":o,color:_}),_t=(o,_)=>_.src,pt=(o,_)=>_.detect_id;function gt(o,_){if(o&1){let e=v();a(0,"button",10),u("click",function(){p(e);let t=l().item,n=l(2);return g(n.toggleDetails(t))}),P(),C(1,"svg",40),s()}if(o&2){let e=l().item,i=l(2);c(),O("name",(i.details_visible[e.shop_code]==null?null:i.details_visible[e.shop_code].visible)===!0?"cilMinus":"cilPlus")}}function ut(o,_){if(o&1&&f(0),o&2){let e=l().tdContent;B(" ",e," ")}}function ht(o,_){if(o&1&&(a(0,"td",38),b(1,gt,2,1,"button",39)(2,ut,1,1),s()),o&2){let e,i,t,n,r=_.columnName,d=_.item;l();let h=T(5);m("cAlign",(e=h.getTableDataCellProps(d,r))==null?null:e.align)("cTableActive",(i=h.getTableDataCellProps(d,r))==null?null:i.active)("cTableColor",(t=h.getTableDataCellProps(d,r))==null?null:t.color)("ngClass",h.getTableDataCellClass(d,r)),c(),G((n=r)==="show"?1:2)}}function ft(o,_){if(o&1){let e=v();S(0),a(1,"c-input-group")(2,"input",47),A("ngModelChange",function(t){p(e);let n=l().item;return M(n.sumQC,t)||(n.sumQC=t),g(t)}),u("ngModelChange",function(t){p(e);let n=l().item,r=l().item,d=l(2);return g(d.onSkuFacingChange_2(n,t,r.shop_code))}),s()(),w()}if(o&2){let e=l().item;c(2),E("ngModel",e.sumQC),m("ngStyle",D(2,dt))}}function vt(o,_){if(o&1&&(S(0),f(1),w()),o&2){let e=l().tdContent;c(),B(" ",e," ")}}function Ct(o,_){if(o&1&&(a(0,"td",38),S(1,44),b(2,ft,3,3,"ng-container",45)(3,vt,2,1,"ng-container",46),w(),s()),o&2){let e,i,t,n=_.columnName,r=_.item;l();let d=T(5);m("cAlign",(e=d.getTableDataCellProps(r,n))==null?null:e.align)("cTableActive",(i=d.getTableDataCellProps(r,n))==null?null:i.active)("cTableColor",(t=d.getTableDataCellProps(r,n))==null?null:t.color)("ngClass",d.getTableDataCellClass(r,n)),c(),m("ngSwitch",n),c(),m("ngSwitchCase","sumQC")}}function bt(o,_){if(o&1){let e=v();a(0,"img",55),u("click",function(){p(e);let t=l().$implicit,n=l(2).item,r=l(2);return g(r.handleSelectedImg(t,n.shop_code))}),s()}if(o&2){let e=l().$implicit;l(4);let i=T(16);m("src",e.photo_url,z)("cModalToggle",i.id)}}function St(o,_){if(o&1){let e=v();a(0,"div",56),u("click",function(){p(e);let t=l().$implicit,n=l(2).item,r=l(2);return g(r.handleSelectedImg(t,n.shop_code))}),C(1,"object",57),s()}if(o&2){let e=l().$implicit;l(4);let i=T(16);m("cModalToggle",i.id),c(),Y("data",e.detect_url,X)}}function wt(o,_){if(o&1){let e=v();a(0,"c-carousel-item")(1,"div",50),u("click",function(){let t=p(e).$implicit,n=l(4);return g(n.downloadImage(t.photo_url))}),P(),C(2,"svg",51),s(),b(3,bt,1,2,"img",52)(4,St,2,2,"div",53),K(),a(5,"c-carousel-caption",54)(6,"h3"),f(7),s()()()}if(o&2){let e=_.$implicit;c(3),m("ngIf",!e.detect_url),c(),m("ngIf",e.detect_url),c(3),B("Detect Id : ",e.detect_id,"")}}function yt(o,_){if(o&1&&(a(0,"c-carousel",23),C(1,"c-carousel-indicators"),a(2,"c-carousel-inner"),U(3,wt,8,3,"c-carousel-item",null,pt),s(),C(5,"c-carousel-control",48),a(6,"b"),C(7,"c-carousel-control",49),s()()),o&2){let e=l().item,i=l(2);m("dark",!0)("wrap",!1),c(3),j(i.details_visible[e.shop_code]==null?null:i.details_visible[e.shop_code].detectDetails),c(2),m("size","xl")}}function Tt(o,_){if(o&1){let e=v();a(0,"div",41)(1,"c-row",14)(2,"c-col",15)(3,"div",42)(4,"c-smart-table",16,2),b(6,Ct,4,6,"ng-template",17),s(),a(7,"button",10),u("click",function(){let t=p(e).item,n=l(2);return g(n.SaveDetail_Total(n.details_visible[t.shop_code]==null?null:n.details_visible[t.shop_code].productsDetails,t.shop_code))}),f(8,"L\u01B0u"),s()()(),a(9,"c-col",22),b(10,yt,8,3,"c-carousel",43),s()()()}if(o&2){let e=_.item,i=l(2);m("visible",i.details_visible[e.shop_code]==null?null:i.details_visible[e.shop_code].visible),c(4),m("columns",i.columnProduct)("columnFilter",!0)("columnSorter",!0)("itemsPerPageSelect",!0)("itemsPerPage",500)("itemsPerPageOptions",D(10,st))("items",i.details_visible[e.shop_code]==null?null:i.details_visible[e.shop_code].productsDetails)("tableProps",D(11,R)),c(6),m("ngIf",(i.details_visible[e.shop_code]==null||i.details_visible[e.shop_code].detectDetails==null?null:i.details_visible[e.shop_code].detectDetails.length)>0)}}function Dt(o,_){if(o&1){let e=v();a(0,"c-row")(1,"c-col",33)(2,"c-card")(3,"c-card-body",34)(4,"c-smart-table",35,2),b(6,ht,3,5,"ng-template",17)(7,Tt,11,12,"ng-template",36),s()(),a(8,"c-smart-pagination",37),u("activePageChange",function(t){p(e);let n=l();return g(n.onPageChange(t))}),s()()()()}if(o&2){let e=l();c(4),m("columns",e.columnShop)("itemsPerPageSelect",!0)("itemsPerPage",20)("items",e.listShop)("tableProps",D(7,R)),c(4),m("activePage",e.currentPage)("pages",e.totalPages)}}function xt(o,_){if(o&1){let e=v();S(0),a(1,"c-input-group")(2,"input",58),A("ngModelChange",function(t){p(e);let n=l().item;return M(n.sku_facing,t)||(n.sku_facing=t),g(t)}),u("ngModelChange",function(t){p(e);let n=l().item,r=l();return g(r.onSkuFacingChange(n,t,r.selecteddetectDetect))}),s()(),w()}if(o&2){let e=l().item,i=l();c(2),E("ngModel",e.sku_facing),m("ngStyle",H(3,mt,e.sku_facing&&e.sku_facing_ai!==e.sku_facing?"bold":"",e.sku_facing&&e.sku_facing_ai!==e.sku_facing?"red":""))("disabled",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].detect_verify)===1)}}function kt(o,_){if(o&1){let e=v();S(0),a(1,"div",59),u("click",function(){p(e);let t=l().item,n=l();return g(n.RemoveItemDetail(t))}),P(),C(2,"svg",60),s(),w()}}function Bt(o,_){if(o&1&&(S(0),f(1),w()),o&2){let e=l().tdContent;c(),B(" ",e," ")}}function Et(o,_){if(o&1&&(a(0,"td",38),S(1,44),b(2,xt,3,6,"ng-container",45)(3,kt,3,0,"ng-container",45)(4,Bt,2,1,"ng-container",46),w(),s()),o&2){let e,i,t,n=_.columnName,r=_.item;l();let d=T(21);m("cAlign",(e=d.getTableDataCellProps(r,n))==null?null:e.align)("cTableActive",(i=d.getTableDataCellProps(r,n))==null?null:i.active)("cTableColor",(t=d.getTableDataCellProps(r,n))==null?null:t.color)("ngClass",d.getTableDataCellClass(r,n)),c(),m("ngSwitch",n),c(),m("ngSwitchCase","sku_facing"),c(),m("ngSwitchCase","actions")}}function Mt(o,_){if(o&1){let e=v();a(0,"img",65),u("click",function(){p(e);let t=l().$implicit,n=l();return g(n.openImageInNewWindow(t.photo_url,2))}),s()}if(o&2){let e=l().$implicit;O("alt",e.title),m("src",e.photo_url,z)}}function At(o,_){if(o&1){let e=v();a(0,"div",66),u("click",function(){p(e);let t=l().$implicit,n=l();return g(n.openImageInNewWindow(t.src,1))}),C(1,"object",57),s()}if(o&2){let e=l().$implicit;c(),Y("data",e.src,X)}}function It(o,_){if(o&1){let e=v();a(0,"div",61)(1,"div",62),u("click",function(){let t=p(e).$implicit,n=l();return g(n.downloadImage(t.photo_url))}),P(),C(2,"svg",51),s(),b(3,Mt,1,2,"img",63)(4,At,2,1,"div",64),s()}if(o&2){let e=_.$implicit,i=_.$index;N(i===0?"carousel-item active":"carousel-item"),c(3),m("ngIf",!e.src),c(),m("ngIf",e.src)}}var mi=(()=>{class o{constructor(e,i,t,n){this.service=e,this.iconSet=i,this.sanitizer=t,this.detectAIService=n,this.calendarFromDate=new Date(Date.now()),this.calendarToDate=new Date(Date.now()),this.from_date=new Date("2025-07-01"),this.to_date=new Date,this.isLoading="false",this.listShop=[],this.totalPages=2,this.details_visible=Object.create({}),this.columnShop=[{key:"show",label:"",_style:{width:"3%"}},{key:"RowNumber",label:"#",_style:{width:"5%"}},{key:"shop_code",label:"M\xE3 Shop",filter:!0},{key:"shop_name",label:"T\xEAn Shop"},{key:"shop_address",label:"\u0110\u1ECBa ch\u1EC9"}],this.listSKU=[],this.columnProduct=[{key:"sku_id",label:"#",_style:{width:"5%"}},{key:"sku_code",label:"M\xE3 s\u1EA3n ph\u1EA9m",filter:!0},{key:"sku_name",label:"T\xEAn s\u1EA3n ph\u1EA9m",filter:!0},{key:"sumAI",label:"T\u1ED5ng k\u1EBFt qu\u1EA3 AI"},{key:"sumQC",label:"T\u1ED5ng k\u1EBFt qu\u1EA3 QC",_style:{width:"20%"},filter:!1,sorter:!1}],this.dataSync=[],this.visible=!1,this.columnss=[{key:"sku_id",label:"#",_style:{width:"5%"}},{key:"sku_code",label:"M\xE3 s\u1EA3n ph\u1EA9m"},{key:"sku_name",label:"T\xEAn s\u1EA3n ph\u1EA9m"},{key:"sku_facing_ai",label:"Facing Detected",_style:{width:"5%"}},{key:"sku_facing",label:"Facing",_style:{width:"20%"},filter:!1,sorter:!1},{key:"actions",label:"",_style:{width:"5%"},filter:!1,sorter:!1}],this.toast={visible_toast:!1,message_toast:"xoa",background:""},this.currentPage=1,this.sku_facing=0,this.sku_id=0,i.icons=F(k(k(k({},tt),He),qe),{cilTrash:et,cilArrowCircleTop:Je,cilFile:Ze}),this.sanitizer_var=t}filter(e){this.listShop=[],this.service.GetAll_TotalByShop(x.DateToInt(this.from_date),x.DateToInt(this.to_date),31,e).subscribe(i=>{this.totalPages=Math.ceil(i.data[0].TotalRows/20),this.listShop=i.data})}ngOnInit(){this.getSKULabel()}getSKULabel(){this.detectAIService.ewo_detect_ai_getSkulabel(31).subscribe(e=>{e.result==L.ok&&(this.listSKU=e.data.sort((i,t)=>i.sku_name.localeCompare(t.sku_name)))},e=>{this.message="L\u1ED7i nh\xE3n ...!\u0110ang g\u1ECDi l\u1EA1i:      "+e.message,this.visible==!1&&(this.visible=!this.visible),setTimeout(()=>{this.getSKULabel()},1e3)})}toggleDetails(e){return y(this,null,function*(){this.details_visible[e.shop_code]||(this.details_visible[e.shop_code]=k({},e)),this.details_visible[e.shop_code].visible=!this.details_visible[e.shop_code].visible,this.details_visible[e.shop_code].visible&&(yield this.service.GetDetail_Sum_TotalByShop(x.DateToInt(this.from_date),x.DateToInt(this.to_date),31,e.shop_code).subscribe(i=>{let t=i.data?.detectDetails.map(n=>(n.detect_url&&(n.detect_url=this.sanitizer_var.bypassSecurityTrustResourceUrl(n.detect_url)),F(k({},n),{detect_url:n.detect_url})));this.details_visible[e.shop_code].productsDetails=i.data?.productsDetails,this.details_visible[e.shop_code].detectDetails=t}))})}SaveDetail_Total(e,i){return y(this,null,function*(){console.log("SaveDetail_Total",e,i,x.DateToInt(this.from_date));let t=yield this.AwaitSave_Total(e,i,x.DateToInt(this.from_date))})}AwaitSave_Total(e,i,t){return y(this,null,function*(){this.message="";var n={};return n.listData=e,new Promise((r,d)=>{this.detectAIService.ewo_detectai_detail_save_TotalByshop(n,i,t,31).subscribe(h=>{h.result==L.ok&&(this.toggleToast("L\u01B0u th\xE0nh c\xF4ng","bg-success"),r({data:h})),r([]),d(()=>{this.message="\u0110\xE3 x\u1EA3y ra l\u1ED7i...!"})})})})}SaveDetail(e){return y(this,null,function*(){e.forEach(t=>{!t.sku_facing&&t.sku_facing!=0&&(t.sku_facing=t.sku_facing_ai)}),this.visible=!this.visible;let i=yield this.AwaitSave(e)})}SaveNote(e){return y(this,null,function*(){yield this.detectAIService.DetectAI_update_note(e.detect_id,e.note,e.resultQC).subscribe(i=>{i.data==1?(this.message="Note th\xE0nh c\xF4ng...!",this.visible=!this.visible):(this.message="L\u1ED7i...!",this.visible=!this.visible)})})}AwaitSave(e){return y(this,null,function*(){this.message="";var i={};return i.listData=e,new Promise((t,n)=>{this.detectAIService.ewo_detectai_detail_save(i).subscribe(r=>{r.result==L.ok&&(this.toggleToast("L\u01B0u th\xE0nh c\xF4ng","bg-success"),t({data:r})),t([]),n(()=>{this.message="\u0110\xE3 x\u1EA3y ra l\u1ED7i...!"})})})})}downloadImage(e){if(!e||typeof e!="string"){console.error("Invalid image URL:",e);return}try{let i=new Date,t=i.toTimeString().split(" ")[0].replace(/:/g,""),n=i.toISOString().slice(0,10).replace(/-/g,""),r=new URL(e).pathname.split(".").pop()?.split("?")[0]||"jpg",d=`image_download_${n}_${t}.${r}`;fetch(e).then(h=>{if(!h.ok)throw new Error(`HTTP error! Status: ${h.status}`);return h.blob()}).then(h=>{let $=window.URL.createObjectURL(h),I=document.createElement("a");I.href=$,I.download=d,document.body.appendChild(I),I.click(),document.body.removeChild(I),window.URL.revokeObjectURL($)}).catch(h=>{console.error(h.message||h),alert(h.message||"Unknown error")})}catch(i){console.error("Error parsing URL or downloading:",i)}}toggleLiveDemo(){this.visible=!this.visible}toggleLiveDemo2(){this.visible2=!this.visible2}handleLiveDemoChange(e){this.visible=e}handleLiveDemoChange2(e){this.visible2=e}handleSelectedImg(e,i){this.selected_shop_code=i,console.log("handleSelectedImg",i),localStorage.setItem("detect_id",e.detect_id),this.getdetectDetail(e.detect_id)}getdetectDetail(e){this.selecteddetectDetect=null,this.detectAIService.ewo_detectai_detail(e).subscribe(i=>{this.selecteddetectDetect=i.data,this.selecteddetectDetect?.photoDetails[0].src&&(this.selecteddetectDetect.photoDetails[0].src=this.sanitizer_var.bypassSecurityTrustResourceUrl(this.selecteddetectDetect?.photoDetails[0].src))})}onSkuFacingChange(e,i,t){console.log("itemdata",e),console.log("this.selecteddetectDetect",this.selecteddetectDetect),console.log("details_visible",this.details_visible[this.selected_shop_code].productsDetails),this.selecteddetectDetect?.dataDetails.forEach(n=>{if(n.sku_id==e.sku_id){n.sku_facing=i,console.log("OKOK");return}})}onSkuFacingChange_2(e,i,t){console.log("itemdata",e),console.log("shop_code",this.details_visible[t]),this.details_visible[t]?.productsDetails.forEach(n=>{if(n.sku_id==e.sku_id){n.sumQC=i,console.log("OKOK");return}})}toggleToast(e,i){console.log("toast",e,i),this.toast.visible_toast=!0,this.toast.background=i,this.toast.message_toast=e,setTimeout(()=>{this.toast.visible_toast=!1},2e3)}RemoveItemDetail(e){console.log("item",e);let i=localStorage.getItem("detect_id");this.detectAIService.ewo_detete_DetectAIDetail(31,e.detect_detail_id).subscribe(t=>{this.toggleToast("X\xF3a th\xE0nh c\xF4ng","bg-success"),this.getdetectDetail(i),console.log("X\xF3a th\xE0nh c\xF4ng")},t=>{this.message="X\xF3a l\u1ED7i: "+t.message,this.visible2=!this.visible2})}openImageInNewWindow(e,i){let t=e.changingThisBreaksApplicationSecurity,n=window.open("","_blank");n&&i==1&&n.document.write(`
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
  `)}onPageChange(e){this.currentPage=e,this.filter(this.currentPage)}insertDetailSKU(){console.log(this.selectedSKU),console.log(this.sku_facing);let e=localStorage.getItem("detect_id");this.detectAIService.ewo_detectai_inserDetail(31,e,Number(this.selectedSKU),Number(this.sku_facing)).subscribe(i=>{this.selectedSKU=this.listSKU[-1],this.sku_facing=0,this.toggleToast("Th\xEAm th\xE0nh c\xF4ng","bg-success"),this.getdetectDetail(e),i.data[0]&&i.data[0].message=="\u0110\xE3 t\u1ED3n t\u1EA1i nh\xE3n"?(this.message=i.data[0].message,this.visible=!this.visible):(this.message="Th\xEAm th\xE0nh c\xF4ng...!",this.visible=!this.visible)},i=>{this.message="Th\xEAm l\u1ED7i : "+i.message,console.log("error",i),this.visible=!this.visible})}static{this.\u0275fac=function(i){return new(i||o)(V(rt),V(me),V(oe),V(it))}}static{this.\u0275cmp=W({type:o,selectors:[["app-detect-ai-total-by-shop-umer"]],decls:56,vars:32,consts:[["datePicker","cDatePicker"],["verticallyCenteredScrollableModal",""],["smartTable","cSmartTable"],[1,"mt-1","mb-1"],[1,"p-2"],["md","3"],[1,"clearfix"],[1,"pt-3"],["inputReadOnly","",3,"ngModelChange","ngModel","calendarDate"],["md","12"],["cButton","","color","primary",3,"click"],[4,"ngIf"],["id","verticallyCenteredScrollableModal","alignment"," center",1,"modal-fullscreen",3,"visibleChange","scrollable","visible"],[1,"table-container"],[1,"bg-light-subtle","p-1","w-100","text-center"],["lg","7"],["header","","loading","",3,"columns","columnFilter","columnSorter","itemsPerPageSelect","itemsPerPage","itemsPerPageOptions","items","tableProps"],["cTemplateId","tableData"],[2,"display","flex","justify-content","end","align-items","center","z-index","100","gap","5px","margin-top","13px"],["bindLabel","sku_name","bindValue","sku_id","placeholder","Ch\u1ECDn s\u1EA3n ph\u1EA9m",1,"custom-ng-select",2,"min-width","380px","z-index","100",3,"ngModelChange","items","ngModel","searchable"],[1,"input-prepend",2,"width","fit-content"],["cFormControl","","cFormControlplaceholder","Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng","type","text",2,"width","70px",3,"ngModelChange","ngModel"],["lg","5"],[3,"dark","wrap"],["data-coreui-interval","-99999999",3,"class"],["cButton","","color","secondary",2,"z-index","1",3,"cModalToggle"],["cButton","","color","primary",2,"z-index","1",3,"click"],["id","liveDemoModal",3,"visibleChange","visible"],["cModalTitle",""],["cButtonClose","",3,"click"],[2,"position","fixed","top","80px","right","0","background-color","cornflowerblue","color","white","z-index","999999",3,"autohide","delay","visible"],[1,"mr-auto"],["color","#ff0000",3,"height"],["xs","12"],[1,"card-data"],["header","","loading","",3,"columns","itemsPerPageSelect","itemsPerPage","items","tableProps"],["cTemplateId","tableDetails"],["align","center",3,"activePageChange","activePage","pages"],[3,"cAlign","cTableActive","cTableColor","ngClass"],["cButton","","color","primary"],["cIcon","",3,"name"],["cCollapse","",3,"visible"],[1,"table-container","overflow"],[3,"dark","wrap",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["cFormControl","","type","number","placeholder","blank = Facing Detected",3,"ngModelChange","ngModel","ngStyle"],["caption","Previous","direction","prev",3,"routerLink","size"],["caption","Next","direction","next",3,"routerLink"],["id","downloadImage",2,"cursor","pointer","padding-left","150px","text-align","left","z-index","999",3,"click"],["cIcon","","name","cil-arrow-thick-to-bottom","size","lg"],["alt","image","class","d-block","style","width: 90%;","loading","lazy",3,"src","cModalToggle","click",4,"ngIf"],[3,"cModalToggle","click",4,"ngIf"],[1,"d-none","d-md-block"],["alt","image","loading","lazy",1,"d-block",2,"width","90%",3,"click","src","cModalToggle"],[3,"click","cModalToggle"],["type","image/svg+xml",2,"pointer-events","none"],["cFormControl","","type","number","placeholder","blank = Facing Detected","name","sku_facing",3,"ngModelChange","ngModel","ngStyle","disabled"],[2,"cursor","pointer",3,"click"],["cIcon","","name","cilTrash",2,"color","brown"],["data-coreui-interval","-99999999"],[2,"cursor","pointer","text-align","left",3,"click"],["class","d-block ","style","width: 90%;","loading","lazy",3,"src","alt","click",4,"ngIf"],[3,"click",4,"ngIf"],["loading","lazy",1,"d-block",2,"width","90%",3,"click","src","alt"],[3,"click"]],template:function(i,t){if(i&1){let n=v();a(0,"c-card",3)(1,"c-row",4)(2,"c-col",5)(3,"span",6)(4,"h6",7),f(5,"T\u1EEB ng\xE0y"),s()(),a(6,"c-date-picker",8,0),A("ngModelChange",function(d){return p(n),M(t.from_date,d)||(t.from_date=d),g(d)}),s()()(),C(8,"hr"),a(9,"c-row",4)(10,"c-col",9)(11,"button",10),u("click",function(){return p(n),g(t.filter(t.currentPage))}),f(12,"T\xECm ki\u1EBFm"),s()()()(),a(13,"c-card"),b(14,Dt,9,8,"c-row",11),s(),a(15,"c-modal",12,1),u("visibleChange",function(d){return p(n),g(t.handleLiveDemoChange(d))}),a(17,"div",13)(18,"c-row",14)(19,"c-col",15)(20,"c-smart-table",16,2),b(22,Et,5,7,"ng-template",17),s(),a(23,"div",18)(24,"label"),f(25,"S\u1EA3n ph\u1EA9m thi\u1EBFu: "),s(),a(26,"ng-select",19),A("ngModelChange",function(d){return p(n),M(t.selectedSKU,d)||(t.selectedSKU=d),g(d)}),s(),a(27,"c-input-group",20)(28,"input",21),A("ngModelChange",function(d){return p(n),M(t.sku_facing,d)||(t.sku_facing=d),g(d)}),s()(),a(29,"button",10),u("click",function(){return p(n),g(t.insertDetailSKU())}),f(30,"Th\xEAn s\u1EA3n ph\u1EA9m"),s()()(),a(31,"c-col",22)(32,"c-carousel",23),C(33,"c-carousel-indicators"),a(34,"c-carousel-inner"),U(35,It,5,5,"div",24,_t),s()()()()(),a(37,"c-modal-footer")(38,"button",25),f(39," Close "),s(),a(40,"button",26),u("click",function(){return p(n),g(t.SaveDetail(t.selecteddetectDetect==null?null:t.selecteddetectDetect.dataDetails))}),f(41,"L\u01B0u"),s()()(),a(42,"c-modal",27),u("visibleChange",function(d){return p(n),g(t.handleLiveDemoChange2(d))}),a(43,"c-modal-header")(44,"h5",28),f(45,"Th\xF4ng b\xE1o"),s(),a(46,"button",29),u("click",function(){return p(n),g(t.toggleLiveDemo2())}),s()(),a(47,"c-modal-body"),f(48),s()(),a(49,"c-toast",30)(50,"c-toast-header")(51,"strong",31),f(52,"Th\xF4ng b\xE1o"),s()(),a(53,"c-toast-body"),f(54),s()(),C(55,"ngx-loading-bar",32)}if(i&2){let n=T(16);c(6),E("ngModel",t.from_date),m("calendarDate",t.calendarFromDate),c(8),m("ngIf",t.listShop&&t.listShop.length>0),c(),m("scrollable",!0)("visible",t.visible),c(5),m("columns",t.columnss)("columnFilter",!0)("columnSorter",!0)("itemsPerPageSelect",!0)("itemsPerPage",200)("itemsPerPageOptions",D(30,ct))("items",t.selecteddetectDetect==null?null:t.selecteddetectDetect.dataDetails)("tableProps",D(31,R)),c(6),m("items",t.listSKU),E("ngModel",t.selectedSKU),m("searchable",!0),c(2),E("ngModel",t.sku_facing),c(4),m("dark",!0)("wrap",!1),c(3),j(t.selecteddetectDetect==null?null:t.selecteddetectDetect.photoDetails),c(3),m("cModalToggle",n.id),c(4),m("visible",t.visible2),c(6),Q(t.message),c(),m("autohide",!0)("delay",2e3)("visible",t.toast.visible_toast),c(4),N(t.toast.background),c(),B(" ",t.toast.message_toast," "),c(),m("height","5px")}},dependencies:[Ie,Ae,Be,_e,Ee,ue,be,Ce,Oe,je,Me,Ye,Pe,Xe,Le,Fe,ze,Ve,ne,q,J,ie,Z,ee,te,Qe,We,Ke,Ge,Ue,Ne,Re,$e,ve,le,ge,pe,fe,Se,Te,xe,De,we,ye,ke,de,ae,se,re,ce,he,at,lt,ot,nt],styles:[".card-data[_ngcontent-%COMP%]{padding:0!important}.pt-3[_ngcontent-%COMP%]{padding-top:0!important}.table-container[_ngcontent-%COMP%]{max-height:90vh}.overflow[_ngcontent-%COMP%]{max-height:90vh;overflow-y:auto}.table-container[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background:#fff;z-index:10}.custom-ng-select[_ngcontent-%COMP%]     .ng-dropdown-panel .ng-option{text-align:left}  .modal.modal-fullscreen .modal-dialog{width:100vw;max-width:100vw;height:100vh;margin:0}  .modal.modal-fullscreen .modal-content{height:100vh;border-radius:0}.custom-icon[_ngcontent-%COMP%]{font-size:40px;color:#fff}  .carousel-control-next-icon{width:69px;height:69px}  .carousel-control-next-icon{width:49px;height:49px}"]})}}return o})();export{mi as DetectAiTotalByShopBlueforceComponent};
