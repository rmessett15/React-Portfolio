import React from 'react';

const styles = {
    orangeBox: {
        height: "50px",
        width: "50px",
        margin: "10px",
        backgroundColor: "orange",
    },
};

function OrangeBoxes() {
    const boxes = [];
    for (var i = 0; i < 3; i++) {
        boxes.push(<div className='orange-box' key={'orange-box-'+i} style={styles.orangeBox}></div>)
    }
    return <>{boxes}</>;
}

export default OrangeBoxes;