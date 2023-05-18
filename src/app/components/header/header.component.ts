import { Component, EventEmitter, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/core/api.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[ApiService]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output('itemsResult') itemsResult: EventEmitter<any[]> = new EventEmitter<any[]>();
  formDataSearch!: FormGroup;
  $subscriptionDataSearch: Subscription | null = null;
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
    me.$subscriptionDataSearch = me._apiService.getSearch(search).subscribe({
      next: (value) => {
        console.log('[SUCCESS]', value);
        me.itemsResult.emit(value.data);
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
