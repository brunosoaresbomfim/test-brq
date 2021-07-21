import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title?: string):void{
    this.showAlert(title, message, 'success');
  }
  public info(message: string, title?: string):void{
    this.showAlert(title, message, 'info');
  }
   public error(message: string, title?: string):void{
      this.showAlert(title, message, 'error');
    }
  // public excluir(message: string, title?: string):void{
  //   this.confirma(title, message, 'error');
  // }

  public showAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon,
    ):void{
    Swal.fire(title, message, icon);
  }
  // public confirma(
  //   title: string,
  //   message: string,
  //   icon: SweetAlertIcon,
  //   ):void{
  //   Swal.fire({
  //     title: 'Do you want to save the changes?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: `Save`,
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire('Saved!', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info')
  //     }
  //   });
  // }

}
