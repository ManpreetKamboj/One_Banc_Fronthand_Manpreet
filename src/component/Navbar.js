import React from 'react';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
//import "./index.css";
class Navbar extends React.Component {

  constructor() {
    super(...arguments);
    // Menu items definition
    this.menuItems = [
        {
            items: [
                { text: 'Featured' },
                { text: 'Smartphones' },
                { text: 'Tablets' },
                { text: 'Watches' },
                { text: 'Galaxy Buds' },
                { text: 'Accessories' },
                { text: 'Apps & Services' },
                { text: 'Samsung Care+' }
                

            ],
            text: 'Mobile'
        },
        {
            items: [
              { text: 'Featured' },
              { text: 'Smartphones' },
              { text: 'Tablets' },
              { text: 'Watches' },
              { text: 'Galaxy Buds' },
              { text: 'Accessories' },
              { text: 'Apps & Services' },
              { text: 'Samsung Care+' }
            ],
            text: 'TV & AV'
        },
        {
            items: [
              { text: 'Featured' },
              { text: 'Smartphones' },
              { text: 'Tablets' },
              { text: 'Watches' },
              { text: 'Galaxy Buds' },
              { text: 'Accessories' },
              { text: 'Apps & Services' },
              { text: 'Samsung Care+' }
            ],
            text: 'Home Appliances'
        },
        {
            items: [
              { text: 'Featured' },
              { text: 'Smartphones' },
              { text: 'Tablets' },
              { text: 'Watches' },
              { text: 'Galaxy Buds' },
              { text: 'Accessories' },
              { text: 'Apps & Services' },
              { text: 'Samsung Care+' }
            ],
            text: 'Computing'
        },
        { text: 'Displays' },
        { text: 'Offers' }
    ];
}
    
    render() {
      return (   
        <>
        <div className="container-fluid main_menu">
        <div className="row">
            <div className="col-md-12 col-12 ">
                <nav className="navbar navbar-expand-lg mr-auto py-0 "  >
                    <a className="navbar-brand " href="#">SAMSUNG</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                    <div className="vertical-menu collapse navbar-collapse " id="navbarNavAltMarkup">
                    <MenuComponent className="menubar" style={{justifyContent:"center", backgroundColor: "white"}} items={this.menuItems}/>
                    
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="/">Explore <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">Support</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="/">Business</a>
                          </li>
                          
                          
                       
                        
                      </ul>
                      
                    </div>
                  </nav>
                  
                 
            

           

            </div>

        </div>
        <div className="row">
            <div className="col-md-12 col-12 ">
                
            <div class="wrapper">
  <a class="logo">Galaxy Note10 | Note10+</a>

  <ul class="main-nav">
    <li><a href="#">SPECS</a></li>
    <li><a href="#">SUPPORT</a></li>
    <li><a href="#">COMPARE</a></li>
    <li><button type="button" class="btn btn-primary btn-lg">BUY NOW</button></li>
  </ul>
</div>
                 
            

           

            </div>

        </div>
        <div className="row">
            <div className="col-md-12 col-12 ">
            <div class="wrapper">
  

  <ul class="main-nav1">
    <li><a href="#">HIGHLIGHTS</a></li>
    <li><a href="#">DESIGN</a></li>
    <li><a href="#">PERFORMANCE</a></li>
    <li><a href="#">CAMERA</a></li>
    <li><a href="#">S PEN</a></li>
    <li><a href="#">ACCESORIES</a></li>
    <li><a href="#">OFFER</a></li>
  </ul>
</div>
                  
                 
            

           

            </div>

        </div>
    </div>
    

        </>
  
      )
       
      
    }
  }
  export default Navbar;
  