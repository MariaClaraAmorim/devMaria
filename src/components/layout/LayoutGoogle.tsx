import "./google.css";

import { IoIosSearch } from "react-icons/io";

export default function LayoutGoogle() {
  return (
    <>
      <header>
        <div className="left-header"></div>
        <div className="right-header">
          <span className="nav-space">Gmail</span>
          <span className="nav-space">Images</span>
          <span className="nav-space">apps</span>
          <div className="btnGoogle">
            <a href="#">Sign In</a>
          </div>
        </div>
      </header>
      <div className="main-body">
        <div className="google-logo">
          <a href="#">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              height="92px"
              width="272px"
              alt="Google Logo"
            />
          </a>
        </div>
        <div className="nav-search">
          <div className="search-bar">
            <div className="search-icon">
              <a href="/home">
                <IoIosSearch />
              </a>
            </div>
            <div className="input-area">
              <input
                className="area"
                type="text"
                value="https://devmaria.bohr.io"
              />
            </div>
            <div className="voice-icon icons-pointer">
              <svg
                className="goxjub"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                ></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path
                  fill="#fbbc05"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                ></path>
              </svg>
            </div>
            <div className="camera-icon icons-pointer">
              <svg
                className="Gdd5U"
                focusable="false"
                viewBox="0 0 192 192"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="none" height="192" width="192"></rect>
                <g>
                  <circle fill="#34a853" cx="144.07" cy="144" r="16"></circle>
                  <circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle>
                  <path
                    fill="#ea4335"
                    d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"
                  ></path>
                  <path
                    fill="#fbbc05"
                    d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="twobuttons">
          <div className="btnGoogle">
            <a href="/home">Ver portfolio</a>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
