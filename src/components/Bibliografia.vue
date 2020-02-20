<template>
	<main class="main">
		<nav class="page-nav">
			<router-link to="/" tag="button" class="page-nav-btn btn__home" >Wróć</router-link>
		</nav>
		<aside class="aside">
			<nav>
				<div class="nav__title">Dostępne treści</div>
				<ul class="nav__links">
					<router-link to="/zrozumiec-matematyke" tag="li"><img src="~@/assets/bibliografia/think.svg" alt="icon">Zrozumieć matematykę</router-link>
					<router-link to="/problemy-milenijne" tag="li"><img src="~@/assets/bibliografia/atom.svg" alt="icon">Problemy matematyki</router-link>
					<router-link to="/mapa-matematyki" tag="li"><img src="~@/assets/bibliografia/map.svg" alt="icon">Mapa matematyki</router-link>
					<router-link to="/bibliografia" tag="li"><img src="~@/assets/bibliografia/book.svg" alt="icon">Bibliografia</router-link>
				</ul>
			</nav>
			<nav>
				<div class="nav__title">Konkurs</div>
				<ul class="nav__links">
					<a href="http://www.zobaczycmatematyke.pl/"><li><img src="~@/assets/bibliografia/konkurs-logo.svg" alt="icon">Strona konkursu</li></a>
				</ul>
			</nav>
			<section class="socialmedia">
				<a href="https://www.facebook.com/zobaczycmatematyke/"><img src="~@/assets/bibliografia/facebook.svg" alt="facebook"></a>
				<a href="https://github.com/gitFoxCode/zrozumiec-matematyke"><img src="~@/assets/bibliografia/github.svg" alt="github"></a>
				<a href="https://zrozumiec-matematyke.github.io/"><img src="~@/assets/bibliografia/www.svg" alt="strona w sieci"></a>
			</section>
			<blockquote cite="#" class="quote">
				<p>Wszystko powinno być tak proste, <br>jak to tylko możliwe, ale nie prostsze.</p>
				<footer>
					<div class="quote__author--image"></div>
					<div class="quote__author--info">
						<span class="quote__author--name">Albert Einstein</span>
						<span class="quote__author--prof">fizyk, twórca szczególnej i ogólnej teorii względności</span>
					</div>
				</footer>
			</blockquote>
		</aside>
		<section class="main__content">
			<h1>Bibliografia</h1>
			<p class="undertext">Zrozumieć <span>Matematykę</span></p>

			<div class="author">
				<div class="author__school"></div>
				<div class="author__info">
					<span class="author__info--name">Sebastian Włudzik</span>
					<span class="author__info--type">Autor</span>
				</div>
			</div>
			<div class="additional">
				<p>Ze względu na brak czasu wiele treści nie zostało dodanych, szczegółowe informacje o stronie można znaleźć <a href="https://github.com/gitFoxCode/zrozumiec-matematyke">tutaj</a></p>
			</div>
			<div class="sourcebox">
				<div class="cards">
					<div class="card">
						<a href="https://www.flaticon.com/">
						    <div class="card__name">Ikony</div>
						    <div class="card__title">Flaticon</div>
						    <div class="card__icon">
							<img src="~@/assets/bibliografia/flaticon-logo.svg" alt="icon">
					    </div>
					    </a>
					</div>
					<div class="card">
						<div class="card__name">Technologia</div>
						<div class="card__title">Vue.js</div>
						<div class="card__icon">
							<img src="~@/assets/bibliografia/vue.svg" alt="icon">
						</div>
					</div>
				</div>
				<div class="sourcebox__content">
					<h2>Źródła:</h2>
					<ul>
						<li><a href="https://kskedlaya.org/putnam-archive/1992.pdf">https://kskedlaya.org/putnam-archive/1992.pdf</a></li>
						<li><a href="https://www.youtube.com/watch?v=OkmNXy7er84">https://www.youtube.com/watch?v=OkmNXy7er84</a></li>
						<li><a href="https://pl.wikipedia.org/">https://pl.wikipedia.org/</a></li>
						<li><a href="https://github.com/vanderb/vue-tilt.js"></a>https://github.com/vanderb/vue-tilt.js</li>
						<li><a href="https://www.youtube.com/watch?v=OmJ-4B-mS-Y">https://www.youtube.com/watch?v=OmJ-4B-mS-Y</a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
						<li><a href="#"></a></li>
					</ul>
				</div>
			</div>
		</section>
	</main>
</template>

