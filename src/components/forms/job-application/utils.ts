import { useCallback, useState } from "react"
import { FormType, sendMail } from "../../../helpers/mail"

export function useApplicationForm() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
    cv: null,
    policy: false,
    source: "",
    isError: false,
    isSubmitted: false,
  })
  const handleSubmit = useCallback(
    event => {
      event.preventDefault()
      value.source = window.location.href;
      handleSendMail(value).then(res => {
        setValue(state => ({
          ...state,
          isSubmitted: true,
        }))
      }).catch(err => {
        setValue(state => ({
          ...state,
          isError: true,
        }))
      })
    },
    [value]
  )
  const handleChange = useCallback(event => {
    event.persist()
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.type === "file"
        ? event.target.files
        : event.target.value;

        if(event.target.name == "clearCv") {
          setValue(state => ({
            ...state,
            cv: null,
          }))
        } else {
          setValue(state => ({
            ...state,
            [event.target.name]: value,
          }))
        }
        
  }, [])
  return {
    value,
    handleChange,
    handleSubmit,
  }
}

function handleSendMail(data: Record<string, any>) {
  const _data = Object.entries(data)
    .map(([key, value]: [string, any]) => {
      const isFile = value instanceof FileList
      return {
        key,
        value: isFile ? value[0] : value,
        fileName: isFile ? value[0].name : undefined,
      }
    })
    .reduce(
      (object, field) => ({
        ...object,
        [field.key]: { value: field.value, fileName: field.fileName },
      }),
      {}
    )
  return sendMail(_data, FormType.job)
}
