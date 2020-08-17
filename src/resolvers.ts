export const resolvers = {
    Query : {
        movies: () => {
            return [
                {
                    id: 1, 
                    title: 'Toy Story',
                    genres: 'Adventure|Animation|Children|Comedy|Fantasy'.split('|')
                }
            ]
        }
    }
}
