export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center p-5">
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
          <div className="text-xs">© {new Date().getFullYear()} Ichiban Sushi & Bar, Inc.</div>
        </div>
      </div>
    </footer>
  );
}
