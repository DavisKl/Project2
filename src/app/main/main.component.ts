import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../Service/currency.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  currjson: any = [];
  update: string = '';

  base = 'EUR';
  count2 = 'EUR';
  result: string | null = '1.00';
  amount: number= 1.00;

  constructor(private currency: CurrencyService){}

  ngOnInit(): void{
    this.result = '1.00';
  }

  changeBase(a:string){
    this.base = a;
  }

  toCountry(b:string){
    this.count2 = b;
  }
  convert(){

    if (this.amount < 0) {
      this.amount = 0;
    }

    this.currency.getCurrencyData(this.base).subscribe(data => {
      this.update = data.date;

      if (this.base=== this.count2){
        this.result = this.amount.toFixed(2);
      }else{
      this.currjson = data;

      this.result = (this.currjson.rates[this.count2]* this.amount).toFixed(2);
      }

    });

  }
}
