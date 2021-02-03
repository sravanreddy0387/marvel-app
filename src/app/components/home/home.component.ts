import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private charactersService : CharactersService) { }
  public commics: number ;
  public series: number;

  public data: any[] = [];

  ngOnInit() {
    const data={}
    this.charactersService.getCharacters(data).subscribe((res) => {
      this.data = res.data.results;
      this.generatePieChart(this.data[0]);
    })
  }

  showItemDetails(item) {
    this.generatePieChart(item);
  }

  generatePieChart(item) {
    this.commics = item.comics.available;
    this.series = item.series.available;
  }

}
