import React, { Component } from "react";

export class NewsLetter extends Component {
  render() {
    return (
      <div>
        {/* /newsletter*/}
        <section className="newsletter py-5">
          <div className="container">
            <div className="newslettergrids row">
              <div className="col-md-6 mb-md-0 mb-4 newsleft">
                <h3>Sign up for Newsletter !</h3>
              </div>
              <div className="col-md-6 newsright">
                <form action="#" method="post">
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    name="email"
                    required
                  />
                  <input type="submit" defaultValue="Submit" />
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* //newsletter*/}
      </div>
    );
  }
}

export default NewsLetter;
