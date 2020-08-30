import image1 from "./mockImages/movie1.jpg";
import image2 from "./mockImages/movie2.jpg";
import image3 from "./mockImages/movie3.jpg";
import image4 from "./mockImages/movie4.jpg";
import image5 from "./mockImages/movie5.jpg";
import image6 from "./mockImages/movie6.jpg";

const createMovie = (name = '', genre = [], releaseDate = '', image = '') => {
      return {
      name: name,
      genre: genre,
      releaseDate: releaseDate,
      image:image
    }
  }

export const getMockMovies = [
    createMovie("Pulp Fiction", ["Action & Adventures"], 2004, image1),
    createMovie("Bohemia Rapsody", ["Drama", "Biography", "Music"], 2003, image2),
    createMovie("Kill Bill 2", ["Oskar winning movie"], 1994, image3),
    createMovie("Avengers: Infinity War", ["Action & Adventures"], 2004, image4),
    createMovie("Inception", ["Action & Adventures"], 2003, image5),
    createMovie("Reservoir dogs", ["Oskar winning movie"], 1994, image6)
]
