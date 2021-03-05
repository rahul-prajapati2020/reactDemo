import React from 'react';

class About extends React.Component {

   render() {
      return (
         <>
            <div id="overviews" className="section lb">
               <div className="container">
                  <div className="section-title row text-center">
                     <div className="col-md-8 offset-md-2">
                        <h3>About</h3>
                        <p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                        lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
                     </div>
                  </div>
                  {/* <!-- end title --> */}

                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box">
                           <h4>2018 BEST WEB HOSTING COMPANY</h4>
                           <h2>Awards Winner Support Center</h2>
                           <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam
                            risus. Sed a tellus quis mi rhoncus dignissim.</p>

                           <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus
                           bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                            montes, nascetur ridiculus mus. Sed vitae rutrum neque. </p>

                           <a href="#" className="hover-btn-new"><span>Learn More</span></a>
                        </div>
                        {/* <!-- end messagebox --> */}
                     </div>
                     {/* <!-- end col --> */}

                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="post-media wow fadeIn">
                           <img src="images/about_02.jpg" alt="" className="img-fluid img-rounded" />
                        </div>
                        {/* <!-- end media --> */}
                     </div>
                     {/* <!-- end col --> */}
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="post-media wow fadeIn">
                           <img src="images/about_03.jpg" alt="" className="img-fluid img-rounded" />
                        </div>
                        {/* <!-- end media --> */}
                     </div>
                     {/* <!-- end col --> */}

                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="message-box">
                           <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                           voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                           <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus
                            bibendum.</p>

                           <a href="#" className="hover-btn-new"><span>Learn More</span></a>
                        </div>
                        {/* <!-- end messagebox --> */}
                     </div>
                     {/* <!-- end col --> */}

                  </div>
                  {/* <!-- end row --> */}
               </div>
               {/* <!-- end container --> */}
            </div>
            {/* <!-- end section --> */}
         </>
      )
   }
}
export default About;