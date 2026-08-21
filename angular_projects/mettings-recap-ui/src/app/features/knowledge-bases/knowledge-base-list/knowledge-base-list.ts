import { DecimalPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KnowledgeBaseService } from '../knowledge-base';
import { KnowledgeBase } from '../knowledge-base.model';

type ViewMode = 'table' | 'grid';
type SortKey = 'name' | 'lastUpdated';

@Component({
  selector: 'app-knowledge-base-list',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './knowledge-base-list.html',
  styleUrl: './knowledge-base-list.scss',
})
export class KnowledgeBaseList {
  protected readonly viewMode = signal<ViewMode>('table');
  protected readonly searchTerm = signal('');
  protected readonly sortKey = signal<SortKey>('name');
  protected readonly openMenuId = signal<string | null>(null);

  private readonly knowledgeBaseService = inject(KnowledgeBaseService);

  protected readonly stats = this.knowledgeBaseService.stats;

  protected readonly filtered = computed<KnowledgeBase[]>(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const list = this.knowledgeBaseService.all();
    const matched = term
      ? list.filter(
          (kb) =>
            kb.name.toLowerCase().includes(term) || kb.description.toLowerCase().includes(term),
        )
      : list;

    return [...matched].sort((a, b) =>
      this.sortKey() === 'name' ? a.name.localeCompare(b.name) : a.id.localeCompare(b.id),
    );
  });

  protected setViewMode(mode: ViewMode): void {
    this.viewMode.set(mode);
  }

  protected toggleSort(): void {
    this.sortKey.update((key) => (key === 'name' ? 'lastUpdated' : 'name'));
  }

  protected toggleMenu(id: string): void {
    this.openMenuId.update((current) => (current === id ? null : id));
  }

  protected onSearch(value: string): void {
    this.searchTerm.set(value);
  }
}
