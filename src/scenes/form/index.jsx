import React from 'react'
import { Box,Button,TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';


const Form = () => {
    const initialValues = {
        firstName:"",
        lastName:"",
        email:"",
        contact:"",
        address1:"",
        address2:"",
    };

    const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const userSchema = yup.object().shape( {
    firstName: yup.string().required("(required)"),
    lastName: yup.string().required("(required)"),
    email: yup.string().email("Email is not valid").required("(required)"),
    contact: yup
    .string()
    .required("(required)")
    .matches(phoneRegExp, "Phone Number is not valid"),
    address1: yup.string().required("(required)"),
    address2: yup.string().required("(required)"),
});



    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) =>{
        console.log("value");
    }
  return (
    <Box m="20px"  >
        <Header title="CREATE USER" subtitle="Create a new use profile"/>
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        >
            {({values,errors,touched,handleBlur,handleChange,handleSubmit}) =>(
                <form onSubmit={handleSubmit}>
                    <Box

                    display="grid"
                    mt="20px"
                    gap="30px"
                    gridTemplateColumns="repeat(4,minmax(0,1fr))"
                    sx={{
                        "& > div":{gridColumn:isNonMobile ? undefined : "span 4"}
                    }}>
                        <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label="First Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        name='firstName'
                        error={!!touched.firstName && errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        sx={{gridColumn:"span 2"}}
                        />
                        <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name='lastName'
                        error={!!touched.lastName && errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        sx={{gridColumn:"span 2"}}
                        />
                        <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name='email'
                        error={!!touched.email && errors.email}
                        helperText={touched.email && errors.email}
                        sx={{gridColumn:"span 4"}}
                        />
                        <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label="Contact"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.contact}
                        name='contact'
                        error={!!touched.contact && errors.contact}
                        helperText={touched.contact && errors.contact}
                        sx={{gridColumn:"span 4"}}
                        />
                        <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label="Address1"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address1}
                        name='address1'
                        error={!!touched.address1 && errors.address1}
                        helperText={touched.address1 && errors.address1}
                        sx={{gridColumn:"span 2"}}
                        />
                        <TextField
                        fullWidth
                        variant='filled'
                        type='text'
                        label="Address2"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address2}
                        name='address2'
                        error={!!touched.address2 && errors.address2}
                        helperText={touched.address2 && errors.address2}
                        sx={{gridColumn:"span 2"}}
                        />
                        <Box display="flex" justifyContent="start" mt="20px">
                            <Button type='submit' color="secondary" variant='outlined'>
                                Create New User
                            </Button>
                        </Box>

                    </Box>
                </form>
            )}
        </Formik>
    </Box>
  )
}

export default Form