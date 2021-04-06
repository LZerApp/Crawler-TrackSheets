const AUTH_TOKEN = ""

const getCrawlerImportedTime = () => {
  // Setup UrlFetch options
  const url = 'https://www.curvedata.tw/api/spider/brands';
  const options = {
    'method': 'GET',
    'headers': {
      'Connection': 'keep-alive',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
      'Authorization': AUTH_TOKEN
    }
  };

  // Make request and get response.
  const response = UrlFetchApp.fetch(url, options);
  const data = JSON.parse(response.getContentText()).data;

  // Reduce array of object into array
  // REFERENCE: https://stackoverflow.com/questions/43008212/reduce-array-of-objects-into-object
  result = data.reduce((temp, item) => {
      temp[item.id] = item.imported_at === null ? 'NULL' : item.imported_at.replace('T', ' ').replace('Z', '');
      return temp;
    }, {});
  
  return result;
}
