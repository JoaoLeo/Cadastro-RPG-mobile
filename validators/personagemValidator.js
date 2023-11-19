import * as Yup from 'yup';

const personagemValidator = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('Campo obrigatório'),
    alinhamento: Yup.string().required('Campo obrigatório'),
    raca: Yup.string().required('Campo obrigatório'),
    idade: Yup.number().min(1,'Valor muito pequeno').max(100,'Valor muito grande'),
  })

export default personagemValidator