import Image from "next/image";
import Link from "next/link";
import styles from "./MovieList.module.css";
import StarRating from "./StarRating";

export default function MovieList({ className = "", movies }) {
  return (
    <ul className={`${styles.movieList} ${className}`}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/films/${movie.id}`}>
            <div className={styles.posterContainer}>
              <Image fill src={movie.posterUrl} alt={movie.title} style={{ objectFit: "cover" }} />
            </div>
          </Link>
          <div className={styles.info}>
            <h2 className={styles.title}>{movie.title}</h2>
            <div className={styles.date}>
              {movie.date} ・ {movie.country}
            </div>
            <div className={styles.starRatingContainer}>
              <StarRating value={movie.starRating} />
              <span className={styles.starRating}>{movie.starRating}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
