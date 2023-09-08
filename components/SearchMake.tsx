"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import { Combobox, Transition } from "@headlessui/react"
import { FaCar } from 'react-icons/fa'

import { SearchMakeProps } from "@/types"
import car_logo from './../public/car-logo.svg'
import { makes } from "@/constants"

const SearchMake = ({ make, setMake }: SearchMakeProps) => {
  const [query, setQuery] = useState("");

  const filteredMakes =
    query === "" ?
      makes : makes.filter(item => (
        item.toLowerCase().replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      ));

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            {/* <FaCar /> */}
            <Image
              src={car_logo}
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(make: string) => make}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {
                filteredMakes.length === 0 && query !== "" ? (
                  <Combobox.Option
                    value={query} className="search-manufacturer__option">
                    create a "{query}"
                  </Combobox.Option>
                ) : (
                  filteredMakes.map(item => (
                    <Combobox.Option
                      key={item}
                      value={item}
                      className={({ active }) =>
                        `relative search-manufacturer__option 
                      ${active ? 'bg-primary-blue text-white rounded-md' : "text-gray-900"}`
                      }>
                      {item}
                    </Combobox.Option>
                  ))
                )
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchMake;
