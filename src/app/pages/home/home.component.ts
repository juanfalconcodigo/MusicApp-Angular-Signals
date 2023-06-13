import { Component, ElementRef, Renderer2, ViewChild, signal, inject, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { setTheme } from 'src/app/store/theme.action';
import { TYPE_THEME } from 'src/app/interfaces';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  store = inject(Store<AppState>);
  showCompleteContent = signal(false);
  dataTheme = toSignal(this.store.select('themeApp'));
  @ViewChild("sidebar", { static: false }) sidebarElementRef!: ElementRef<HTMLElement>;
  @ViewChild("contentMain", { static: false }) contentMainElementRef!: ElementRef<HTMLElement>;
  renderer = inject(Renderer2);
  checkboxControl = new FormControl(false);

  constructor() {
    let me = this;
    effect(() => {
      console.log('[THEME-HOME]', me.dataTheme());
      me.setTheme(me.dataTheme().theme);
    }, { allowSignalWrites: true })

  }

  ngOnInit(): void {
    let me = this;
    me.checkboxControl.valueChanges.subscribe((value) => {
      const theme: TYPE_THEME = value == true ? 'dark' : 'primary';
      me.store.dispatch(setTheme({ theme }));
    });
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

  setTheme(t: TYPE_THEME) {
    document.documentElement.className = t;
  }

}
