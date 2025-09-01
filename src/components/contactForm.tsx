import { useContext, useRef, useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SkillContext, type TSkillContext } from "./skills.contexty";
import { DarkLightContext, type TDarkLightContext } from "./darklight.context";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const captchaRef = useRef<ReCAPTCHA | null>(null);
  const form = useRef<HTMLFormElement | null>(null);
  const { skillSelected } = useContext<TSkillContext>(SkillContext);
  const { changeTheme } = useContext<TDarkLightContext>(DarkLightContext);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string;
  
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
    });
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(form.current!);
    if (formData.get("honeypot")) {
      console.warn("Bot detectado 🚨");
      return;
    }

    if (!captchaToken) {
      alert("Por favor, confirma que no eres un robot 🤖");
      return;
    }

    if (form.current) {
      setIsSending(true);

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
          form.current,
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string }
        )
        .then(
          () => {
            alert("Mensaje enviado con éxito ✅");
            form.current?.reset();
            captchaRef.current?.reset();
            setCaptchaToken(null);
          },
          (error) => {
            alert("Error al enviar ❌");
            console.error("FAILED...", error.text);
          }
        )
        .finally(() => setIsSending(false));
    }
  };

  return (
    <div className={`my-8 ${changeTheme}`}>
      <form
        ref={form}
        className="form space-y-4 w-11/12 pl-8"
        onSubmit={sendEmail}
      >
        <input
          className="p-2"
          type="text"
          name="name"
          placeholder="_tu Nombre"
          required
        />
        <input
          className="p-2"
          type="email"
          name="email"
          placeholder="_tu Email"
          required
        />
        <textarea
          className="textareaContact w-6/6"
          name="message"
          placeholder="_tu Mensaje"
          required
        />

        {skillSelected && skillSelected.length > 0 && (
          <div>
            <label className="m-2 align-top">Skills seleccionadas:</label>
            <textarea
              className="w-4/6 h-min"
              name="skills"
              value={skillSelected.join(" - ")}
              readOnly
            />
          </div>
        )}

        <input
          type="text"
          name="honeypot"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        
        <ReCAPTCHA
        
        ref={captchaRef}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={(token) => setCaptchaToken(token)}
        />
        

        <button
          className="btnContact"
          type="submit"
          disabled={isSending || !captchaToken}
        >
          {isSending ? "Enviando..." : "_enviar"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;