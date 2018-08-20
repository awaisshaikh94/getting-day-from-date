// getting day from date
  dayGet: any;
  daySet: any;
  dateFormat: any;
  dateFormatted: any;
  public day_get(selectedDate){

    this.dateFormat = selectedDate.split('-');
    this.dateFormatted = this.dateFormat[1] +"-"+ this.dateFormat[0] +"-"+ this.dateFormat[2];

    // this.dayGet = (new Date(this.datePipe.transform(selectedDate, 'MM-dd-yyyy'))).getDay();
    this.dayGet = (new Date(this.dateFormatted)).getDay();

    if(this.dayGet==0) { this.daySet="Sunday"; }
    else if(this.dayGet==1) { this.daySet="Monday"; }
    else if(this.dayGet==2) { this.daySet="Tuesday"; }
    else if(this.dayGet==3) { this.daySet="Wednes"; }
    else if(this.dayGet==4) { this.daySet="Thursday"; }
    else if(this.dayGet==5) { this.daySet="Friday"; }
    else if(this.dayGet==6) { this.daySet="Satday"; }

    // console.log(this.daySet);
    return this.daySet;
  }
