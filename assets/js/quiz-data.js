const quizData = [
    {
        id: "01",

        artist: {
            name: "Victor Ash",
            instagramHandle: "victor.ash.studio",
        },

        mural: {
            title: "Astronaut / Cosmonaut",
            description:
                "“Astronaut / Cosmonaut” is a large black-and-white mural by Victor Ash, created in 2007 in Berlin-Kreuzberg. The faceless astronaut floating above the city references the Cold War space race and highlights the smallness of human power.",
            hashtags: ["astronaut", "mural", "kreuzberg"],
            image: "./assets/images/mural-01-victor-ash.jpg",
        },

        questions: [
            {
                id: "q1",
                text: "Who is the artist of this mural?",
                choices: [
                    { id: "q1a", text: "Herakut", isCorrect: false },
                    { id: "q1b", text: "Victor Ash", isCorrect: true },
                    { id: "q1c", text: "Invader", isCorrect: false },
                ],
            },
            {
                id: "q2",
                text: "What is the title of this mural?",
                choices: [
                    { id: "q2a", text: "Between East and West", isCorrect: false },
                    { id: "q2b", text: "Astronaut / Cosmonaut", isCorrect: true },
                    { id: "q2c", text: "Lost in Orbit", isCorrect: false },
                ],
            },
        ],
    },
    {
        id: "02",

        artist: {
            name: "Herakut",
            instagramHandle: "herakut",
        },

        mural: {
            title: "My Home Might Be No Palace. But We Can Share It If You Like.",
            description:
                "“My Home Might Be No Palace. But We Can Share It If You Like.” is a mural by Herakut that reflects the duo’s signature mix of vulnerability, empathy, and social commentary. The work addresses themes of belonging, hospitality, and human connection, contrasting modest living conditions with emotional openness. Like much of Herakut’s work, the mural combines figurative imagery with handwritten text to create an intimate, inviting message in public space.",
            hashtags: ["empathy", "mural", "kreuzberg"],
            image: "./assets/images/mural-02-herakut.jpg",
        },

        questions: [
            {
                id: "q1",
                text: "Who is the artist of this mural?",
                choices: [
                    { id: "q1a", text: "Herakut", isCorrect: true },
                    { id: "q1b", text: "ROA", isCorrect: false },
                    { id: "q1c", text: "Banksy", isCorrect: false },
                ],
            },
            {
                id: "q2",
                text: "What is the title of this mural?",
                choices: [
                    { id: "q2a", text: "My Home Might Be No Palace. But We Can Share It If You Like.", isCorrect: true },
                    { id: "q2b", text: "An Open Door", isCorrect: true },
                    { id: "q2c", text: "Shared Shelter", isCorrect: false },
                ],
            },
        ],
    },
    {
        id: "03",

        artist: {
            name: "Steroheat",
            instagramHandle: "herakut",
        },

        mural: {
            title: "Maxim Memorial",
            description:
                "“My Home Might Be No Palace. But We Can Share It If You Like.” is a mural by Herakut that reflects the duo’s signature mix of vulnerability, empathy, and social commentary. The work addresses themes of belonging, hospitality, and human connection, contrasting modest living conditions with emotional openness. Like much of Herakut’s work, the mural combines figurative imagery with handwritten text to create an intimate, inviting message in public space.",
            hashtags: ["36boys", "mural", "kreuzberg"],
            image: "./assets/images/mural-03-stereoheat.jpg",
        },

        questions: [
            {
                id: "q1",
                text: "Who is the artist of this mural?",
                choices: [
                    { id: "q1a", text: "Steroheat", isCorrect: true },
                    { id: "q1b", text: "ROA", isCorrect: false },
                    { id: "q1c", text: "Banksy", isCorrect: false },
                ],
            },
            {
                id: "q2",
                text: "What is the title of this mural?",
                choices: [
                    { id: "q2a", text: "Maxim Memorial", isCorrect: true },
                    { id: "q2b", text: "An Open Door", isCorrect: true },
                    { id: "q2c", text: "Shared Shelter", isCorrect: false },
                ],
            },
        ],
    },
];
