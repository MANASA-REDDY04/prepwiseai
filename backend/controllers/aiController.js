const { GoogleGenAI } = require("@google/genai");
const {
  conceptExplainPrompt,
  questionAnswerPrompt,
} = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
// @desc Generate interview questions and answers using Gemini
// @route POST /api/ai/generate-questions
// @access Private

const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;
    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    const rawText = response.candidates?.[0]?.content?.parts?.[0]?.text;
console.log("AI Raw Response:", rawText);

if (!rawText) {
  return res.status(500).json({ message: "AI did not return any text" });
}

    // clean it, remove json from beginning and end
    const cleanedText = rawText
      .replace(/^\s*```json\s*/i, "") // Remove starting ```json if present
      .replace(/^\s*```/, "") // Remove starting ``` if present
      .replace(/\s*```$/, "") // Remove ending ```
      .trim();

    res.json({ questions: JSON.parse(cleanedText) });
  } catch (error) {
    let detailedError = error.message;
    try {
      detailedError = JSON.parse(error.message).error?.message || error.message;
    } catch (e) {
      // leave detailedError as-is
    }

    res.status(500).json({
      message: "Failed to generate questions",
      error: detailedError,
    });
  }
};

// @desc Generate explains a interview question
// @route POST api/ai/generate-explaination
// @access Private
const generateConceptExplaination = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = conceptExplainPrompt(question);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-lite",
      contents: prompt,
    });

    // FIX 1: Extract actual text content
    const rawText = response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return res.status(500).json({ message: "AI did not return any explanation" });
    }

    // FIX 2: Optionally clean response if it returns as code block
    const cleanedText = rawText
      .replace(/^\s*```json\s*/i, "")
      .replace(/^\s*```/, "")
      .replace(/\s*```$/, "")
      .trim();

    // FIX 3: If Gemini returns plain text, send as is
    let parsed;
    try {
      parsed = JSON.parse(cleanedText);
    } catch {
      parsed = cleanedText; // Fallback to raw explanation text
    }

    res.json({ explanation: parsed });
  } catch (error) {
    console.error("Explanation error:", error.message);
    res.status(500).json({
      message: "Failed to generate explanation",
      error: error.message,
    });
  }
};

module.exports = { generateInterviewQuestions, generateConceptExplaination };
