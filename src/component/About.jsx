const About = () => {
    let marks = 90;
    return (
        <div>
            <h2>this is About jsx</h2>
            <br/>
            <body/>Short hand else if:
            <body/>marks = 90
            <br/>
            {
            marks > 80?
            <h3>Very Good</h3>
            :
            <h3>Average Marks</h3>
            }
            <hr/>
        </div>
    );
};

export default About;