import { useState, useMemo } from 'react';
import { ShortUserInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState(''),

    validCep = useMemo(() => {
      return ValidationService.validateCep(cep)
    }, [cep]),

    [error, setError] = useState(''),
    [wasSearched, setWasSearched] = useState(false),
    [isLoading, setIsLoading] = useState(false),
    [cleaningLadies, setCleaningLadies] = useState([] as Array<ShortUserInterface>),
    [remainingCleaningLadies, setRemainingCleaningLadies] = useState(0)

  async function searchProfessionals(cep: string) {
    setWasSearched(false);
    setIsLoading(true);
    setError('');

    try {
      const { data } = await ApiService.get<{
        diaristas: Array<ShortUserInterface>;
        quantidade_diaristas: number;
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);

      setCleaningLadies(data.diaristas);
      setRemainingCleaningLadies(data.quantidade_diaristas);
      setWasSearched(true);
      setIsLoading(false);
    } catch (error) {
      setError('CEP não encontrado');
      setIsLoading(false);
    }
  }

  return {
    cep,
    setCep,
    validCep,
    error,
    wasSearched,
    isLoading,
    searchProfessionals,
    cleaningLadies,
    remainingCleaningLadies,
  };
}