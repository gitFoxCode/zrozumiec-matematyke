<template>
	<div class="home-wrapper" >

	<div class="home-content" >
		<div class="home-content--title" data-tilt  data-tilt-max="10" data-tilt-speed="1000">
			<h1> Zrozumieć <br><strong>Matematykę</strong> </h1>
			<span class="author-name">Sebastian Włudzik</span>
		</div>
		<div class="home-content--content" >
			<nav class="home-nav">
				<ul class="home-nav__container">
					<li class="home-nav-active"><a href="#">Strona Główna</a></li>
					<li><router-link to="/zrozumiec-matematyke">Zrozumieć <span class="special">Matematykę</span></router-link></li>
					<li><router-link to="/problemy-milenijne">Problemy <span class="special">Matematyki</span></router-link></li>
					<li><router-link to="/mapa-matematyki">Mapa <span class="special">Matematyki</span></router-link></li>
				</ul>
			</nav>
		</div>
		<router-link to="/bibliografia" class="home-content__link">bibliografia</router-link>
	</div>

	<canvas id="nokey" width="800" height="800">
	    Błąd! Przeglądarka nie wspiera CANVAS, spróbuj chrome!
	</canvas>

	</div>
</template>

<script>
	export default {
	mounted () {
		const homeScript = document.createElement('script')
		homeScript.setAttribute('src', '/js/home.js')
		document.head.appendChild(homeScript)
		const tilt = document.createElement('script')
		tilt.setAttribute('src', '/js/tilt.min.js')
		document.head.appendChild(tilt)
	}
	}
</script>

<style scoped lang="scss">
h1 {font-size: 4.236em;}

h2 {font-size: 2.618em;}

h3 {font-size: 1.618em;}

.home-wrapper{
	width: 100%;
	height: 100vh;
	background-image:  url('~@/assets/home/background-home.png');
	background-position: center right;
	background-size: 80%;
	background-repeat: no-repeat;
}
.home-content{
	width: 1100px;
	height: 600px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}
.home-content--title{
	border-left: 10px solid #fff;
	color: #fff;
	padding-left: 34px;
	text-transform: uppercase;
	font-weight: 100;
	line-height: 500%;
	width: 50%;
}
.author-name{
	font-style: italic;
	text-transform: none;
}
strong{
	font-weight: bold;
}
.home-nav{
	padding: 50px;
}
.home-nav__container li a{
	color: #fff;
	text-decoration: none;
	font-size: 1.3em;
	text-transform: uppercase;
	font-weight: 100;
	transition: all 0.4s;
}
.home-nav__container li a:hover{
	font-size: 1.5em;
}
.special{
	font-weight: bold;
}
.home-nav__container .home-nav-active{
	font-size: 1.7em;
	padding-left: 15px;
}
.home-nav__container .home-nav-active a:hover{
	font-size: 1.3em;
}
.home-nav__container li{
	display: block;
	position: relative;
	margin: 20px 0;
}
.home-nav__container .home-nav-active::before{
	content: "";
	position: absolute;
	width: 14px;
	height: 14px;
	background-color: #fff;
	left: -20px;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 100%;
}
.home-nav__container li::before{
	content: "";
	position: absolute;
	width: 10px;
	height: 10px;
	left: -20px;
	top: 50%;
	transform: translateY(-50%);
	border: 2px solid #fff;
	border-radius: 100%;
}
.home-content__link{
	margin-left: 100%;
	color: #eee;
	text-transform: uppercase;
	letter-spacing: 1px;
}
</style>