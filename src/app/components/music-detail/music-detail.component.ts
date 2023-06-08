import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2, AfterViewInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from 'src/app/app-reducer';
import { Store } from '@ngrx/store';
import { Subscription, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ArtistResponse } from 'src/app/interfaces';
import { ApiService } from 'src/app/core/api.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-music-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.scss'],
  providers: [ApiService]
})
export class MusicDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('back', { static: false }) backRef!: ElementRef<HTMLDivElement>;
  artistSelected: ArtistResponse | null = null;
  $subscriptionMusicSelected: Subscription | null = null;
  store = inject(Store<AppState>);
  _apiService = inject(ApiService);
  renderer = inject(Renderer2);
  dataTheme = toSignal(this.store.select('themeApp'));

  ngOnInit(): void {
    let me = this;
    me.$subscriptionMusicSelected = me.store.select('music').pipe(map((value) => value.artist), concatMap((data) => {
      if (!data) return of(null);
      return me._apiService.getArtist(data.id);
    })).subscribe((value) => {
      console.log('[SELECTED-ARTIST]', value);
      me.artistSelected = value;
      if (!me.artistSelected) return;
      if (!me.backRef) return;
      me.renderer.setStyle(me.backRef.nativeElement, 'mix-blend-mode', "normal");
      if (me.dataTheme().theme == 'primary') {
        me.renderer.setStyle(me.backRef.nativeElement, 'background', `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url(${me.artistSelected.picture_big})`);
      }
      if (me.dataTheme().theme == 'dark') {
        me.renderer.setStyle(me.backRef.nativeElement, 'background', `linear-gradient(0deg, rgb(226 219 219 / 70%), rgb(104 70 70 / 70%)), url(${me.artistSelected.picture_big})`);
      }
      me.renderer.setStyle(me.backRef.nativeElement, 'transform', "matrix(-1, 0, 0, 1, 0, 0)");
      me.renderer.setStyle(me.backRef.nativeElement, 'background-repeat', "no-repeat");
      me.renderer.setStyle(me.backRef.nativeElement, 'background-position', "center");
      me.renderer.setStyle(me.backRef.nativeElement, 'background-size', "cover");
    });
  }

  constructor() {
    let me = this;
    effect(() => {
      console.log('[THEME-DETAIL]', me.dataTheme());
      if (!me.backRef) return;
      const imageBackground = me.artistSelected ? `, url(${me.artistSelected.picture_big})` : '';
      if (me.dataTheme().theme == 'primary') {
        me.renderer.setStyle(me.backRef.nativeElement, 'background', `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7))${imageBackground}`);
      }
      if (me.dataTheme().theme == 'dark') {
        me.renderer.setStyle(me.backRef.nativeElement, 'background', `linear-gradient(0deg, rgba(226, 219, 219, 0.7), rgba(104,70, 70,0.7))${imageBackground}`);
      }
      me.renderer.setStyle(me.backRef.nativeElement, 'mix-blend-mode', "normal");
      me.renderer.setStyle(me.backRef.nativeElement, 'transform', "matrix(-1, 0, 0, 1, 0, 0)");
      me.renderer.setStyle(me.backRef.nativeElement, 'background-repeat', "no-repeat");
      me.renderer.setStyle(me.backRef.nativeElement, 'background-position', "center");
      me.renderer.setStyle(me.backRef.nativeElement, 'background-size', "cover");
    }, { allowSignalWrites: true })
  }

  ngAfterViewInit(): void {
    let me = this;
    /* me.renderer.setStyle(me.backRef.nativeElement, 'background', "linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7))"); */
    me.renderer.setStyle(me.backRef.nativeElement, 'opacity', "0.5");
  }

  ngOnDestroy(): void {
    let me = this;
    me.$subscriptionMusicSelected && me.$subscriptionMusicSelected.unsubscribe();
  }
}
