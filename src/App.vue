<template>
  <router-view />
</template>

<script>
  import userDataList from './user-data/user-data.json'
  const userData =
    userDataList[Math.floor(Math.random() * Math.floor(userDataList.length))]

  const { id, email, fullName, role } = userData.visitor
  const { accountId } = userData.account

  export default {
    name: 'App',
  }

  // eslint-disable-next-line no-undef
  pendo.initialize({
    visitor: {
      id,
      email,
      full_name: fullName,
      role,
    },

    account: {
      id: accountId, // Highly recommended
    },
  })
</script>
