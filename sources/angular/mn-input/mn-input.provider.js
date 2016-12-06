angular
  .module('mn-input')
  .provider('MnInput', MnInputProvider)

function MnInputProvider() {
  const validations = {
    en: {
      required: 'is required',
      email: 'is invalid',
    },
    pt: {
      required: 'é obrigatório',
      email: 'é inválido',
    },
  }

  const locale = localStorage.locale || 'en'
  const messages = validations[locale]

  this.$get = () => ({messages})
}
