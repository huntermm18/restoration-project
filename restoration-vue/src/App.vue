<template>
  <div id="app">

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Restoration Project</router-link>
    </div>
    <ul class="nav navbar-nav">
      <!--li class=active><router-link to="/">Home</router-link></li-->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Information">Information</router-link></li>
      <li><router-link to="/People">People</router-link></li>
      <li><router-link to="/About">About</router-link></li>
    </ul>
  </div>
</nav>


    <router-view />

<div class='footer'>
  <div class='footer-item footer-one'></div>
  <div class='footer-item footer-two'>
    <a class=infootertwo href="https://github.com/huntermm18/restoration-project"><br>Link to github repository</a>
  </div>
  <div class='footer-item footer-three'></div>
</div>


  </div>
</template>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style>
* {
  text-align: center;
  font-family: 'Comfortaa';
  letter-spacing: 4px;
}

.navbar {
    background-color: rgb(214, 214, 214);
    margin: 0px;
    margin-bottom: 0px;
}
.page {
  background-color: rgb(223, 223, 223);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}
img {
  border-radius: 8px;
  width: 100%;
}


  .footer {
    display: flex;
    justify-content: space-between;
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    margin-top: 0px;
  }
  
  .footer-item {
    border: 1px solid #fff;
    background-color: #b1b0b0;
    height: 100px;
    flex: 1;
  }
  
  .footer-two {
    text-align: center;
    flex-wrap: wrap;
  }

  
  .footer-one,
  .footer-three {
    background-color: #c0bebe;
    flex: initial;
    width: 300px;
  }

  .picture-text-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgb(223, 223, 223);
}


.contentbox {
  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 40%;
  margin: 40px;
  text-align: center;
}

.homepic {
  border-radius: 0px;
  margin-top: -20px;
}
.about-pic {
  width: 400px;
  margin-bottom: 50px;
}
.header-about {
  margin-top: 70px;
}

.italic {
  font-style: italic;
}
.bold {
  font-weight: bold;
}
.word-margin {
  margin: 70px;
}
.info-page-p {
  margin: 70px;
}
.vert-margin {
  margin-top: 100px;
  margin-bottom: 100px;
}



/* Mobile Styles */
@media only screen and (max-width: 400px) {

  .contentbox {
    flex-direction: column;
  }
  .mobile-invert-order {
    flex-direction: column-reverse;
  }
  .word-margin {
    margin: 15px;
  }
  .mobile-text-shrink-small {
    font-size: small;
  }
  .mobile-text-shrink-medium {
    font-size: medium;
  }
  .mobile-text-shrink-large {
    font-size: large;
  }


}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {

}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .page {
    margin: 0 auto;
    padding: 40px;
  }
  .middle-padding {
    padding-left: 300px;
    padding-right: 300px;
  }
  .info-page-p {
    margin-left: 200px;
    margin-right: 200px;
  }
  .person-story {
    margin-left: 600px;
    margin-right: 600px;
  }
  .about-page {
    padding-bottom: 200px;
  }

}
</style>
