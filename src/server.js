import app from './app';

import 'dotenv/config';

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Servindo na porta ${process.env.SERVER_PORT}`);
});