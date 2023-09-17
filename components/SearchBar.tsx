"use client"

import { useState } from "react"
import Image from "next/image";
import { SearchMake } from ".";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnfying glass"
      height={40}
      width={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [make, setMake] = useState("");

  const handleSearch = () => { }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMake
          make={make}
          setMake={setMake}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
    </form>
  )
}

export default SearchBar;
