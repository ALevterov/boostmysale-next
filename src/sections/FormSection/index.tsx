import Container from '@/components/container'
import styles from './index.module.css'
import bg from '@/assets/contact.webp'
import mobileBg from '@/assets/contact-mobile.webp'
import { Formik } from 'formik'
import * as Yup from 'yup'
import CustomInput from '@/components/CustomInput'
import { useEffect, useState } from 'react'
import Spinner from '@/components/spinner'
import SuccessMessage from '@/components/successMessage'
import ErrorMessage from '@/components/errorMessage'
interface IFormValues {
  name: string
  email: string
  phone: string
  message: string
}
const formikInitialValues: IFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
}
const FormSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
	const [messageStatus, setMessageStatus] = useState<"error" | "success" | null>(null)
  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true)
  }, [])
  const handleSubmit = async (values: any, { resetForm }: {resetForm: Function}) => {
		try {
			setIsLoading(true)
			const res = await fetch('https://bmysales.com:5000/send_message', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});
			console.log("res", res);
			setMessageStatus("success");
		} catch (e) {
			console.log("e", e);
			setMessageStatus("error");
		}	finally {
			resetForm();
			setIsLoading(false);
		}
		setTimeout(() => {
			setMessageStatus(null);
		}, 6000)
	}
  return (
    <section className={styles.section} id='about'>
      <Container>
        <div
          className={styles.container}
          style={{ backgroundImage: !isMobile ? `url(${bg.src})` : '' }}
        >
          {isMobile && <img className={styles.mobileBg} src={`${mobileBg.src}`} />}
          <div className={styles.left}>
            <h3 className={styles.top}>ABOUT US</h3>
            <div className={styles.bottom}>
              We are committed to empowering Amazon sellers like you to thrive
              in the ever-evolving e-commerce landscape. With our comprehensive
              suite of services, tailored strategies, and a relentless
              dedication to your success, we provide the expertise and support
              you need to achieve your business goals. Partner with us today and
              boost your sales.
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.text}>
                DISCUSS YOUR PROJECT AND GET FREE AUDIT
              </div>
              <div className={styles.required}>* - required fields</div>
            </div>
            <div className={styles.bottom}>
							{messageStatus && <>{messageStatus === "success" ? <SuccessMessage /> : <ErrorMessage />}</>}
							<div style={{visibility: messageStatus ? 'hidden': 'visible'}} className={styles.formContainer}>
                <Formik
                  initialValues={formikInitialValues}
                  validationSchema={Yup.object().shape({
                    name: Yup.string().required(
                      'Поле обязательно для заполнения*'
                    ),
                    phone: Yup.string().required(
                      'Поле обязательно для заполнения*'
                    ),
                    email: Yup.string()
                      .required('Поле обязательно для заполнения*')
                      .email('Введите корректный email*'),
                  })}
                  onSubmit={handleSubmit}
                >
                  {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                  }: any) => (
                    <form
                      className={styles.form}
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <div className={styles.inputInner}>
                        <div className={styles.inputBlock}>
                          <div className={styles.inputWrapper}>
                            <span
                              className={[
                                styles.additionalText,
                                Object.keys(touched).some(t => t === 'name') &&
                                errors.name
                                  ? styles.formError
                                  : '',
                              ].join(' ')}
                            >
                              *name
                            </span>
                            <CustomInput
                              errors={errors.name}
                              id='name'
                              touched={touched.name}
                              onChange={handleChange}
                              value={values.name}
                            />
                          </div>
                          <div className={styles.inputWrapper}>
                            <span
                              className={[
                                styles.additionalText,
                                Object.keys(touched).some(t => t === 'email') &&
                                errors.email
                                  ? styles.formError
                                  : '',
                              ].join(' ')}
                            >
                              *e-mail
                            </span>
                            <CustomInput
                              errors={errors.email}
                              id='email'
                              onChange={handleChange}
                              value={values.email}
                              touched={touched.email}
                            />
                          </div>
                        </div>

                        <div className={styles.inputBlock}>
                          <div className={styles.inputWrapper}>
                            <span
                              className={[
                                styles.additionalText,
                                Object.keys(touched).some(t => t === 'phone') &&
                                errors.phone
                                  ? styles.formError
                                  : '',
                              ].join(' ')}
                            >
                              *phone
                            </span>
                            <CustomInput
                              errors={errors.phone}
                              id='phone'
                              touched={touched.phone}
                              onChange={handleChange}
                              value={values.phone}
                            />
                          </div>
                          <div className={styles.inputWrapper}>
                            <span className={[styles.additionalText].join(' ')}>
                              message
                            </span>
                            <CustomInput
                              errors={errors.message}
                              id='message'
                              onChange={handleChange}
                              value={values.message}
                              touched={touched.message}
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        className={styles.btn}
                        type='submit'
                        disabled={
                          Object.keys(errors).length !== 0 ||
                          Object.keys(touched).length === 0 || isLoading
                        }
                      >
                        {isLoading ? <Spinner /> : 'send a request'}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FormSection
