import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'The PWA - The Complete Guide' }
        ]
    }

    render () {
        const urlslash = this.props.match.url+"/";

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link 
                                    key={course.id} 
                                    to={urlslash + course.id+"/"+course.title}>
                                    <article className="Course" key={course.id}>{course.title}</article>
                                </Link>
                            )
                        } )
                    }
                </section>
                <Route path={urlslash+":courseID/:courseTitle"} component={Course} />

            </div>
        );
    }
}

export default Courses;