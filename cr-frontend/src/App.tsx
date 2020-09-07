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

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(courses => {
        setCourses(courses);
      });
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
        <NewCourseForm />
        
      }
    </div>
  );
}
export default App;
