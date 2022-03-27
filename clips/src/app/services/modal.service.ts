import { Injectable } from '@angular/core';
interface IModal{
  id:string;
  visible:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // for a private variable we need to specify a function to use it
  private modals:IModal[]=[];
  constructor() { }
  // register the modal id 
  register(id:string){
    this.modals.push({
      id:id,
      visible:false
    })
    console.log("this.modals",this.modals)
  }
  // un register a modal to prevent memory leak
  unregister(id:string){
    this.modals=this.modals.filter(
      element=>element.id!==id
    )
  }
  isModalOpen(id:string):boolean{
    // to force a boolean to return 
    // i)do double negation
    // return !!this.modals.find(element=>element.id===id)?.visible;
    // ii) wrap value as a booolean
    return Boolean(this.modals.find(element=>element.id===id)?.visible);
  }
  // toggle the modal
  toggleModal(id:string){
    // this.visible=!this.visible;
    const modal=this.modals.find(element=>element.id===id);
    if(modal){
      modal.visible=!modal.visible;
    }
  }
}
