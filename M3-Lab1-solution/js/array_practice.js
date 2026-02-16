// STEP 1
// Create array with 5 favorite movies and display second movie
var movies = ["Inception", "The Dark Knight", "Interstellar", "The Matrix", "Gladiator"];
console.log("Step 1 - Second movie:", movies[1]);


// STEP 2
// Constructor method with length 5
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "The Dark Knight";
movies[2] = "Interstellar";
movies[3] = "The Matrix";
movies[4] = "Gladiator";
console.log("Step 2 - First movie:", movies[0]);


// STEP 3
// Add new movie to 3rd position and display length
movies.splice(2, 0, "Avatar");
console.log("Step 3 - Length after adding:", movies.length);


// STEP 4
// Literal notation and delete first movie
var movies = ["Inception", "The Dark Knight", "Interstellar", "The Matrix", "Gladiator"];
delete movies[0];
console.log("Step 4 - After delete:", movies);


// STEP 5
// 7 movies and for/in loop
var movies = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "The Matrix",
    "Gladiator",
    "Avatar",
    "Titanic"
];

console.log("Step 5 - for/in loop:");
for (var index in movies) {
    console.log(movies[index]);
}


// STEP 6
// for/of loop
console.log("Step 6 - for/of loop:");
for (var movie of movies) {
    console.log(movie);
}


// STEP 7
// Sorted view using for/of
console.log("Step 7 - Sorted view:");
var sortedMovies = [...movies].sort();
for (var movie of sortedMovies) {
    console.log(movie);
}


// STEP 8
var leastFavMovies = ["Movie 43", "Cats", "The Room"];

console.log("\nMovies I like:\n");
for (var movie of movies) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (var movie of leastFavMovies) {
    console.log(movie);
}


// STEP 9
var movies = movies.concat(leastFavMovies);
console.log("\nStep 9 - Reverse Sorted:");
console.log(movies.sort().reverse());


// STEP 10
console.log("Step 10 - Last item:", movies.slice(-1)[0]);


// STEP 11
console.log("Step 11 - First item:", movies.shift());


// STEP 12
// Replace least favorite movies programmatically
var disliked = ["Movie 43", "Cats", "The Room"];
var indices = movies
    .map((movie, index) => disliked.includes(movie) ? index : -1)
    .filter(index => index !== -1);

indices.forEach(index => {
    movies[index] = "The Prestige";
});

console.log("Step 12 - After replacing disliked movies:", movies);


// STEP 13
var moviesRanked = [
    ["Inception", 1],
    ["The Dark Knight", 2],
    ["Interstellar", 3],
    ["The Matrix", 4],
    ["Gladiator", 5]
];

var movieNames = moviesRanked
    .flat()
    .filter(item => typeof item === "string");

console.log("Step 13 - Movie Names Only:", movieNames);


// STEP 14
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(arr) {
    console.log("Employees:\n");
    for (var emp of arr) {
        console.log(emp);
    }
};

showEmployee(employees);


// STEP 15
function filterValues(arr) {
    return arr.filter(Boolean);
}

console.log("Step 15:", filterValues([58, '', 'abcd', true, null, false, 0]));


// STEP 16
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("Step 16 - Random number:", getRandomItem(numbers));


// STEP 17
function getLargestNumber(arr) {
    return Math.max(...arr);
}

console.log("Step 17 - Largest number:", getLargestNumber(numbers));
