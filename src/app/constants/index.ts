export const NAME_REGEX = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

// SAVH 980306 HVZNLG 01
export const CURP_REGEX = /^[A-Z]{4}[0-9]{6}[A-Z]{6}[0-9]{2}$/;

export const PHONE_REGEX = /^[0-9]{10}$/;

export const DIRECTION_STREET_REGEX = /^[A-Za-z0-9\s]+$/;

export const DIRECTION_NUMBER_REGEX = /^[A-Za-z0-9]*\s?\S$/;

export const POSTAL_CODE_REGEX = /^[0-9]{5}$/;

export const NUMBER_REGEX = /^[0-9]+(\.[0-9]+)?$/;

export const STATE_CODES = {
  AGUASCALIENTES: 'AS',
  'BAJA CALIFORNIA SUR': 'BS',
  COAHUILA: 'CL',
  CHIAPAS: 'CS',
  'DISTRITO FEDERAL': 'DF',
  GUANAJUATO: 'GT',
  HIDALGO: 'HG',
  MÉXICO: 'MC',
  MORELOS: 'MS',
  'NUEVO LEÓN': 'NL',
  PUEBLA: 'PL',
  'QUINTANA ROO': 'QR',
  SINALOA: 'SL',
  TABASCO: 'TC',
  TLAXCALA: 'TL',
  YUCATÁN: 'YN',
  'BAJA CALIFORNIA': 'BC',
  CAMPECHE: 'CC',
  COLIMA: 'CM',
  CHIHUAHUA: 'CH',
  DURANGO: 'DG',
  GUERRERO: 'GR',
  JALISCO: 'JC',
  MICHOACÁN: 'MN',
  NAYARIT: 'NT',
  OAXACA: 'OC',
  QUERÉTARO: 'QT',
  'SAN LUIS POTOSÍ': 'SP',
  SONORA: 'SR',
  TAMAULIPAS: 'TS',
  VERACRUZ: 'VZ',
  ZACATECAS: 'ZS',
};

export const CONSONANT_REGEX = /[^aeiou]/g;
