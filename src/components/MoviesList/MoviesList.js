import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MoviesList.module.css";

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul className={styles.list}>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
