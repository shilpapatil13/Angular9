import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FundListModalComponent } from '../fund-list-modal/fund-list-modal.component';
import { Fund } from '../models/fund';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }
  fundsList: any = [];
  modalBox1:number;
  modalBox2:number;
  modalBox3:number;
  fundName1:any;
  fundName2:any;
  fundName3:any;

  
  ngOnInit(): void {
  }

  openModal(i) {
    
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = {
      modalid: i
    };
    
    const modalDialog = this.matDialog.open(FundListModalComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(result  => {
      if(result)
        {

          if(result.modalBoxId.modalid === 1)
          {
            this.modalBox1 = result.modalBoxId.modalid;
            this.fundName1 = result.name;
         
          }
          if(result.modalBoxId.modalid === 2)
          {
            this.modalBox2 = result.modalBoxId.modalid;
            this.fundName2 = result.name;
         
          }
          if(result.modalBoxId.modalid === 3)
          {
            this.modalBox3 = result.modalBoxId.modalid;
            this.fundName3 = result.name;
          }
          
          if(!this.fundsList)
          {
            let data = new Array();
            data.push(result);
            this.fundsList = data;
          }
          else
          {
            this.fundsList.push(result);
          } 

          this.fundsList = this.fundsList;
          console.log(this.fundsList);
         
        }
      });
  }



  toggleFunds(modalId){
   
  let fileredData =  this.fundsList.filter(elem => (elem.modalBoxId.modalid !=modalId))
  this.fundsList = fileredData;
    
  console.log(this.fundsList);
  
  if(modalId === 1)
    this.modalBox1 = 0;  
  else if(modalId === 2)
    this.modalBox2 = 0;
  else if(modalId === 3)
    this.modalBox3 = 0;
  else
    return 0;
    
  }

   
}
