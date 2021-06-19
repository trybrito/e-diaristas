import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import TextInput from 'ui/components/inputs/TextInput/TextInput';
import Button from 'ui/components/inputs/Button/Button';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import {
  FormContainer,
  TextContainer,
  ErrorText,
  ResponseContainer
} from '@styles/pages/find-cleaning-ladies';
import useIndex from 'data/hooks/pages/useIndex.page';
import useFindCleaningLadies from 'data/hooks/pages/useFindCleaningLadies.page.mobile';

const FindCleaningLadies: React.FC = () => {
  const { colors } = useTheme();
  const {
    cep,
    setCep,
    validCep,
    error,
    wasSearched,
    isLoading,
    searchProfessionals,
    cleaningLadies,
    remainingCleaningLadies,
  } = useIndex();

  const { autoCep } = useFindCleaningLadies();

  useEffect(() => {
    if (autoCep && !cep) {
      setCep(autoCep);
      searchProfessionals(autoCep);
    }
  }, [autoCep]);

  return (
    <ScrollView>
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha o seu endereço e veja os profissionais da sua área'}
      />

      <FormContainer>
        <TextInputMask
          value={cep}
          onChangeText={setCep}
          type={'custom'}
          options={{
            mask: '99.999-999',
          }}
          customTextInput={TextInput}
          customTextInputProps={{
            label: 'Digite seu CEP',
          }}
        />

        {error ? <ErrorText>{error}</ErrorText> : null}

        <Button
          mode={'contained'}
          style={{ marginTop: 32 }}
          onPress={() => searchProfessionals(cep)}
          color={colors.accent}
          disabled={!validCep || isLoading}
          loading={isLoading}
        >
          Buscar
        </Button>
      </FormContainer>

      {wasSearched &&
        (cleaningLadies.length > 0 ? (
          <ResponseContainer>
            {cleaningLadies.map((item, index) => (
              <UserInformation
                key={index}
                picture={item.foto_usuario || ''}
                name={item.nome_completo}
                rating={item.reputacao || 0}
                description={item.cidade}
                darker={index % 2 == 1}
              />
            ))}

            {remainingCleaningLadies > 0 && (
              <TextContainer>
                ...e mais {remainingCleaningLadies} {remainingCleaningLadies > 1
                  ? ' profissionais atendem '
                  : ' profissional atende '}
                ao seu endereço.
              </TextContainer>
            )}


            <Button color={colors.accent} mode={'contained'}>
              Contratar um profissional
            </Button>
          </ResponseContainer>
        ) : (
          <TextContainer>
            Ainda não temos nenhuma diarista disponível em sua região.
          </TextContainer>
        ))}
    </ScrollView>
  );
};

export default FindCleaningLadies;
