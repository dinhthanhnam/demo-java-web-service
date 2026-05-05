import {useEffect, useState} from 'react'
import './App.css'

interface User {
  username: string
  password: string
}

function App() {

  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8080/hello")
        // parse JSON response
        const data = await res.json()
        // backend may return an array or a single object; normalize to array
        if (Array.isArray(data)) {
          setUsers(data)
        } else if (data) {
          setUsers([data])
        } else {
          setUsers([])
        }
      } catch (err) {
        console.error(err)
        setUsers(null)
      }
    })()
  }, [])

  return (
    <>
      <section id="center">
        {users && users.length > 0 ? (
          <div>
            <h3>Users from server</h3>
            <ul>
              {users.map((u, i) => (
                <li key={i}>
                  <strong>{u.username}</strong> — {u.password}
                </li>
              ))}
            </ul>
          </div>
        ) : users && users.length === 0 ? (
          <p>No users returned</p>
        ) : null}
      </section>
    </>
  )
}

export default App
