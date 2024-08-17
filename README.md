# -InsightfulSummarizer

# InsightfulSummarizer

InsightfulSummarizer is an AI-powered content summarization and retrieval application that leverages TiDB Serverless with Vector Search to provide accurate and relevant summaries of large text content and enable users to find related documents with ease.

## Inspiration
The overwhelming volume of information we encounter daily, from lengthy emails to detailed reports, often leads to information overload. InsightfulSummarizer was inspired by the need to simplify this process, enabling individuals and businesses to quickly grasp the essence of large documents.

## What it Does
- **Automatic Summarization:** Generate concise summaries of long-form content such as emails, articles, and reports.
- **Advanced Vector Search:** Perform semantic searches to find relevant documents based on natural language queries.

## How We Built It
- **Backend:** .NET 8.0 for server-side development.
- **Frontend:** React.js for a responsive and intuitive user interface.
- **Database:** TiDB Serverless with Vector Search for managing and querying large datasets.
- **AI Models:** Integrated pre-trained models for text summarization.

## Challenges We Ran Into
- Optimizing vector search for fast and relevant results.
- Seamless integration of AI models with large databases.

## Accomplishments That We're Proud Of
- Successfully creating a tool that simplifies information processing.
- Integrating TiDB Serverless with Vector Search for efficient document retrieval.

## What We Learned
- In-depth knowledge of vector-based search and AI-driven content management.
- The importance of user-centered design in creating powerful yet easy-to-use tools.

## What's Next for InsightfulSummarizer
- Expanding support for multilingual summarization.
- Enhancing search functionality based on user feedback.
- Integrating advanced analytics features for trend analysis and data visualization.

## Built With
- **Languages:** C#, JavaScript
- **Frameworks:** .NET 8.0, React.js
- **Platforms:** AWS, TiDB Serverless
- **APIs:** OpenAI API, TiDB Vector Search API
- **Tools:** GitHub, Visual Studio, Postman

## License
This project is licensed under the MIT License.


InsightfulSummarizer/
│
├── Controllers/
│   └── SummarizerController.cs
│
├── Models/
│   └── SummarizeRequest.cs
│   └── SummarizeResponse.cs
│   └── SearchRequest.cs
│   └── SearchResponse.cs
│
├── Services/
│   └── SummarizerService.cs
│   └── VectorSearchService.cs
│
├── ClientApp/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   └── Summarizer.js
│   │   │   └── Search.js
│   ├── package.json
│
├── wwwroot/
│   └── css/
│   └── js/
│
├── appsettings.json
├── Program.cs
├── Startup.cs
└── README.md

