<template>
  <div style="border: solid grey .1em; margin 16px; padding : 16px">
    <p>ADD PLAYER</p>
    <form method="POST">
      <div style="margin: 8px">
        <label>
          Player Name
          <input type="text" placeholder="player name" name="name" />
        </label>
      </div>
      <button style="margin: 8px" formaction="/team/add-player?default">SAVE</button>
    </form>
    <div style="margin-top: 16px">
      <NuxtLink to="/team">BACK</NuxtLink>
    </div>
  </div>
</template>
