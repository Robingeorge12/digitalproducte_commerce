import React from 'react'
import {Routes,Route} from "react-router-dom"
import HomePage from '../HomePage/HomePage'
import Header from '../Header/Header'
import FilterHeader from '../FilterHeader/FilterHeader'
import Gif from "../GifFolder/Gif"
import SearchProduct from '../SearchProduct/SearchProduct'
import DashboardPage from '../../WorkTwo/DashboardPage'
import ChatCard from '../../WorkTwo/ChatCard'
import IoTCode from '../../WorkTwo/IoTCode'
import IoTHardWare from '../../WorkTwo/IoTHardWare'
import OssPlan from "../../WorkTwo/OssPlan"
import LoginPage from '../../WorkTwo/LoginPage'
import Path from "../../WorkTwo/Path"
import SignUpPage from "../../WorkTwo/SignUpPage"
import SourceCode from '../../WorkTwo/SourceCode'


function AllRoute() {

  return (
    <div> 
        
       <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/filterheader" element={<FilterHeader />} />
<Route path="/searchproduct" element={<SearchProduct />} />
<Route path="/dashboard" element={<DashboardPage />} />

<Route path="/chatcard" element={<ChatCard />} />
<Route path="/iotcodes" element={<IoTCode />} />
<Route path="/iothardware" element={<IoTHardWare />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/ossplan" element={<OssPlan />} />


<Route path="/path" element={<Path />} />
<Route path="/signup" element={<SignUpPage />} />
<Route path="/sourcecode" element={<SourceCode />} />



<Route path="/gif" element={<Gif />} />

       </Routes>

    </div>
  )
}

export default AllRoute