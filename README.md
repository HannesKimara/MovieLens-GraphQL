# MovieLens GraphQL

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A GraphQL implementation of the Movie Lens Dataset.

## Getting Started

To get started using docker, clone the project and run

```bash
$ docker-compose up
```

Download the movielens dataset from the [grouplens](https://grouplens.org/datasets/movielens/) site. Extract zip and use mongoimport to import csv files into mongodb.

See reference for [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/)

## Sending Queries

Queries can be sent using the GraphiQL playground. To get a list of movies with tags and ratings try

```
{
  movies {
    id
    title
    genres
    tags(limit: 1, skip: 2) {
      userId
      tag
    }
    ratings(limit:3) {
      userId
      rating
    }
  }
}
```

Docs can be found at [/docs](https://movielens.herokuapp.com/docs)

## Dependencies 

- MongoDB
- Node

## License
MIT 