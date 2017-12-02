import app from '../App'


app.express.get('/', (req: any, res: any) => {
  res.send(JSON.stringify({ a: "hahahaaaaaa" }));
});
