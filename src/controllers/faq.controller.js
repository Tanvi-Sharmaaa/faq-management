import faq from "../models/faq.model.js";
import redis from "../utils/redis.js";
import { translateText } from "../utils/translator.js";

export const getFAQ = async (req, res, next) => {

    const lang = req.query.lang || 'en';
    const cacheKey = `faq:${lang}`;

    redis.get(cacheKey, async (error, data) => {
        if (error) {
            const errorMessage = error && error.message ? error.message : 'Unknown Redis error in get';
            return res.status(500).json({
                success: false,
                message: errorMessage
            });
        }
        if (data) {
            const cachedData = JSON.parse(data);
            console.log('Cached Data:', cachedData); // Check cached data
            return res.status(200).json({
                success: true,
                data: cachedData
            });
        } 
        else {
            const faqs = await faq.find();
            console.log('Fetched FAQs:', faqs);// Log the result of the query
            if (!faqs || faqs.length === 0){ 
                const errorMessage = error && error.message ? error.message : 'Unknown Redis error while finding faq';
                return res.status(500).json({
                    success: false,
                    message: errorMessage
                });
            }
        
            const translatedFaqs = faqs.map(faq => {
                const translation = faq.translations.get(lang); // Get translation for the given language
                return {
                    question: translation ? translation.question : faq.question, // Fallback to default question if no translation
                    answer: translation ? translation.answer : faq.answer  // Fallback to default answer if no translation
                };
            }); 

            redis.setex(cacheKey, 3600, JSON.stringify(translatedFaqs));
            return res.status(200).json({
                success: true,
                data: translatedFaqs
            })
        }
    })
}

export const postFAQ = async (req, res, next) => {
    console.log("Received data:", req.body); // Log the incoming request data

    const { question, answer } = req.body;
    if (!question || !answer) {
        const errorMessage = error && error.message ? error.message : 'Unknown Redis error in post';
        return res.status(500).json({
            success: false,
            message: errorMessage
        });
    }

    const targetLang = req.query.lang || 'en';
    const translatedQuestion = await translateText(question, targetLang);
    const translatedAnswer = await translateText(answer, targetLang);

    const faqs = await faq.create({
        question, answer,
        translations: {
            [targetLang]: {
                question: translatedQuestion,
                answer: translatedAnswer
            }
        }
    });
    await faqs.save();
    return res.status(201).json({
        success: true,
        data: faqs
    });
};

export const deleteFAQ = async (req, res, next) => {
    const { id } = req.params;
    const faq = await faq.findById(id);
    if (!faq) {
        const errorMessage = error && error.message ? error.message : 'Unknown Redis error in delete';
        return res.status(500).json({
            success: false,
            message: errorMessage
        });
    }
    await faq.deleteOne();
    return res.status(200).json({
        success: true,
        message: 'FAQ deleted'
    });
};