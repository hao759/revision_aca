import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle,CommonModule, DatePipe } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, FormModule, ToastComponent, ModalModule, SpinnerModule } from '@coreui/angular-pro';
import { EncryptDecryptService } from 'src/app/Service/encrypt-decrypt.service';
import { EnumLocalStorage, EnumStatus } from 'src/app/Core/_enum';
import { Helper } from 'src/app/Core/_helper';
import { Router } from '@angular/router';
// import { navItems } from 'src/app/layout/default-layout/_nav';
import { ToastModule,ToasterService  } from '@coreui/angular-pro';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [ContainerComponent, 
        RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent,
         FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, 
         ButtonDirective, NgStyle,FormsModule,CommonModule,ToastModule,ModalModule,SpinnerModule],
    providers: [
        ToasterService 
    ]
})
export class LoginComponent {
    isLoading: boolean = false;
    username: any = null;
    password: any = null;
    email: any = null;
    user_current: any =''
    //constructor
    constructor(
        private _edCrypt: EncryptDecryptService,
        private userService: UserService,
        private router: Router,
        private toastService: ToasterService
    ){

    }
    ngOnInit() {
       
    }
    getFormatedDate(date: Date, format: string) {
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(date, format);
    }
    bgLogin: boolean = false;
    returnClassBg() {
        const nowDate = new Date();
        const dateNow = this.getFormatedDate(nowDate, 'yyyy-MM-dd');

        if (dateNow == '2024-09-17') {
            //TRUNG THU
            return 'vh-100 bg-trungthu';
        } else if (dateNow == '2024-12-24' || dateNow == '2024-12-25') {
            //NOEL
            return 'vh-100 bg-noel';
        } else {
            this.bgLogin = true;
            return 'vh-100';         
        }
    }
    onSomeAction($event: any) {
        if ($event.keyCode === 13) {
            this.onSubmit();
        }
    }
    errorPass: boolean = false;
    iserror: boolean = false;
    showToast: boolean = false;
    onSubmit() {
        this.isLoading = true;
        if(!this.isForgot) {
            if (Helper.IsNull(this.username) == true || Helper.IsNull(this.password)== true ) {
                this.isLoading = false;
                this.showToast = true;
                setTimeout(() => {
                  this.showToast = false;
                }, 3000);
            }
        this.userService.login(this.username,this.password,"")
        .subscribe((data: any) => {
            console.log(data);
            if(data.message == "login_name hoặc password không đúng"){
                this.errorPass = true;
                this.isLoading = false;
            }
            if (data.result == EnumStatus.ok) {
                this.isLoading = false;
                this.user_current = data.data;
                console.log(this.user_current.employee[0]);
                const userEncrypt = this._edCrypt.encryptUsingAES256(
                    JSON.stringify(this.user_current.employee[0])
                );

                localStorage.setItem(
                    EnumLocalStorage.user_profile,
                    userEncrypt
                );

                const dataEncrypt = this._edCrypt.encryptUsingAES256(
                    JSON.stringify(this.user_current)
                );

                localStorage.setItem(
                    EnumLocalStorage.user,
                    dataEncrypt
                );

                //
                const project = this.user_current.projects.filter(
                    (p: any) => p.project_id == Helper.ProjectID()
                );
                //
                if(project.length > 0) {
                    localStorage.setItem(
                        'permission_button',
                        JSON.stringify(project[0])
                    );
                // console.log('action current_user: ',this.user_current.employee[0].action);
                //action = change_pass -> navigate : change-password

                }

                this.OK();
            } 
        });
        }
        else {
            this.isLoading = true;
            if (Helper.IsNull(this.username) == true || Helper.IsNull(this.email)== true ) {
                this.isLoading = false;
                this.showToast = true;
                setTimeout(() => {
                  this.showToast = false;
                }, 3000);
            }
            //change password => send email
            this.userService
                .forgotPassword(Helper.ProjectID(), this.username, this.email)
                .subscribe((data: any) => {
                    if (data.message == 'success') {
                        this.isLoading = false;
                        // (this.message = 'Password has been sent to your email'),
                        //     (this.display = true);
                        // this.iserror = true;
                        console.log('Password has been sent to your email')
                    } else {
                        // (this.message = data.message), (this.display = true);
                        // this.iserror = true;
                        this.isLoading = false;
                        console.log('Password change fail')
                    }
                });
        }
    }

    isForgot = false;
    forgotPass() {
        console.log('forgot pass: ');
        console.log(this.isForgot);
        this.isForgot = !this.isForgot;
    }

    OK() {
        // this.display = false;
        if (this.isForgot) {
            return;
        }
        // console.log('Get Menu list for project 55 Attendance AI')

        if (this.user_current !== undefined) {
            // var menuList = JSON.parse(
            //     this.user_current!.projects.filter(
            //         (project: any) => project.project_id == Helper.ProjectID()
            //     )[0]?.menu_list
            // );
            // console.log(menuList);
            // var menu = JSON.parse(
            //     this.user_current!.projects.filter(
            //         (project: any) => project.project_id == Helper.ProjectID()
            //     )[0]?.menu_list
            // )[0];

            // console.log(menuList);
            // console.log(menu);
        }

        // localStorage.setItem('menu', JSON.stringify(menu));
        // console.log('menuList : ', menuList)
        // console.log('menu : ', menu)
        // console.log('Navbar Item List: ');
        // console.log(navItems);

        // if(menuList.length > 0) {
            this.router.navigate(['/qcresult']);
        // }

        // if (environment.menu_key == 'proxy_link') {
        //     // this.router.navigate(['/reports']);
            // menuList.filter((f: any) => f.routerLink == '/reports').length > 0
            //     ? this.router.navigate(['/reports'])
            //     : this.router.navigate([menu.routerLink]);
        //     this.display = false;
        // } else {
        //     if (this.iserror == false) {
        //         // const menuFirst = menuList.filter((e: any) => e.check == 1)[0];

        //         // if (menuList.length > 0 && menuFirst?.routerLink) {
        //         //     this.router.navigate([menuFirst.routerLink]);
        //         // } else {
        //         //     this.router.navigate(['/empty']);
        //         // }
        //         this.#router.navigate(['/qcresult']);
        //         // menuList.filter((f: any) => f.routerLink == '/reports').length >
        //         // 0
        //         //     ? this.router.navigate(['/reports'])
        //         //     : this.router.navigate([menu.routerLink]);
        //         this.display = false;
        //     } else {
        //         this.display = false;
        //     }
        // }
    }
}
