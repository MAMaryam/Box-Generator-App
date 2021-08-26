import React from 'react';

const Box = (props) => {
    const boxStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: props.color
        // backgroundColor: blue
    }
    return (
        <div className="d-inline justify-content-around">
            <div style={boxStyle}>
            </div>
            <div>
                <button className="btn btn-danger" onClick={() => props.onDeleteHandler(props.index)}>Delete</button>
            </div>
        </div>
    )
}
export default Box;