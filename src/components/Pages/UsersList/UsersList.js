import React from 'react';

import "./UsersList.css"



class UsersList extends React.Component {
    renderList = (list) => {
        return list.map(elem => {
            return <div key={elem.id}>
                <h4>Name: {elem.name}<span>({elem.age})</span></h4>
            </div>
        })
    }
    render() {
        const users = [{
            name: 'Yar',
            age: 29,
            id: 0,
        },
            {
                name: 'Den',
                age: 30,
                id: 1,
            },
            {
                name: 'Ivan',
                age: 27,
                id: 2,
            },
            {
                name: 'Anna',
                age: 27,
                id: 3,
            },
            {
                name: 'Nastya',
                age: 31,
                id: 4,
            },]
        return <div className='container'>
            <h2>Users list</h2>
                {this.renderList(users)}
        </div>
    }
}

export default UsersList;