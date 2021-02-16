import styles from "../../styles/SearchBar.module.css";

const SearchBar = ({ ...rest }) => {
  return (
    <div classnames={styles.search_bar}>
      <input className={styles.search_input} {...rest} />
    </div>
  );
};

export default SearchBar;
