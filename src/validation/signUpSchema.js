import * as Yup from 'yup';


export default Yup.object().shape({
    firstName: Yup.string().min(2,'Too short').max(50, 'Too long').required('Enter your first name'),
    secondName: Yup.string().min(2,'Too short').max(50, 'Too long').required('Enter your last name'),
    email: Yup.string().email('Please, enter correct email').required('Enter your email'),
    password: Yup.string().min(6,"6 characters minimum").required('Enter password')
})

