import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  startDate: string | null = null;
  endDate: string | null = null;
  differenceInDays: number | null = null;

  calculateDays() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const differenceInTime = end.getTime() - start.getTime();
      this.differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    }
  }
}
