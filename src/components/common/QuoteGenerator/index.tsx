import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container, Quote, Author, Button
} from './styles';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

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
  useEffect(() => {
    quoteAPI();
  }, []);
  return (
    <Container>
      <Quote>
        {`"${quote}"`}
      </Quote>
      <Author>
        {`— ${author}`}
      </Author>
      <Button onClick={quoteAPI}>Refresh</Button>
    </Container>
  );
};

export default QuoteGenerator;
