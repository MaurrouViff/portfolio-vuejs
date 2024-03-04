<template>
  <div>
    <hr>
    <footer>
      <p>Portfolio fait avec amour par <span>Aurélien</span></p>
    </footer>
  </div>
</template>

<style scoped>
p {
  color: #ffffff;
}
footer {
  background-color: black;
  min-height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
span {
  font-size: 18px;
  color: red;
}
hr {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
  margin-bottom: -0.5px;
}
</style>