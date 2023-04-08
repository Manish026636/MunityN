import React from "react";
import { Input } from "@material-tailwind/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
const CPDashboard = () => {
  const params = useParams();
  const {tab} = params;
  console.log(tab)
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="m-4 md:m-1">
        <div className="container mx-auto flex justify-center mt-12 h-20 rounded-t-2xl bg-white w-full md:w-1/2 ">
          <h1 className="py-7 font-istok text-gray-500 font-bold text-xl md:text-2xl">
            Chairperson Dashboard
          </h1>
        </div>
        <div className="container border-b   mx-auto bg-gradient-to-r from-light-blue-50 to-blue-50 flex justify-center h-auto py-4 md:h-92 rounded-b-2xl w-full md:w-1/2 ">
          <div class="grid grid-cols-1 gap-4 mt-5 md:mt-8 sm:grid-cols-2 w-[40vh] md:w-[70vh] justify-center">
            <div class="bg-[#B1D9EB] hover:bg-[#84cced] m-2 rounded-xl text-center   h-40 md:h-56 p-4">
              <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-pink-200 to-indigo-400 mt-10 md:mt-16 font-istok  font-bold text-2xl md:text-2xl">
                Committee 1
              </h1>
              <p className="mt-3 font-bold text-xs text-white">
                Committee name
              </p>
            </div>
            <div class="bg-[#6EA7DB] hover:bg-[#84cced] m-2 rounded-xl text-center h-40 md:h-56 p-4">
              <h1 className="text-white mt-10 md:mt-16 font-istok  font-bold text-2xl md:text-2xl">
                50
              </h1>
              <p className="mt-3 font-bold text-xs text-white">Total Members</p>
            </div>
          </div>
        </div>

        <div class="mt-6  md:mt-10 flex justify-center">
          <div className=" flex items-center justify-center">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-blue-400 bg-opacity-90  px-6 py-3 text-sm font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Start Session
            </button>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed  inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg  font-bold leading-6 text-gray-900"
                      >
                        Enter the GSL time limit 
                      </Dialog.Title>
                      <div className="mt-4">
                      <Input type="number"  label="Time"  />
                      </div>

                      <div className=" text-center mt-8">
                        <button
                          type="button"
                          className="inline-flex  justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-bold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          START
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default CPDashboard;
