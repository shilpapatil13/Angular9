import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FundListModalComponent } from '../fund-list-modal/fund-list-modal.component';
import { Fund } from '../models/fund';
import { FundService } from '../services/fund.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  parentSubject:Subject<any> = new Subject();

  constructor(public matDialog: MatDialog, private fundService: FundService, private route: ActivatedRoute) { }
  fundsList: any = [];
  modalBox1:number;
  modalBox2:number;
  modalBox3:number;
  fundName1:any;
  fundName2:any;
  fundName3:any;
  fundData1;
  fundData2;
  fundData3;

  
  ngOnInit(): void {
    
    const fundId = this.route.snapshot.params['id'];
    if(fundId !=='') {
    this.fundService.getFundsById(fundId).subscribe((data) => {
      this.modalBox1 = 1;
      this.fundData1 = data[0];
      this.fundName1 = data[0].name;
      const result = {name:this.fundName1,modalBoxId: {modalid:this.modalBox1}};
       this.addAndGetFundsList(result);
       this.notifyChildren(data);
    });
  }

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
            this.fundData1 = result;
         
          }
          if(result.modalBoxId.modalid === 2)
          {
            this.modalBox2 = result.modalBoxId.modalid;
            this.fundName2 = result.name;
            this.fundData2 = result;
          }
          if(result.modalBoxId.modalid === 3)
          {
            this.modalBox3 = result.modalBoxId.modalid;
            this.fundName3 = result.name;
            this.fundData3 = result;
          }
          
          this.addAndGetFundsList(result);

          //this.fundsList = this.fundsList;
          this.notifyChildren(this.fundsList)

          console.log(this.fundsList);
         
        }
      });
  }

private addAndGetFundsList(result: any):any[] {
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
  return this.fundsList;
}

  toggleFunds(modalId){
   
  let fileredData =  this.fundsList.filter(elem => (elem.modalBoxId.modalid !=modalId))
  this.fundsList = fileredData;
  this.notifyChildren(this.fundsList)

  console.log(this.fundsList);
  
  if(modalId === 1) {
    this.modalBox1 = 0;  
    this.fundData1 = '';
  }
  else if(modalId === 2) {
    this.modalBox2 = 0;
    this.fundData2 = '';
  }
  else if(modalId === 3) {
    this.modalBox3 = 0;
    this.fundData3 = '';
  }
  else
    return 0;
    
  }

   
  notifyChildren(data) {
    this.parentSubject.next(data);
  }
}