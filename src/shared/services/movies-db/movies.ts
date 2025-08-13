import { moviesDbApi } from ".";

export interface DiscoverMoviesServiceInput {
    page: number;
}

export interface DiscoverMoviesServiceOutput {
    page: number
    results: {
        adult: boolean
        backdrop_path: string
        genre_ids: number[]
        id: number
        original_language: string
        original_title: string
        overview: string
        popularity: number
        poster_path: string
        release_date: string
        title: string
        video: boolean
        vote_average: number
        vote_count: number
    }[]
    total_pages: number
    total_results: number
}

export const DiscoverMoviesService = async ({ page }: DiscoverMoviesServiceInput): Promise<DiscoverMoviesServiceOutput> => {
    const queryParams = new URLSearchParams();
    queryParams.append('page', page.toString());
    queryParams.append('language', 'pt-BR');

    const { data } = await moviesDbApi.get('discover/movie', {
        params: queryParams
    });

    return data as DiscoverMoviesServiceOutput;
}