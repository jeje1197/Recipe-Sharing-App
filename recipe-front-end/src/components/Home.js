function Home() {
    // return <div>Home Page Component</div>;

    return (
        <div className="Home">
            <div className="card" style={{width: "18rem"}}>
                <img src="../images/eggs.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Scrambled Eggs</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Delicious!</h6>
                    <p className="card-text">Add some milk for a little extra flavor</p>
                    <a href="#" className="btn btn-primary">See more info</a>
                </div>
            </div>
        </div>
    )
}

export default Home;