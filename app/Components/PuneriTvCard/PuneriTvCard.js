"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import classes from "./PuneriTvCard.module.css"
import { Exo } from "next/font/google";
import { Container } from 'react-bootstrap';
const exo=Exo({
    variable:"exo-regular",
    subsets:["latin"],
    weight:"500"
})
const PuneriTvCard=({src,title,url})=>{
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
    
    return(
        <Container>
        <div className="relative flex flex-col overflow-hidden">
        <img src={`https://img.youtube.com/vi/${url}/hqdefault.jpg`} className="w-full"/>
                    <h3 className={`${classes.titleBand} ${exo.className}`}>
                        {title}
                    </h3>
        <button
          type="button"
          onClick={openModal}
          className={`absolute rounded-[50%] top-[35%] left-[45%]  flex items-center justify-center  bg-black/50 p-4 text-[20px] cursor-pointer font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ${classes.play}`}
          >
         <FaPlay />
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center bg-[rgba(0,0,0,0.7)]">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[70%] flex flex-col justify-right transform overflow-hidden bg-transparent text-right align-middle shadow-xl transition-all  mt-[80px]">
                    <div className=''>
                        <button
                      type="button"
                      className="text-right text-[20px] font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      X
                    </button></div>
                  <div className="mt-2">
                  <iframe width="100%" height="500px" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
        </Container>
    )
}
export default PuneriTvCard;