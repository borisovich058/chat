import react from 'react';
import socket from '../socket';

function JoinBlock() {
    return (
        <div className="Join-Block">
            <input type='text' placeholder="Room ID"/>
            <input type="text" placeholder="Your Name"/>
            <button className="btn btn-success">Войти</button>
        </div>
        
    )
};

export default JoinBlock;