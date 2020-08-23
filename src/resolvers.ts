import { UserInputError } from 'apollo-server-express';

import { Movie } from './models/movie';
import { Link } from './models/link';
import { Tag } from './models/tag';
import { Rating } from './models/rating';
import { MoviePageSchema, SubsetPageSchema } from './validators/pagination';

export const resolvers = {
    Query : {
        movies: async (root: any, args:any, context:any, info:any) => {
            const { error, value } = MoviePageSchema.validate(args);

            if (error != undefined) {
                throw new Error(`movies -> ${error.toString()}`);
            }

            const movieList:any = [];

            const movies = await Movie.find({}, 'movieId title genres')
                .limit(value.limit)
                .skip((value.skip - 1) * value.limit)
                .exec()

            movies.forEach((movie: typeof Movie) => {
                movieList.push(
                    {
                        'id': movie.movieId,
                        'title': movie.title,
                        'genres': movie.genres
                    }
                )
            });
            return movieList;
        }
    },
    Movie: {
        tags: async (root: any, args:any, context:any, info:any) => {
            const { error, value } = SubsetPageSchema.validate(args);

            if (error != undefined) {
                throw new UserInputError('tags input validation failed', {error});
            }

            const tags = await Tag.find({movieId: parseInt(root.id, 10)}, 'userId tag timestamp')
                .limit(value.limit)
                .skip((value.skip - 1) * value.limit)
                .exec()

            return tags;

        },
        ratings: async (root:any, args:any, context:any, info:any) => {
            const { error, value } = SubsetPageSchema.validate(args);

            if (error != undefined) {
                throw new UserInputError('ratings input validation failed', {error});
            }

            const ratings = await Rating.find({movieId: parseInt(root.id, 10)}, 'userId rating timestamp')
                .limit(value.limit)
                .skip((value.skip - 1) * value.limit)
                .exec()

            return ratings;
        },
        links: async (root: any) => { 
            const link = await Link.findOne({movieId: root.id}, 'imdbId tmdbId');
            return link;
        },
    }
}
