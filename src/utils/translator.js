import * as googleTranslate from '@vitalets/google-translate-api';

const translateText = async(text,lang) => {
    try{
        const result = await googleTranslate.translate(text,{to:lang});
        return result.text;
    }catch(error){
        console.error('Translation error: ',error);
        return text; // Fallback to the original text if translation fails
    }
};
export { translateText };
