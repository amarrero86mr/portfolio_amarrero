import { useContext } from "react";
import ContactForm from "../components/contactForm";
import { DarkLightContext, type TDarkLightContext } from "../components/darklight.context";



export const Contact = () => {
  const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext)


  return (
    <div className="mb-32">
      <div className='h-16 my-2'></div>
      <div>
        <h2>CONTACTs</h2>
      </div>
      <div
        className={`my-8 skillBox ${changeTheme}`}
      // style={changeTheme == 'lightTheme' ? { color: '#4D179A' } : { color: '#83CD29' }}
      >
        
          <ContactForm />
        
        
      </div>
    </div>
  );
}
