<template>
  <section class="errorPage">
    <div class="errorWrap">
      <div class="errorText">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or doesn't exist.
        </p>
        <router-link to="/home">Go to Home</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.errorPage {
  background: url(../assets/Images/404Bg.png) #0e0e0e no-repeat center center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  .errorWrap {
    max-width: 22rem;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
  }
  .errorText {
    h1 {
      font-size: 24px;
      line-height: 32px;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 24px;
    }

    a {
      display: inline-block;
      padding: 10px 20px;
      background: #4caf50;
      color: #fff;
      border-radius: 5px;
      text-decoration: none;
      &:hover {
        background-color: #3e8e41;
      }
    }
  }
}
</style>
