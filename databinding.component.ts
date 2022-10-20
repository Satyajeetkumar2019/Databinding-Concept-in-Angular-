import { TmplAstVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.sass']
})
export class DatabindingComponent implements OnInit {
  public product ={
Name :'sony Tv',
Price :2400,
Qty :2,
mfd :new Date(2022/10/18),
InStock :true

  }

  constructor() { }

  ngOnInit(): void {
  }

}
