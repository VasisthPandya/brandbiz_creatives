import React from "react";
import "./App.css";
import "./components/navbar";
import Home from "./components/home";
import BrandingCreatives from "./components/branding_creatives";
import SocialMediaMarketing from "./components/social_media_markerting";
import GraphicDesign from "./components/graphic_design";
import AiBasedSolution from "./components/ai_based_solution";
import SearchEngineOptimization from "./components/search_engine_optimization";
import WebDesign from "./components/web_design";
import PodcaseAndRadio from "./components/podcast_radio";
import VideoFilmMaking from "./components/video_film_making";
import LeadGeneration from "./components/lead_generation";
import CopyWriting from "./components/copy_writing";
import InfluencerMarketing from "./components/influencer_marketing";
import PublicRelation from "./components/public _relation";
import NewsBroadcast from "./components/news_broadcast";
import LegalSolutions from "./components/legal_solutions";
import FinancialSolutions from "./components/financial_solutions";
import BusinessConsulting from "./components/business_consulting";
import CustomizedBudget from "./components/customized_budget";
import OurNetwork from "./components/our_network";
import ContactUs from "./components/contact_us";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <header className="bg-body-tertiary text-white">
        <div className="container-fluid">
          <Navbar />
          <Home id="home"/>
          <BrandingCreatives />
          <SocialMediaMarketing />
          <GraphicDesign />
          <AiBasedSolution />
          <SearchEngineOptimization />
          <WebDesign />
          <PodcaseAndRadio />
          <VideoFilmMaking />
          <LeadGeneration />
          <CopyWriting />
          <InfluencerMarketing />
          <PublicRelation />
          <NewsBroadcast />
          <LegalSolutions />
          <FinancialSolutions />
          <BusinessConsulting />
          <CustomizedBudget />
          <OurNetwork />
          <ContactUs  id="contact_us"/>
        </div>
      </header>
      <footer className="bg-body-tertiary text-white text-center">
        <p className="text-primary">&copy; 2024 BrandBiz Creatives</p>
      </footer>
    </div>
  );
}

export default App;
