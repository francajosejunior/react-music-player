import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SelectEntry from './SelectEntry'
import Label from '../label'
import './style.scss'
import { fetchComboBoxAction } from './listActions'

function ComboBox({
  inlineLabel = false,
  selectedValue,
  description,
  options = [],
  reducerName, // need to update reducers.js
  endpointURL,
  valueProp,
  labelProp,
  autoFetch,
  isMulti,
  verticalMargin,
  placeholder,
  value,
  labelStyle,
  autoWidth,
  ...rest
}) {
  const dispatch = useDispatch()
  const stateList = useSelector(state => state[reducerName])
  let list = stateList?.itens
  const pending = stateList?.pending

  const [comboBoxValue, setComboBoxValue] = useState([])

  useEffect(() => {
    if (autoFetch) {
      dispatch(fetchComboBoxAction(reducerName, endpointURL))
    }
  }, [reducerName, endpointURL, autoFetch])

  useEffect(() => {
    if (!isMulti) {
      setComboBoxValue(prev => {
        let item = (autoFetch ? list || [] : options || []).find(
          l => l[valueProp] === value
        )
        if (item) {
          return {
            label: item[labelProp],
            value: item[valueProp]
          }
        }
        return null
      })
    } else {
      setComboBoxValue(prev => {
        let item = (autoFetch ? list || [] : options || []).filter(l => {
          return (value || []).some(v => v === l[valueProp])
        })
        return item.map(i => {
          return {
            label: i[labelProp] || null,
            value: i[valueProp] || null
          }
        })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labelProp, list, valueProp])

  const mapedOptions = useMemo(() => {
    return (autoFetch ? list || [] : options || []).map(v => {
      return {
        label: v[labelProp] || v.label,
        value: v[valueProp] === 0 ? 0 : v[valueProp] || v.value
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labelProp, list, valueProp])

  const handleSelected = useCallback(
    selectedObj => {
      if (isMulti) {
        setComboBoxValue(selectedObj)
        return selectedValue((selectedObj || []).map(s => s.value))
      }
      setComboBoxValue(selectedObj)
      return selectedValue(selectedObj ? selectedObj.value : {})
    },
    [isMulti, selectedValue]
  )

  return (
    <div
      className={`combo-box ${inlineLabel && 'label-line'} ${verticalMargin &&
        'vertical-margin'}`}
    >
      {!!description && (
        <Label
          style={labelStyle}
          autoWidth={autoWidth}
          inlineLabel={inlineLabel}
        >
          {description}
        </Label>
      )}
      <SelectEntry
        onChange={handleSelected}
        value={comboBoxValue}
        isMulti={isMulti}
        options={mapedOptions}
        placeholder={placeholder}
        {...rest}
        pending={pending}
      />
    </div>
  )
}

export default ComboBox
