const axios = require('axios');

async function getResults({
  query = '',
  country = '',
  quality_grade_apg = '',
  page = 1,
  sort_prop = ''
}) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const apiURL = `${proxy}https://knowledge-graph-backend.herokuapp.com/dev`;

  // Parse the sorting property into a format the database can read
  let sortingFix;
  const parseSortingOption = sortRes => {
    switch (sortRes) {
      case 'Grade (High -> Low)':
        sortingFix = 'quality_grade_apg-H';
        break;
      case 'Grade (Low -> High)':
        sortingFix = 'quality_grade_apg-L';
        break;

      case 'FootFall (High -> Low)':
        sortingFix = 'footfall_external1-H';
        break;
      case 'FootFall (Low -> High)':
        sortingFix = 'footfall_external1-L';
        break;

      case 'Yield (High -> Low)':
        sortingFix = 'noi_yield_apg-H';
        break;
      case 'Yield (Low -> High)':
        sortingFix = 'noi_yield_apg-L';
        break;

      case 'Catchment (High -> Low)':
        sortingFix = 'catchment_external2-H';
        break;
      case 'Catchment (Low -> High)':
        sortingFix = 'catchment_external2-L';
        break;

      default:
        return sortRes;
    }
  };

  // pass the sort_prop through the cleaner
  parseSortingOption(sort_prop);

  // in the options, pass the fixed sort
  const options = {
    query,
    country,
    quality_grade_apg,
    page,
    sort_prop: sortingFix
  };

  try {
    console.log('searching with the parameters:', options);
    const result = await axios.post(apiURL, options);
    console.log('the results are in', result.data);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}

export { getResults };
