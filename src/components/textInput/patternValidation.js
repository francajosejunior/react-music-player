export default (event, pattern) => {
  const value = event?.target?.value || ''

  if (!pattern || value === '') {
    return true
  }

  console.log({
    pattern,
    value
  })

  return !!value.match(pattern)
}
