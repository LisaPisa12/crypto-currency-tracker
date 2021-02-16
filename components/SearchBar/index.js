import styles from "../../styles/SearchBar.module.css";

const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.search_div}>
      <input className={styles.search_input} {...rest} />
    </div>
  );
};

export default SearchBar;
