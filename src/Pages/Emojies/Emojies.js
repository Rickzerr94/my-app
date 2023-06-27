import React from "react";

import Emoji from "./Images/smile2.png";
import Counter from "../../components/Counter/Counter";
import Emoji2 from "./Images/smile3.png";
import Emoji3 from "./Images/shock.png";
import Emoji4 from "./Images/poop.png";
import Emoji5 from "./Images/sunglass.png";

import './Emojies.css'




const Emojies = () => {
return <div className='aside'>
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
}

export default Emojies