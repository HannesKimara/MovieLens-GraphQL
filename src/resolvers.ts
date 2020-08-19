import { Movie } from './models/movie';

export const resolvers = {
    Query : {
        movies: async () => {
            const movie = await Movie.findOne({}, 'movieId title genres');
            return [
                {
                    'id': movie.movieId,
                    'title': movie.title,
                    'genres': movie.genres.split('|')
                }
            ];
        }
    }
}
