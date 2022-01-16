import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partido } from 'src/Utils/Partido';

@Component({
  selector: 'app-partido-page',
  templateUrl: './partido-page.page.html',
  styleUrls: ['./partido-page.page.scss'],
})
export class PartidoPagePage implements OnInit {

  partido: Partido;
  partidoId: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.partidoId = this.route.snapshot.paramMap.get('partidoId');
  }

}
