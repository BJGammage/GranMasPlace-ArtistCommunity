import React from 'react';
import { Link } from 'react-router-dom';

const ViewArtist = () => {
    return (
        <div>
        <h3>This is the new Artist Page</h3>
        <div><Link to={'/'}>G Ma's Place</Link> || <Link to={'/artist'}>Back to Collection</Link></div>
        </div>
    )
}

export default ViewArtist;
