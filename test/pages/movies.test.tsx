import { render, screen } from "@testing-library/react";
import PopularMovies from "@/pages/movies";

jest.mock("aos", () => ({ init: jest.fn() }));

jest.mock("react-query", () => ({
  useQuery: jest.fn(() => ({
    isLoading: false,
    error: null,
    data: [],
  })),
}));

describe("PopularMovies component", () => {
  test("renders loading message when isLoading is true", async () => {
    const { container } = render(<PopularMovies isLoading={true} />);
    expect(container).toMatchSnapshot();
  });

  test("renders error message when there is an error", async () => {
    const errorMessage = "There was an error fetching movies.";
    const { container } = render(<PopularMovies error={errorMessage} />);
    expect(container).toMatchSnapshot();
  });

  test("renders movies list when there are movies", async () => {
    const movies = [
      {
        id: 1,
        title: "Movie 1",
        poster_path: "/movie1.jpg",
        release_date: "2022-01-01",
      },
      {
        id: 2,
        title: "Movie 2",
        poster_path: "/movie2.jpg",
        release_date: "2022-02-01",
      },
    ];
    jest.mock("@/pages/api/tmdbAPI", () => ({
      getPopularMovies: jest.fn(() => movies),
    }));
    const { container } = render(<PopularMovies />);
    expect(container).toMatchSnapshot();
  });
});
