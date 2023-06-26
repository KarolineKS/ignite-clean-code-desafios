// Causa vs Efeito
import { useEffect, useState } from "react"

interface User {
  name: string;
  githubProfile: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        githubProfile: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [renderingUsername, setRenderingUsername] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadUser() {
      setRenderingUsername(true)

      const fetchUserResponse = fetchUser()

      setUserData(fetchUserResponse.data.user)
      
      setRenderingUsername(false)
    }

    loadUser()
  })

  if (renderingUsername) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.githubProfile}.png`} alt="" />
      <a href={userData?.githubProfile}>{userData?.name}</a>
    </div>
  )
}


