const axios = require('axios');

async function getResults(
  query = '',
  country = '',
  quality_grade_apg = '',
  page = 1,
  sort_prop = ''
) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const apiURL = `${proxy}https://knowledge-graph-backend.herokuapp.com/dev`;

  const options = {
    query,
    country,
    quality_grade_apg,
    page,
    sort_prop
  };

  // console.log('Searching database with the following criteria:')
  //   console.log(options, 'what options are going in?');

  try {
    const result = await axios.post(apiURL, options);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}

export { getResults };
