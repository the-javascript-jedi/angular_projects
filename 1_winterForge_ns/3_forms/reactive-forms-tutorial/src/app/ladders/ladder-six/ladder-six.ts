import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-ladder-six',
  imports: [ReactiveFormsModule],
  templateUrl: './ladder-six.html',
  // styleUrl: './ladder-six.scss',
})
export class LadderSix {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    search: [''],
    category: ['all'],
    sortBy: ['name'],
  });

  results: { name: string; category: string }[] = [];
  isSearching = false;
  private subscription!: Subscription;

  private allItems = [
    { name: 'Angular', category: 'framework' },
    { name: 'React', category: 'library' },
    { name: 'Vue', category: 'framework' },
    { name: 'Svelte', category: 'framework' },
    { name: 'RxJS', category: 'library' },
    { name: 'NgRx', category: 'library' },
  ];

  ngOnInit() {
    // Load data immediately on page load without the searching indicator
    const { search, category, sortBy } = this.form.value;
    this.results = this.filterItems(search ?? '', category ?? 'all', sortBy ?? 'name');

    // Subscribe to each control directly so updateOn settings don't interfere.
    // search: debounced 300ms so it waits for the user to pause typing.
    // category / sortBy: fire immediately on change (no debounce needed).
    const search$ = this.form.get('search')!.valueChanges.pipe(debounceTime(300));
    const filters$ = merge(
      this.form.get('category')!.valueChanges,
      this.form.get('sortBy')!.valueChanges,
    );

    this.subscription = merge(search$, filters$).subscribe(() => {
      const { search, category, sortBy } = this.form.value;
      this.performSearch(search ?? '', category ?? 'all', sortBy ?? 'name');
    });
  }

  private filterItems(query: string, category: string, sortBy: string) {
    let filtered = this.allItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || item.category === category;
      return matchesSearch && matchesCategory;
    });
    if (sortBy === 'name') {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    return filtered;
  }

  performSearch(query: string, category: string, sortBy: string) {
    console.log('perform search');
    this.isSearching = true;
    setTimeout(() => {
      this.results = this.filterItems(query, category, sortBy);
      this.isSearching = false;
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
