import * as Yup from 'yup';


export default Yup.object().shape({
    email: Yup.string().required('Enter email'),
    password: Yup.string().min(6,"6 characters minimum").required('Enter password')
})

