import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Partido } from 'src/Utils/Partido';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  partidos: Partido[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.getPartidos();
  }

  public openPartido(partidoId: string){
    this.router.navigateByUrl('/partidos/' + partidoId);
  }

  private getPartidos(){
    this.newsService.getPartidosInscritos()
    .subscribe(
      data => {
        this.partidos = data as Partido[];
      }
    );
  }

}
