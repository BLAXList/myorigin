import React, { useState, useEffect } from 'react';

import { Course } from './interfaces';
import CourseItem from './components/CourseItem';
import NewCourseForm from './components/NewCourseForm';
import CoursesService from './services/CoursesService';

import './App.css';

const App = () => {
  const [courses ,setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  const toggleFormVisable = () =>{
    setFormVisible(!formVisible);
  };

  const fetchCourses = () => {
    CoursesService.fetchCourses()
      .then(courses => {
        setCourses(courses);
      });
  }

  const handleNewCourseCreated = (course: Course) => {
    fetchCourses();
    setFormVisible(false);
  }

  useEffect(() => {
    fetchCourses();
  },[]);

  return (
    <div className="App">
      <ul>
        {courses.map((item) => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
      <button onClick={toggleFormVisable}>New course</button>
      {formVisible &&
        <NewCourseForm onNewCourseCreated={handleNewCourseCreated}/>
      }
    </div>
  );
}
export default App;
