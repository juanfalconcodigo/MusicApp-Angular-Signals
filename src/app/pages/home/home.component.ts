import { Component, ElementRef, Renderer2, ViewChild, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicDetailComponent } from '../../components/music-detail/music-detail.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import { setMusic } from 'src/app/store/music.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MusicDetailComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
