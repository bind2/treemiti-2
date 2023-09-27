import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layout/navbar/Navbar';
import Main from './layout/main/Main';
import Footer from './layout/footer/Footer';
import Root from './root/Root';
import CourseDetails from './internal-pages/course-details/CourseDetails';
import StudentSupport from './internal-pages/student-support/StudentSupport';
import ErrorPage from './error-page/ErrorPage';
import CareerGuidance from './internal-pages/career-guidance/CareerGuidance';
import Feedback from './internal-pages/feedback/Feedback';
import StudentFeedback from './internal-pages/student-feedback/StudentFeedback';
import EmployeFeedback from './internal-pages/employe-feedback/EmployeFeedback';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<React.Fragment> <Navbar /> <Main /> <Footer /> </React.Fragment>}>
          <Route path='/' element={<Root />} />
          <Route path='/course/:id/:id' element={<CourseDetails />} />
          <Route path='/about/:id/:id' element={<StudentSupport />} />
          <Route path='/career-guidance' element={<CareerGuidance />} />
          <Route path='/feedback' element={<Feedback />}>
            <Route path='/feedback/student-feedback' element={<StudentFeedback />} />
            <Route path='/feedback/employe-feedback' element={<EmployeFeedback />} />
          </Route>
        </Route>
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
