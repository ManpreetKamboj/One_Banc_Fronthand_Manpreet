import React from 'react';
//import "./index.css";
//import Style from 'Style.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.webp';
import WOW from 'wowjs';
class Main extends React.Component {

  componentDidMount() {
    new WOW.WOW({
      live: false
  }).init();
  }
    
    render() {
        
      
      return (   
        <>
        <div className="container-fluid main_header">
        <div className="row">
        
        <div className="col-md-10 col-12 main_header_right wow bounceInDown center" data-wow-delay="0.5s">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img className=" w-100 " src={img1} alt="First slide"/>
                              </div>
                              <div className="carousel-item">
                                <img className=" w-100" src={img1} alt="Second slide"/>
                              </div>
                              <div className="carousel-item">
                                <img className="w-100" src={img1} alt="Third slide"/>
                              </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="sr-only">Next</span>
                            </a>
                          </div>

                    </div>




            <div className="col-md-12 col-12 wow bounceInRight" data-wow-delay="0.5s" >
                <div className="row">
               
                
                
                    <div className="col-md-12 col-12 main_header_left wow bounceInDown center" data-wow-delay="0.5s">
                       
                        <p> Introducing next-level power With Galaxy Note10 and Note10+ we've designed a mobile experience that’s like a computer, a gaming console, a movie-tech camera, and an intelligent pen, all in one device.</p>
                        
                        <div className="container">
                        <a href="/weather"><button className="btn btn-primary">BUY NOW</button></a>
                        </div>


                    </div>
                     
                   
                    
                   
                </div>

            </div>
        </div> 
    </div>
    <section className=" wow bounceInRight" data-wow-delay="0.5s">
  <div className="design"><p>DESIGN</p></div>
  <div className="item1"><h1>More screen, less</h1></div>
  <div className="item2"><h1>interruption</h1></div>
  <div className="container">
                        <a href="/weather"><button className="btn btn-primary">LEARN MORE</button></a>
                        </div>
  
</section>

<section>
  <div className="imgclass wow fadeInDown " data-wow-delay="0.5s"><img className=" w-100 h-100 " src={img2} alt="First slide"/></div>
  
  
</section>
<div class="row justify-content-center">
    <div class="col-4 content1 wow bounceInLeft" data-wow-delay="0.5s">
      <h1>Now available in two sizes: powerful and powerful</h1>
    </div>
    <div class="col-4 content2 wow bounceInRight" data-wow-delay="0.5s">
    <p> For the first time ever, you can choose the Note size that suits you best.</p>
    <div className="imgclass"><img className=" w-50 h-20" src={img3} alt="First slide"/></div>
    </div>
  </div>

  <section className=" wow bounceInDown" data-wow-delay="0.5s">
  <div className="design1"><p>PERFORMANCE</p></div>
  <div className="item3"><h1>More power. More speed.</h1></div>
  <div className="item4"><h1>More storage</h1></div>
  <div className="container">
                        <a href="/weather"><button className="btn btn-primary">LEARN MORE</button></a>
                        </div>
  
</section>


       

        </>
  
      )
       
      
    }
  }
  export default Main;
  