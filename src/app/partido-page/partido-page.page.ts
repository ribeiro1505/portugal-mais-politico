import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partido } from 'src/Utils/Partido';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-partido-page',
  templateUrl: './partido-page.page.html',
  styleUrls: ['./partido-page.page.scss'],
})
export class PartidoPagePage implements OnInit {

  partido: Partido = {
    partidoId: '',
    partidoImage: '',
    partidoName: '',
    partidoSigla: ''
  };
  partidoId: string;
  loaded = false;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.partidoId = this.route.snapshot.paramMap.get('partidoId');
    this.newsService.getPartido(this.partidoId)
    .subscribe(
      data => {
        this.partido = data[0] as Partido;
        this.loaded = true;
      }
    );

  }

}
