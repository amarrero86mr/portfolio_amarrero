import { useEffect, useState, useRef, useContext } from 'react';
import { DarkLightContext, type TDarkLightContext,  } from '../components/darklight.context';

export const About = () => {
  const {changeTheme} = useContext<TDarkLightContext>(DarkLightContext)
  
  const paragraphs = [
    "Soy Agustín Marrero, estudiante de Ingeniería Informática en la Universidad Nacional de Avellaneda. Me apasiona la programación y me defino como una persona perseverante, autodidacta y empática.",
    "Actualmente participo en proyectos personales con Node.js, React y MySQL. Disfruto tanto del diseño visual como de la lógica detrás del código, y veo al desarrollo como un desafío creativo que combina disciplina, aprendizaje y resolución de problemas.",
    "Busco seguir creciendo como desarrollador full stack y formar parte de proyectos donde pueda seguir aprendiendo y aportando valor."
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % paragraphs.length);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        next();
      }, 10000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, changeTheme]);

  return (
    <section className="my-15">
      <div className='h-16 my-2'></div>
      <div
        className="mb-4 cursor-pointer select-none flex gap-3"
        onClick={() => setIsPaused((prev) => !prev)}
      >
        <h2>ABOUT_Me</h2>
          { isPaused 
          ? <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 640 640"><path fill='currentColor' d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 248C288 234.7 277.3 224 264 224C250.7 224 240 234.7 240 248L240 392C240 405.3 250.7 416 264 416C277.3 416 288 405.3 288 392L288 248zM400 248C400 234.7 389.3 224 376 224C362.7 224 352 234.7 352 248L352 392C352 405.3 362.7 416 376 416C389.3 416 400 405.3 400 392L400 248z"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 640 640"><path fill='currentColor' d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM276.5 211.5C269.1 207 259.8 206.8 252.2 211C244.6 215.2 240 223.3 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4zM362 320L288 365.2L288 274.8L362 320z"/></svg>
          }
      </div>

       <div className="space-y-4 w-11/12 pl-8 transition-all duration-300">
      {isPaused
        ? paragraphs.map((text, index) => (
            <p key={index} className="opacity-100 transition-opacity ">
              {text}
            </p>
          ))
        : paragraphs.map((text, index) => (
            <p
              key={index}
              className={`transition-opacity  duration-500 h-32 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
              }`}
            >
              {text}<span className='animate-ping' >_</span>
            </p>
          ))}
    </div>
    </section>
  );
};
