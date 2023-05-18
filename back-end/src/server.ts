import fastify from 'fastify';
import cors from '@fastify/cors';
import { memoriesRoutes } from './routes/memorie';

const app = fastify();
const PORT = 3333;

app.register(cors, {
  origin: true,
});
app.register(memoriesRoutes);

app.listen({ port: PORT }).then(() => {
  console.log(` 🐱‍🚀 HTTP server running on http://localhost:${PORT}`);
});
