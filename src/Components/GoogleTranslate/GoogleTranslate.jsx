
import React, { useEffect } from 'react';
import "./GoogleTranslate.css"

function GoogleTranslate() {
    useEffect(() => {
        const googleTranslateElementInits = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en' },
            'google_translate_element'
          );
        };
    
        const script = document.createElement('script');
        script.src =
          'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
    
        document.body.appendChild(script);
    
        window.googleTranslateElementInit = googleTranslateElementInits;
      }, []);
    
      return <div id="google_translate_element"></div>;
}

export default GoogleTranslate