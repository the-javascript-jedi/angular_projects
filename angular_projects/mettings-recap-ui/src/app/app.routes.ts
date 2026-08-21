import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'knowledge-bases' },
      {
        path: 'ask',
        loadComponent: () => import('./features/ask/ask').then((m) => m.Ask),
      },
      {
        path: 'knowledge-bases',
        loadComponent: () =>
          import('./features/knowledge-bases/knowledge-base-list/knowledge-base-list').then(
            (m) => m.KnowledgeBaseList,
          ),
      },
      {
        path: 'knowledge-bases/create',
        loadComponent: () =>
          import('./features/knowledge-bases/knowledge-base-create/knowledge-base-create').then(
            (m) => m.KnowledgeBaseCreate,
          ),
      },
      {
        path: 'files',
        loadComponent: () => import('./features/files/files').then((m) => m.Files),
      },
      {
        path: 'history',
        loadComponent: () => import('./features/history/history').then((m) => m.History),
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/settings/settings').then((m) => m.Settings),
      },
    ],
  },
  { path: '**', redirectTo: 'knowledge-bases' },
];
