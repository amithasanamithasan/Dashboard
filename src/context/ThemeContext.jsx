import { createContext,useState,useContext,useEffect } from "react";

 const ThemeContext = createContext();
 const ThemeUpdateContext = createContext();
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}
export function useTheme(){
    return useContext(ThemeContext);
}
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  
  useEffect(()=>{
    const saved = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches?'dark':'light';
   setTheme(saved || system);
  },[])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.style.backgroundColor = theme === 'dark' ? '#121212' : '#fff'
}, [theme])
const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
}
 
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );

};

export default ThemeProvider;