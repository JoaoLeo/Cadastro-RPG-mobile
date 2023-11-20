import * as Yup from 'yup';

const jogadoresValidator = Yup.object().shape({
    nome: Yup.string()
    .nonNullable()
    .min(2,'Valor muito pequeno')
    .required('Campo obrigatório'),
    idade: Yup.number().min(1,'Valor muito pequeno').max(100,'Valor muito grande'),
    email: Yup.string().email().required('Campo obrigatório'),
    cpf: Yup.string().required('Campo obrigatório').max(15, "Muito longo"),
    telefone: Yup.string()
  })

export default jogadoresValidator