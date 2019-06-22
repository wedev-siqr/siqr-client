import { STATE_CODES, CONSONANT_REGEX } from '@constants';

interface CurpBuilderParams {
  name: string;
  firstSurname: string;
  secondSurname: string;
  birthdate: Date;
  gender: string;
  state: string;
}

const getSecondConsonant = (value: string) => {
  if (!value) return '';

  const firstIndex = value.search(CONSONANT_REGEX);
  const nextValue = value.substring(firstIndex + 1);
  const nextIndex = nextValue.search(CONSONANT_REGEX);
  return nextValue.charAt(nextIndex);
};

export const curpBuilder = (params: CurpBuilderParams) => {
  const date = new Date(params.birthdate);
  console.log(date);

  const stateCode = params.state ? STATE_CODES[params.state] || 'NE' : '';
  const year = date.getFullYear();

  return `
    ${params.firstSurname.substring(0, 2)}${params.secondSurname.substring(
    0,
    1
  )}${params.name.substring(0, 1)}${
    year ? year.toString(10).substring(1, 3) : ''
  }${date.getMonth() || ''}${date.getDate() || ''}${
    params.gender
  }${stateCode}${getSecondConsonant(params.firstSurname)}${getSecondConsonant(
    params.secondSurname
  )}${getSecondConsonant(params.name)}
  `;
};
