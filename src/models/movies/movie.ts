// Documentation: https://developers.themoviedb.org/3/movies/get-movie-details

import genre from "../genre";
import ProductionCompanies from "../production-companies";
import { ProductionCountries } from "../production-countries";
import SpokenLanguages from "../spoken_languages";

export interface MovieResponse {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: object | null;
  budget: number;
  genres: genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieParams {
  params: {
    api_key: string;
    language?: string;
    append_to_response?: string;
  };
}
