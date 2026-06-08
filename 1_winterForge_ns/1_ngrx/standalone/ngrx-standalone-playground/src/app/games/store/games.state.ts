export interface GamePlatform {
  platform: string;
}

export interface Game {
  id: number;
  description: string;
  category: string;
  longDescription: string;
  platform?: string;
}

export interface GamesState {
  gamesData: Game[];
  platform: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: GamesState = {
  gamesData: [],
  platform: null,
  loading: false,
  error: null,
};
