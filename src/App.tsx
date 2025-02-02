
import './App.css'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { HomePage } from './pages/HomePage'
import { StudyMaterial } from "./pages/StudyMaterial";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SemesterMainPage } from './pages/SemesterPages/SemesterMainPage';
import { FacultyInfo } from "./pages/FacultyInfo";
import { SubjectPage } from './pages/SemesterPages/SubjectPage';
import { Breadcrumb } from './components/BreadCrumb';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {

  return (
    <div className='flex flex-col max-h-screen min-h-screen'>

    
    <BrowserRouter>
    <SpeedInsights/>
    <Analytics/>
    <Header/>
    <Breadcrumb/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/StudyMaterial" element={<StudyMaterial />} />
      <Route path="/FacultyInfo" element={<FacultyInfo />} />
      
      {/* Dynamic route for each semester */}
      <Route path="/StudyMaterial/Semester/:semesterId" element={<SemesterMainPage />} />
      <Route path="/StudyMaterial/Semester/:semesterId/:subject" element={<SubjectPage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  
  </div>
  )
}

export default App
