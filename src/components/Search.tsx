const Search = () => {
  return (
    <div className="flex w-full flex-row rounded-2xl border border-gray-200 bg-white shadow">
      <input
        type="text"
        className="w-full rounded-l-2xl p-4 shadow outline-0 focus:bg-brand-100/30"
        placeholder="Search cars..."
      />
      <input
        type="submit"
        placeholder="submit"
        className="cursor-pointer rounded-r-2xl p-4 hover:bg-brand-100"
      />
    </div>
  )
}

export default Search
