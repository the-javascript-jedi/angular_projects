import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { KnowledgeBaseService } from '../knowledge-base';
import { KnowledgeBaseVisibility } from '../knowledge-base.model';

interface UploadedFile {
  name: string;
  sizeLabel: string;
}

const CATEGORIES = [
  'Projects',
  'Engineering',
  'Customer Success',
  'People & Culture',
  'Sales & Marketing',
];

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

@Component({
  selector: 'app-knowledge-base-create',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './knowledge-base-create.html',
  styleUrl: './knowledge-base-create.scss',
})
export class KnowledgeBaseCreate {
  protected readonly categories = CATEGORIES;

  private readonly fb = inject(FormBuilder);
  private readonly knowledgeBaseService = inject(KnowledgeBaseService);
  private readonly router = inject(Router);

  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    category: [''],
    tagsInput: [''],
    visibility: ['private' as KnowledgeBaseVisibility],
    language: ['auto'],
  });

  protected readonly tags = signal<string[]>([]);
  protected readonly uploadedFiles = signal<UploadedFile[]>([]);
  protected readonly isDragging = signal(false);
  protected readonly advancedOpen = signal(false);
  protected readonly submitted = signal(false);

  protected addTagFromInput(): void {
    const control = this.form.controls.tagsInput;
    const value = control.value?.trim();
    if (!value) return;

    if (!this.tags().includes(value)) {
      this.tags.update((list) => [...list, value]);
    }
    control.setValue('');
  }

  protected removeTag(tag: string): void {
    this.tags.update((list) => list.filter((t) => t !== tag));
  }

  protected toggleAdvanced(): void {
    this.advancedOpen.update((open) => !open);
  }

  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging.set(true);
  }

  protected onDragLeave(): void {
    this.isDragging.set(false);
  }

  protected onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging.set(false);
    if (event.dataTransfer?.files) {
      this.addFiles(event.dataTransfer.files);
    }
  }

  protected onFileInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(input.files);
      input.value = '';
    }
  }

  protected removeFile(name: string): void {
    this.uploadedFiles.update((list) => list.filter((f) => f.name !== name));
  }

  private addFiles(fileList: FileList): void {
    const vttOnly = Array.from(fileList).filter((file) => file.name.toLowerCase().endsWith('.vtt'));
    const mapped = vttOnly.map((file) => ({ name: file.name, sizeLabel: formatFileSize(file.size) }));
    this.uploadedFiles.update((list) => [...list, ...mapped]);
  }

  protected cancel(): void {
    this.router.navigate(['/knowledge-bases']);
  }

  protected submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.knowledgeBaseService.create({
      name: value.name!.trim(),
      description: value.description ?? '',
      category: value.category ?? '',
      tags: this.tags(),
      visibility: value.visibility as KnowledgeBaseVisibility,
      language: value.language === 'auto' ? 'Auto-detect' : (value.language ?? 'Auto-detect'),
      fileCount: this.uploadedFiles().length,
    });

    this.router.navigate(['/knowledge-bases']);
  }
}
