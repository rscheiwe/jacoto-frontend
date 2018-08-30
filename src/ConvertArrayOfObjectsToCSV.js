import React from 'react'

const ConvertArrayOfObjectsToCSV = (props) => {
  console.log(props)
  let result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = props.data || null;
  if (data == null || !data.length) {
    return null
  }

  columnDelimiter = props.columnDelimiter || ','
  lineDelimiter = props.lineDelimiter || '\n'

  keys = Object.keys(data[0])

  result = ''
  result += keys.join(columnDelimiter)
  result += lineDelimiter

  data.forEach(function(item) {
    ctr = 0
    keys.forEach(function(key) {
      if (ctr > 0) result += columnDelimiter

      result += item[key]
      ctr++
    })
    result += lineDelimiter
  })

  return (
    <div>
      <h4>{result}</h4>
    </div>
  )
  // return result
}

export default ConvertArrayOfObjectsToCSV
