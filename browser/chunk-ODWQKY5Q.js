import{a as Q}from"./chunk-MMQBQGI5.js";import{a as G}from"./chunk-CWM7VNHW.js";import"./chunk-26M4WOOW.js";import{a as L}from"./chunk-RJESRZJ5.js";import{hb as Ke,l as Ue,s as Je}from"./chunk-OVEX3KHJ.js";import"./chunk-FYYLBBTR.js";import{$ as ye,Bb as qe,Cb as $e,Ga as Ae,H as pe,I as ge,L as he,Ma as Fe,N as ve,Na as Re,Pa as Be,U as fe,V as Ce,Va as Xe,W as X,Wa as Qe,X as be,_ as we,aa as Se,ba as xe,d as ce,da as De,fb as Ye,h as de,ia as Ee,ib as We,jb as ze,kb as je,m as me,ma as Ie,na as ke,q as _e,sa as Me,t as ue,ua as Te,va as Pe,vb as Ne,wb as Ge,xa as Ve,xb as He,ya as Le,yb as Oe}from"./chunk-55Y7RW7N.js";import{$b as ee,Ac as m,Bc as V,Cb as T,Cc as N,Fc as x,Gc as D,Hc as E,Hd as se,Lc as ne,Mc as ae,Qb as U,Rb as g,Ub as J,Vb as K,Yb as Z,ac as te,bc as o,cc as l,db as O,dc as v,eb as q,hc as y,ib as c,kc as C,mc as d,nb as B,pc as P,ra as _,sa as u,ta as M,ua as R,vd as oe,wb as $,wd as le,xd as re,yc as ie,zc as j}from"./chunk-XOKJR3V5.js";import{a as w,b as H,h as S}from"./chunk-WWX6BADO.js";var Ze=()=>({hover:!0,bordered:!0,striped:!1,responsive:!0}),et=(r,p)=>p.src;function tt(r,p){if(r&1){let e=y();o(0,"button",16),C("click",function(){_(e);let t=d().item,n=d(2);return u(n.toggleDetails(t))}),M(),v(1,"svg",33),l()}if(r&2){let e=d().item,i=d(2);c(),P("name",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].visible)===!0?"cilMinus":"cilPlus")}}function it(r,p){if(r&1){let e=y();o(0,"button",34),C("click",function(){_(e);let t=d().item,n=d(2);return u(n.QCSave(t))}),m(1),l()}if(r&2){let e=d().item,i=d(2);P("disabled",e.detect_verify==1||(i.item_visible[e.detect_id]==null?null:i.item_visible[e.detect_id].detect_verify)==1),c(),N(" ",e.detect_verify==1||(i.item_visible[e.detect_id]==null?null:i.item_visible[e.detect_id].detect_verify)==1?"\u0110\xE3 x\xE1c nh\u1EADn":"X\xE1c nh\u1EADn"," ")}}function nt(r,p){if(r&1&&m(0),r&2){let e=d().tdContent;N(" ",e," ")}}function at(r,p){if(r&1&&(o(0,"td",30),T(1,tt,2,1,"button",31)(2,it,2,2,"button",32)(3,nt,1,1),l()),r&2){let e,i,t,n,s=p.columnName,a=p.item;d();let f=ie(5),h=d();J(h.details_visible[a.detect_id]!=null&&h.details_visible[a.detect_id].visible?"background-color:#f2f2f2":""),g("cAlign",(e=f.getTableDataCellProps(a,s))==null?null:e.align)("cTableActive",(i=f.getTableDataCellProps(a,s))==null?null:i.active)("cTableColor",(t=f.getTableDataCellProps(a,s))==null?null:t.color)("ngClass",f.getTableDataCellClass(a,s)),c(),Z((n=s)==="show"?1:n==="detect_verify"?2:3)}}function ot(r,p){if(r&1){let e=y();o(0,"tr")(1,"td"),m(2),l(),o(3,"td"),m(4),l(),o(5,"td"),m(6),l(),o(7,"td"),m(8),l(),o(9,"td")(10,"c-input-group")(11,"input",48),E("ngModelChange",function(t){let n=_(e).$implicit;return D(n.sku_facing,t)||(n.sku_facing=t),u(t)}),l()()()()}if(r&2){let e=p.$implicit,i=d().item,t=d(2);c(2),V(e.sku_id),c(2),V(e.sku_code),c(2),V(e.sku_name),c(2),V(e.sku_facing_ai),c(3),j("text-align: center; ",e.sku_facing&&e.sku_facing_ai!=e.sku_facing?"font-weight: bold;color:red":"",""),P("disabled",(t.details_visible[i.detect_id]==null?null:t.details_visible[i.detect_id].detect_verify)==1),x("ngModel",e.sku_facing)}}function lt(r,p){if(r&1){let e=y();o(0,"img",54),C("click",function(){_(e);let t=d().$implicit,n=d(3);return u(n.openImageInNewWindow(t.photo_url,2))}),l()}if(r&2){let e=d().$implicit;P("alt",e.title),g("src",e.photo_url,O)}}function rt(r,p){if(r&1){let e=y();o(0,"div",55),C("click",function(){_(e);let t=d().$implicit,n=d(3);return u(n.openImageInNewWindow(t.src,1))}),v(1,"object",56),l()}if(r&2){let e=d().$implicit;c(),U("data",e.src,q)}}function st(r,p){if(r&1){let e=y();o(0,"div",49)(1,"div",50),C("click",function(){let t=_(e).$implicit,n=d(3);return u(n.downloadImage(t.photo_url))}),M(),v(2,"svg",51),l(),T(3,lt,1,2,"img",52)(4,rt,2,1,"div",53),l()}if(r&2){let e=p.$implicit,i=p.$index;K(i===0?"carousel-item active":"carousel-item"),c(3),g("ngIf",!e.src),c(),g("ngIf",e.src)}}function ct(r,p){if(r&1){let e=y();o(0,"div",35)(1,"c-row",36)(2,"c-col",37)(3,"table",38)(4,"thead")(5,"tr")(6,"th",39),m(7,"#"),l(),o(8,"th",39),m(9,"M\xE3 s\u1EA3n ph\u1EA9m"),l(),o(10,"th",39),m(11,"T\xEAn s\u1EA3n ph\u1EA9m"),l(),o(12,"th",39),m(13,"Facing Detected"),l(),o(14,"th",39),m(15,"Facing"),l()()(),o(16,"tbody"),T(17,ot,12,9,"tr",40),l()(),o(18,"c-row")(19,"div",41)(20,"button",42),C("click",function(){let t=_(e).item,n=d(2);return u(n.SaveDetail(n.details_visible[t.detect_id]==null?null:n.details_visible[t.detect_id].dataDetails))}),m(21,"L\u01B0u"),l()()()(),o(22,"c-col",43)(23,"c-carousel",44),v(24,"c-carousel-indicators"),o(25,"c-carousel-inner"),ee(26,st,5,5,"div",45,et),l(),v(28,"c-carousel-control",46)(29,"c-carousel-control",47),l()()()()}if(r&2){let e=p.item,i=d(2);g("visible",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].visible),c(17),g("ngForOf",i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].dataDetails),c(3),P("disabled",(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].detect_verify)==1),c(3),g("dark",!0)("wrap",!1),c(3),te(i.details_visible[e.detect_id]==null?null:i.details_visible[e.detect_id].photoDetails)}}function dt(r,p){if(r&1){let e=y();o(0,"c-row")(1,"c-col",24)(2,"c-card")(3,"c-card-body",25)(4,"c-smart-table",26,1),T(6,at,4,8,"ng-template",27)(7,ct,30,5,"ng-template",28),l()(),o(8,"c-smart-pagination",29),C("activePageChange",function(t){_(e);let n=d();return u(n.onPageChange(t))}),l()()()()}if(r&2){let e=d();c(4),g("columns",e.columns)("itemsPerPageSelect",!0)("itemsPerPage",20)("items",e.filterData)("tableProps",ae(7,Ze)),c(4),g("activePage",e.currentPage)("pages",e.totalPages)}}var Xt=(()=>{class r{constructor(e,i,t,n){this.route=e,this.iconSet=i,this.detectAIService=t,this.sanitizer=n,this.isLoading=!1,this.title="CoreUI-Angular Smart Table Example",this.slides=new Array(3).fill({id:-1,src:"",title:"",subtitle:""}),this.fromDate=new Date,this.toDate=new Date,this.employee_code=null,this.shop_code=null,this.report_code=null,this.calendarFromDate=new Date(Date.now()),this.calendarToDate=new Date(Date.now()),this.filterData=[],this.dataSync=[],this.columns=[{key:"show",label:"",_style:{width:"3%"}},{key:"detect_id",label:"DetectId"},{key:"audit_id",label:"Id"},{key:"employee",label:"Nh\xE2n vi\xEAn"},{key:"shop_code",label:"M\xE3 c\u1EEDa h\xE0ng"},{key:"shop_name",label:"T\xEAn c\u1EEDa h\xE0ng"},{key:"shop_address",label:"\u0110\u1ECBa ch\u1EC9"},{key:"detected_date",label:"Detected_Date"},{key:"qc_update_date",label:"QC Date"},{key:"detect_verify",label:"",_style:{width:"10%"}}],this.details_visible=Object.create({}),this.item_visible=Object.create({}),this.visible=!1,this.message="",this.totalPages=2,this.currentPage=1,i.icons=w(w(w({},Ke),Ue),Je),this.sanitizer_var=n}getBadge(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}}toggleDetails(e){return S(this,null,function*(){if(this.details_visible[e.detect_id]||(this.details_visible[e.detect_id]=w({},e)),this.details_visible[e.detect_id].visible=!this.details_visible[e.detect_id].visible,this.details_visible[e.detect_id].visible){let i=yield this.detectAiDetail(e.detect_id);this.details_visible[e.detect_id].dataDetails=i?.dataDetails,this.details_visible[e.detect_id].photoDetails=i?.photoDetails,i?.dataSync&&i?.dataSync.length>0&&i?.dataSync.forEach(t=>{if(t.Facing){let n={AuditId:t.AuditId,ProductId:t.ProductId,Facing:t.Facing},s=this.dataSync.findIndex(a=>a.AuditId==t.AuditId&&a.ProductId==t.ProductId);s>=0?this.dataSync[s].Facing=n.Facing:this.dataSync.push(n)}})}})}detectAiDetail(e){return S(this,null,function*(){return new Promise((i,t)=>{this.detectAIService.ewo_detectai_detail(e).subscribe(n=>{if(n.result==L.ok){let s=n.data.dataDetails.map(h=>{let{row_num:I,detect_detail_id:b,sku_code:k,sku_name:A,sku_id:F,sku_facing:Y,sku_facing_ai:W,audit_id:z}=w({},h);return{row_num:I,detect_detail_id:b,sku_code:k,sku_id:F,sku_name:A,sku_facing:Y,sku_facing_ai:W,audit_id:z}}),a=n.data.photoDetails.map(h=>{let{id:I,src:b,title:k,subtitle:A,_index:F}=w({},h);return b&&(b=this.sanitizer_var.bypassSecurityTrustResourceUrl(b)),{id:I,src:b,title:k,subtitle:A,_index:F}}),f=n.data.dataDetails.map(h=>{let{audit_id:I,sku_code:b,sku_facing:k}=w({},h);return{AuditId:I,ProductId:Number(b),Facing:k}});i({dataDetails:s,photoDetails:a,dataSync:f})}i([])})})})}showImage(e,i){let t=e;localStorage.setItem("listphoto",JSON.stringify(i)),localStorage.setItem("changeindex",t),this.urlgallery="assets/ZoomImage/tool.html",document.open(this.urlgallery,"image_default","height=700,width=900,top=100,left= 539.647")}toggleLiveDemo(){this.visible=!this.visible}handleLiveDemoChange(e){this.visible=e}AwaitSave(e){return S(this,null,function*(){return this.message="",new Promise((i,t)=>{this.detectAIService.ewo_detectai_detail_save(e).subscribe(n=>{n.result==L.ok&&(this.message="L\u01B0u th\xE0nh c\xF4ng...!",e.forEach(s=>{let a={AuditId:s.audit_id,ProductId:Number(s.sku_code),Facing:s.sku_facing},f=this.dataSync.findIndex(h=>h.AuditId==s.audit_id&&h.ProductId==Number(s.sku_code));f>=0?this.dataSync[f].Facing=a.Facing:this.dataSync.push(a)}),i({data:n})),i([]),t(()=>{this.message="\u0110\xE3 x\u1EA3y ra l\u1ED7i...!"})})})})}AwaitQCSave(e){return S(this,null,function*(){return this.message="",new Promise((i,t)=>{this.detectAIService.ewo_detectai_qcsave(e.detect_id).subscribe(n=>{n.result==L.ok&&(this.message="X\xE1c nh\u1EADn th\xE0nh c\xF4ng...!",this.visible=!this.visible,i({data:n})),i([]),t(()=>{this.message="\u0110\xE3 x\u1EA3y ra l\u1ED7i...!",this.visible=!this.visible})})})})}AwaitDataSync(e){return S(this,null,function*(){return this.message="",new Promise((i,t)=>{this.detectAIService.datasync_detail(e).subscribe(n=>{n.result==L.ok&&i({data:n}),i([]),t(()=>{})})})})}SaveDetail(e){return S(this,null,function*(){e.forEach(t=>{t.sku_facing||(t.sku_facing=t.sku_facing_ai)});let i=yield this.AwaitSave(e);this.visible=!this.visible})}QCSave(e){return S(this,null,function*(){if(!this.details_visible[e.detect_id]||!this.details_visible[e.detect_id].dataDetails){this.message="Vui l\xF2ng ki\u1EC3m tra k\u1EBFt qu\u1EA3 chi ti\u1EBFt tr\u01B0\u1EDBc x\xE1c nh\u1EADn...!",this.visible=!this.visible;return}if(this.details_visible[e.detect_id].dataDetails.filter(a=>e.audit_id==a.audit_id&&!a.sku_facing).length>0){this.message="Vui l\xF2ng l\u01B0u h\u1EBFt k\u1EBFt qu\u1EA3 chi ti\u1EBFt tr\u01B0\u1EDBc x\xE1c nh\u1EADn...!",this.visible=!this.visible;return}let t=yield this.AwaitQCSave(e);if(!this.item_visible[e.detect_id]){e.detect_verify=1;let a=new Date;e.qc_update_date=this.formatDate(a),this.item_visible[e.detect_id]=w({},e)}(e.detect_verify==1||this.item_visible[e.detect_id]?.detect_verify==1)&&(this.message="\u0110\xE3 x\xE1c nh\u1EADn...!",this.visible=!this.visible);let n=this.dataSync.filter(a=>e.audit_id==a.AuditId&&a.Facing),s=yield this.AwaitDataSync(n)})}Filter(e){this.isLoading=!0,this.filterData=[],this.message="",this.fromDate||(this.message="Vui l\xF2ng ch\u1ECDn fromDate!",this.visible=!0),this.toDate||(this.message="Vui l\xF2ng ch\u1ECDn toDate!",this.visible=!0),this.currentPage=e;try{this.detectAIService.ewo_detectai_getall(G.DateToInt(this.fromDate),G.DateToInt(this.toDate),30,this.employee_code,this.shop_code,this.report_code,e,-1,this.promotion_id).subscribe(i=>{i.result==L.ok&&(i.data&&i.data.length?this.filterData=i.data.map(t=>{this.totalPages=Math.ceil(i.data[0].TotalRows/20);let{detect_id:n,audit_id:s,employee:a,shop_code:f,shop_name:h,shop_address:I,shop_type:b,show:k,detected_date:A,detect_verify:F,qc_update_date:Y,dataDetails:W,photoDetails:z}=H(w({},t),{show:null,dataDetails:[],photoDetails:[]});return{detect_id:n,audit_id:s,employee:a,shop_code:f,shop_name:h,shop_address:I,shop_type:b,show:k,detected_date:A,detect_verify:F,qc_update_date:Y,dataDetails:W,photoDetails:z}}):(this.message="Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u!",this.visible=!0)),this.isLoading=!1},i=>{this.isLoading=!1})}catch{this.isLoading=!1}}formatDate(e){let i=[e.getFullYear(),e.getMonth()+1,e.getDate()].map((n,s)=>n.toString().padStart(2,"0")).join("-"),t=[e.getHours(),e.getMinutes(),e.getSeconds()].map((n,s)=>n.toString().padStart(2,"0")).join(":");return i+" "+t}onPageChange(e){this.currentPage=e,console.log("Page :",this.currentPage),this.Filter(this.currentPage)}openImageInNewWindow(e,i){let t=e.changingThisBreaksApplicationSecurity,n=window.open("","_blank");n&&i==1&&n.document.write(`
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
  `)}static{this.\u0275fac=function(i){return new(i||r)(B(_e),B(X),B(Q),B(me))}}static{this.\u0275cmp=$({type:r,selectors:[["app-qc-result"]],features:[ne([X,Q,ce])],decls:65,vars:14,consts:[["datePicker","cDatePicker"],["smartTable","cSmartTable"],[1,"mt-1","mb-1"],[1,"p-2"],["md","3"],[1,"clearfix"],[1,"pt-3"],["inputReadOnly","",3,"ngModelChange","ngModel","calendarDate"],[1,"input-prepend"],["cInputGroupText",""],["cIcon","","name","cilMagnifyingGlass"],["cFormControl","","placeholder","Nh\xE2n vi\xEAn","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","C\u1EEDa h\xE0ng","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","M\xE3 b\xE1o c\xE1o","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","Promotion ID","type","text",3,"ngModelChange","ngModel"],["md","12"],["cButton","","color","primary",3,"click"],[1,"fade","show"],[1,"spinner-grow","spinner-grow-sm","text-success"],[1,"m-1","text-success"],[4,"ngIf"],["id","liveDemoModal",3,"visibleChange","visible"],["cModalTitle",""],["cButtonClose","",3,"click"],["xs","12"],[1,"card-data"],["header","","loading","",3,"columns","itemsPerPageSelect","itemsPerPage","items","tableProps"],["cTemplateId","tableData"],["cTemplateId","tableDetails"],["align","center",3,"activePageChange","activePage","pages"],[3,"cAlign","cTableActive","cTableColor","ngClass"],["cButton","","color","primary"],["cButton","","color","primary",3,"disabled"],["cIcon","",3,"name"],["cButton","","color","primary",3,"click","disabled"],["cCollapse","",3,"visible"],[1,"bg-light-subtle","p-1","w-100","text-center"],["lg","7"],["cTable","",1,"table","table-bordered","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"float-left"],["color","primary","cButton","","size","md","variant","outline",3,"click","disabled"],["lg","5"],[3,"dark","wrap"],["data-coreui-interval","-99999999",3,"class"],["caption","Previous","direction","prev",3,"routerLink"],["caption","Next","direction","next",3,"routerLink"],["cFormControl","","type","number","placeholder","blank = Facing Detected","name","sku_facing",3,"ngModelChange","ngModel","disabled"],["data-coreui-interval","-99999999"],[2,"cursor","pointer","text-align","left",3,"click"],["cIcon","","name","cil-arrow-thick-to-bottom","size","lg"],["class","d-block ","style","width: 90%;","loading","lazy",3,"src","alt","click",4,"ngIf"],[3,"click",4,"ngIf"],["loading","lazy",1,"d-block",2,"width","90%",3,"click","src","alt"],[3,"click"],["type","image/svg+xml",2,"pointer-events","none"]],template:function(i,t){if(i&1){let n=y();o(0,"c-card",2)(1,"c-row",3)(2,"c-col",4)(3,"span",5)(4,"h6",6),m(5,"T\u1EEB ng\xE0y"),l()(),o(6,"c-date-picker",7,0),E("ngModelChange",function(a){return _(n),D(t.fromDate,a)||(t.fromDate=a),u(a)}),l()(),o(8,"c-col",4)(9,"span",5)(10,"h6",6),m(11,"\u0110\u1EBFn ng\xE0y"),l()(),o(12,"c-date-picker",7,0),E("ngModelChange",function(a){return _(n),D(t.toDate,a)||(t.toDate=a),u(a)}),l()(),o(14,"c-col",4)(15,"span",5)(16,"h6",6),m(17,"Nh\xE2n vi\xEAn"),l()(),o(18,"c-input-group",8)(19,"span",9),M(),v(20,"svg",10),l(),R(),o(21,"input",11),E("ngModelChange",function(a){return _(n),D(t.employee_code,a)||(t.employee_code=a),u(a)}),l()()(),o(22,"c-col",4)(23,"span",5)(24,"h6",6),m(25,"C\u1EEDa h\xE0ng"),l()(),o(26,"c-input-group",8)(27,"span",9),M(),v(28,"svg",10),l(),R(),o(29,"input",12),E("ngModelChange",function(a){return _(n),D(t.shop_code,a)||(t.shop_code=a),u(a)}),l()()()(),o(30,"c-row",3)(31,"c-col",4)(32,"span",5)(33,"h6",6),m(34,"M\xE3 b\xE1o c\xE1o"),l()(),o(35,"c-input-group",8)(36,"span",9),M(),v(37,"svg",10),l(),R(),o(38,"input",13),E("ngModelChange",function(a){return _(n),D(t.report_code,a)||(t.report_code=a),u(a)}),l()()(),o(39,"c-col",4)(40,"span",5)(41,"h6",6),m(42,"Promotion ID"),l()(),o(43,"c-input-group",8)(44,"span",9),M(),v(45,"svg",10),l(),R(),o(46,"input",14),E("ngModelChange",function(a){return _(n),D(t.promotion_id,a)||(t.promotion_id=a),u(a)}),l()()()(),v(47,"hr"),o(48,"c-row",3)(49,"c-col",15)(50,"button",16),C("click",function(){return _(n),u(t.Filter(1))}),m(51,"T\xECm ki\u1EBFm"),l()()()(),o(52,"c-card")(53,"div",17),v(54,"i",18),o(55,"span",19),m(56,"\u0110ang load d\u1EEF li\u1EC7u"),l()(),T(57,dt,9,8,"c-row",20),l(),o(58,"c-modal",21),C("visibleChange",function(a){return _(n),u(t.handleLiveDemoChange(a))}),o(59,"c-modal-header")(60,"h5",22),m(61,"Th\xF4ng b\xE1o"),l(),o(62,"button",23),C("click",function(){return _(n),u(t.toggleLiveDemo())}),l()(),o(63,"c-modal-body"),m(64),l()()}i&2&&(c(6),x("ngModel",t.fromDate),g("calendarDate",t.calendarFromDate),c(6),x("ngModel",t.toDate),g("calendarDate",t.calendarToDate),c(9),x("ngModel",t.employee_code),c(8),x("ngModel",t.shop_code),c(9),x("ngModel",t.report_code),c(8),x("ngModel",t.promotion_id),c(7),j("",t.isLoading?"":"display: none;"," text-align: center; height: 20vh ; padding-top:calc(20vh / 2);"),c(4),g("ngIf",t.filterData&&t.filterData.length>0),c(),g("visible",t.visible),c(6),V(t.message))},dependencies:[Qe,Xe,Ae,Re,be,Fe,Se,ke,Ie,Oe,He,Be,Ge,Ne,qe,$e,Ee,ye,we,oe,De,Me,Pe,Ve,le,Te,ue,de,re,se,Le,Ce,pe,ve,ge,fe,he,je,We,ze,xe,Ye],styles:[".card-data[_ngcontent-%COMP%]{padding:0!important}.pt-3[_ngcontent-%COMP%]{padding-top:0!important}"]})}}return r})();export{Xt as QCResultComponent};
