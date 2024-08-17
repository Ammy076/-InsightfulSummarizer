import React, { useState } from 'react';

function Summarizer() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = async () => {
    const response = await fetch('/api/summarizer/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    setSummary(data.summary);
  };

  return (
    <div className="Summarizer">
      <h2>Summarize Text</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize"
        rows="5"
        cols="50"
      />
      <br />
      <button onClick={handleSummarize}>Summarize</button>
      {summary && (
        <div className="Summary">
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default Summarizer;
