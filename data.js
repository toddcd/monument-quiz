const QUIZ_DATA = {
    questions: [
        {
            id: 1,
            text: "Which of the following bicycle races are considered a Monument?",
            desc: "At the top of world tour cycling are 5 of the longest, hardest and most prestigious one-day races in professional cycling. These are considered the Monuments.",
            choices:
                [{text: "Milan-San Remo"},
                    {text: "Tour of Flanders"},
                    {text: "Paris-Roubaix"},
                    {text: "Liege-Bastogne-Liege"},
                    {text: "Giro di Lombardia"},
                    {
                        text: "All of the above.",
                        isCorrect: true
                    }
                ]
        },
        {
            id: 2,
            text: "Which cycling Monument is the longest and oldest?",
            desc: "Liege-Bastogne-Liege, also know as La Doyenne (\"The Old Lady\"), has been running since 1892 and is 256km (160 miles) long.",
            choices:
                [{text: "Milan-San Remo"},
                    {text: "Tour of Flanders"},
                    {text: "Paris-Roubaix"},
                    {
                        text: "Liege-Bastogne-Liege",
                        isCorrect: true
                    },
                    {text: "Giro di Lombardia"}
                ]
        },
        {
            id: 3,
            text: "What cyclist has won the most Monuments during their career?",
            desc: "The Belgian cyclist Eddy Merckx won 19 Monuments and is considered the greatest of all times. He won: 7-Milan-San Remo, 2-Tour of Flanders, 3-Paris-Roubaix, 5-Liege-Bastogne-Liege, 2-Giro di Lombardia",
            choices:
                [{text: "Fausto Coppi"},
                    {
                        text: "Eddy Merckx",
                        isCorrect: true
                    },
                    {text: "Rik Van Looy"},
                    {text: "Roger De Vlaeminck"},
                    {text: "Sean Kelly"}
                ],
            img: "./images/merckxWinning.jpg"
        },
        {
            id: 4,
            text: 'Which Monument is also known as "The Hell of the North"',
            desc: 'Paris-Roubaix, which has run since 1896 in Northern France, is also called the "Hell of the North" because of its brutally rough cobbled roads and often horrific weather.',
            choices:
                [{text: "Milan-San Remo"},
                    {text: "Tour of Flanders"},
                    {
                        text: "Paris-Roubaix",
                        isCorrect: true
                    },
                    {text: "Liege-Bastogne-Liege"},
                    {text: "Giro di Lombardia"}
                ]
        },
        {
            id: 5,
            text: 'Which country is NOT a host of a cycling Monument?',
            desc: 'Germany does not host a Monument. Italy hosts two, Belgium hosts two and France hosts one.',
            choices:
                [{
                    text: "Germany",
                    isCorrect: true
                },
                    {text: "Italy"},
                    {text: "France"},
                    {text: "Belgium"}
                ]
        }
    ],
    answers: [],
    winningImg: [
        {
            src: "./images/jungelsWin.jpg",
            alt: "Jungels Win"
        },
        {
            src: "./images/merckxWin.jpg",
            alt: "Merckx Win"
        },
        {
            src: "./images/valverdeWin.jpg",
            alt: "Valverde Win"
        }
    ],
    losingImg: [{src: "./images/gustavCrash.jpg",
        alt: "Gustav Crash"}
    ]
}





