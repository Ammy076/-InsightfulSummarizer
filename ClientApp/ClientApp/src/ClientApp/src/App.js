import React from 'react';
import Summarizer from './components/Summarizer';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>InsightfulSummarizer</h1>
        <p>Transforming Information Overload into Actionable Insights</p>
      </header>
      <main>
        <Summarizer />
        <Search />
      </main>
    </div>
  );
}

export default App;
