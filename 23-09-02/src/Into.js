import {useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e =>{
        setName(e.target.value);
    }
    const onChangeNIckName = e =>{
        setNickname(e.target.value);
    }

}

export default Info;