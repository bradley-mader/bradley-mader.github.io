export const bioIntro = {
  location: 'Snohomish, WA',
  familyDescription: 'I live in Snohomish, WA with my wife, three children, dog, and cat where I spend the vast majority of my time chasing the little animals around.',
  hobbiesIntro: "When I'm not doing that, my hobbies include: ",
};

export const professionalSynopsis = `I have spent the past 6 years developing applications both web based and native. In that time, I have advanced initiatives to move to cloud native architectures, automated testing, decommissioned legacy software systems, and improved UX of applications and workflows. Before that I spent 3 years working in data analytics including development of ETL pipelines, governing code quality and forecasting based on historical data.`;

export const professionalPassion = `I am most passionate about working on projects that allow for collaborative real-time experiences. My favorite backend programming language is Go due to the simple and intuitive syntax, features specifically designed to support multithreading, ongoing reliable maintenance and updates to the language, and relatively high performance benchmarks, but I have also extensively used C# and C++ in the backend.`;

export const employers = [
  {
    name: 'Electronic Arts',
    logo: 'EA_logo_black.png',
    logoAlt: 'EA Logo',
    logoWidth: '30%',
    title: 'Software Engineer',
    focus: 'Frostbite Engine Integrations and Large Scale Distributed Systems',
    bullets: [
      'Drove key decisions for massive distributed cloud event streaming service intended for millions of users with minimal latency.',
      'Led load testing and optimized distributed Go application hosted on AWS from inception (maximum capacity of approximately 100k users) through 2.6M users.',
      'Increased memory performance of custom load testing image from max of 2k users per 6GiB replica to 15k users per 4GiB replica resulting in 10x drop in cluster resources.',
      'Analyzed and compared distributed database options between AWS Aurora and Yugabyte solutions with performance comparisons. Developed indexes and worked on data sharding optimizations specific to both platforms.',
      'Enhanced and analyzed metrics and logging for large-scale distributed applications. Built additional Grafana visualizations to assist with future diagnostics.',
      'Informed key performance decisions related to asynchronous behaviors, database architecture and scale, kubernetes configurations and scale, and optimization of grpc calls and Golang contexts.',
      'Built out tooling within CLI to easily test and log performance and execute common functionalities within distributed applications.',
      'Proposed, designed and provided tooling solutions in C ++ and C# WPF for design and engineering workflows to improve partner team satisfaction.',
      'Maintained Jenkins code and data pipelines to provide status of builds and perform automatic code migrations between development lines.',
      'Work with management to improve processes surrounding integration of new releases and remove obstacles to implementation and development of new features.',
      'Mentored new and existing employees by educating on how to contribute to game team projects, navigate complex development line configurations in Perforce.',
    ],
  },
  {
    name: 'BECU',
    logo: 'becu_logo.png',
    logoAlt: 'BECU Logo',
    logoWidth: '40%',
    title: 'Software Developer',
    focus: 'full-stack applications with a focus on security and reliability',
    bullets: [
      'Retired existing legacy CRM application with successful replacement or enhancement of user workflows and legacy backend services.',
      'Onboarded PEGA to BECU and worked with a small cross-discipline team to conceptualize the application MVP , propose and defend architectural patterns for secure data access from external applications, and implement necessary front and backend systems to prove viability.',
      'Engineered scalable and high volume C# .NET REST APIs sourcing data from multiple backend systems in a high security environment.',
      'Worked to rigorously define best practices with regard to development processes and work onboarding.',
      'Developed and automated UI testing suite for Pega platform application.',
      'Proposed and prototyped Azure cloud native solutions for API Proxies, Docker container deployments, and API Stubs for larger adoption by the organization.',
      'Drove quality and security through application of robust Code Review process for Pega, Backend C# .Net APIs, and SQL Packages.',
      'Diagnosed and triaged production issues using Azure analytics and alerts, Splunk logs and Pega platform logging and diagnostics.',
    ],
  },
];

export const education = `I attended college at Washington State University to earn my Bachelors of Science in Biology. After several years in the workforce, I fell in love with Software Engineering which led me to return to school at Oregon State University where I attained a second Bachelors of Science in Computer Science in 2016.`;

export const homeDescription = [
  'I am an Agentic Backend Software Engineer focused on building reliable, verifiable and efficient solutions to developing performant software.',
  'With over 8 years of experience developing Full-Stack and Backend Applications, I believe code generated by LLMs under strict Software Engineering best practices will shift the economics of software to provide tailored software that more intimately mirrors real user demands.',
  'I have worked on multiple projects to improve and implement backend services with engineered agentic pipelines focusing on rigidly engineered context and validation loops as well as presented research findings to enterprise leadership.',
];
