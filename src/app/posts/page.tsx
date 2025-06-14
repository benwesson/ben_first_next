


export default async function Page() {
  const respomse = await fetch('http://localhost:3002/api/users')
  const users = await respomse.json()



  return (
  <>
  
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">
        Posts
      </h1>
    </div>
    <div >
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">id</th>
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-left">Gender</th>
          </tr>

        </thead>
        <tbody>

          {users.map((user: any) => (
            <tr key={user.id}>
                <td className="px-4 py-2 text-left">{user._id}</td>
              <td className="px-4 py-2 text-left">{user.first_name}</td>
              <td className="px-4 py-2 text-left">{user.last_name}</td>
              <td className="px-4 py-2 text-left">{user.gender}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>

    


    

  </>

  )
}