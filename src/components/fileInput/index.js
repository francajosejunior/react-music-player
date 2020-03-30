import React, { useEffect, useState } from 'react'
import { toastr } from 'react-redux-toastr'
import _ from 'lodash'
import Label from '../label'
import {
  safeProp,
  returnFileSize,
  getFileNameWithExt
} from '../../util/generalUtilities'
import './style.scss'

function LimitSizeException(value) {
  return {
    type: 'size',
    error: 'Arquivo muito grande',
    value: `Aqruivo com ${value}`,
    message: 'Tamanho limite: 5MB'
  }
}

function ExtensionException(ext, allowedExtensions) {
  return {
    type: 'extension',
    error: 'Extensão do arquivo não permitida',
    value: `Arquivo ${ext.toUpperCase()}`,
    message: `Extensões permitidas: ${allowedExtensions
      .join(', ')
      .toUpperCase()}`
  }
}

export default function FileInput({
  label,
  accept,
  documentOnChange,
  allowedExtensions
}) {
  const [text, setText] = useState('Selecionar...')
  const [error, setError] = useState(false)

  useEffect(() => {
    return () => {
      setText('Selecionar...')
      setError(false)
    }
  }, [])

  const addDocument = e => {
    setError(false)
    const { ext } = getFileNameWithExt(e)
    try {
      const fileName = safeProp(() => e.target.files[0].name, 'Selecionar...')
      setText(
        _.truncate(fileName, {
          length: 23
        })
      )

      if (!allowedExtensions.some(a => a === ext)) {
        throw new ExtensionException(ext, allowedExtensions)
      }
      if (e.target.files[0]?.size > 5000000) {
        throw new LimitSizeException(returnFileSize(e.target.files[0]?.size))
      }
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        documentOnChange({ result: reader.result, fileName })
      }
      reader.onerror = erro => {
        toastr.error('Erro', erro)
        reader.onerror = erro => {}
      }
    } catch (error) {
      console.log('ERRO input file', error)
      if (error.type === 'size') {
        toastr.warning(error.value, error.message)
      }
      if (error.type === 'extension') {
        toastr.warning(error.value, error.message)
      }
      setError(error.error)
      documentOnChange(false)
    }
  }
  const id = _.uniqueId('arquivo')

  return (
    <div className="input-file-column">
      <div className="input-file-conatainer">
        <Label inlineLabel={true}>{label}</Label>
        <label className="label-input-file" htmlFor={id}>
          <input
            className="input-file"
            type="file"
            id={id}
            onChange={addDocument}
            accept={accept}
          />
          {text}
        </label>
      </div>
      {error && <div className="file-error">{`* ${error}`}</div>}
    </div>
  )
}
