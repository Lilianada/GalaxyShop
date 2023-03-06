<template>

  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Tajawal:wght@400;500;700&family=Work+Sans:wght@400;500;600&display=swap");

*,
::before,
::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  max-width: 2560px;
  height: 100vh;
  background: #fff;
  font-family: "Work Sans", sans-serif;
  color: #000;
  letter-spacing: 0px;
  overflow-x: hidden;
}

img {
  border: none;
  max-width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

abbr {
  text-decoration: none;
}

ul li {
  list-style: none;
}

.mainContainer {
  width: 100vw;
  height: 100%;
  display: grid;
  overflow-x: hidden;
}

.mainWrapper {
  width: 100vw;
  height: 100%;
  display: grid;
  overflow-x: hidden;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

h2,
h3,
h4,
h5,
h6 {
  font-family: "Inter", sans-serif;
  color: #0e0e0e;
}

p {
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5rem;
  color: #0e0e0e;
  text-transform: none;
}

h1 {
  font-size: 40px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 66px;
}

h2 {
  font-size: 32px;
  font-family: "Inter", sans-serif;
  line-height: 64px;
  font-weight: 700;
}

h3 {
  font-size: 24px;
  line-height: 52px;
  font-weight: 600;
}

h4 {
  font-size: 28px;
  line-height: 2.5rem;
  font-weight: 600;
}

h5 {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5rem;
}

h6 {
  font-size: 17px;
  line-height: 1.2rem;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: inherit;
  font-family: "Work Sans", sans-serif;
}

/*=====================================*/
/*-------------[Button] -------------*/
/*=====================================*/
button {
  font-family: "Work Sans", sans-serif;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  transform: scale(0.9, 0.9);
}

.btnPrimary {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 18px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  background: #ff9100;
  color: #000000;
  border: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6.5px;
  transition: all 0.3s;
}

/*=====================================*/
/*-------------[Body Style] -------------*/
/*=====================================*/
.primaryText {
  color: #ff9100;
} /*# sourceMappingURL=index.css.map *//*# sourceMappingURL=variable.css.map */

</style>
