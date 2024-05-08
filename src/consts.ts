type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string;
  link: string;
}

export const siteConfig: Config = {
  title: "Pranjal Rane",
  description: "",
  lang: "en-GB",
  profile: {
    author: "Pranjal Rane",
    description: "your bio description"
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/pranjal0207",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/pranjal-rane/",
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:rane.pr@northeastern.edu",
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Work_Experience",
    path: "/work",
  },
  {
    title: "Projects",
    path: '/projects'
  }
];


export const WORK_EXPERIENCE: Array<{ id:number, position: string; company: string, start: Date, end: Date, points: Array<string>, compnay_link:string }> = [
	{
        id:1,
        position: "Data Scientist - Intern",
        company: "Cummins Inc.",
        start: new Date("2023-09-01"),
        end: new Date("2024-01-04"),
        points: [
            "Developed two Retrieval Augmented Generation (RAG) applications using Langchain, Cosmos DB and Llama and GPT (3.5 & 4); resulting in a 30% improvement in predictive accuracy for HR Chat bot and Global Warranty chat bot usecase",
            "Designed and managed a data pipeline that processed and cleaned over 1TB of company data, leading to a 25% reduction in data processing time, by implementing data extraction and cleaning techniques like Text Normalization and Regex pattern matching",
            "Achieved a 15% increase in RAG application efficiency, by prompt engineering and conducting a detailed comparative analysis of fine-tuned Llama and GPT-4 models and selecting the best-performing model for deployment",
            "Streamlined model deployment and increased accessibility, by using MLflow to host the optimal RAG model and developing callable API with Databricks ML model deployment services",
            "Addressed and resolved specific use-case limitations, enhancing retriever coverage by 40%, by designing and implementing a custom document retriever that outperformed the existing solution from Hugging Face in handling complex corner cases"
        ],
        compnay_link: "https://www.cummins.com/support/digital-products-and-services-support"
    },
    {
        id:2,
        position: "Software Development Engineer - Intern",
        company: "Cummins Inc.",
        start: new Date("2023-05-01"),
        end: new Date("2023-08-31"),
        points: [
            "Developed and deployed over 10 RESTful APIs using the Node.js and Express.js, leading to a 20% enhancement in application efficiency and supporting scalable functionality in key web services",
            "Developed custom middleware using Node.js and Express.js to synchronize data between SQL-based legacy systems & Amazon DynamoDB, ensuring seamless data transfer and integration",
            "Collaborated with a team of front-end developers and project managers, resulting in a 15% increase in user experience satisfaction and system reliability through seamless integration of backend APIs with front-end interfaces",
            "Optimized Amazon DynamoDB queries and Node.js server logic, achieving a 25% reduction in response times and a 15% increase in transaction processing speed, significantly improving backend performance",
            "Designed and implemented comprehensive unit and integration tests using Jest and Mocha, covering edge cases, asynchronous operations, and API endpoint reliability, which successfully achieved code coverage of 95",
            "Resolved multiple major technical issues, leading to a 30% increase in system stability and enhancing overall performance"
        ],
        compnay_link: "https://www.cummins.com/support/digital-products-and-services-support"
    },
    {
        id:3,
        position: "Software Development Engineer",
        company: "Mindbody",
        start: new Date("2023-09-01"),
        end: new Date("2024-01-04"),
        points: [
            "Devised a proof of concept for a tool that allows over 50K customers to create static web pages, enhancing user engagement, by employing React JS, ASP.NET, and MongoDB",
            "Developed RESTful APIs that improved data handling efficiency and scalability by optimizing interactions with MongoDB",
            "Revamped the Booker software’s purchase experience UI, reducing payment checkout times by 9%, through the application of modern UX design principles such as minimalism and intuitive navigation and improved ReactJS components",
            "Conducted rigorous usability and performance testing on the revamped UI using Jest for component testing and Selenium for end-to-end workflows, confirming the effectiveness of the updated ReactJS components and UX improvements"
        ],
        compnay_link: "https://co.mindbodyonline.com/"
    },
    {
        id:4,
        position: "Software Development Engineer",
        company: "Solocl Technologies (now PolymathAI)",
        start: new Date("2023-09-01"),
        end: new Date("2024-01-04"),
        points: [
            "Developed the MVPs of two production-grade mobile applications in Flutter, successfully deploying them on Google Playstore",
            "Enhanced login efficiency by 15% by implementing cloud based authentication and user session management techniques",
            "Reduced latency by 20% by URL-based deep linking and database-driven pagination, enhancing navigation and data retrieval",
            "Increased user revenue by 9% with payments API integration, enabling diverse payment options like cards and digital wallets"
        ],
        compnay_link: "https://trypolymath.ai/"
    }
];


