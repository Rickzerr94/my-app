import './container.css'
import React from 'react';

class Container extends React.Component {
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
            <div className='aside'>
                <h2>Left aside panel</h2>
                <ul>
                    <li>Users</li>
                    <li>Contacts</li>
                    <li>Chats</li>
                </ul>
            </div>
            <div className='centralContainer'>
                {this.renderList(users)}
            </div>
        </div>
    }
}

export default Container;