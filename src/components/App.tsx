import { useEffect, useState } from 'react';
import { TFeedbackItem } from '../lib/types';
import '../App.css';
import Container from './layout/Container';
import Footer from './layout/Footer';
import HashtagList from './HashtagList';

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(' ')
      .find((word) => word.includes('#'))!
      .substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(), // Using timestamp as a unique ID
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
    );
  };

  useEffect(() => {
    const fetchFeedbacksItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
        );
        if (!response.ok) {
          throw new Error('');
        }
        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage('Something went wrong. Please try again later.');
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    };
    fetchFeedbacksItems();
  }, []);
  return (
    <div className="app">
      <Footer />

      <Container
        isLoading={isLoading}
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />

      <HashtagList />
    </div>
  );
}

export default App;
