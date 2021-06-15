import { useState } from 'react';
import { ShortUserInterface } from 'data/@types/UserInterface';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    [error, setError] = useState(''),
    [wasSearched, setWasSearched] = useState(false),
    [isLoading, setIsLoading] = useState(false),
    [cleaningLadies, setCleaningLadies] = useState([] as Array<ShortUserInterface>),
    [remainingCleaningLadies, setRemainingCleaningLadies] = useState(0)

  return { cep, setCep };
}