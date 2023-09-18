"use client"

import { useState } from "react"
import Image from "next/image";
import { SearchMake } from ".";
import { useRouter } from "next/navigation";

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
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (make === "" && model === "") {
      return alert("please fill in the search bar");
    }

    updateSearchParams(
      make.toLowerCase(),
      model.toLowerCase()
    );
  }

  const updateSearchParams = (make: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathName);
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMake
          make={make}
          setMake={setMake}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          height={25}
          width={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          className="searchbar__input"
          type="text"
          name="model"
          placeholder="Tiguan"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar;
