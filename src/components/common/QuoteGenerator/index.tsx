import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, Quote, Author, Button
} from './styles';
import RefreshSVG from '../svg/RefreshSVG';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(() => {
    const saved = localStorage.getItem('quote') as string;
    const initialValue = JSON.parse(saved);
    return initialValue || 'There is only one success: to be able to spend your life in your own way.';
  });
  useEffect(() => {
    localStorage.setItem('quote', JSON.stringify(quote));
  }, [quote]);

  const [author, setAuthor] = useState(() => {
    const saved = localStorage.getItem('author') as string;
    const initialValue = JSON.parse(saved);
    return initialValue || 'Christopher Morley';
  });
  useEffect(() => {
    localStorage.setItem('author', JSON.stringify(author));
  }, [author]);

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get('https://api.quotable.io/random');
      arrayOfQuotes = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Button onClick={quoteAPI}>
        <RefreshSVG />
      </Button>
      <Quote>
        {`"${quote}"`}
      </Quote>
      <Author>
        {`— ${author}`}
      </Author>

    </Container>
  );
};

export default QuoteGenerator;
