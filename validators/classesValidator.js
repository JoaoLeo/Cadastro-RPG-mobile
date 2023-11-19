import * as Yup from 'yup';

const classeValidators = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('Campo obrigatório'),
    maestria: Yup.string().required('Campo obrigatório'),
    combate: Yup.string().required('Campo obrigatório')
  })

export default classeValidators