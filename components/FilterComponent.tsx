"use client"
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { FilterComponentProps } from '@/types'

const FilterComponent = ({ title, options }: FilterComponentProps) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up down"
              height={20}
              width={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          
        </div>
      </Listbox>
    </div>
  )
}

export default FilterComponent;
