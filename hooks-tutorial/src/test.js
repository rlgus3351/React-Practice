import {useState} from 'react';

const Test = () =>{
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            
            <button onClick={()=> setValue(value/2)}>%2</button>
            <button onClick={()=> setValue2(value2*2)}>*2</button>
        </div>
    )
}

export default Test;