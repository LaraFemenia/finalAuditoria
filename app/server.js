const express = require('express');
const app = express();
const { sequelize } = require('./models/index');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes'));

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);

  sequelize.authenticate().then(() => {
    console.log('Nos hemos podido conectar a la db exitosamente');
  })
});