<style scoped lang="scss">
.btn__home{
	width: 187px;
	height: 85px;
	color: #fff;
	background: transparent;
	position: relative;
	background-color: #111517;
	clip-path: polygon(0 0, 100% 0, 76% 80%, 0% 100%);
	border: none;
	font-family: 'Poppins';
	text-align: left;
	text-indent: 50px;
	transition: background-color 0.4s ease-in-out;
}
.btn__home::before{
	content: "";
	position: absolute;
	width: 20px;
	height: 20px;
	background: url('~@/assets/home.svg');
	background-position: center;
	background-size: 100%;
	background-repeat: no-repeat;
	left: 13%;
	top: 49%;
	transform: translateY(-50%);
}
.btn__home:hover{
	background-color: #2F3A40;
}
.page-nav{
	position: fixed;
	top: 0;
	left: 0;
    z-index: 2;
}
.page-nav-btn{
	padding: 10px;
}
.main{
	background-color: #1E1E20;
	display: flex;
}
.aside{
	width: 450px;
	background-color: #171717;
	height: 100vh;
	padding-top: 110px;
	z-index: 1;
	display: flex;
	flex-direction: column;
	max-height: 100vh;
	overflow-y: auto;
}
.nav__title{
	display: inline-block;
	width: 250px;
	padding: 20px;
	background-color: #945CEF;
	font-size: 1.2em;
	text-transform: uppercase;
	color: #fff;
	border-radius: 50px;
	padding-left: 25px;
	position: relative;
	margin-bottom: 40px;
}
.nav__title::after{
	content: "";
	position: absolute;
	top: -5%;
	left: -10%;
	background-color: #8250D5;
	width: 110%;
	height: 110%;
	z-index: -1;
	border-radius: 50px;
}
.aside nav{
	padding-left: 50px;
}
.nav__links li{
	padding: 10px;
	color: #7D8995;
	display:flex;
	align-items: center;
	cursor: pointer;
}
.nav__links li:hover{
	color: #94A2AF;
};
.nav__links li img{
	margin-right: 20px;
}
.nav__links{
	margin-bottom: 40px;
}
.nav__links a{
	text-decoration: none;
}
.socialmedia{
	width: 100%;
	display: flex;
	justify-content: center;
}
.socialmedia img{
	margin: 0 20px;
}
.quote{
	margin-top: auto;
	width: 100%;
}
.quote p{
	color: #7D8995;
	font-size: 1.1em;
	padding-left: 50px;
	line-height: 150%;
	margin-bottom: 20px;
}
.quote{
	position: relative;
}
.quote::after{
    content: '\201C';
    position: absolute;
    top: 0;
    left: 20px;
    display: inline-block;
    font-size: 3rem;
    line-height: 0.8;
    font-family: Georgia, serif;
    color: #363D44;
}
.quote::before{
    content: '\201C';
    position: absolute;
    top: 30px;
    right: 30px;
    transform: rotate(180deg);
    display: inline-block;
    font-size: 3rem;
    line-height: 0.8;
    font-family: Georgia, serif;
    color: #363D44;
}
.quote footer{
	display: flex;
	justify-content: center;
	padding-bottom: 5%;
}
.quote__author--image{
	width: 70px;
	height: 70px;
	border-radius: 50%;
	background: url('https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin-right: 20px;
}
.quote__author--info{
	max-width: 50%;
	display: flex;
	flex-direction: column;
}
.quote__author--name{
	font-size: 1.2em;
	color: #616161;
	font-weight: 600;
}
.quote__author--prof{
	margin-top: 5px;
	line-height: 120%;
	color: #474747;
}
h1 {
	font-size: 4.236em;
	font-weight: bold;
	color: #fff;
	padding-top: 10%;
}
.main__content{
	width: 100%;
	padding-left: 50px;
	background-image: url('~@/assets/bibliografia/background.png');
	background-position: 100% 0;
	background-size: 50%;
	background-repeat: no-repeat;
	max-height: 100vh;
	overflow-y: auto;
	background-attachment: inherit;
}
.undertext{
	color: #535353;
	font-size: 2em;
	margin-top: 10px;
}
.undertext span{
	color: #6F45B2;
}
.author{
	margin-top: 3%;
	display: flex;
}
.author__school{
	width: 85px;
	height: 85px;
	background: url('~@/assets/bibliografia/czarniecki.png');
	background-size: cover;
	border-radius: 50%;
	background-position: center;
	border: 2px solid #9220B2;
}
.author__info{
	display: flex;
	flex-direction: column;
	margin-left: 20px;
}
.author__info--name{
	font-size: 2em;
	color: #fff;
	font-weight: 600;
	line-height: 230%;
	margin-bottom: -20px;
}
.author__info--type{
	color: #717171;
	font-weight: 500;
	margin-top: 5px;
}
.additional{
	color: #ACACAC;
	margin-top: 20px;
	font-size: 1.1em;
}
.additional a{
	color: #9220B2;
}
.sourcebox{
	padding-top: 70px;
}
.cards{
	display: flex;
	justify-content: space-around;
}
.cards a{
	text-decoration: none;
}
.card{
	width: 40%;
	height: 250px;
	background-color: #202932;
	border-radius: 16px;
	padding: 25px;
	position: relative;
}
.card__name{
	color: #fff;
	font-size: 1.3em;
}
.card__title{
	margin-top: 10px;
	font-size: 4em;
	font-weight: bold;
	color: #fff;
}
.card__icon{
	position: absolute;
	bottom: 25px;
	right: 25px;

}
.sourcebox__content{
	margin-top: 60px;
}
.sourcebox__content li{
	padding: 10px 0;
	color: #ACACAC;
}
.sourcebox__content li a{
	text-decoration: none;
	color: #ACACAC;
}
h2 {
	font-size: 2.618em;
	font-weight: 600;
	color: #fff;
}
</style>