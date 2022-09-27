import React, {createContext, useContext, useState} from 'react'

const StateContext = createContext(); // and then we call that as afunction
 
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] =useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        console.log(color)
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true}) 
    }

    return (
        <StateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu,
                isClicked, 
                setIsClicked,
                handleClick,
                screenSize, 
                setScreenSize,
                currentColor, 
                setCurrentColor,
                currentMode, 
                setCurrentMode,
                themeSettings, 
                setThemeSettings,
                setMode,
                setColor
                }}
            >
            {children}
        </StateContext.Provider>
    )
}

// u can say hey give me the data from the context =>useStateContext
// by using the context => useContext
// and we specify by which one => StateContext
// in our app we have 1 contextProvider but in bigger app have multiple
export const useStateContext = () => useContext(StateContext)