import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        // Initialize the state
        let value = null
        try {
            if (typeof window !== 'undefined' && localStorage !== 'undefined') {
                value = window?.localStorage?.getItem(key)
            }
            // Check if the local storage already has any values,
            // otherwise initialize it with the passed initialValue
            return value ? JSON.parse(value) : initialValue
        } catch (error) {
            console.error(error)
        }
    })

  const setValue = value => {
        try {
            // If the passed value is a callback function,
            //  then call it with the existing state.
            const valueToStore = value instanceof Function ? value(state) : value
            if (typeof window !== 'undefined' && localStorage !== 'undefined') {
                window?.localStorage?.setItem(key, JSON.stringify(valueToStore))
            }
            setState(value)
        } catch (error) {
            console.error(error)
        }
    }

    const removeValue = value => {
        try {
            if (typeof window !== 'undefined' && localStorage !== 'undefined') {
                window?.localStorage?.removeItem(value)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return [state, setValue, removeValue]
}

export default useLocalStorage
