import React from 'react';

const ChatBox = () => {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-4">
                    <ul className="list-group list-users">
                        <li className="list-group-item active">User 1</li>
                        <li className="list-group-item">User 2</li>
                        <li className="list-group-item">User 3</li>
                        <li className="list-group-item">User 4</li>
                        <li className="list-group-item">User 5</li>
                        <li className="list-group-item">User 2</li>
                        <li className="list-group-item">User 3</li>
                        <li className="list-group-item">User 4</li>
                        <li className="list-group-item">User 5</li>
                        <li className="list-group-item">User 2</li>
                        <li className="list-group-item">User 3</li>
                        <li className="list-group-item">User 4</li>
                        <li className="list-group-item">User 5</li>
                    </ul>
                </div>
                <div className="col-8">
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.</p>
                        <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger
                                container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Your message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                    </div>
                    <button type="button" className=" btn btn-primary float-right" >Send</button>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;