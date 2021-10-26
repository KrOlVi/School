const numberOfFilms = +promt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = promt("Один из последних просмотренных фильмов?", "");
const b = promt("На сколько оцените его?", "");
const c = promt("Один из последних просмотренных фильмов?", "");
const d = promt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

