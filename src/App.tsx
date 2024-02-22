import { useState } from 'react';
import './App.css';
import { ExpeditionsList } from './components/ExpeditionsList';
import { SearchBar } from './components/SearchBar';
import SortBy from './components/SortBy';
import { sortByOptions } from './constants';
import { ToastContainer } from 'react-toastify';

function App() {
  const [searchText, setSearchText] = useState<string>("")
  const [sortBy, setSortBy] = useState<SortByOption>("createdAt")
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc")

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const handleSortByChange = (option: SortByOption) => {
    setSortBy(option)
  }

  const handleChangeSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  return (
    <div className="p-12">
      <div className="mb-4 flex items-center justify-between">
        <SearchBar onChange={handleSearchOnChange} />
        <SortBy
          options={sortByOptions}
          onChange={handleSortByChange}
          value={sortBy}
          sortOrder={sortOrder}
          changeSortOrder={handleChangeSortOrder}
        />
      </div>
      <ExpeditionsList
        sortOrder={sortOrder}
        searchText={searchText}
        sortBy={sortBy}
      />
      <ToastContainer hideProgressBar closeOnClick />
    </div>
  )
}

export default App;
