import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/Utils/Noticia';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  news: Noticia[] = [];
  loaded = false;

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.getNews();
  }

  public openURL(url: string){
    window.open(url, "_blank");
  }

  private getNews(){
    this.newsService.getPoliticaNews()
    .subscribe(
      data => {
        this.news = data as Noticia[];
        this.loaded = true;
      }
    );
  }

  private refresh(){
    this.loaded = false;
    this.getNews();
  }

}
