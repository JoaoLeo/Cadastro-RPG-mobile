import * as Yup from 'yup';

const poderesValidators = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('Campo obrigatório'),
    elemento: Yup.string().required('Campo obrigatório'),
    dano: Yup.number().required('Campo obrigatório')
  })

export default poderesValidators