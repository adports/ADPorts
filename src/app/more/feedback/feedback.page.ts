import { Component, OnInit } from '@angular/core';
import {ServicesProvider} from '../../apitest/test.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
    providers: [ ServicesProvider]
})
export class FeedbackPage implements OnInit {
    strLoginId;
        strSubject;
    strComment;
    private feedback;
    private feed;
  constructor(private GetService: ServicesProvider) { }

  ngOnInit() {
  }

    SubitFeedBack() {
    const feedback = 'strLoginId=' + this.strLoginId + '&strSubject=' + this.strSubject + '&strComment=' + this.strComment
        this.GetService.FeedBackService(feedback).subscribe((res) => {
            this.feedback = res;
            console.log(this.feedback);
            // this.strNationality = this.VehicleReg[0].DESCRIPTION;
        });
    this.feed = true;
    }
}
