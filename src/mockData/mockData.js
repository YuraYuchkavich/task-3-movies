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
    createMovie("Joker", ["Action"], 2004, image1),
    createMovie("Slave", ["COMEDY"], 2019, image2),
    createMovie("Avengers: Infinity War", ["Action & Adventures"], 2016, image3),
    createMovie("Aladin", ["Action & Adventures"], 2010, image4),
    createMovie("Sonik", ["Action & Adventures"], 2003, image5),
    createMovie("Greenland", ["Drama"], 2007, image6)
]
