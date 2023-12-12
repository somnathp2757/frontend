import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hadiya_products_admin';

  constructor(private http: HttpClient) {}

  ngOnInit() {
	this.http.get('http://35.172.211.211:3000').subscribe((data: any)  => {
  	console.log(data);
	});
  }
}
