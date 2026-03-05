import { useState, ChangeEvent, FormEvent } from 'react'

export interface FormConfig<T> {
  initialValues: T
  validate?: (values: T) => Partial<Record<keyof T, string>>
  onSubmit: (values: T) => Promise<void> | void
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: FormConfig<T>) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    
    // Para checkboxes, usar checked en lugar de value
    const newValue = type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : value
    
    setValues((prev) => ({ ...prev, [name]: newValue }))
    
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name as keyof T]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    
    // Validar campo individual
    if (validate) {
      const fieldErrors = validate(values)
      if (fieldErrors[name as keyof T]) {
        setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof T] }))
      }
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitSuccess(false)
    setSubmitError(null)

    // Marcar todos los campos como tocados
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    )
    setTouched(allTouched)

    // Validar todos los campos
    if (validate) {
      const formErrors = validate(values)
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors)
        return
      }
    }

    setIsSubmitting(true)

    try {
      await onSubmit(values)
      setSubmitSuccess(true)
      setValues(initialValues) // Reset form
      setTouched({})
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Error al enviar el formulario')
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setSubmitSuccess(false)
    setSubmitError(null)
  }

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
  }
}


