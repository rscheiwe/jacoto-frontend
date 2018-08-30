import React from 'react'
// import ConvertArrayOfObjectsToCSV from './ConvertArrayOfObjectsToCSV.js'



const DownloadCSV = (props) => {

  let ConvertArrayOfObjectsToCSV = (args) => {
    // console.log(args)
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += "\"" + item[key] + "\"";
            ctr++;
        });
        result += lineDelimiter;
    });

    console.log(result)
    return result;
}

let handleClick = () => {

  let data, filename, link;
  let csv = ConvertArrayOfObjectsToCSV({
    data: props.data
  })
  if (csv == null) return

  filename = props.data.filename || 'export.csv'

  if (!csv.match(/^data:text\/csv/i)) {
    csv = 'data:text/csv;charset=utf-8,' + csv
  }

  data = encodeURI(csv)

  link = document.createElement('a')
  link.setAttribute('href', data)
  link.setAttribute('download', filename)
  link.click()
}

  // let handleClick = () => {
  //   // return ConvertArrayOfObjectsToCSV({
  //   //   data: props.users
  //   // })
  //   let data = {data: props.data}
  //   console.log(props)
  //   return ConvertArrayOfObjectsToCSV(data)
  //   // console.log(props)
  //
  //
  // }

  return (
    <div>
      <h4 onClick={handleClick}>Download CSV</h4>

    </div>

  )

}

export default DownloadCSV
