import { Component, OnInit, Input } from '@angular/core';

// pass companyName (string) and copyrightYear (number) to footer component from app comp

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  companyName: string;

  @Input()
  copyrightYear: number;

  constructor() { }

  ngOnInit() {
    console.log('typeof year', typeof this.copyrightYear);
  }

}
