import{a as Qe}from"./chunk-4AD2TD6K.js";import{b as He,c as qe}from"./chunk-EJMYRJUN.js";import{a as Ge}from"./chunk-MMQBQGI5.js";import{a as P}from"./chunk-CWM7VNHW.js";import"./chunk-26M4WOOW.js";import{_a as Ue,ea as Oe,hb as We,l as je,s as Ne,z as Re}from"./chunk-OVEX3KHJ.js";import"./chunk-FYYLBBTR.js";import{$ as _e,Bb as Ye,Cb as $e,Ga as De,H as oe,I as ae,L as le,Ma as Ie,N as re,Pa as ke,U as ce,V as se,Va as Ee,W as de,Wa as Pe,X as me,_ as pe,aa as ge,da as ue,gb as Me,hb as Ae,ia as he,kb as Be,lb as Le,m as ne,ma as Ce,na as fe,sa as ve,t as ie,ta as be,ua as ye,va as we,vb as Ve,wa as Se,wb as Fe,xa as xe,xb as ze,ya as Te,yb as Xe}from"./chunk-55Y7RW7N.js";import{$b as V,Ac as b,Ad as Z,Bd as ee,Cb as v,Cc as E,Fc as X,Gc as Y,Hc as $,Hd as te,Mc as T,Oc as H,Qb as L,Rb as s,Vb as W,Yb as G,ac as F,bc as c,cc as d,db as A,dc as h,eb as B,ec as y,fc as w,hc as f,ib as r,kc as C,mc as a,nb as k,pc as z,ra as _,sa as g,ta as I,ua as O,vd as q,wb as U,xd as Q,yc as S,yd as J,zd as K}from"./chunk-XOKJR3V5.js";import{a as x,b as M,h as R}from"./chunk-WWX6BADO.js";var Je=()=>[200,1e3],j=()=>({hover:!0,bordered:!0,striped:!1,responsive:!0}),Ke=()=>[500,1e3],Ze=(n,l)=>({"text-align":"center","font-weight":n,color:l}),et=(n,l)=>l.src,tt=(n,l)=>l.detect_id;function nt(n,l){if(n&1){let e=f();c(0,"button",10),C("click",function(){_(e);let i=a().item,o=a(2);return g(o.toggleDetails(i))}),I(),h(1,"svg",30),d()}if(n&2){let e=a().item,t=a(2);r(),z("name",(t.details_visible[e.shop_code]==null?null:t.details_visible[e.shop_code].visible)===!0?"cilMinus":"cilPlus")}}function it(n,l){if(n&1&&b(0),n&2){let e=a().tdContent;E(" ",e," ")}}function ot(n,l){if(n&1&&(c(0,"td",29),v(1,nt,2,1,"button",22)(2,it,1,1),d()),n&2){let e,t,i,o,m=l.columnName,p=l.item;a();let u=S(5);s("cAlign",(e=u.getTableDataCellProps(p,m))==null?null:e.align)("cTableActive",(t=u.getTableDataCellProps(p,m))==null?null:t.active)("cTableColor",(i=u.getTableDataCellProps(p,m))==null?null:i.color)("ngClass",u.getTableDataCellClass(p,m)),r(),G((o=m)==="show"?1:2)}}function at(n,l){if(n&1&&(y(0),b(1),w()),n&2){let e=a().tdContent;r(),E(" ",e," ")}}function lt(n,l){if(n&1&&(c(0,"td",29),y(1,33),v(2,at,2,1,"ng-container",34),w(),d()),n&2){let e,t,i,o=l.columnName,m=l.item;a();let p=S(5);s("cAlign",(e=p.getTableDataCellProps(m,o))==null?null:e.align)("cTableActive",(t=p.getTableDataCellProps(m,o))==null?null:t.active)("cTableColor",(i=p.getTableDataCellProps(m,o))==null?null:i.color)("ngClass",p.getTableDataCellClass(m,o)),r(),s("ngSwitch",o)}}function rt(n,l){if(n&1){let e=f();c(0,"img",42),C("click",function(){_(e);let i=a().$implicit,o=a(4);return g(o.handleSelectedImg(i))}),d()}if(n&2){let e=a().$implicit;a(4);let t=S(16);s("src",e.photo_url,A)("cModalToggle",t.id)}}function ct(n,l){if(n&1){let e=f();c(0,"div",43),C("click",function(){_(e);let i=a().$implicit,o=a(4);return g(o.handleSelectedImg(i))}),h(1,"object",44),d()}if(n&2){let e=a().$implicit;a(4);let t=S(16);s("cModalToggle",t.id),r(),L("data",e.detect_url,B)}}function st(n,l){if(n&1){let e=f();c(0,"c-carousel-item")(1,"div",37),C("click",function(){let i=_(e).$implicit,o=a(4);return g(o.downloadImage(i.photo_url))}),I(),h(2,"svg",38),d(),v(3,rt,1,2,"img",39)(4,ct,2,2,"div",40),O(),c(5,"c-carousel-caption",41)(6,"h3"),b(7),d()()()}if(n&2){let e=l.$implicit;r(3),s("ngIf",!e.detect_url),r(),s("ngIf",e.detect_url),r(3),E("Detect Id : ",e.detect_id,"")}}function dt(n,l){if(n&1&&(c(0,"c-carousel",19),h(1,"c-carousel-indicators"),c(2,"c-carousel-inner"),V(3,st,8,3,"c-carousel-item",null,tt),d(),h(5,"c-carousel-control",35),c(6,"b"),h(7,"c-carousel-control",36),d()()),n&2){let e=a().item,t=a(2);s("dark",!0)("wrap",!1),r(3),F(t.details_visible[e.shop_code]==null?null:t.details_visible[e.shop_code].detectDetails),r(2),s("size","xl")}}function mt(n,l){if(n&1&&(c(0,"div",31)(1,"c-row",14)(2,"c-col",15)(3,"div",13)(4,"c-smart-table",16,2),v(6,lt,3,5,"ng-template",17),d()()(),c(7,"c-col",18),v(8,dt,8,3,"c-carousel",32),d()()()),n&2){let e=l.item,t=a(2);s("visible",t.details_visible[e.shop_code]==null?null:t.details_visible[e.shop_code].visible),r(4),s("columns",t.columnProduct)("columnFilter",!0)("columnSorter",!0)("itemsPerPageSelect",!0)("itemsPerPage",500)("itemsPerPageOptions",T(10,Ke))("items",t.details_visible[e.shop_code]==null?null:t.details_visible[e.shop_code].productsDetails)("tableProps",T(11,j)),r(4),s("ngIf",(t.details_visible[e.shop_code]==null||t.details_visible[e.shop_code].detectDetails==null?null:t.details_visible[e.shop_code].detectDetails.length)>0)}}function pt(n,l){if(n&1){let e=f();c(0,"c-row")(1,"c-col",24)(2,"c-card")(3,"c-card-body",25)(4,"c-smart-table",26,2),v(6,ot,3,5,"ng-template",17)(7,mt,9,12,"ng-template",27),d()(),c(8,"c-smart-pagination",28),C("activePageChange",function(i){_(e);let o=a();return g(o.onPageChange(i))}),d()()()()}if(n&2){let e=a();r(4),s("columns",e.columnShop)("itemsPerPageSelect",!0)("itemsPerPage",20)("items",e.listShop)("tableProps",T(7,j)),r(4),s("activePage",e.currentPage)("pages",e.totalPages)}}function _t(n,l){if(n&1){let e=f();y(0),c(1,"c-input-group")(2,"input",46),$("ngModelChange",function(i){_(e);let o=a().item;return Y(o.sku_facing,i)||(o.sku_facing=i),g(i)}),C("ngModelChange",function(i){_(e);let o=a().item,m=a();return g(m.onSkuFacingChange(o,i))}),d()(),w()}if(n&2){let e=a().item,t=a();r(2),X("ngModel",e.sku_facing),s("ngStyle",H(3,Ze,e.sku_facing&&e.sku_facing_ai!==e.sku_facing?"bold":"",e.sku_facing&&e.sku_facing_ai!==e.sku_facing?"red":""))("disabled",(t.details_visible[e.detect_id]==null?null:t.details_visible[e.detect_id].detect_verify)===1)}}function gt(n,l){if(n&1){let e=f();y(0),c(1,"div",47),C("click",function(){_(e);let i=a().item,o=a();return g(o.RemoveItemDetail(i,i))}),I(),h(2,"svg",48),d(),w()}}function ut(n,l){if(n&1&&(y(0),b(1),w()),n&2){let e=a().tdContent;r(),E(" ",e," ")}}function ht(n,l){if(n&1&&(c(0,"td",29),y(1,33),v(2,_t,3,6,"ng-container",45)(3,gt,3,0,"ng-container",45)(4,ut,2,1,"ng-container",34),w(),d()),n&2){let e,t,i,o=l.columnName,m=l.item;a();let p=S(21);s("cAlign",(e=p.getTableDataCellProps(m,o))==null?null:e.align)("cTableActive",(t=p.getTableDataCellProps(m,o))==null?null:t.active)("cTableColor",(i=p.getTableDataCellProps(m,o))==null?null:i.color)("ngClass",p.getTableDataCellClass(m,o)),r(),s("ngSwitch",o),r(),s("ngSwitchCase","sku_facing"),r(),s("ngSwitchCase","actions")}}function Ct(n,l){if(n&1){let e=f();c(0,"img",53),C("click",function(){_(e);let i=a().$implicit,o=a();return g(o.openImageInNewWindow(i.photo_url,2))}),d()}if(n&2){let e=a().$implicit;z("alt",e.title),s("src",e.photo_url,A)}}function ft(n,l){if(n&1){let e=f();c(0,"div",54),C("click",function(){_(e);let i=a().$implicit,o=a();return g(o.openImageInNewWindow(i.src,1))}),h(1,"object",44),d()}if(n&2){let e=a().$implicit;r(),L("data",e.src,B)}}function vt(n,l){if(n&1){let e=f();c(0,"div",49)(1,"div",50),C("click",function(){let i=_(e).$implicit,o=a();return g(o.downloadImage(i.photo_url))}),I(),h(2,"svg",38),d(),v(3,Ct,1,2,"img",51)(4,ft,2,1,"div",52),d()}if(n&2){let e=l.$implicit,t=l.$index;W(t===0?"carousel-item active":"carousel-item"),r(3),s("ngIf",!e.src),r(),s("ngIf",e.src)}}var Qt=(()=>{class n{constructor(e,t,i,o){this.service=e,this.iconSet=t,this.sanitizer=i,this.detectAIService=o,this.calendarFromDate=new Date(Date.now()),this.calendarToDate=new Date(Date.now()),this.from_date=new Date,this.to_date=new Date,this.isLoading="false",this.listShop=[],this.totalPages=2,this.details_visible=Object.create({}),this.columnShop=[{key:"show",label:"",_style:{width:"3%"}},{key:"RowNumber",label:"#",_style:{width:"5%"}},{key:"shop_code",label:"M\xE3 Shop",filter:!0},{key:"shop_name",label:"T\xEAn Shop"},{key:"shop_address",label:"\u0110\u1ECBa ch\u1EC9"}],this.columnProduct=[{key:"sku_id",label:"#",_style:{width:"5%"}},{key:"sku_code",label:"M\xE3 s\u1EA3n ph\u1EA9m",filter:!0},{key:"sku_name",label:"T\xEAn s\u1EA3n ph\u1EA9m",filter:!0},{key:"sumAI",label:"T\u1ED5ng k\u1EBFt qu\u1EA3 AI"},{key:"sumQC",label:"T\u1ED5ng k\u1EBFt qu\u1EA3 QC",_style:{width:"20%"},filter:!1,sorter:!1}],this.dataSync=[],this.visible=!1,this.columnss=[{key:"sku_id",label:"#",_style:{width:"5%"}},{key:"sku_code",label:"M\xE3 s\u1EA3n ph\u1EA9m"},{key:"sku_name",label:"T\xEAn s\u1EA3n ph\u1EA9m"},{key:"sku_facing_ai",label:"Facing Detected",_style:{width:"5%"}},{key:"sku_facing",label:"Facing",_style:{width:"20%"},filter:!1,sorter:!1},{key:"actions",label:"",_style:{width:"5%"},filter:!1,sorter:!1}],this.currentPage=1,t.icons=M(x(x(x({},We),je),Ne),{cilTrash:Ue,cilArrowCircleTop:Re,cilFile:Oe}),this.sanitizer_var=i}filter(e){this.service.GetAll_TotalByShop(P.DateToInt(this.from_date),P.DateToInt(this.to_date),66,e).subscribe(t=>{console.log(t.data),this.totalPages=Math.ceil(t.data[0].TotalRows/20),this.listShop=t.data})}toggleDetails(e){return R(this,null,function*(){this.details_visible[e.shop_code]||(this.details_visible[e.shop_code]=x({},e)),this.details_visible[e.shop_code].visible=!this.details_visible[e.shop_code].visible,this.details_visible[e.shop_code].visible&&(yield this.service.GetDetail_Sum_TotalByShop(P.DateToInt(this.from_date),P.DateToInt(this.to_date),66,e.shop_code).subscribe(t=>{let i=t.data?.detectDetails.map(o=>(o.detect_url&&(o.detect_url=this.sanitizer_var.bypassSecurityTrustResourceUrl(o.detect_url)),M(x({},o),{detect_url:o.detect_url})));this.details_visible[e.shop_code].productsDetails=t.data?.productsDetails,this.details_visible[e.shop_code].detectDetails=i}))})}downloadImage(e){if(!e||typeof e!="string"){console.error("Invalid image URL:",e);return}try{let t=new Date,i=t.toTimeString().split(" ")[0].replace(/:/g,""),o=t.toISOString().slice(0,10).replace(/-/g,""),m=new URL(e).pathname.split(".").pop()?.split("?")[0]||"jpg",p=`image_download_${o}_${i}.${m}`;fetch(e).then(u=>{if(!u.ok)throw new Error(`HTTP error! Status: ${u.status}`);return u.blob()}).then(u=>{let N=window.URL.createObjectURL(u),D=document.createElement("a");D.href=N,D.download=p,document.body.appendChild(D),D.click(),document.body.removeChild(D),window.URL.revokeObjectURL(N)}).catch(u=>{console.error(u.message||u),alert(u.message||"Unknown error")})}catch(t){console.error("Error parsing URL or downloading:",t)}}toggleLiveDemo(){this.visible=!this.visible}handleLiveDemoChange(e){this.visible=e}handleSelectedImg(e){console.log("slide.detect_id",e.detect_id),localStorage.setItem("detect_id",e.detect_id),this.detectAIService.ewo_detectai_detail(e.detect_id).subscribe(t=>{console.log("data",t),this.selecteddetectDetect=t.data,console.log(" this.selecteddetectDetect.photoDetails[0].photo_url",this.selecteddetectDetect.photoDetails[0].src),this.selecteddetectDetect?.photoDetails[0].src&&(this.selecteddetectDetect.photoDetails[0].src=this.sanitizer_var.bypassSecurityTrustResourceUrl(this.selecteddetectDetect?.photoDetails[0].src))})}openImageInNewWindow(e,t){let i=e.changingThisBreaksApplicationSecurity,o=window.open("","_blank");o&&t==1&&o.document.write(`
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
            const imageUrl = "${i}";
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
    `),o&&t==2&&o.document.write(`
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
  `)}onPageChange(e){this.currentPage=e,this.filter(this.currentPage)}static{this.\u0275fac=function(t){return new(t||n)(k(Qe),k(de),k(ne),k(Ge))}}static{this.\u0275cmp=U({type:n,selectors:[["app-detect-ai-total-by-shop"]],decls:35,vars:18,consts:[["datePicker","cDatePicker"],["verticallyCenteredScrollableModal",""],["smartTable","cSmartTable"],[1,"mt-1","mb-1"],[1,"p-2"],["md","3"],[1,"clearfix"],[1,"pt-3"],["inputReadOnly","",3,"ngModelChange","ngModel","calendarDate"],["md","12"],["cButton","","color","primary",3,"click"],[4,"ngIf"],["id","verticallyCenteredScrollableModal","alignment"," center",1,"modal-fullscreen",3,"visibleChange","scrollable"],[1,"table-container"],[1,"bg-light-subtle","p-1","w-100","text-center"],["lg","7"],["header","","loading","",3,"columns","columnFilter","columnSorter","itemsPerPageSelect","itemsPerPage","itemsPerPageOptions","items","tableProps"],["cTemplateId","tableData"],["lg","5"],[3,"dark","wrap"],["data-coreui-interval","-99999999",3,"class"],["cButton","","color","secondary",3,"cModalToggle"],["cButton","","color","primary"],["color","#ff0000",3,"height"],["xs","12"],[1,"card-data"],["header","","loading","",3,"columns","itemsPerPageSelect","itemsPerPage","items","tableProps"],["cTemplateId","tableDetails"],["align","center",3,"activePageChange","activePage","pages"],[3,"cAlign","cTableActive","cTableColor","ngClass"],["cIcon","",3,"name"],["cCollapse","",3,"visible"],[3,"dark","wrap",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchDefault"],["caption","Previous","direction","prev",3,"routerLink","size"],["caption","Next","direction","next",3,"routerLink"],["id","downloadImage",2,"cursor","pointer","padding-left","150px","text-align","left","z-index","999",3,"click"],["cIcon","","name","cil-arrow-thick-to-bottom","size","lg"],["alt","image","class","d-block","style","width: 90%;","loading","lazy",3,"src","cModalToggle","click",4,"ngIf"],[3,"cModalToggle","click",4,"ngIf"],[1,"d-none","d-md-block"],["alt","image","loading","lazy",1,"d-block",2,"width","90%",3,"click","src","cModalToggle"],[3,"click","cModalToggle"],["type","image/svg+xml",2,"pointer-events","none"],[4,"ngSwitchCase"],["cFormControl","","type","number","placeholder","blank = Facing Detected","name","sku_facing",3,"ngModelChange","ngModel","ngStyle","disabled"],[2,"cursor","pointer",3,"click"],["cIcon","","name","cilTrash",2,"color","brown"],["data-coreui-interval","-99999999"],[2,"cursor","pointer","text-align","left",3,"click"],["class","d-block ","style","width: 90%;","loading","lazy",3,"src","alt","click",4,"ngIf"],[3,"click",4,"ngIf"],["loading","lazy",1,"d-block",2,"width","90%",3,"click","src","alt"],[3,"click"]],template:function(t,i){if(t&1){let o=f();c(0,"c-card",3)(1,"c-row",4)(2,"c-col",5)(3,"span",6)(4,"h6",7),b(5,"T\u1EEB ng\xE0y"),d()(),c(6,"c-date-picker",8,0),$("ngModelChange",function(p){return _(o),Y(i.from_date,p)||(i.from_date=p),g(p)}),d()()(),h(8,"hr"),c(9,"c-row",4)(10,"c-col",9)(11,"button",10),C("click",function(){return _(o),g(i.filter(i.currentPage))}),b(12,"T\xECm ki\u1EBFm"),d()()()(),c(13,"c-card"),v(14,pt,9,8,"c-row",11),d(),c(15,"c-modal",12,1),C("visibleChange",function(p){return _(o),g(i.handleLiveDemoChange(p))}),c(17,"div",13)(18,"c-row",14)(19,"c-col",15)(20,"c-smart-table",16,2),v(22,ht,5,7,"ng-template",17),d()(),c(23,"c-col",18)(24,"c-carousel",19),h(25,"c-carousel-indicators"),c(26,"c-carousel-inner"),V(27,vt,5,5,"div",20,et),d()()()()(),c(29,"c-modal-footer")(30,"button",21),b(31," Close "),d(),c(32,"button",22),b(33,"Understood"),d()()(),h(34,"ngx-loading-bar",23)}if(t&2){let o=S(16);r(6),X("ngModel",i.from_date),s("calendarDate",i.calendarFromDate),r(8),s("ngIf",i.listShop&&i.listShop.length>0),r(),s("scrollable",!0),r(5),s("columns",i.columnss)("columnFilter",!0)("columnSorter",!0)("itemsPerPageSelect",!0)("itemsPerPage",200)("itemsPerPageOptions",T(16,Je))("items",i.selecteddetectDetect==null?null:i.selecteddetectDetect.dataDetails)("tableProps",T(17,j)),r(4),s("dark",!0)("wrap",!1),r(3),F(i.selecteddetectDetect==null?null:i.selecteddetectDetect.photoDetails),r(3),s("cModalToggle",o.id),r(4),s("height","5px")}},dependencies:[Pe,Ee,De,me,Ie,ge,fe,Ce,Xe,ze,ke,Le,Be,Ae,Me,Fe,Ve,Ye,$e,he,ie,_e,pe,ue,ve,we,xe,Se,be,ye,te,q,Q,ee,J,K,Z,Te,se,oe,re,ae,ce,le,qe,He],styles:[".card-data[_ngcontent-%COMP%]{padding:0!important}.pt-3[_ngcontent-%COMP%]{padding-top:0!important}.table-container[_ngcontent-%COMP%]{max-height:90vh;overflow-y:auto}.table-container[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background:#fff;z-index:10}.custom-ng-select[_ngcontent-%COMP%]     .ng-dropdown-panel .ng-option{text-align:left}  .modal.modal-fullscreen .modal-dialog{width:100vw;max-width:100vw;height:100vh;margin:0}  .modal.modal-fullscreen .modal-content{height:100vh;border-radius:0}.custom-icon[_ngcontent-%COMP%]{font-size:40px;color:#fff}  .carousel-control-next-icon{width:69px;height:69px}  .carousel-control-next-icon{width:49px;height:49px}"]})}}return n})();export{Qt as DetectAITotalByShopComponent};
