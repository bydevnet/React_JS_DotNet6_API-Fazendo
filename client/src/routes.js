// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Login from './pages/Login';

// export default function Routes(){
//     return(
//         <BrowserRouter>
//             <Switch>
//                 <Route pat="/" component={Login}/>
//             </Switch>
//         </BrowserRouter>
//     )
// }

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}