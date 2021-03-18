import React, { useState, useEffect } from 'react';
import { Text, Word, Margin } from './styles';

const braces = {
  open: '{',
  close: '}',
};

const words = ['AMOR', 'CARINHO', 'CRIATIVIDADE', 'APRENDIZADO', 'DIVERSÃO'];

const PhraseAnimation = () => {
  const [word, setWord] = useState(words[0]);
  const [wordWriting, setWordWriting] = useState(words[0][0]);
  const [writing, setWriting] = useState(true);

  const setNextWord = () => {
    const nextIndexWord = words.indexOf(word) + 1;
    const nextWord = words[nextIndexWord] || words[0];
    setWriting(true);
    setWord(nextWord);
    setWordWriting(nextWord[0]);
  };

  const writeWord = () => {
    setWordWriting(wordWriting + word[wordWriting.length]);
  };

  const clearWord = () => {
    setWordWriting(wordWriting.slice(0, wordWriting.length - 1));
  };

  useEffect(() => {
    if (word === wordWriting) {
      setWriting(false);
      setTimeout(() => clearWord(), 3500);
    } else if (wordWriting) {
      const func = writing ? writeWord : clearWord;
      const time = writing ? 120 : 50;
      setTimeout(() => func(), time);
    } else {
      setNextWord();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordWriting, writing]);

  return (
    <>
      <Text>{braces.open}</Text>
      <Margin>
        <Text>ESSE PROJETO CONTÊM </Text>
        <br />
        <Text>
          MUITO <Word>{wordWriting}</Word>,
        </Text>
        <br />
        <Text>ESPERO QUE GOSTE!</Text>
      </Margin>
      <Text>{braces.close}</Text>
    </>
  );
};

export default PhraseAnimation;
