import React from "react";
import SearchForm from "../components/SearchForm";

export default function Background() {
  return (
    <div className="container-slide">
      <div className="outer-slide">
        <div className="details-slide">
          {/* <h1>Changing Background Images</h1>
          <h2>
            <span>Using HTML and CSS only</span> |
            <span>Please subscribe to our channel</span>
          </h2> */}
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="slider_banner_info_w3ls">
                  {" "}
                  <h1 className="text-uppercase mb-5">
                    A new way to explore <br />
                    real estate
                  </h1>
                  <a
                    href="/#"
                    className="read"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    role="button"
                  >
                    Read more{" "}
                  </a>
                </div>
              </div>
              <div className="col-sm" style={{ marginTop: "6rem" }}>
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
