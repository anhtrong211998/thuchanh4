import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
  providers:[TypeService]
})
export class TypeComponent implements OnInit {

  public productTypes: any[];

  public showUpdateModal:any;
  public formdata: any;
  public doneSetupForm: any;  
  public isCreate:any;
  constructor(private typeservice: TypeService,private fb: FormBuilder, injector: Injector,private router: Router, private activatedRoute: ActivatedRoute,) { 

  }

  ngOnInit(): void {
    this.typeservice.getList().subscribe((response: any)=>{
      this.productTypes =response;
      // console.log(response);
    });
  }
  onSubmit(value: any) {
    this.typeservice.postItem(value).subscribe((response)=>{
      if (response) {
        alert('add success');
        this.router.navigate(['/product/type']);
      }
    });
    console.log(value);
  }
  Delete(id: string) {
    let confirmResult = confirm("Are you sure to delete employee?");
    if (confirmResult) {
        this.typeservice.Delete(id).subscribe(response => {
            if (response) {
                alert('Delete ok');
                this.router.navigate(['/product/type']);

            }
        })
    }
}
  //createModal() {
  //   this.doneSetupForm = false;
  //   this.showUpdateModal = true;
  //   this.isCreate = true;
  //   // this.user = null;
  //   setTimeout(() => {
  //     $('#createUserModal').modal('toggle');
  //     this.formdata = this.fb.group({
  //       'hoten': [''],
  //       'ngaysinh': [''],
  //       'diachi': [''],
  //       'gioitinh': [''],
  //       'email': [''],
  //       'taikhoan': [''],
  //       'matkhau': [''],
  //       'nhaplaimatkhau': [''],
  //       'role': [''],
  //      }, 
  //     //{
  //     //   validator: MustMatch('matkhau', 'nhaplaimatkhau')
  //     // }
  //     );
  //     // this.formdata.get('ngaysinh').setValue(this.today);
  //     // this.formdata.get('gioitinh').setValue(this.genders[0].value); 
  //     // this.formdata.get('role').setValue(this.roles[0].value);
  //     this.doneSetupForm = true;
  //   });
  // }

}
