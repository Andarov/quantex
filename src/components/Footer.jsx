import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-header-bg py-6 shadow-md">
      <div className="w-full max-w-base mx-auto px-5">
        <div className="border-b border-white/20 flex justify-between items-center md:border-nonez">
        <Link to="/" className="text-2xl font-semibold">
          Quantex
        </Link>

        <p className="text-white/20 text-sm font-bold hidden md:block">
          © 2023 Quantex. All rights reserved
        </p>

        <ul className="flex items-center space-x-1 md:space-x-2">
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M10.7874 23.4709C17.7667 20.3663 22.4206 18.3195 24.7493 17.3305C31.3979 14.507 32.7795 14.0165 33.68 14.0002C33.878 13.9968 34.3208 14.0469 34.6077 14.2845C34.8499 14.4852 34.9165 14.7563 34.9484 14.9465C34.9803 15.1368 35.02 15.5702 34.9884 15.9088C34.6281 19.774 33.0692 29.1539 32.276 33.483C31.9404 35.3148 31.2796 35.929 30.6399 35.9891C29.2496 36.1197 28.1938 35.051 26.8473 34.1497C24.7401 32.7395 23.5498 31.8615 21.5044 30.4854C19.1407 28.895 20.673 28.0209 22.0201 26.5923C22.3726 26.2185 28.4983 20.5295 28.6169 20.0135C28.6317 19.9489 28.6455 19.7083 28.5055 19.5813C28.3655 19.4543 28.1589 19.4977 28.0098 19.5322C27.7985 19.5812 24.4323 21.8529 17.9113 26.3473C16.9558 27.0172 16.0904 27.3435 15.315 27.3264C14.4602 27.3076 12.8159 26.833 11.5935 26.4273C10.0942 25.9296 8.90254 25.6666 9.0063 24.8215C9.06035 24.3813 9.65403 23.9311 10.7874 23.4709Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M30.9014 13H34.5816L26.5415 22.1893L36 34.6938H28.5941L22.7935 27.1099L16.1563 34.6938H12.4739L21.0736 24.8648L12 13H19.5939L24.8372 19.932L30.9014 13ZM29.6098 32.491H31.649L18.4859 15.0871H16.2976L29.6098 32.491Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35.7379 14.1401C37.0229 14.486 38.0361 15.4992 38.3821 16.7842C39.0246 19.1318 38.9999 24.0247 38.9999 24.0247C38.9999 24.0247 38.9999 28.8929 38.3821 31.2405C38.0361 32.5255 37.0229 33.5387 35.7379 33.8846C33.3903 34.5024 23.9999 34.5024 23.9999 34.5024C23.9999 34.5024 14.6342 34.5024 12.2619 33.8599C10.9769 33.5139 9.96375 32.5008 9.61779 31.2158C9 28.8929 9 24 9 24C9 24 9 19.1318 9.61779 16.7842C9.96375 15.4992 11.0016 14.4613 12.2619 14.1153C14.6095 13.4976 23.9999 13.4976 23.9999 13.4976C23.9999 13.4976 33.3903 13.4976 35.7379 14.1401ZM28.8187 24L21.0098 28.4975V19.5025L28.8187 24Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
        </div>
        <p className="text-white/20 text-sm font-bold pt-5 block md:hidden">
          © 2023 Quantex. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
