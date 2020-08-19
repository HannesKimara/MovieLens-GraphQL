import { Movie } from './models/movie';
import { Link } from './models/link';

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
    },
    Movie: {
        links: async (root: any) => {
            const link = await Link.findOne({movieId: root.id}, 'imdbId tmdbId');
            return {
                'imdbId': link.imdbId,
                'tmdbId': link.tmdbId
            }
        }
    }
}
