import { Component, OnInit } from '@angular/core';
import {NgSpinningPreloader} from 'ng2-spinning-preloader';
@Component({
  selector: 'app-spinning-loader',
  templateUrl: './spinning-loader.component.html',
  styleUrls: ['./spinning-loader.component.css']
})
export class SpinningLoaderComponent implements OnInit {

  constructor(private ngSpinningPreLoader: NgSpinningPreloader) { }

  ngOnInit() {
    this.ngSpinningPreLoader.stop();
  }

}
