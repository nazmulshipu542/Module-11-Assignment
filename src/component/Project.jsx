const Project = () => {
    let status = true;
    return (
        <div>
            <h2>this is Project jsx</h2>
            <p>my name is Nazmul Islam</p>
            <body>jsx Conditional Rendering Using Ternary Operator:</body>
            <p>status is : </p>
            <br/>
            {
                status?
                <button>Logout</button>
                :
                <button>Login</button>
            }
            <hr/>
        </div>
    );
};

export default Project;