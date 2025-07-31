const Question = require('../models/Question');
const Session = require('../models/Session');

// @desc    Add additional questions to an existing session
// @route   POST /api/questions/add
// @access  Private
exports.addQuestionsToSession = async (req, res) => {
    try {
        const { sessionId, questions } = req.body;

        if (!sessionId || !questions || !Array.isArray(questions)) {
            return res.status(400).json({ message: "Invalid input data" });
        }

        const session = await Session.findById(sessionId);
        if(!session){
            return res.status(404).json({message: "Session not found"});
        }

        // create new questions
        const createdQuestions = await Question.insertMany(
            questions.map((q) => ({
                session: sessionId,
                question: q.question,
                answer: q.answer,
            }))
        );

        // Return the updated session with new questions
        session.questions.push(...createdQuestions.map((q) => q._id));
        await session.save();

        res.status(201).json(createdQuestions);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// @desc    Pin or unpin a question
// @route   POST /api/questions/:id/pin
// @access  Private
exports.togglePinQuestion = async (req, res) => {
    try {
        const questionId = req.params.id;

        // Find the question by ID
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        // Toggle the pinned status
        question.isPinned = !question.isPinned;
        await question.save();

        res.status(200).json({ message: "Question pinned status updated", question });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// @desc    Update a note for a question
// @route   POST /api/questions/:id/note
// @access  Private
exports.updateQuestionNote = async (req, res) => {
    try {
        const questionId = req.params.id;
        const { note } = req.body;

        // Find the question by ID
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({success:false, message: "Question not found" });
        }

        // Update the note
        question.note = note || "";
        await question.save();

        res.status(200).json({ message: "Question note updated", question });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};