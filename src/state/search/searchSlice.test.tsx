import searchReducer, {
  setSearchTerm,
  setFilteredItems,
  setIsSearching,
} from "./searchSlice";

describe("searchSlice", () => {
  it("should handle setSearchTerm", () => {
    const state = searchReducer(undefined, setSearchTerm("test"));
    expect(state.searchTerm).toEqual("test");
  });

  it("should handle setFilteredItems", () => {
    let state = searchReducer(undefined, setSearchTerm("test"));
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
  });

  it("should handle setIsSearching", () => {
    const state = searchReducer(undefined, setIsSearching(true));
    expect(state.isSearching).toEqual(true);
  });
});
