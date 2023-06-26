// Nomenclatura de variáveis

const listCategories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserCategory(req, res) {
  const usernameGithub = String(req.query.username)

  if (!usernameGithub) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const responseApiGithub = await fetch(`https://api.github.com/users/${usernameGithub}`);

  if (responseApiGithub.status === 404) {
    return res.status(400).json({
      message: `User with username "${usernameGithub}" not found`
    })
  }

  const user = await responseApiGithub.json()

  const orderListCategories = listCategories.sort((categoryOne, categoryTwo) =>  categoryTwo.followers - categoryOne.followers); 

  const categoryUser = orderListCategories.find(i => user.followers > i.followers)

  const resultCategoryUser = {
    usernameGithub,
    category: categoryUser.title
  }

  return resultCategoryUser
}

getUserCategory({ query: {
  username: 'josepholiveira'
}}, {})