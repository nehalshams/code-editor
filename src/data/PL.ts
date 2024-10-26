// const programmingLanguages = [
//     { languageName: "JavaScript", url: "/questions/javascript", bgColor: "javascript-gradient" },
//     { languageName: "Python", url: "/questions/python", bgColor: "python-gradient" },
//     { languageName: "Java", url: "/questions/java", bgColor: "java-gradient" },
//     { languageName: "C++", url: "/questions/cpp", bgColor: "cpp-gradient" },
//     { languageName: "C#", url: "/questions/csharp", bgColor: "csharp-gradient" },
//     { languageName: "Ruby", url: "/questions/ruby", bgColor: "ruby-gradient" },
//     { languageName: "TypeScript", url: "/questions/typescript", bgColor: "typescript-gradient" },
//     { languageName: "Go", url: "/questions/go", bgColor: "go-gradient" },
//     { languageName: "Swift", url: "/questions/swift", bgColor: "swift-gradient" },
//     { languageName: "Kotlin", url: "/questions/kotlin", bgColor: "kotlin-gradient" },
//     { languageName: "PHP", url: "/questions/php", bgColor: "php-gradient" },
//     { languageName: "R", url: "/questions/r", bgColor: "r-gradient" },
//     { languageName: "Rust", url: "/questions/rust", bgColor: "rust-gradient" },
//     { languageName: "Scala", url: "/questions/scala", bgColor: "scala-gradient" },
//     { languageName: "Perl", url: "/questions/perl", bgColor: "perl-gradient" },
//     { languageName: "Haskell", url: "/questions/haskell", bgColor: "haskell-gradient" },
//     { languageName: "Dart", url: "/questions/dart", bgColor: "dart-gradient" },
//     { languageName: "Objective-C", url: "/questions/objective-c", bgColor: "objective-c-gradient" },
//     { languageName: "SQL", url: "/questions/sql", bgColor: "sql-gradient" },
//     { languageName: "MATLAB", url: "/questions/matlab", bgColor: "matlab-gradient" },
//     { languageName: "Lua", url: "/questions/lua", bgColor: "lua-gradient" },
//     { languageName: "Elixir", url: "/questions/elixir", bgColor: "elixir-gradient" },
//     { languageName: "Clojure", url: "/questions/clojure", bgColor: "clojure-gradient" },
//     { languageName: "F#", url: "/questions/fsharp", bgColor: "fsharp-gradient" },
//     { languageName: "Erlang", url: "/questions/erlang", bgColor: "erlang-gradient" }
// ];

const programmingLanguages = [
    { 
        languageName: "JavaScript", 
        url: "/questions/javascript", 
        bgColor: "javascript-gradient", 
        icon: "javascript-icon.png",
        description: "JavaScript is essential for building interactive web applications.",
        questionCount: "30 questions available",
        difficulty: { easy: 15, medium: 10, hard: 5 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "Python", 
        url: "/questions/python", 
        bgColor: "python-gradient", 
        icon: "python-icon.png",
        description: "Python is popular for data science, machine learning, and web development.",
        questionCount: "40 questions available",
        difficulty: { easy: 20, medium: 15, hard: 5 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "Java", 
        url: "/questions/java", 
        bgColor: "java-gradient", 
        icon: "java-icon.png",
        description: "Java is a robust, platform-independent language used in various industries.",
        questionCount: "35 questions available",
        difficulty: { easy: 10, medium: 15, hard: 10 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "C++", 
        url: "/questions/cpp", 
        bgColor: "cpp-gradient", 
        icon: "cpp-icon.png",
        description: "C++ is widely used in system programming and game development.",
        questionCount: "25 questions available",
        difficulty: { easy: 8, medium: 12, hard: 5 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "C#", 
        url: "/questions/csharp", 
        bgColor: "csharp-gradient", 
        icon: "csharp-icon.png",
        description: "C# is a versatile language primarily used in enterprise applications and games.",
        questionCount: "20 questions available",
        difficulty: { easy: 5, medium: 10, hard: 5 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "Ruby", 
        url: "/questions/ruby", 
        bgColor: "ruby-gradient", 
        icon: "ruby-icon.png",
        description: "Ruby is a friendly, dynamic language used in web development.",
        questionCount: "15 questions available",
        difficulty: { easy: 5, medium: 8, hard: 2 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "TypeScript", 
        url: "/questions/typescript", 
        bgColor: "typescript-gradient", 
        icon: "typescript-icon.png",
        description: "TypeScript builds on JavaScript by adding static types.",
        questionCount: "30 questions available",
        difficulty: { easy: 12, medium: 13, hard: 5 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "Go", 
        url: "/questions/go", 
        bgColor: "go-gradient", 
        icon: "go-icon.png",
        description: "Go is a fast, compiled language suited for concurrent programming.",
        questionCount: "20 questions available",
        difficulty: { easy: 5, medium: 10, hard: 5 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "Swift", 
        url: "/questions/swift", 
        bgColor: "swift-gradient", 
        icon: "swift-icon.png",
        description: "Swift is Apple’s language for developing iOS and macOS applications.",
        questionCount: "25 questions available",
        difficulty: { easy: 8, medium: 12, hard: 5 },
        buttonText: "Explore Questions"
    },
    { 
        languageName: "Kotlin", 
        url: "/questions/kotlin", 
        bgColor: "kotlin-gradient", 
        icon: "kotlin-icon.png",
        description: "Kotlin is popular for Android development and a modern alternative to Java.",
        questionCount: "15 questions available",
        difficulty: { easy: 5, medium: 8, hard: 2 },
        buttonText: "Explore Questions"
    },
    // Add more languages as needed following the same structure
];

const JSquestions = [
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Easy",
        "question": "What are the different data types in JavaScript?"
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Easy",
        "question": "How do you create an object in JavaScript?"
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Medium",
        "question": "What is the difference between var, let, and const?"
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Medium",
        "question": "Explain how 'this' works in JavaScript."
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Medium",
        "question": "What are closures in JavaScript and how are they used?"
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Hard",
        "question": "How does JavaScript handle asynchronous operations?"
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Hard",
        "question": "What is the event loop, and how does it work in JavaScript?"
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Medium",
        "question": "Describe the difference between == and ===."
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Medium",
        "question": "What is hoisting in JavaScript?"
    },
    {
        "id": 1,
        "favorite": false,
        "difficulty": "Hard",
        "question": "How does JavaScript handle memory management?"
    }
]

export {
    programmingLanguages,
    JSquestions
}