export const TECHNICAL_SKILLS: Array<{ title: string; desc: string }> = [
	{
		title: "Programming Languages",
		desc: "Java, Python, JavaScript, C/C++, C#, Dart (Flutter), HTML/CSS, PHP, SQL, Typescript",
	},
	{
		title: "Frameworks & Libraries",
		desc: "ReactJs, Node.js, Flask, Django, Express.js, MapReduce, Hadoop, ElasticSearch, Spark, GraphQL",
	},
	{
		title: "Database Technologies",
		desc: "MySQL, SQLite, MongoDB, Amazon DynamoDB, Databricks (Data Lakehouse), Amazon RDS, Spark",
	},
	{
		title: "Cloud Technologies",
		desc: "AWS (SageMaker, Lamda, DynamoDB, EC2, S3, Route53, IAM & more), Azure Cloud (Azure OpenAI)",
	},
	{
		title: "Machine Learning",
		desc: "PyTorch, TensorFlow, Keras, Sklearn, Pandas, Matplotlib, Hugging Face, GPT, Langchain, NLTK, spaCy",
	},
	{
		title: "Data Science",
		desc: "A/B testing, Statistics, Classification, Unsupervised Learning, Time Series Analysis, Hypothesis Testing",
	},
	{
		title: "Tools & Technologies",
		desc: "Git, Postman, Hadoop, MapReduce, Docker, MuleSoft, Kafka, Jenkins, Palantir Foundry, Kubernetes",
	},
	{
		title: "Functional Skills",
		desc: "Software Development, Web and Cloud Development, CI/CD, Agile-Scrum",
	}
];

export const PROJECTS: Array<{ id:number, title: string; keywords: string, github:string|null, manuscript:string|null, points:Array<string> }> = [
	{
    id: 1,
    title: "StreamCraft - Video Streaming Service",
    keywords: "Javascript, AWS (S3, DynamoDB, Lamda, CloudFront), Kafka",
    github: "https://github.com/pranjal0207/stream-craft-client",
    manuscript: null,
    points: [
      "Increased concurrent upload capacity by 30% & reduced processing time, by integrating AWS SQS for efficient uploads to S3",
      "Reduced data sync time by 15% using DynamoDB and Lambda, enhancing event-driven triggers & real-time handling",
      "Introduced real-time alerts for video creators via Kafka, thus increasing user engagement in terms of comments and likes",
      "Enhanced video playback quality by coupling AWS S3 with CloudFront, ensuring high-quality content delivery to end-users"
    ]
  },
  {
    id: 2,
    title: "Job Description Summarization Plugin",
    keywords: "Flask, Generative AI, Large Langauge Models, AWS",
    github: null,
    manuscript: null,
    points: [
      "Developed browser plugin for summarizing job descriptions & identifying key skills, using Falcon 7B (Large Language Model)",
      "Employed Flask for LLM interactions and Node.js with Express.js for managing other backend services, hosted on AWS",
      "Enhanced plugin scalability and reliability by using AWS EC2 for hosting and AWS Lambda for asynchronous operations",

    ]
  },
  {
    id: 3,
    title: "CROWD - A Social Network Application",
    keywords: "MongoDB, Express.js, React, Node.js (MERN)",
    github: "https://github.com/pranjal0207/crowd",
    manuscript: null,
    points: [
      "Built full-stack social media application using MERN stack, enabling user registration and login, & dynamic real-time updates",
      "Designed a responsive and engaging frontend with ReactJS, integrated with an Express.js API for user activity handling",
      "Utilized MongoDB’s NoSQL flexibility for efficient, scalable management and quick retrieval of user data, posts, and comments",

    ]
  },
  {
    id: 4,
    title: "Stock Portfolio Management",
    keywords: "Java, MVC, SQL, Object-Oriented Programming & Design",
    github: "https://github.com/pranjal0207/portfolio-manager",
    manuscript: null,
    points: [
      "Developed a real-time stock portfolio management application in Java, achieving robust and scalable design by implementing MVC architecture with design patterns like Factory and Singleton, adhering to SOLID principles",
      "Attained 97% code coverage and minimized potential defects by rigorously writing JUnit tests for functionality testing",
      "Ensured efficient data caching and accessibility by fetching real-time stock data using the Alphavantage API, storing it in SQL, and employing programming constructs like stored procedures, functions, and triggers", 
    ]
  },
  {
    id: 5,
    title: "Credit Worthiness of a Customer",
    keywords: "Self-supervised Machine Learning, Binary Classification Model",
    github: "https://github.com/pranjal0207/credit-worthiness-of-customer",
    manuscript: null,
    points: [
      "Increased concurrent upload capacity by 30% & reduced processing time, by integrating AWS SQS for efficient uploads to S3",
      "Reduced data sync time by 15% using DynamoDB and Lambda, enhancing event-driven triggers & real-time handling",
      "Introduced real-time alerts for video creators via Kafka, thus increasing user engagement in terms of comments and likes",
      "Enhanced video playback quality by coupling AWS S3 with CloudFront, ensuring high-quality content delivery to end-users"
    ]
  },
  {
    id: 6,
    title: "Face Mask Detection and Face Recognition",
    keywords: "Computer Vision, Deep Learning",
    github: "https://github.com/TY-Project-Group/Web-based-system-for-face-mask-detection-and-face-recognition",
    manuscript: "https://www.ijariit.com/manuscripts/v7i4/V7I4-1684.pdf",
    points: [
      "Optimized ResNet101 architecture to accurately detect face masks over faces, achieving a remarkable 99% detection accuracy",
      "Implemented a Deep Metric Learning network with ResNet-34 architecture, for recognizing individuals’ faces with precision",
    ]
  },
  {
    id: 7,
    title: "Tool for Automatic Question Generation",
    keywords: "Natural Language Processing, NLTK, SpaCy",
    github: "https://github.com/pranjal0207/Automatic-Question-Generator",
    manuscript: "https://www.irjet.net/archives/V8/i9/IRJET-V8I9249.pdf",
    points: [
      "Attained 87% accuracy in identifying answer phrases using a Gaussian Naive Bayes classifier on the SQuAD 1.0 dataset",
      "Utilized word embeddings and cosine similarity to generate distractors for the questions, enhancing the tool’s robustness",
    ]
  },
];