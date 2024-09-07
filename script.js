// Call the main functions the page is loaded
window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
};

// ** Helper function that makes dynamic API calls **
function fetchMovies(url, dom_element, path_type) {
  // Use Fetch with the url passed down
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      showMovies(data, dom_element, path_type);
    })
    .catch((error) => console.log(error));

  // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
}

//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {
  // Create a variable that grabs id or class
  let moviesElement = document.querySelector(dom_element);

  // Loop through movies object
  for (const movie of movies.results) {
    // Within loop create an img element
    const imgElement = document.createElement("img");

    // Set attribute
    imgElement.setAttribute("data-id", movie.id);

    // Set source
    imgElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

    // Append the imageElement to the dom_element selected
    moviesElement.appendChild(imgElement);
    // The appendChild() method appends an element as the last child of an element.
  }
};

// ** Function that fetches Netflix Originals **
function getOriginals() {
  var url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
  fetchMovies(url, ".original__movies", "poster_path");
}
// ** Function that fetches Trending Movies **
function getTrendingNow() {
  var url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, "#trending", "backdrop_path");
}
// ** Function that fetches Top Rated Movies **
function getTopRated() {
  var url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, "#top_rated", "backdrop_path");
}

// ** BONUS **

// ** Fetches URL provided and returns response.json()
async function getMovieTrailer(id) {
  //URL: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
}

// ** Function that adds movie data to the DOM
const setTrailer = (trailers) => {
  // Set up iframe variable to hold id of the movieTrailer Element
  const iframe = "";
  // Set up variable to select .movieNotFound element
  const movieNotFound = "";

  // If there is a trailer add the src for it
  if (trailers.length > 0) {
    // add d-none class to movieNotFound and remove it from iframe
    // add youtube link with trailers key to iframe.src
  } else {
    // Else remove d-none class to movieNotfound and ADD it to iframe
  }
};
