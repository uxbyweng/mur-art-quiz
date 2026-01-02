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
                "This large black-and-white mural with the title <em>'Astronaut/Cosmonaut'</em> was created by Victor Ash in 2007 in Berlin-Kreuzberg. The faceless astronaut floating above the city references the Cold War and highlights the smallness of human power. The mural is located at <a href='https://maps.app.goo.gl/wyRa3FDjhuHfaAch6'>Mariannenstraße 8, 10999 Berlin</a>",
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
                "“My Home Might Be No Palace. But We Can Share It If You Like.” is a mural by Herakut that reflects the duo’s signature mix of vulnerability, empathy, and social commentary. Like much of Herakut’s work, the mural combines figurative imagery with handwritten text to create an intimate, inviting message in public space.",
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
                "“This mural, titled <em>“Maxim memorial-wall – ‘36 Boy’”</em>, honors Maxim (Attila Murat Aydın), a key figure in Berlin’s early hip-hop scene and co-founder of the 36 Boys crew. Painted by @stereoheat for the 2021 @berlinmuralfest at Naunynstraße 52, it celebrates his influence on graffiti, breakdance, and rap culture in SO36.",
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
