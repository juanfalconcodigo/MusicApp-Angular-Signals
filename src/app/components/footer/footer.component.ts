import { Component, OnInit, OnDestroy, ViewChild, ElementRef, inject, computed, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import { debounceTime, map } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { TYPE_THEME } from 'src/app/interfaces';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  @ViewChild('audioControl') audioControlRef!: ElementRef<HTMLAudioElement>;
  rangeVolume: FormControl = new FormControl(50);
  rangeVolumeCopy = signal<number>(50);
  store = inject(Store<AppState>);
  dataMusic = toSignal(this.store.select('music'));
  dataTheme = toSignal(this.store.select('themeApp'));
  song = signal("song");
  singer = signal("singer");
  image = signal("");
  audio = signal("");
  album = signal("album");
  constructor() {
    let me = this;
    effect(() => {
      /* const AUDIO_OLD = me.audio();
      if (AUDIO_OLD && AUDIO_OLD != me.dataMusic().audio) {
        me.audioControlRef.nativeElement.pause();
      } */
      console.log('[DATA]', me.dataMusic())
      me.singer.set(me.dataMusic().singer);
      me.song.set(me.dataMusic().song);
      me.image.set(me.dataMusic().image);
      me.audio.set(me.dataMusic().audio);
      me.album.set(me.dataMusic().album ? me.dataMusic().album.title : "");
      setTimeout(() => {
        me.play();
      }, 500);
    }, { allowSignalWrites: true });
    effect(() => {
      console.log('[THEME-FOOTER]', me.dataTheme());
      me.setTheme(me.dataTheme()?.theme);
    }, { allowSignalWrites: true });
  }




  ngOnInit(): void {
    let me = this;
    me.rangeVolume.valueChanges.pipe(
      debounceTime(100),
      map((value) => {
        me.rangeVolumeCopy.set(value);
        return value / 100;
      })
    ).subscribe((data) => {
      console.log('[VOLUME-VALUE]', data);
      if (!me.audio()) return;
      me.audioControlRef.nativeElement.volume = data;
    });
    me.setTheme('primary');
  }

  ngOnDestroy(): void {
    let me = this;
  }

  previous() {
    console.log('[PREVIOUS]');
  }

  next() {
    console.log('[NEXT]');
  }

  play() {
    let me = this;
    if (!me.audio()) return;
    me.audioControlRef.nativeElement.paused ? me.audioControlRef.nativeElement.play() : me.audioControlRef.nativeElement.pause();
    console.log('[PLAY]');
  }

  cancelVolume() {
    let me = this;
    console.log('[VOLUME]', me.rangeVolume.value);
    if (!me.audio()) return;
    if (me.rangeVolume.value != 0) {
      me.audioControlRef.nativeElement.volume = 0;
      me.rangeVolume.setValue(0, { emitEvent: false });
      return;
    }
    me.rangeVolume.setValue(me.rangeVolumeCopy(), { emitEvent: true });
  }

  setTheme(t: TYPE_THEME) {
    document.documentElement.className = t;
  }

}
