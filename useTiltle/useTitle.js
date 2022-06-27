import React, { useEffect, useState } from 'react';

/* 
    useEffect (function, deps(를 정해주면 이 리스트안에 있는 값이 변할때만 활성화))
    : componentDidmount, componentDidUpdate, componentWillUnMount의 역할
*/

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle)
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title')
        htmlTitle.innerHTML = title
    }
    useEffect(updateTitle, [title])
    return setTitle
}

function App(props) {
    const titleUpdater = useTitle('Loading...')
    setTimeout(() => titleUpdater('home'), 5000);
    return (
        <div>
            
        </div>
    );
}

export default App;