import { useThemeUpdate } from "../context/ThemeContext";
const ThemeSwitch = () => {
    const toggleTheme = useThemeUpdate()
    return (
        <>
            <input
                className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)] cursor-pointer" 
                onClick={toggleTheme} 
                type="checkbox"
                value="synthwave"
            />
        </>
    )
}

export default ThemeSwitch