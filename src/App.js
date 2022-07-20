import React from 'react'


import Navbar from './Navbar';

import Footer from './Footer';

import Herosection from './Herosection';

import Appsection from './Appsection';

import Cardsection from './Cardsection';

const App=()=>
{
    return(
    <div>
        <h1>nandha kumar</h1>
        <Navbar/>
<Herosection/>
<Appsection></Appsection>
<Cardsection/>
        <Footer></Footer>
        </div>
    );
}

export default App;