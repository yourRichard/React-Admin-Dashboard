import { colorModeContext , useMode  } from './theme';
import { CssBaseline , ThemeProvider } from '@mui/material';
import { Routes , Route } from 'react-router-dom';
import Topbar from "./scenes/global/Topbar";
import LeftSideNavbar from './scenes/global/LeftSideNavbar';
import Dashboard from './scenes/dashboard/Index';
import Team from "./scenes/team";
//import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
//import Bar from "./scenes/bar";
import Form from "./scenes/form";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar/index";
//import Geography from "./scenes/geography";
//import { Routes, Route } from 'react-router-dom';
import './index.css';

function App() {

  const [theme , setTheme] = useMode();
  return (

    <colorModeContext.Provider value={setTheme}>
       <ThemeProvider theme={theme}>
         <CssBaseline/>
         <div className="App">
         <LeftSideNavbar />
          <main className="content">
            <Topbar />
             <Routes> 
               <Route path="/" element={<Dashboard />} /> 
               <Route path="/team" element={<Team />} /> 
              <Route path="/contacts" element={<Contacts />} />
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              <Route path="/form" element={<Form />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
             </Routes>  
          </main>
         </div>
       </ThemeProvider>
    </colorModeContext.Provider>

  );
}

export default App;
