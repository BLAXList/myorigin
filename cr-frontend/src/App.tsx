import React, { useState, useEffect } from 'react';

import { Course } from './interfaces';
import CourseItem from './components/CourseItem';
import NewCourseForm from './components/NewCourseForm';

import './App.css';

const App = () => {
  const [courses ,setCourses] = useState<Course[]>([]);
  const [formVisable, setFormVisable] = useState<boolean>(false);

  const toggleFormVisable = () =>{
    setFormVisable(!formVisable);
  };

  const fetchCourses = () => {
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(courses => {
      setCourses(courses);
    });
  }

  const handleNewCourseCreated = (course: Course) => {
    fetchCourses();
    setFormVisable(false);
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
      {formVisable &&
        <NewCourseForm onNewCourseCreated={handleNewCourseCreated}/>
      }
    </div>
  );
}
export default App;
