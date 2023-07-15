import { useAppContext } from "./Context";

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <h2 className="title">unsplash images</h2>
      <form className="search-form" onSubmit={handleFormSubmit}>
        <input
          className="form-input search-input"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
