import { Component, OnDestroy, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/core/services/api.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-reducer';
import { setResults } from 'src/app/store/results.actions';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ApiService]
})
export class HeaderComponent implements OnInit, OnDestroy {
  store = inject(Store<AppState>);
  formDataSearch!: FormGroup;
  $subscriptionDataSearch: Subscription | null = null;
  router = inject(Router);
  userInfo = signal<{ userName: string }>({
    userName: 'Juan Falcón'
  })

  constructor(private _apiService: ApiService) {

  }

  ngOnInit(): void {
    let me = this;
    me.__initialForm();
  }

  ngOnDestroy(): void {
    let me = this;
    me.$subscriptionDataSearch && me.$subscriptionDataSearch.unsubscribe();
  }

  __initialForm() {
    let me = this;
    me.formDataSearch = new FormGroup({
      'search': new FormControl('', [Validators.required])
    });
  }

  search() {
    let me = this;
    if (me.formDataSearch.invalid) {
      console.log('[INVALID-FORM]', me.formDataSearch.value)
      return;

    }
    console.log('[VALID-FORM]', me.formDataSearch.value)
    const { search } = me.formDataSearch.value;
    me.router.navigate(['main']);
    me.$subscriptionDataSearch = me._apiService.getSearch(search).subscribe({
      next: (value) => {
        console.log('[SUCCESS]', value);
        me.store.dispatch(setResults({ results: value.data }));
      },
      error: (error) => {
        console.log('[ERROR]', error);
      },
      complete: () => {
        console.log('[COMPLETE] getMusics')
      }
    });
  }
}
