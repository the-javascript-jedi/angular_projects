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
  loading: boolean;
  error: string | null;
}

export const initialState: GamesState = {
  gamesData: [],
  loading: false,
  error: null,
};
