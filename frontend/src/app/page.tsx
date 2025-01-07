
type typeBank = {
  id: number;
  name: string;
  compensation: number;
};


export default async function Home() {
  const data = await fetch("http://localhost:3003");
  const allbank = await data.json();
  
  return (
    <div className="flex w-full justify-around">
      <table className="border">
        <tr>
          <th>Código de compensação</th>
          <th>Nome Instituição</th>
        </tr>
        {allbank.map((bank: typeBank) => {
          return (
            <tr key={bank.id} className="border">
              <td>{bank.compensation}</td>
              <td>{bank.name}</td>
            </tr>
          );
        })}
      </table>

    </div>
  );
}
