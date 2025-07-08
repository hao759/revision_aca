import{a as Se}from"./chunk-WLXPNCEN.js";import{Bb as fe,Cb as Ce,Ga as de,H as G,I as J,Jb as ve,Kb as ye,L as K,Lb as we,Ma as me,Nb as be,U as Z,Va as pe,Wa as ge,_ as $,aa as ee,da as te,ia as ne,m as H,ma as ie,sa as oe,ua as ae,va as re,wa as le,wb as ue,xa as se,xb as _e,ya as ce,yb as he}from"./chunk-55Y7RW7N.js";import{$b as N,Ac as d,Ad as R,Cb as S,Cc as k,Fc as h,Gc as f,Hc as C,Hd as Q,Mc as I,Qb as j,Rb as u,Vb as B,ac as A,bc as a,cc as r,dc as _,eb as V,ec as y,fc as w,hc as E,ib as s,kc as b,mc as v,nb as D,ra as m,sa as p,sc as T,ta as Y,tc as M,uc as x,vd as W,wb as F,xd as z,yc as L,yd as q,zd as O}from"./chunk-XOKJR3V5.js";import{a as X,b as P,h as U}from"./chunk-WWX6BADO.js";var Ee=["smartTable"],De=["fileUploader"],Te=()=>[500,1e3],Me=()=>({hover:!0,bordered:!0,striped:!1,responsive:!0}),xe=(l,g)=>g.photo_guid;function Le(l,g){l&1&&(a(0,"div",26),_(1,"i",27),a(2,"span",28),d(3,"\u0110ang load d\u1EEF li\u1EC7u"),r()())}function ke(l,g){l&1&&(y(0),_(1,"c-input-group"),w())}function Ie(l,g){if(l&1){let t=E();y(0),a(1,"div",42),b("click",function(){m(t);let e=v().item,n=v(2);return p(n.RemoveItemDetail(e,e))}),Y(),_(2,"svg",43),r(),w()}}function Xe(l,g){if(l&1&&(y(0),d(1),w()),l&2){let t=v().tdContent;s(),k(" ",t," ")}}function Pe(l,g){if(l&1&&(a(0,"td",38),y(1,39),S(2,ke,2,0,"ng-container",40)(3,Ie,3,0,"ng-container",40)(4,Xe,2,1,"ng-container",41),w(),r()),l&2){let t,o,e,n=g.columnName,c=g.item;v();let i=L(5);u("cAlign",(t=i.getTableDataCellProps(c,n))==null?null:t.align)("cTableActive",(o=i.getTableDataCellProps(c,n))==null?null:o.active)("cTableColor",(e=i.getTableDataCellProps(c,n))==null?null:e.color)("ngClass",i.getTableDataCellClass(c,n)),s(),u("ngSwitch",n),s(),u("ngSwitchCase","sku_facing"),s(),u("ngSwitchCase","actions")}}function Ue(l,g){if(l&1){let t=E();a(0,"c-carousel-item")(1,"div",44),b("click",function(){let e=m(t).$implicit,n=v(2);return p(n.openImageInNewWindow(e.url_detect,1))}),_(2,"object",45),r()()}if(l&2){let t=g.$implicit;s(2),j("data",t.url_detect,V)}}function Ye(l,g){if(l&1&&(a(0,"c-card")(1,"c-row",29)(2,"c-col",30)(3,"div",31)(4,"c-smart-table",32,1),S(6,Pe,5,7,"ng-template",33),r()()(),a(7,"c-col",34)(8,"c-carousel",35),_(9,"c-carousel-indicators"),a(10,"c-carousel-inner"),N(11,Ue,3,1,"c-carousel-item",null,xe),r(),_(13,"c-carousel-control",36),a(14,"b"),_(15,"c-carousel-control",37),r()()()()()),l&2){let t=v();s(4),u("columns",t.columnss)("columnFilter",!0)("columnSorter",!0)("itemsPerPageSelect",!0)("itemsPerPage",500)("itemsPerPageOptions",I(11,Te))("items",t.detect_productsTotal)("tableProps",I(12,Me)),s(4),u("dark",!0)("wrap",!1),s(3),A(t.detect_photosTotal),s(2),u("size","xl")}}var rt=(()=>{class l{constructor(t,o){this.service=t,this.sanitizer=o,this.audit_id=9999,this.audit_date=20250624,this.shop_code=1031799,this.emp_code=83789,this.project_id=30,this.project_name="unime-ps",this.kpi_name=10799,this.unique_code=10799,this.columnss=[{key:"product_code",label:"M\xE3 s\u1EA3n ph\u1EA9m"},{key:"osa",label:"OSA",filter:!1},{key:"facing",label:"Facing Detected",filter:!1},{key:"quantity",label:"S\u1ED1 l\u01B0\u1EE3ng",_style:{width:"20%"},filter:!1,sorter:!1}],this.isLoading=!1,this.toast={visible_toast:!1,message_toast:"",background:""},this.sanitizer_var=o}onUpload(t){return U(this,null,function*(){if(t.srcElement.files.length<1)return;this.isLoading=!0;let o=new Date;this.detect_productsTotal=null,this.detect_photosTotal=null;let e=o.getFullYear().toString()+String(o.getMonth()+1).padStart(2,"0")+String(o.getDate()).padStart(2,"0");this.count_total_img=t.srcElement.files.length;for(let n=0;n<t.srcElement.files.length;n++)console.log("event.srcElement",t.srcElement.files[n]),this.service.uploadImage(this.project_id,this.audit_id,this.audit_date,this.shop_code,this.emp_code,this.project_name,this.kpi_name,this.unique_code,t.srcElement.files[n]).subscribe(c=>{setTimeout(()=>{this.callImg(e)},3e3)},c=>{console.log(c),this.isLoading=!1})})}randomNineDigitNumber(){return Math.floor(Math.random()*9e8)+1e8}ngOnInit(){this.unique_code=this.randomNineDigitNumber(),this.shop_code=this.randomNineDigitNumber()}getDisplayedIndex(t){return(this.smartTable?.getDisplayedItems?.()||[]).findIndex(e=>e===t)+1}callImg(t){this.service.uploadImageToDetect(this.project_id,this.audit_date,this.shop_code,this.emp_code,t).subscribe(o=>{o.result!="ERROR"?(this.count_total_img--,console.log("count_total_img",this.count_total_img),this.count_total_img||(this.detect_productsTotal=o.data.detect_products,this.detect_photosTotal=o.data.detect_photos.map(e=>{let n=this.sanitizer_var.bypassSecurityTrustResourceUrl(e.url_detect);return P(X({},e),{url_detect:n})}),this.isLoading=!1)):(this.isLoading=!1,this.toggleToast(o.data,"bg-danger"))})}toggleToast(t,o){this.toast.visible_toast=!0,this.toast.background=o,this.toast.message_toast=t,setTimeout(()=>{this.toast.visible_toast=!1},2e3)}clearFiles(t){t.clear()}openImageInNewWindow(t,o){let e=t.changingThisBreaksApplicationSecurity,n=window.open("","_blank");n&&o==1&&n.document.write(`
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
            const imageUrl = "${e}";
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
    `),n&&o==2&&n.document.write(`
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
          <img src="${t}" id="image">
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
  `)}static{this.\u0275fac=function(o){return new(o||l)(D(Se),D(H))}}static{this.\u0275cmp=F({type:l,selectors:[["app-umer-demo"]],viewQuery:function(o,e){if(o&1&&(T(Ee,5),T(De,5)),o&2){let n;M(n=x())&&(e.smartTable=n.first),M(n=x())&&(e.fileUploader=n.first)}},decls:62,vars:16,consts:[["fileUploader",""],["smartTable","cSmartTable"],[1,"mt-1","mb-1"],[1,"p-2"],["md","3"],[1,"clearfix"],[1,"pt-3"],[1,"input-prepend"],["cFormControl","","placeholder","Nh\u1EADp audit_id","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","Nh\u1EADp audit_date","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","Nh\u1EADp shop_code","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","Nh\u1EADp emp_code","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","Nh\u1EADp project_id","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","Nh\u1EADp kpi_name","type","text",3,"ngModelChange","ngModel"],["cFormControl","","placeholder","Nh\u1EADp unique_code","type","text",3,"ngModelChange","ngModel"],[1,"col-12",2,"text-align","center"],[1,"card"],[1,"row"],[1,"upload-content","text-center","p-2",2,"margin-top","5%"],["type","file","hidden","","multiple","","accept","image/*",3,"change"],["cButton","","color","primary",3,"click"],[1,"mt-2","small","text-muted"],["class","fade show","style","text-align: center; height: 20vh ; padding-top:calc(20vh / 2); background-color: white;",4,"ngIf"],[4,"ngIf"],[2,"position","fixed","top","80px","right","0","background-color","cornflowerblue","color","white","z-index","1000",3,"autohide","delay","visible"],[1,"mr-auto"],[1,"fade","show",2,"text-align","center","height","20vh","padding-top","calc(20vh / 2)","background-color","white"],[1,"spinner-grow","spinner-grow-sm","text-success"],[1,"m-1","text-success"],[1,"bg-light-subtle","p-1","w-100","text-center"],["lg","7"],[1,"table-container"],["header","","loading","",3,"columns","columnFilter","columnSorter","itemsPerPageSelect","itemsPerPage","itemsPerPageOptions","items","tableProps"],["cTemplateId","tableData"],["lg","5"],[3,"dark","wrap"],["caption","Previous","direction","prev",3,"routerLink","size"],["caption","Next","direction","next",3,"routerLink"],[3,"cAlign","cTableActive","cTableColor","ngClass"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[2,"cursor","pointer",3,"click"],["cIcon","","name","cilTrash",2,"color","brown"],[3,"click"],["type","image/svg+xml",2,"pointer-events","none"]],template:function(o,e){if(o&1){let n=E();a(0,"c-card",2)(1,"c-row",3)(2,"c-col",4)(3,"span",5)(4,"h6",6),d(5,"audit_id"),r()(),a(6,"c-input-group",7)(7,"input",8),C("ngModelChange",function(i){return m(n),f(e.audit_id,i)||(e.audit_id=i),p(i)}),r()()(),a(8,"c-col",4)(9,"span",5)(10,"h6",6),d(11,"audit_date"),r()(),a(12,"c-input-group",7)(13,"input",9),C("ngModelChange",function(i){return m(n),f(e.audit_date,i)||(e.audit_date=i),p(i)}),r()()(),a(14,"c-col",4)(15,"span",5)(16,"h6",6),d(17,"shop_code"),r()(),a(18,"c-input-group",7)(19,"input",10),C("ngModelChange",function(i){return m(n),f(e.shop_code,i)||(e.shop_code=i),p(i)}),r()()(),a(20,"c-col",4)(21,"span",5)(22,"h6",6),d(23,"emp_code"),r()(),a(24,"c-input-group",7)(25,"input",11),C("ngModelChange",function(i){return m(n),f(e.emp_code,i)||(e.emp_code=i),p(i)}),r()()(),a(26,"c-col",4)(27,"span",5)(28,"h6",6),d(29,"project_id"),r()(),a(30,"c-input-group",7)(31,"input",12),C("ngModelChange",function(i){return m(n),f(e.project_id,i)||(e.project_id=i),p(i)}),r()()(),a(32,"c-col",4)(33,"span",5)(34,"h6",6),d(35,"kpi_name"),r()(),a(36,"c-input-group",7)(37,"input",13),C("ngModelChange",function(i){return m(n),f(e.kpi_name,i)||(e.kpi_name=i),p(i)}),r()()(),a(38,"c-col",4)(39,"span",5)(40,"h6",6),d(41,"unique_code"),r()(),a(42,"c-input-group",7)(43,"input",14),C("ngModelChange",function(i){return m(n),f(e.unique_code,i)||(e.unique_code=i),p(i)}),r()()(),a(44,"div",15)(45,"div",16)(46,"div",17)(47,"c-col",4)(48,"div",18)(49,"input",19,0),b("change",function(i){return m(n),p(e.onUpload(i))}),r(),a(51,"button",20),b("click",function(){m(n);let i=L(50);return p(i.click())}),d(52," Ch\u1ECDn H\xECnh "),r(),_(53,"p",21),r()()()()()()(),S(54,Le,4,0,"div",22)(55,Ye,16,13,"c-card",23),a(56,"c-toast",24)(57,"c-toast-header")(58,"strong",25),d(59,"Th\xF4ng b\xE1o"),r()(),a(60,"c-toast-body"),d(61),r()()}o&2&&(s(7),h("ngModel",e.audit_id),s(6),h("ngModel",e.audit_date),s(6),h("ngModel",e.shop_code),s(6),h("ngModel",e.emp_code),s(6),h("ngModel",e.project_id),s(6),h("ngModel",e.kpi_name),s(6),h("ngModel",e.unique_code),s(11),u("ngIf",e.isLoading),s(),u("ngIf",!e.isLoading&&e.detect_productsTotal),s(),u("autohide",!0)("delay",2e3)("visible",e.toast.visible_toast),s(4),B(e.toast.background),s(),k(" ",e.toast.message_toast," "))},dependencies:[ge,pe,de,me,ee,ie,_e,he,ue,fe,Ce,ne,Q,W,z,q,O,R,be,ye,ve,we,$,te,ce,oe,ae,re,se,le,Z,G,J,K],styles:[".card-data[_ngcontent-%COMP%]{padding:0!important}.pt-3[_ngcontent-%COMP%]{padding-top:0!important}.table-container[_ngcontent-%COMP%]{max-height:90vh;overflow-y:auto}.table-container[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background:#fff;z-index:10}.custom-ng-select[_ngcontent-%COMP%]     .ng-dropdown-panel .ng-option{text-align:left}"]})}}return l})();export{rt as UmerDemoComponent};
