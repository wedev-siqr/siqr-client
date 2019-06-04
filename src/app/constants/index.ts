export const NAME_REGEX = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

export const CURP_REGEX = /^[A-Z0-9]{0,18}$/;

export const MEMBERSHIP_NAME_REGEX = /^\S+[A-Za-z0-9\s]+$/;

export const MEMBERSHIP_RENOVATION_TYPES = [
  {
    label: 'Dia',
    value: 'D',
  },
  {
    label: 'Semana',
    value: 'W',
  },
  {
    label: 'Mes',
    value: 'M',
  },
  {
    label: 'Año',
    value: 'Y',
  },
];
