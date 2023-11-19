import * as Yup from 'yup';

const pocoesValidators = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('Campo obrigatório'),
    quantidade: Yup.number().max(100, 'Valor muito grande').required('Campo obrigatório'),
    perigo: Yup.string().required('Campo obrigatório')
  })

export default pocoesValidators