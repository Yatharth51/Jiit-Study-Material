import "@fontsource/poppins";
import './App.css'
import { HomePage } from './pages/HomePage'
import { StudyMaterial } from "./pages/StudyMaterial";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SemesterMainPage } from './pages/SemesterPages/SemesterMainPage';
import { FacultyInfo } from "./pages/FacultyInfo";
import { SubjectPage } from './pages/SemesterPages/SubjectPage';
import { Breadcrumb } from './components/BreadCrumb';

function App() {

  return (
    <BrowserRouter>
    <Breadcrumb/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/StudyMaterial" element={<StudyMaterial />} />
      <Route path="/FacultyInfo" element={<FacultyInfo />} />
      
      {/* Dynamic route for each semester */}
      <Route path="/StudyMaterial/Semester/:semesterId" element={<SemesterMainPage />} />
      <Route path="/StudyMaterial/Semester/:semesterId/:subject" element={<SubjectPage />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
