import React from "react";
import Navbar from "./component/Navbar.js";
import Main from "./component/Main.js";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
class App extends React.Component {
 
  render() {
    return (   
      <>
      <Navbar/>
      <Main/>
      
            </>

    )
     
    
  }
}

export default App;
