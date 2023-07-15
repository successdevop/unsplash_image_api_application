import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "./Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&page=1&`;

const Gallery = () => {
  const { searchTerm } = useAppContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["pictures", searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}query=${searchTerm}`);
      return response;
    },
  });

  if (isLoading) {
    return (
      <section
        className="image-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="loading"></div>
      </section>
    );
  }

  if (isError) {
    return <h3>An error occurred...</h3>;
  }

  const myData = data?.data?.results;

  if (myData.length < 1) {
    return (
      <section className="image-container">
        <h3>No result found</h3>
      </section>
    );
  }

  return (
    <section className="image-container">
      {myData.map((item) => {
        const { id, urls, alt_description } = item;
        return (
          <img
            className="img"
            key={id}
            src={urls.regular}
            alt={alt_description}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
