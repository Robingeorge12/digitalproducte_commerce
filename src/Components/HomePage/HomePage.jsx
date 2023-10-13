import React from 'react'
import "./HomePage.css"
import Header from '../Header/Header'
import FilterHeader from '../FilterHeader/FilterHeader'
import LandingPage from '../LandingPage/LandingPage'
import SoftwareCard from "../SoftwareCard/SoftwareCard"
import PaidSoftware from '../PaidSoftware/PaidSoftware'
import WalletText from '../WalletText/WalletText'
import SellerContent from '../SellerContent/SellerContent'
import IndustryCard from '../IndustryCard/IndustryCard'
import WorkDesk from '../WorkDesk/WorkDesk'
import Testimony from '../Testimony/Testimony'


function HomePage() {
  return (
    <div className='homepage-container'>

{/* <Header /> 
 <FilterHeader /> */}
<LandingPage />
<SoftwareCard />
<PaidSoftware />
<WalletText />
<SellerContent />
<IndustryCard />
<WorkDesk />
<Testimony />

    </div>
  )
}

export default HomePage