"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="pt-4">
      <div className="flex flex-col justify-center items-center p-5">
        <div className="flex pb-5 gap-10">
          <div>
             <a href="https://www.grubhub.com/restaurant/ichiban-sushi--bar-27625-shangri-la-dr-canyon-country/1437256" target="_blank"> <Image
              src="/static/grubhub_logo.png"
              alt="grubhub logo"
              height={100}
              width={100}
            ></Image></a>
            
          </div>
          <div>
            <a href="https://www.ubereats.com/store/ichiban-sushi-%26-bar/SSFugl8EQyqLzEvZdvo-Sw" target="_blank">   <Image
              src="/static/ubereats_logo.png"
              alt="uber logo"
              height={100}
              width={100}
            ></Image></a>
          
          </div>
        </div>
        <div>
          <p className="text-2xl"> Contact: </p>
        </div>
        <div>
          <p className="py-2 text-2xl hover:bg-red-200 hover:text-black hover:rounded-2xl hover:p-2">
            <a href="tel:+16613608526">(661) 360-8526</a>{" "}
          </p>
        </div>

        <div>
          <p className="p-2 hover:bg-red-200 hover:text-black hover:rounded-2xl hover:p-2">
            <a href="https://goo.gl/maps/qBwuJL1U36P6FE238" target="_blank">
              27625 Shangri-La Dr., Santa Clarita, CA 91351
            </a>
          </p>
        </div>
        <div className="text-sm py-2">
          <p>Sun-Thur: 12 PM to 10 PM</p>
          <p>Fri-Sat: 12 PM to 10:30 PM</p>
        </div>
        <div className="py-2">
          <div className="text-xs">
            © {new Date().getFullYear()} Ichiban Sushi & Bar, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}
