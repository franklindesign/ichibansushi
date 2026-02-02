'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import  bgimage from '../public/images/bg/2212395823.webp' 
import logo from '../public/images/logo.svg'

const navigation = [

  { name: 'Visit our location', href: 'https://share.google/nWhUabHJhAbkHuRDA' },
  { name: 'Order on Grubhub', href: 'https://www.grubhub.com/restaurant/ichiban-sushi--bar-27625-shangri-la-dr-canyon-country/1437256' },
  { name: 'Order on Uber Eats', href: 'https://www.ubereats.com/store/ichiban-sushi-%26-bar/SSFugl8EQyqLzEvZdvo-Sw' },
]

 
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
     
    <div className="bg-zinc-950 relative">
           <Image 
      alt="bg"
      src={bgimage}
      fill
      sizes="100vw"
      quality={80}
      style={{objectFit: 'cover', opacity: 0.2}}
      ></Image>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ichiban Sushi & Bar</span>
              <Image
                alt="Ichiban Sushi & Bar"
                src={logo}
                className="h-8 w-auto dark:invert"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://ichibanscv.netlify.app" className="text-sm/6 font-semibold text-white">
              View old website <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Ichiban Sushi & Bar</span>
                 <Image
                alt="Ichiban Sushi & Bar"
                src={logo}
                className="h-8 w-auto dark:invert"
              />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://ichibanscv.netlify.app"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    View old website
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
             
          />
          
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Currently under maintenance.{'   '}
              <a href="https://ichibanscv.netlify.app" className="font-semibold text-red-400">
                <span aria-hidden="true" className="absolute inset-0" />
                view old website. <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
     
          <div className="text-center ">
            
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Come in for a roll, stay awhile.
            </h1>
            
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              We are updating our website. Meanwhile, you can view our current menu on Grubhub or Ubereats.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.grubhub.com/restaurant/ichiban-sushi--bar-27625-shangri-la-dr-canyon-country/1437256"
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Grubhub
              </a>
               <a
                href="https://www.ubereats.com/store/ichiban-sushi-%26-bar/SSFugl8EQyqLzEvZdvo-Sw"
                className="rounded-md bg-zinc-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Uber Eats
              </a>
              
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
               <a href="https://share.google/nWhUabHJhAbkHuRDA" className="text-sm/6 font-semibold text-white">
                Visit our location <span aria-hidden="true">→</span>
              </a>
            </div>
            
          </div>
          
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            
          />
        </div>
      </div>
    </div>
  )
}
