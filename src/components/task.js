import React from 'react';
import { useParams } from "react-router-dom";
import reactBook from './react.jpg';

function Task() {
    const { id, item } = useParams();
    return (
        <div>
            <h4 className="text-success">{item} purchased successfully</h4>
            <p>Transaction ID use for future Reference: <b className="text-primary">#{id}</b></p>
            <img src={reactBook} />
        </div>
    )


}

export default Task;