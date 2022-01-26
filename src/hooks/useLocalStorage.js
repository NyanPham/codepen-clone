import React, {useState, useEffect} from 'react';

const PREFIX = 'codepen-clone-'

export default function useLocalStorage(key, initialValue ) {
    const prefixedKey = PREFIX + key

    const [text, setText] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue !== null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {
            return initialValue()
        } 
        return initialValue
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(text))
    }, [text, prefixedKey])

    return [text, setText]
}
