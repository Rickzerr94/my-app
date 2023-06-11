import React from 'react';
import './userlist2.css';

class UserList extends React.Component {
    state = {
        users: [],
        albums: [],
        photos: [],
        selectedUser: null,
        selectedAlbum: null
    };

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ users }))
            .catch(error => console.log(error));
    };

    fetchAlbums = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(albums => this.setState({ albums, selectedUser: userId, selectedAlbum: null }))
            .catch(error => console.log(error));
    };

    fetchPhotos = (albumId) => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(photos => this.setState({ photos, selectedAlbum: albumId }))
            .catch(error => console.log(error));
    };

    renderUsers() {
        const { users } = this.state;
        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <div>{user.name}</div>
                        <button onClick={() => this.fetchAlbums(user.id)}>Album</button>
                        {this.renderAlbums(user.id)}
                    </li>
                ))}
            </ul>
        );
    }

    renderAlbums(userId) {
        const { albums, selectedUser } = this.state;
        if (selectedUser === userId) {
            return (
                <ul>
                    {albums.map(album => (
                        <li key={album.id}>
                            <div>{album.title}</div>
                            <button onClick={() => this.fetchPhotos(album.id)}>Photos</button>
                            {this.renderPhotos(album.id)}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    renderPhotos(albumId) {
        const { photos, selectedAlbum } = this.state;
        if (selectedAlbum === albumId) {
            return (
                <ul>
                    {photos.map(photo => (
                        <li key={photo.id}>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            <div className='userlist2'>
                <h2>User List</h2>
                {this.renderUsers()}
            </div>
        );
    }
}

export default UserList
