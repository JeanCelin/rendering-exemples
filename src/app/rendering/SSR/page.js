export default function SSR() {
  console.log(process.env.API_KEY);
  return <div>SSR page</div>;
}
