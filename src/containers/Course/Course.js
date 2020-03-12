import React, { Component } from 'react';

class Course extends Component {
    render () {
        const Params = this.props.match.params;
        return (
            <div>
                <h1>{Params.courseTitle}</h1>
                <p>You selected the Course with ID: {Params.courseID}</p>
            </div>
        );
    }
}

export default Course;