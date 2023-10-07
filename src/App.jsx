import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function App() {
  const [count, setCount] = useState(0)

  const handleSubmit = () => {
    alert(formik.values.email)
  }
  const emailValidationSchema = Yup.string()
    .email('Invalid email address')
    .required('Email is required')
    .test('gmail', 'Email must be a Gmail address', value => value.endsWith('gmail.com'));

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(4).required(),
      email: emailValidationSchema,
      password: Yup.string().min(6).required('Password must contain at least one lowercase letter, one uppercase letter, and one number').matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Password must contain at least one lowercase letter, one uppercase letter, and one number")
    }),
    onSubmit: handleSubmit,
  })


  const handleForm = (e) => {
    formik.setFieldValue(e.target.name, e.target.value)
  }

  return (
    <>
      <div className='flex justify-center '>
        <div className='w-[380px] p-5 text-white mt-6 border-2 border-white'>
          <h1>Welcome,please input your details</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className='mt-4'>
              <label>Username</label>
              <input type="text" name="username" className='w-full rounded-sm text-slate-800 px-2 mt-2' onChange={handleForm} />
              {formik.touched.username && formik.errors.username && (
                <div className='text-red-500'>{formik.errors.username}</div>
              )}
            </div>
            <div className='mt-4'>
              <label>Email</label>
              <input type="email" name="email" className='w-full rounded-sm text-slate-800 px-2 mt-2' onChange={handleForm} />
              {formik.touched.email && formik.errors.email && (
                <div className='text-red-500'>{formik.errors.email}</div>
              )}
            </div>
            <div className='mt-4'>
              <label>Password</label>
              <input type="password" name="password" className='w-full rounded-sm text-slate-800 px-2 mt-2' onChange={handleForm} />
              {formik.touched.password && formik.errors.password && (
                <div className='text-red-500'>{formik.errors.password}</div>
              )}
            </div>
            <button type='submit' className='mt-4 bg-lime-500 w-full p-[2px]'>submit</button>
          </form>
        </div>
      </div >
    </>
  )
}

export default App
