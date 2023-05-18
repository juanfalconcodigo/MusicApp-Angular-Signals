import { Component, ElementRef, Renderer2, ViewChild, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AppState } from './app-reducer';
import { Store } from '@ngrx/store';
import { setMusic } from './store/music.actions';
import { MusicDetailComponent } from './components/music-detail/music-detail.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    MusicDetailComponent,
    FooterComponent,
    HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = signal<any[]>([]);
  store = inject(Store<AppState>);
  showCompleteContent = signal(false);
  @ViewChild("sidebar", { static: false }) sidebarElementRef!: ElementRef<HTMLElement>;
  @ViewChild("contentMain", { static: false }) contentMainElementRef!: ElementRef<HTMLElement>;
  renderer = inject(Renderer2);

  changeStateMusic(item: any) {
    let me = this;
    me.store.dispatch(setMusic({ singer: item.artist.name, song: item.title, image: item.album.cover_medium, audio: item.preview, artist: item.artist, album: item.album }));
  }

  viewData(data: any[]) {
    let me = this;
    me.items.set(data);
  }

  toogleSidebar() {
    let me = this;
    if (!me.showCompleteContent()) {
      me.renderer.addClass(me.sidebarElementRef.nativeElement, 'translate-sidenav');
      me.renderer.addClass(me.contentMainElementRef.nativeElement, 'custom-size-content');
      me.showCompleteContent.set(true);
      return;
    }
    me.renderer.removeClass(me.sidebarElementRef.nativeElement, 'translate-sidenav');
    me.renderer.removeClass(me.contentMainElementRef.nativeElement, 'custom-size-content');
    me.showCompleteContent.set(false);
  }

}
