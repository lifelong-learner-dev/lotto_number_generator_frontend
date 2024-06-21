import React, {useState} from 'react';
import axios from 'axios';
import './Lotto.css'

function Lotto() {
    const [numbers, setNumbers] = useState([]);

    const generateNumbers = async()=>{
        try{
            const response = await axios.get('http://localhost:8000/generate');
            setNumbers(response.data.numbers);
        } catch (error) {
            console.error("로또번호 생성에 문제가 발생했습니다ㅠ", error);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>로또 번호 생성기</h1>
                <button onClick={generateNumbers} className="spaced">로또 번호 생성</button>
                {numbers.length > 0 && (
                    <div className="numbers">
                        {numbers.map((num, index)=> (
                            <span key={index} className={`number color-${index+1}`}>{num} </span>
                        ))}
                    </div>
                )}
            </header>
        </div>
    )
};

export default Lotto;