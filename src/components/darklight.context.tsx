import { createContext, useState } from "react";

export type TDarkLightContext = {
    changeTheme: string,
    setChangeTheme: React.Dispatch<React.SetStateAction<string>>,
    changeBackground: string,
    setChangeBackground: React.Dispatch<React.SetStateAction<string>>,
    fnChangeTheme: () => void,
};

type TDarkLightProviderProps = {
    children: React.ReactNode;
  };
  
export const DarkLightContext = createContext<TDarkLightContext>({
    changeTheme: 'lightTheme',
    setChangeTheme: () => console.error('setChangeTheme fn no implemented!'),
    changeBackground: 'lightBackground',
    setChangeBackground: () => console.error('setChangeBackground fn no implemented!'),
    fnChangeTheme: () => console.error('fnChangeTheme fn no implemented!')
})

const DarkLightProvider: React.FC<TDarkLightProviderProps> = ({ children }) => {
    const [ changeTheme, setChangeTheme] = useState<string>('lightTheme');
    const [ changeBackground, setChangeBackground] = useState<string>('lightBackground');


    const fnChangeTheme = () => {
        if (changeTheme == 'lightTheme') {
            setChangeTheme('darkTheme')
        } else {
            setChangeTheme('lightTheme')
        }

        if (changeBackground == 'lightBackground'){
            setChangeBackground('darkBackground')
        } else {
            setChangeBackground('lightBackground')
        }
    }

    return (
        <DarkLightContext.Provider
            value={{
                changeTheme,
                changeBackground,
                setChangeTheme,
                setChangeBackground,
                fnChangeTheme
            }} >
                {children}
            </DarkLightContext.Provider>
    )
  };

  export default DarkLightProvider;