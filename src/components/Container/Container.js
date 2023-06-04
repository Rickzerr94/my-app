import './container.css'
import React from 'react';
import Counter from "../Counter/Counter";
import Emoji from './Images/smile2.png';
import Emoji2 from './Images/smile3.png';
import Emoji3 from './Images/shock.png';
import Emoji4 from './Images/poop.png';
import Emoji5 from './Images/sunglass.png';

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
                <h2>Vote for you favorite emoji</h2>
                <ul>
                    <li>
                        <img src={Emoji} alt="emoji"/>
                        <Counter />
                    </li>
                    <li>
                        <img src={Emoji2} alt="emoji"/>
                        <Counter />
                    </li>
                    <li>
                        <img src={Emoji3} alt="emoji"/>
                        <Counter />
                    </li>
                    <li>
                        <img src={Emoji4} alt="emoji"/>
                        <Counter />
                    </li>
                    <li>
                        <img src={Emoji5} alt="emoji"/>
                        <Counter />
                    </li>
                </ul>
            </div>
            <div className='centralContainer'>
                {this.renderList(users)}
            </div>
        </div>
    }
}

export default Container;