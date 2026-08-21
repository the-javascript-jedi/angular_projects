import { Injectable, computed, signal } from '@angular/core';
import {
  CreateKnowledgeBaseInput,
  KnowledgeBase,
  KnowledgeBaseStats,
} from './knowledge-base.model';

const INITIAL_KNOWLEDGE_BASES: KnowledgeBase[] = [
  {
    id: 'kb-project-alpha',
    name: 'Project Alpha',
    description: 'Project related meetings and discussions',
    category: 'Projects',
    tags: ['alpha', 'roadmap'],
    color: '#6366f1',
    isDefault: true,
    files: 24,
    segments: 2460,
    lastUpdatedLabel: 'Today, 10:30 AM',
    lastUpdatedRelative: '2 hours ago',
    status: 'ready',
    visibility: 'private',
    language: 'Auto-detect',
  },
  {
    id: 'kb-sprint-meetings',
    name: 'Sprint Meetings',
    description: 'All sprint planning and review meetings',
    category: 'Engineering',
    tags: ['sprint', 'agile'],
    color: '#22c55e',
    isDefault: false,
    files: 12,
    segments: 1230,
    lastUpdatedLabel: 'May 19, 2024',
    lastUpdatedRelative: '2 days ago',
    status: 'ready',
    visibility: 'team',
    language: 'English',
  },
  {
    id: 'kb-customer-calls',
    name: 'Customer Calls',
    description: 'Customer interaction transcripts',
    category: 'Customer Success',
    tags: ['calls', 'support'],
    color: '#f59e0b',
    isDefault: false,
    files: 47,
    segments: 5800,
    lastUpdatedLabel: 'May 18, 2024',
    lastUpdatedRelative: '3 days ago',
    status: 'ready',
    visibility: 'team',
    language: 'English',
  },
  {
    id: 'kb-team-standups',
    name: 'Team Standups',
    description: 'Daily standup meetings and updates',
    category: 'Engineering',
    tags: ['standup', 'daily'],
    color: '#3b82f6',
    isDefault: false,
    files: 31,
    segments: 2100,
    lastUpdatedLabel: 'May 16, 2024',
    lastUpdatedRelative: '5 days ago',
    status: 'ready',
    visibility: 'private',
    language: 'Auto-detect',
  },
  {
    id: 'kb-architecture-discussions',
    name: 'Architecture Discussions',
    description: 'Technical architecture and design talks',
    category: 'Engineering',
    tags: ['architecture', 'design'],
    color: '#ec4899',
    isDefault: false,
    files: 18,
    segments: 2750,
    lastUpdatedLabel: 'May 10, 2024',
    lastUpdatedRelative: '11 days ago',
    status: 'processing',
    visibility: 'team',
    language: 'English',
  },
  {
    id: 'kb-training-sessions',
    name: 'Training Sessions',
    description: 'Internal training and knowledge sharing',
    category: 'People & Culture',
    tags: ['training', 'onboarding'],
    color: '#14b8a6',
    isDefault: false,
    files: 10,
    segments: 1302,
    lastUpdatedLabel: 'May 5, 2024',
    lastUpdatedRelative: '16 days ago',
    status: 'ready',
    visibility: 'public',
    language: 'Auto-detect',
  },
];

const PALETTE = ['#6366f1', '#22c55e', '#f59e0b', '#3b82f6', '#ec4899', '#14b8a6', '#a855f7', '#ef4444'];

@Injectable({
  providedIn: 'root',
})
export class KnowledgeBaseService {
  private readonly knowledgeBases = signal<KnowledgeBase[]>(INITIAL_KNOWLEDGE_BASES);
  private readonly totalQueries = signal(1284);

  readonly all = this.knowledgeBases.asReadonly();

  readonly stats = computed<KnowledgeBaseStats>(() => {
    const list = this.knowledgeBases();
    return {
      totalKnowledgeBases: list.length,
      totalFiles: list.reduce((sum, kb) => sum + kb.files, 0),
      totalSegments: list.reduce((sum, kb) => sum + kb.segments, 0),
      totalQueries: this.totalQueries(),
    };
  });

  create(input: CreateKnowledgeBaseInput): KnowledgeBase {
    const knowledgeBase: KnowledgeBase = {
      id: `kb-${Date.now()}`,
      name: input.name,
      description: input.description,
      category: input.category || 'Uncategorized',
      tags: input.tags,
      color: PALETTE[this.knowledgeBases().length % PALETTE.length],
      isDefault: false,
      files: input.fileCount,
      segments: 0,
      lastUpdatedLabel: 'Today',
      lastUpdatedRelative: 'Just now',
      status: input.fileCount > 0 ? 'processing' : 'ready',
      visibility: input.visibility,
      language: input.language,
    };

    this.knowledgeBases.update((list) => [knowledgeBase, ...list]);
    return knowledgeBase;
  }
}
