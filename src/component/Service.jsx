const Service = () => {
    let city = ['Dhaka','Barisal','Chittagong','Khulna','Rajshahi'];
    return (
        <div>
            <h2>this is Service jsx</h2>
            <body>Loop in jsx:</body>
            <br/>
            {
                city.map((items, i)=>{
                    return <li key={i.toString()}>{items}</li>
                })
            }
            <hr/>
        </div>
    );
};

export default Service;