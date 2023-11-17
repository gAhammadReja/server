// collegeController.js
import College from './schema.js';

//make filter condition dynamic using url
async function getAllColleges(req, res) {
  try {
    // let state = {
    //   'state_name': 'West Bengal'
    // };
    let colleges = await College.find({});
    console.log(req)
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve colleges' });
  }
}
async function getFilterColleges(req, res) {
  try {
    let colleges = await College.find(req.query);
    console.log(req.query)
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve colleges' });
  }
}

async function getStream(req, res) {
  try {
    let filter = {
      'department': 'ba'
    };
    let colleges = await College.find(filter);
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve colleges' });
  }
}




export { getAllColleges, getFilterColleges };
