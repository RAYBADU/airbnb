import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-15 flex justify-between space-x-8 bg-gray-100 shadow-inner flex-wrap mt-20  max-md:space-x-0 max-md:space-y-8">
      <ul className="space-y-2">
        <p className="font-semibold">Support</p>
        <li>
          <a href="#">Help Center</a>
        </li>
        <li>
          <a href="#">Get help with a safety issue</a>
        </li>
        <li>
          <a href="#">AirCover</a>
        </li>
        <li>
          <a href="#">Travel insurance</a>
        </li>
        <li>
          <a href="#">Anti-discrimination</a>
        </li>
        <li>
          <a href="#">Disability support</a>
        </li>
        <li>
          <a href="#">Cancellation options</a>
        </li>
        <li>
          <a href="#">Report neighbourhood concern</a>
        </li>
      </ul>

      <ul className="space-y-2">
        <p className="font-semibold">Hosting</p>
        <li>
          <a href="#">Airbnb your home</a>
        </li>
        <li>
          <a href="#">Airbnb your experience</a>
        </li>
        <li>
          <a href="#">Airbnb your service</a>
        </li>
        <li>
          <a href="#">AirCover for Hosts</a>
        </li>
        <li>
          <a href="#">Hosting resources</a>
        </li>
        <li>
          <a href="#">Community forum</a>
        </li>
        <li>
          <a href="#">Hosting responsibly</a>
        </li>
        <li>
          <a href="#">Airbnb-friendly apartments</a>
        </li>
        <li>
          <a href="#">Join a free Hosting class</a>
        </li>
        <li>
          <a href="#">Find a co-host</a>
        </li>
      </ul>

      <ul className="space-y-2">
        <p className="font-semibold">Airbnb</p>
        <li>
          <a href="#">2025 Summer Release</a>
        </li>
        <li>
          <a href="#">Newsroom</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Investors</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Airbnb.org emergency stays</a>
        </li>
      </ul>

      <div className="flex justify-between px-4 relative bottom-0 w-full mt-20 max-md:block max-md:space-y-4">
        <div className="flex space-x-4 max-md:block max-md:space-y-4">
          <p>&copy; 2025 Airbnb, Inc.</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Your Privacy Choices</p>
        </div>

        <div className="flex space-x-4 max-md:block max-md:space-y-4">
          <p>English(US)</p>
          <p>GHS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
