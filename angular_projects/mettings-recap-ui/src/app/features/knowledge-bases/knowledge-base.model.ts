export type KnowledgeBaseStatus = 'ready' | 'processing';
export type KnowledgeBaseVisibility = 'private' | 'team' | 'public';

export interface KnowledgeBase {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  color: string;
  isDefault: boolean;
  files: number;
  segments: number;
  lastUpdatedLabel: string;
  lastUpdatedRelative: string;
  status: KnowledgeBaseStatus;
  visibility: KnowledgeBaseVisibility;
  language: string;
}

export interface CreateKnowledgeBaseInput {
  name: string;
  description: string;
  category: string;
  tags: string[];
  visibility: KnowledgeBaseVisibility;
  language: string;
  fileCount: number;
}

export interface KnowledgeBaseStats {
  totalKnowledgeBases: number;
  totalFiles: number;
  totalSegments: number;
  totalQueries: number;
}
