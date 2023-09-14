"use client"
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

import { CarProps } from '@/types';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog className="relative z-10" as="div" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed bg-black bg-opacity-25 inset-0" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-center items-center text-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-85"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-85"
              >
                <Dialog.Panel>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-primary-blue border p-2 rounded-lg"
                  >
                    <Image
                      src="/close.svg"
                      alt="close modal"
                      height={20}
                      width={20}
                      className="object-contain"
                    />

                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails;
