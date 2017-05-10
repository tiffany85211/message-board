const express = require('express');
const index = require('./routes/index');
const api = require('./routes/api');

const app = express();

app.use(express.static(`${__dirname}/client/build/`));
app.use('/', index);
app.use('/api', api);

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), () => {
  console.log(app.get('port'));
});
