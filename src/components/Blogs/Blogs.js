import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className='q-a-section'>
            <h2>What is context API?</h2>
            <h5 ><li>React context API is a way for passing global variable in entire react app.it is called "props drilling".props can move to grandparents to parents and parents to child.it's very easier for changing entire state at the same time.also react context API enables you to exchange unique details by props drilling.</li></h5>
            <h2>What is semantic tag?</h2>
            <h5><li>Semantic HTML tag clearly describe to both browser and developer. what is going to be happen on web page. semantic tag usage essential in web page for building meaningful application.</li></h5>
            <h2>The difference between Inline, Inline block and block element?</h2>
            <h6>inline</h6>
            <h5><li>Inline element doesn't start on new line. only occupy it's required height and width.also you can not set height and width values.</li></h5>
            <h6>inline-block</h6>
            <h5><li>Inline-block element doesn't start on new line.it's formatted like inline element.But, you can set height and width values.</li></h5>
            <h6>Block</h6>
            <h5><li>Block element start on new line. also, it occupy full width.and start on new line. you can set height and width values.</li></h5>
        </div>
    );
};

export default Blogs;