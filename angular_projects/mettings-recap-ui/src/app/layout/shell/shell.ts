import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  icon: 'ask' | 'knowledge-bases' | 'files' | 'history' | 'settings';
}

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  protected readonly navItems: NavItem[] = [
    { label: 'Ask', path: '/ask', icon: 'ask' },
    { label: 'Knowledge Bases', path: '/knowledge-bases', icon: 'knowledge-bases' },
    { label: 'Files', path: '/files', icon: 'files' },
    { label: 'History', path: '/history', icon: 'history' },
    { label: 'Settings', path: '/settings', icon: 'settings' },
  ];
}
