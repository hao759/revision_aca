import{a as ge,c as ue}from"./chunk-Y3NE2SNJ.js";import{a as P}from"./chunk-MMQBQGI5.js";import"./chunk-26M4WOOW.js";import"./chunk-RJESRZJ5.js";import{N as de,gb as me}from"./chunk-OVEX3KHJ.js";import{a as pe}from"./chunk-FYYLBBTR.js";import{Ab as se,Ha as ne,I as J,Ia as ie,L as H,Oa as oe,P as B,Q as W,Qa as re,R as Z,U as K,Va as ae,Wa as le,X as Q,Z as $,a as Y,aa as q,d as y,h as G,ma as ee,na as te,zb as ce}from"./chunk-55Y7RW7N.js";import{Ac as m,Bc as z,Cb as f,Dc as A,Fc as j,Gc as F,Hc as V,Hd as X,Lc as L,Rb as d,Sb as v,Tb as k,ba as D,bc as o,cc as r,db as x,dc as _,ga as M,hc as I,ib as l,kc as h,mc as b,nb as O,pc as T,ra as g,sa as p,ta as C,ua as w,wb as S,wd as R,xd as N,yc as E}from"./chunk-XOKJR3V5.js";import{h as U}from"./chunk-WWX6BADO.js";var _e=(()=>{class i{constructor(e,t){this.imageCompress=e,this.httpClient=t,this.apiUrl=pe.apiUrl+"Tasks/"}ImageRender(e,t){return new Promise((n,c)=>{let s=new FileReader;s.readAsDataURL(e),s.onload=()=>{let a=new Image;a.src=s.result,this.imageCompress.compressFile(a.src,-1,80,80).then(fe=>{let he=ue.dataURLtoFile(fe,t);n(he)}).catch(c)},s.onerror=a=>{c(a)}})}UploadImage(e){let t=new FormData;return t.append("files",e),this.httpClient.post(this.apiUrl+"UploadImage",t)}UploadFile(e){let t=new FormData;return t.append("files",e),this.httpClient.post(this.apiUrl+"UploadFile",t)}static{this.\u0275fac=function(t){return new(t||i)(M(ge),M(y))}}static{this.\u0275prov=D({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function xe(i,u){if(i&1&&(o(0,"option",17),m(1),r()),i&2){let e=u.$implicit;d("value",e.employee_code),l(),A(" ",e.employee_code," - ",e.employee_name," ")}}function ve(i,u){i&1&&(o(0,"div",30),_(1,"c-spinner",31),r())}function Ie(i,u){if(i&1){let e=I();o(0,"div",27),h("click",function(){let n=g(e).index,c=b(2);return p(c.onImageSelect(n))}),_(1,"img",28),f(2,ve,2,0,"div",29),r()}if(i&2){let e=u.$implicit,t=u.index,n=b(2);k("active",t===n.selectedImageIndex),l(),d("src",e.predictedUrl,x)("alt","Thumbnail "+(t+1)),l(),d("ngIf",e.loading)}}function ye(i,u){if(i&1){let e=I();o(0,"img",32,1),h("click",function(){g(e);let n=b(2);return p(n.openImageInNewWindow(n.imageUrls[n.selectedImageIndex].predictedUrl))}),r()}if(i&2){let e=b(2);d("src",e.imageUrls[e.selectedImageIndex].predictedUrl,x)("alt","Result image "+(e.selectedImageIndex+1))}}function Pe(i,u){i&1&&(o(0,"div",33)(1,"div",34),_(2,"c-spinner",35),o(3,"div",36),m(4,"Processing Image"),r(),o(5,"div",37),m(6,"Please wait while we analyze your image..."),r()()())}function Me(i,u){if(i&1&&(o(0,"div")(1,"table",38)(2,"thead")(3,"tr")(4,"th",39),m(5,"Th\xF4ng tin"),r(),o(6,"th",39),m(7,"K\u1EBFt qu\u1EA3"),r()()(),o(8,"tbody")(9,"tr")(10,"td"),m(11,"Face"),r(),o(12,"td")(13,"div",40),C(),_(14,"svg",41),r()()(),w(),o(15,"tr")(16,"td"),m(17,"Logo"),r(),o(18,"td"),m(19),r()(),o(20,"tr")(21,"td"),m(22,"Logo Status"),r(),o(23,"td")(24,"div",40),C(),_(25,"svg",41),r()()(),w(),o(26,"tr")(27,"td"),m(28,"Location"),r(),o(29,"td")(30,"div",40),C(),_(31,"svg",41),r()()()()()()),i&2){let e=b(2);l(14),v("color",!(e.imageUrls[e.selectedImageIndex]==null||e.imageUrls[e.selectedImageIndex].detectResult==null)&&e.imageUrls[e.selectedImageIndex].detectResult.face_ok?"#2eb85c":"#e55353"),d("cIcon",e.icons[!(e.imageUrls[e.selectedImageIndex]==null||e.imageUrls[e.selectedImageIndex].detectResult==null)&&e.imageUrls[e.selectedImageIndex].detectResult.face_ok?"cilCheckCircle":"cilXCircle"]),l(5),z(e.imageUrls[e.selectedImageIndex]==null||e.imageUrls[e.selectedImageIndex].detectResult==null?null:e.imageUrls[e.selectedImageIndex].detectResult.logo),l(6),v("color",!(e.imageUrls[e.selectedImageIndex]==null||e.imageUrls[e.selectedImageIndex].detectResult==null)&&e.imageUrls[e.selectedImageIndex].detectResult.logo_ok?"#2eb85c":"#e55353"),d("cIcon",e.icons[!(e.imageUrls[e.selectedImageIndex]==null||e.imageUrls[e.selectedImageIndex].detectResult==null)&&e.imageUrls[e.selectedImageIndex].detectResult.logo_ok?"cilCheckCircle":"cilXCircle"]),l(6),v("color",!(e.imageUrls[e.selectedImageIndex]==null||e.imageUrls[e.selectedImageIndex].detectResult==null)&&e.imageUrls[e.selectedImageIndex].detectResult.location_ok?"#2eb85c":"#e55353"),d("cIcon",e.icons[!(e.imageUrls[e.selectedImageIndex]==null||e.imageUrls[e.selectedImageIndex].detectResult==null)&&e.imageUrls[e.selectedImageIndex].detectResult.location_ok?"cilCheckCircle":"cilXCircle"])}}function we(i,u){if(i&1&&(o(0,"c-row")(1,"c-col",18)(2,"div",19)(3,"div",20),f(4,Ie,3,5,"div",21),r()()(),o(5,"c-col",22)(6,"div",23),f(7,ye,2,2,"img",24)(8,Pe,7,0,"div",25),r()(),o(9,"c-col",26),f(10,Me,32,10,"div",16),r()()),i&2){let e=b();l(4),d("ngForOf",e.imageUrls),l(3),d("ngIf",e.imageUrls[e.selectedImageIndex]==null?null:e.imageUrls[e.selectedImageIndex].predictedUrl),l(),d("ngIf",e.imageUrls[e.selectedImageIndex]==null?null:e.imageUrls[e.selectedImageIndex].loading),l(2),d("ngIf",!(e.imageUrls[e.selectedImageIndex]!=null&&e.imageUrls[e.selectedImageIndex].loading))}}var We=(()=>{class i{ngOnInit(){this.projects=[{employee_code:"P00745",employee_name:"L\xEA Th\u1ECB Minh Th\u01A1"},{employee_code:"502005",employee_name:"Tr\u1EA7n Th\u1ECB Nhung"},{employee_code:"P00080",employee_name:"Nguy\u1EC5n M\u1ED9ng Tuy\u1EC1n"},{employee_code:"P02724",employee_name:"Nguy\u1EC5n Th\u1ECB Ch\xED Di\u1EC7u"},{employee_code:"P31191",employee_name:"L\xE2m Qu\u1ED1c \u0110\u1EA1t"},{employee_code:"P21208",employee_name:"Hu\u1EF3nh Th\u1ECB M\u1EF9 H\u01B0\u1EDDng"},{employee_code:"P05090",employee_name:"\u0110inh H\u1ED3 Kim Thanh"},{employee_code:"P35825",employee_name:"Tr\u1EA7n Th\u1ECB Th\u1EA3o"},{employee_code:"P25880",employee_name:"\u0110\u1EB7ng Th\u1ECB Kim Ph\u01B0\u1EE3ng"},{employee_code:"P28448",employee_name:"Hu\u1EF3nh Th\u1ECB Xu\xE2n L\xE0o"}],this.selectedProject=this.projects[0].employee_code,this.detectAIService.ewo_ATD_getEmployees({project_id:0,employee_code:this.selectedProject}).subscribe(e=>{this.imagePG=e.data.image})}constructor(e,t){this.http=e,this.detectAIService=t,this.selectedImageIndex=0,this.imagePG="",this.imageUrls=[],this.isDragging=!1,this.keepOldImages=!1,this.icons={cilCheckCircle:de,cilXCircle:me}}onFileSelected(e){let t=e.target.files;t&&this.handleFiles(Array.from(t))}removeImage(e){this.imageUrls.splice(e,1)}onDragOver(e){e.preventDefault(),e.stopPropagation(),this.isDragging=!0}onDragLeave(e){e.preventDefault(),e.stopPropagation(),this.isDragging=!1}onDrop(e){e.preventDefault(),e.stopPropagation(),this.isDragging=!1;let t=e.dataTransfer?.files;t&&this.handleFiles(Array.from(t))}uploadAndPredict(e){return U(this,null,function*(){let t=new FormData;t.append("file",e),t.append("project_id","31");try{let n=yield this.http.post("https://brand-detect4.acacy.vn/detect-attendance",t,{headers:new Y({Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjIzMTAiLCJlbXBsb3llZV9pZCI6IjIyMzEwIiwibG9naW5fbmFtZSI6Iml0ZGVtbzEiLCJIYXNoIjoiS1I5TFhFSklYQS1ZRE43VjJINTRKIiwiVXNlckRhdGEiOiJ7XCJSb2xlc1wiOltdfSIsImVtcGxveWVlX3R5cGVfaWQiOiIzIiwibmJmIjoxNzM4NzQ3NjU2LCJleHAiOjE3NDEzMzk2NTYsImlhdCI6MTczODc0NzY1Nn0.IGQAr1MQxCLk05N44JZJPiAbGLYJ1a0WajrpUKAxEBY"})}).toPromise();return n?{url:`https://brand-detect4.acacy.vn/img_pred/${n.img_out}`,result:n}:null}catch(n){return console.error("Upload error:",n),null}})}handleFiles(e){this.keepOldImages||(this.imageUrls=[]);for(let t of e){if(t.type.match(/image\/*/)==null||t.size>5*1024*1024)continue;let n={predictedUrl:"",loading:!0};this.imageUrls.push(n);let c=this.imageUrls.length-1;this.uploadAndPredict(t).then(s=>{s&&(this.imageUrls[c].predictedUrl=s.url,this.imageUrls[c].detectResult=s.result),this.imageUrls[c].loading=!1})}}onProjectChange(e){this.selectedProject=e.target.value;var t=this.detectAIService.ewo_ATD_getEmployees({project_id:0,employee_code:this.selectedProject}).subscribe(n=>{this.imagePG=n.data.image});console.log("a",t)}onKeepImagesChange(e){this.keepOldImages=e.target.value==="true"}onImageSelect(e){this.selectedImageIndex=e}openImageInNewWindow(e){let t=window.open("","_blank");t&&t.document.write(`
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
              body:active {
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
              img {
                max-width: 100%;
                max-height: 100vh;
                object-fit: contain;
                transform-origin: center center;
                transition: transform 0.1s ease-out;
              }
              .zoom-controls {
                position: fixed;
                bottom: 20px;
                right: 20px;
                display: flex;
                gap: 10px;
                z-index: 1000;
              }
              button {
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                padding: 8px 15px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
              }
              button:hover {
                background: rgba(255,255,255,0.3);
              }
              .zoom-level {
                background: rgba(0,0,0,0.5);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                position: fixed;
                top: 20px;
                right: 20px;
              }
            </style>
          </head>
          <body>
            <div class="viewer-container" id="container">
              <img src="${e}" id="image">
            </div>
            <div class="zoom-controls">
              <button onclick="zoomIn()">+</button>
              <button onclick="zoomOut()">-</button>
              <button onclick="resetZoom()">Reset</button>
            </div>
            <div class="zoom-level" id="zoomLevel">100%</div>
            <script>
              const container = document.getElementById('container');
              const image = document.getElementById('image');
              const zoomLevel = document.getElementById('zoomLevel');
              let scale = 1;
              let dragging = false;
              let startX, startY, translateX = 0, translateY = 0;

              // Zoom functions
              function updateTransform() {
                image.style.transform = \`translate(\${translateX}px, \${translateY}px) scale(\${scale})\`;
                zoomLevel.textContent = \`\${Math.round(scale * 100)}%\`;
              }

              function zoomIn() {
                scale = Math.min(scale + 0.1, 5);
                updateTransform();
              }

              function zoomOut() {
                scale = Math.max(scale - 0.1, 0.1);
                updateTransform();
              }

              function resetZoom() {
                scale = 1;
                translateX = 0;
                translateY = 0;
                updateTransform();
              }

              // Mouse wheel zoom
              container.addEventListener('wheel', (e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.1 : 0.1;
                scale = Math.min(Math.max(0.1, scale + delta), 5);
                updateTransform();
              });

              // Drag functionality
              container.addEventListener('mousedown', (e) => {
                dragging = true;
                startX = e.clientX - translateX;
                startY = e.clientY - translateY;
                container.style.cursor = 'grabbing';
              });

              container.addEventListener('mousemove', (e) => {
                if (dragging) {
                  translateX = e.clientX - startX;
                  translateY = e.clientY - startY;
                  updateTransform();
                }
              });

              container.addEventListener('mouseup', () => {
                dragging = false;
                container.style.cursor = 'grab';
              });

              container.addEventListener('mouseleave', () => {
                dragging = false;
                container.style.cursor = 'grab';
              });
            <\/script>
          </body>
        </html>
      `)}static{this.\u0275fac=function(t){return new(t||i)(O(y),O(P))}}static{this.\u0275cmp=S({type:i,selectors:[["app-detect-attendance"]],features:[L([_e,P])],decls:23,vars:6,consts:[["fileInput",""],["imageElement",""],[1,"mt-4","container-fluid"],["xs","12"],[1,"mb-4"],["md","6"],[1,"mb-3"],["cLabel","",1,"fw-bold"],["cSelect","",1,"form-select",3,"ngModelChange","change","ngModel"],[3,"value",4,"ngFor","ngForOf"],["alt","","srcset","","height","200px",3,"src"],[1,"upload-container","mb-3",3,"dragover","dragleave","drop"],[1,"upload-content","text-center","p-3"],["type","file","hidden","","multiple","","accept","image/*",3,"change"],["cButton","","color","primary",3,"click"],[1,"mt-2","small","text-muted"],[4,"ngIf"],[3,"value"],["xs","12",1,"mb-3"],[1,"thumbnails-container"],[1,"thumbnails-scroll"],["class","thumbnail-item",3,"active","click",4,"ngFor","ngForOf"],["md","8"],[1,"image-container"],["style","cursor: pointer;",3,"src","alt","click",4,"ngIf"],["class","loading-overlay",4,"ngIf"],["md","4"],[1,"thumbnail-item",3,"click"],[1,"thumbnail-image",3,"src","alt"],["class","thumbnail-overlay",4,"ngIf"],[1,"thumbnail-overlay"],["size","sm"],[2,"cursor","pointer",3,"click","src","alt"],[1,"loading-overlay"],[1,"loading-content"],["size","lg","color","primary","variant","grow"],[1,"spinner-text"],[1,"processing-text"],["cTable","","hover",""],[1,"fw-bold"],[1,"d-flex","align-items-center"],["size","lg",1,"me-2",3,"cIcon"]],template:function(t,n){if(t&1){let c=I();o(0,"div",2)(1,"c-row")(2,"c-col",3)(3,"c-card",4)(4,"c-card-body")(5,"c-row")(6,"c-col",5)(7,"div",6)(8,"label",7),m(9,"Employee"),r(),o(10,"select",8),V("ngModelChange",function(a){return g(c),F(n.selectedProject,a)||(n.selectedProject=a),p(a)}),h("change",function(a){return g(c),p(n.onProjectChange(a))}),f(11,xe,2,3,"option",9),r()()(),o(12,"c-col",5),_(13,"img",10),r()(),o(14,"div",11),h("dragover",function(a){return g(c),p(n.onDragOver(a))})("dragleave",function(a){return g(c),p(n.onDragLeave(a))})("drop",function(a){return g(c),p(n.onDrop(a))}),o(15,"div",12)(16,"input",13,0),h("change",function(a){return g(c),p(n.onFileSelected(a))}),r(),o(18,"button",14),h("click",function(){g(c);let a=E(17);return p(a.click())}),m(19," Choose Image "),r(),o(20,"p",15),m(21," Supported: JPG, PNG (max 5MB) "),r()()(),f(22,we,11,4,"c-row",16),r()()()()()}t&2&&(l(10),j("ngModel",n.selectedProject),l(),d("ngForOf",n.projects),l(2),T("src",n.imagePG,x),l(),k("dragover",n.isDragging),l(8),d("ngIf",n.imageUrls.length>0))},dependencies:[X,R,N,G,K,W,Z,B,J,H,le,ae,ee,te,q,oe,ie,ne,re,se,ce,$,Q],styles:['.container[_ngcontent-%COMP%]{margin-top:20px}img[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:4px;padding:5px}.upload-container[_ngcontent-%COMP%]{border:2px dashed #ccc;border-radius:4px;transition:all .3s}.upload-container.dragover[_ngcontent-%COMP%]{border-color:#321fdb;background:#321fdb0a}.upload-container[_ngcontent-%COMP%]   .upload-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:#321fdb}.preview-container[_ngcontent-%COMP%]{position:relative;min-height:200px}.preview-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;max-height:500px;object-fit:contain}.image-card[_ngcontent-%COMP%]{border-radius:8px;overflow:hidden;background:#fff;box-shadow:0 2px 4px #0000001a;transition:transform .2s}.image-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.image-card[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{opacity:1}.image-card[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]{opacity:0;transition:opacity .2s}.image-card[_ngcontent-%COMP%]   .image-info[_ngcontent-%COMP%]{border-top:1px solid #eee;background:#fff}.image-card[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#ffffffe6;display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);border-radius:8px;z-index:1000}.image-card[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]{text-align:center;animation:_ngcontent-%COMP%_fadeIn .5s ease-in}.image-card[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .spinner-text[_ngcontent-%COMP%]{margin-top:1rem;color:#321fdb;font-weight:500}.image-card[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .processing-text[_ngcontent-%COMP%]{color:#666;font-size:.9rem;margin-top:.5rem}.image-card[_ngcontent-%COMP%]   .image-tag[_ngcontent-%COMP%]{position:absolute;top:10px;left:10px;padding:2px 8px;background:#0009;color:#fff;border-radius:4px;font-size:12px}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.image-container[_ngcontent-%COMP%]{position:relative;width:100%;height:600px;background:#f8f9fa;border-radius:8px;border:1px solid #dee2e6}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:contain;cursor:pointer;transition:opacity .2s}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.9}.image-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:#fffffff2;display:flex;justify-content:center;align-items:center;z-index:1000}.image-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]{text-align:center;animation:_ngcontent-%COMP%_fadeIn .3s ease-in}.image-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .spinner-text[_ngcontent-%COMP%]{margin-top:1rem;color:#321fdb;font-weight:500}.image-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .processing-text[_ngcontent-%COMP%]{color:#666;font-size:.9rem;margin-top:.5rem}c-col[md="8"][_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100%}.thumbnails-container[_ngcontent-%COMP%]{background:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:1rem}.thumbnails-container[_ngcontent-%COMP%]   .thumbnails-scroll[_ngcontent-%COMP%]{display:flex;gap:1rem;overflow-x:auto;padding-bottom:.5rem}.thumbnails-container[_ngcontent-%COMP%]   .thumbnails-scroll[_ngcontent-%COMP%]::-webkit-scrollbar{height:8px}.thumbnails-container[_ngcontent-%COMP%]   .thumbnails-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.thumbnails-container[_ngcontent-%COMP%]   .thumbnails-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888;border-radius:4px}.thumbnails-container[_ngcontent-%COMP%]   .thumbnails-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}.thumbnails-container[_ngcontent-%COMP%]   .thumbnail-item[_ngcontent-%COMP%]{position:relative;min-width:120px;height:80px;border-radius:4px;overflow:hidden;cursor:pointer;border:2px solid transparent;transition:all .2s ease}.thumbnails-container[_ngcontent-%COMP%]   .thumbnail-item.active[_ngcontent-%COMP%]{border-color:#321fdb}.thumbnails-container[_ngcontent-%COMP%]   .thumbnail-item[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.thumbnails-container[_ngcontent-%COMP%]   .thumbnail-item[_ngcontent-%COMP%]   .thumbnail-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.thumbnails-container[_ngcontent-%COMP%]   .thumbnail-item[_ngcontent-%COMP%]   .thumbnail-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#fffc}label.fw-bold[_ngcontent-%COMP%]{font-weight:600!important;font-size:.95rem;color:#212529}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:600!important;font-size:.95rem}']})}}return i})();export{We as DetectAttendanceComponent};
