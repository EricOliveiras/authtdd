require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const app = require('./app');

app.listen(process.env.PORT, () => {
  if(process.env.NODE_ENV === 'test') {
    console.log('Running tests...');
  } else {
    console.log(`Server is running on port ${process.env.PORT}`);
  };
});
