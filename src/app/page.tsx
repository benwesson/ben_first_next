


export default async function Home() {
  const respomse = await fetch('http://localhost:3002/api/users')
  const users = await respomse.json()



  return (
  <>
  
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">
        Welcome to the blog!
      </h1>
    </div>

    <div className="text-center pt-4 min-w-full border mt-20 pl-4 pr-4">
      <p className="text-2xl  mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

    </div>


    

    

  </>

  )
}
