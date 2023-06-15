import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicDetailComponent } from 'src/app/components/music-detail/music-detail.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import { setMusic } from 'src/app/store/music.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { Song } from '../../../../interfaces/song';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MusicDetailComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  store = inject(Store<AppState>);
  results = toSignal<{ results: Song[] }>(this.store.select('songs'));
  songs = signal<Song[]>([]);
  constructor() {
    let me = this;
    effect(() => {
      console.log('[RESULTS]', me.results());
      const response = me.results();
      if (response && response.results) {
        me.songs.set(response.results);
      }
    }, { allowSignalWrites: true })

  }
  changeStateMusic(item: any) {
    let me = this;
    me.store.dispatch(setMusic({ id: item.id, singer: item.artist.name, song: item.title, image: item.album.cover_medium, audio: item.preview, artist: item.artist, album: item.album }));
  }
}
