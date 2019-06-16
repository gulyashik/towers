import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService) {};
  public data: Object[] = [];
  title = 'Angular';
  ngOnInit(): void {
    this.api.getValues().subscribe((x:Object[]) => {this.data = x;});
  };
}
