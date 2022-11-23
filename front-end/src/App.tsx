export default function App() {
  return (
    <form action="http://localhost:2021/dowload" method="post">
      <input type={'text'} name={'playlistLink'} id={'playlistLink'} />
      <button>Dowload</button>
    </form>
  );
}
