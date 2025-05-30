import { useState } from 'react';
import { MAX_CHARACTERS } from '../lib/constans';

export default function FeedForm() {
  const [text, setText] = useState('');

  const charCount = MAX_CHARACTERS - text.length;

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(event) => {
          const newText = event.target.value;
          if (newText.length > MAX_CHARACTERS) {
            return;
          }
          setText(newText);
        }}
        placeholder="sometext"
        id="feedback-textarea"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company.
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
