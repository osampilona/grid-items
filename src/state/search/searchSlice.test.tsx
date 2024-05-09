import searchReducer, {
  setSearchTerm,
  setFilteredItems,
  setIsSearching,
} from "./searchSlice";

describe("searchSlice", () => {
  const initialState = {
    searchTerm: "",
    filteredItems: [],
    isSearching: false,
  };

  it("should return the initial state when called with undefined", () => {
    const state = searchReducer(undefined, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should handle setSearchTerm", () => {
    const state = searchReducer(initialState, setSearchTerm("test"));
    expect(state.searchTerm).toEqual("test");
    expect(state.isSearching).toBe(false);
  });

  it("should handle setFilteredItems correctly with a search term", () => {
    let state = searchReducer(initialState, setSearchTerm("test"));
    state = searchReducer(state, setIsSearching(true));
    state = searchReducer(
      state,
      setFilteredItems([
        { title: "test", description: "test", imagePath: "test" },
      ])
    );
    expect(state.filteredItems).toEqual([
      { title: "test", description: "test", imagePath: "test" },
    ]);
    expect(state.isSearching).toBe(true);
  });

  it("should handle setFilteredItems correctly without a search term", () => {
    const state = searchReducer(initialState, setFilteredItems([]));
    expect(state.filteredItems).toEqual([]);
    expect(state.isSearching).toBe(false);
  });

  it("should handle setIsSearching", () => {
    const state = searchReducer(initialState, setIsSearching(true));
    expect(state.isSearching).toEqual(true);
  });

  it("should clear filteredItems when searchTerm is empty", () => {
    let state = searchReducer(initialState, setSearchTerm("test"));
    state = searchReducer(state, setIsSearching(true));
    state = searchReducer(
      state,
      setFilteredItems([
        { title: "test", description: "test", imagePath: "test" },
      ])
    );
    state = searchReducer(state, setSearchTerm(""));
    expect(state.filteredItems).toEqual([]);
    expect(state.isSearching).toBe(false);
  });

  it("should not mutate filteredItems if isSearching is toggled without items", () => {
    let state = searchReducer(initialState, setIsSearching(true));
    state = searchReducer(state, setIsSearching(false));
    expect(state.filteredItems).toEqual([]);
  });

  it("should handle empty payloads correctly", () => {
    let state = searchReducer(initialState, setSearchTerm(""));
    state = searchReducer(state, setFilteredItems([]));
    state = searchReducer(state, setIsSearching(false));
    expect(state).toEqual({
      searchTerm: "",
      filteredItems: [],
      isSearching: false,
    });
  });
});
