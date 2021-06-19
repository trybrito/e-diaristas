export const ValidationService = {
  validateCep(cep = ''): boolean {
    return cep.replace(/\D/g, '').length === 8;
  },
};