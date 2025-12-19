export interface Game {
  id: number;
  description: string;
  category: string;
  longDescription: string;
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
