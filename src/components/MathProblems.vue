<template>
<div class="page-wrapper" >
	<nav class="page-nav">
		<router-link to="/" tag="button" class="page-nav-btn btn__home" >Wróć</router-link>
	</nav>
	<div class="modal__wrapper"
	v-bind:style="modalStyle"
	@click="closeModal">
		<div class="modal" v-on:click.stop>
			<button type="button" class="modal__close" @click="closeModal">&times;</button>
			<div class="modal__title"> {{modalTitle}} </div>
			<div class="modal__date"> {{modalDate}} </div>
			<div class="modal__text" v-html="modalContent"></div>
			<a :href="modalWikiUrl" target="_blank">
				<button type="button" class="modal__button">Czytaj więcej</button>
			</a>
		</div>
	</div>

	<div class="parallax">

	    <div class="parallax__layer parallax__layer__1">
	        <img src="~@/assets/mathproblems/parallax/layer_1.png" /> <!--- Góry --->
	    </div>
	    <span class="parallax__title">Problemy Milenijne</span>
	    <div class="parallax__layer parallax__layer__2">
	        <img src="~@/assets/mathproblems/parallax/layer_2.svg" /> <!--- Góry mniejsze + mniejsze drzewa --->
	    </div>

	    <div class="parallax__layer parallax__layer__3">
	        <img src="~@/assets/mathproblems/parallax/layer_3.png" /> <!--- Góry mniejsze + mniejsze drzewa (3 warstwa) --->
	    </div>
	    <div class="parallax__layer parallax__layer__4">
	        <img src="~@/assets/mathproblems/parallax/layer_4.png" /> <!--- Góry mniejsze + mniejsze drzewa (4 warstwa) --->
	    </div>
	    <div class="parallax__layer parallax__layer__5">
	        <img src="~@/assets/mathproblems/parallax/layer_5.png" /> <!--- Góry mniejsze + mniejsze drzewa (5 warstwa) + Wieża --->
	    </div>
	    <span class="parallax__text">Problemy matematyki</span>
	    <div class="parallax__layer parallax__layer__6">
	        <img src="~@/assets/mathproblems/parallax/layer_6.png" /> <!--- Drzewa najbliżej użytkownika  --->
	    </div>
	    <div class="parallax__cover">
	    	<h1 class="parallax__cover__title">Co to <span class="special">problem milenijny</span>?</h1>
	    	<div class="parallax__cover__boxes">
	    		<div class="parallax__cover__box">Zestaw siedmiu zagadnień matematycznych ogłoszonych przez Instytut Matematyczny Claya 24 maja 2000 roku; za rozwiązanie każdego z nich wyznaczono milion dolarów nagrody.</div>
	    		<div class="parallax__cover__box">Do dziś rozwiązano tylko jeden problem: <span class="special">hipoteza Poincarégo</span> została potwierdzona w 2006 roku przez rosyjskiego matematyka Grigorija Perelmana, który odmówił przyjęcia tej i innych nagród.</div>
	    	</div>

		    <section class="multiplecards">
		    	<span class="title"><span class="special">7</span> problemów milenijnych</span>
		    	<div class="multiplecards__box">
		    		<div class="card__box multiplecards__beside">
		    			<div class="card" data-number="1">
		    				<span class="card__title">P vs NP</span>
		    				<span class="card__text">Czy istnieją pytania, na które odpowiedź - jeśli się ją zna - można szybko zweryfikować, lecz któych rozwiązanie - bez znajomości odpowiedzi - zabierze więcej czasu (mierzonego poprzez złożoność obliczeniową)?</span>
		    				<button type="button" class="card__button" @click="openModal">Czytaj</button>
		    			</div>
		    			<div class="card" data-number="5">
		    				<span class="card__title">Teoria Yanga-Millsa</span>
		    				<span class="card__text"> Próba opisania jednym formalizmem matematycznym oddziaływania słabego, silnego i elektromagnetycznego.</span>
		    				<button type="button" class="card__button" @click="openModal">Czytaj</button>
		    			</div>
		    		</div>
		    		<div class="card__box multiplecards__middle">
		    			<div class="card" data-number="2">
		    				<span class="card__title">Hipoteza Hodge'a</span>
		    				<span class="card__text">Czy na algebraicznych rozmaitościach rzutowych każdy cykl Hodge'a jest wymierną liniową kombinacją cykli algebraicznych? Hipoteza dotyczy algebraiczności wybranych klas kohomologii de Rhama.	</span>
		    				<button type="button" class="card__button" @click="openModal">Czytaj</button>
		    			</div>
		    			<div class="card" data-number="3">
		    				<span class="card__title">Hipoteza Poincarégo</span>
		    				<span class="card__text">„każda trójwymiarowa zwarta i jednospójna rozmaitość topologiczna bez brzegu jest homeomorficzna ze sferą trójwymiarową”</span>
		    				<span class="card__special-text">Rozwiązano</span>
		    				<button type="button" class="card__button" @click="openModal">Czytaj</button>
		    			</div>
		    			<div class="card" data-number="7">
		    				<span class="card__title">Hipoteza<br> Bircha i Swinnertona-Dyera</span>
		    				<span class="card__text">Związana z przewidywaniem rozwiązywalności każdego równania diofantycznego.</span>
		    				<button type="button" class="card__button" @click="openModal">Czytaj</button>
		    			</div>
		    		</div>
		    		<div class="card__box multiplecards__beside">
		    			<div class="card" data-number="4">
		    				<span class="card__title">Hipoteza Riemanna</span>
		    				<span class="card__text">„część rzeczywista każdego nietrywialnego zera funkcji dzeta jest równa ½”</span>
		    				<button type="button" class="card__button" @click="openModal">Czytaj</button>
		    			</div>
		    			<div class="card" data-number="6">
		    				<span class="card__title">Równania Naviera-Stokesa</span>
		    				<span class="card__text">Rozwiązania tych równań dla najbardziej skomplikowanych zjawisk hydrodynamicznych.</span>
		    				<button type="button" class="card__button" @click="openModal">Czytaj</button>
		    			</div>
		    		</div>
		    	</div>
		    </section>
		    <div class="addnotation">To nie wszystkie problemy matematyki! Jest ich <a href="https://pl.wikipedia.org/wiki/Nierozwi%C4%85zane_problemy_w_matematyce">znacznie więcej</a></div>

	    </div>
	</div>

</div>
</template>

<script>
import Vue from 'vue';
import Vodal from 'vodal';
import img_zeta from '../assets/mathproblems/zeta.svg';
import img_zeta2 from '../assets/mathproblems/zeta2.svg';
Vue.component(Vodal.name, Vodal);
export default {
	name: 'mathproblems',
	data: ()=>{
		return {
			modalStyle: 'display: none;',
			modalTitle: '',
			modalDate: '',
			modalWikiUrl: '',
			modalContent: '',
			modalData: [{
				'title': 'P vs NP',
				'date': '1971',
				'wikiUrl': 'https://pl.wikipedia.org/wiki/Problem_NP',
				'content': `<p>Problem decyzyjny, dla którego rozwiązanie można zweryfikować w czasie wielomianowym. Równoważna definicja mówi, że problem jest w klasie NP, jeśli może być rozwiązany w wielomianowym czasie na niedeterministycznej maszynie Turinga.</p><p>Różnica pomiędzy problemami P i NP polega na tym, że w przypadku P znalezienie rozwiązania ma mieć złożoność wielomianową, podczas gdy dla NP sprawdzenie podanego z zewnątrz rozwiązania ma mieć taką złożoność.</p><p>Przykładowy problem:</p>
				<p><span class="special-text">Czy jakikolwiek niepusty podzbiór zadanego zbioru (np. {-2,6,-3,72,10,-11}) sumuje się do zera? </span></p>
				<p>Trudno znaleźć rozwiązanie tego zagadnienia w czasie wielomianowym. Nasuwający się algorytm sprawdzenia wszystkich możliwych podzbiorów ma złożoność wykładniczą ze względu na liczebność zbioru. Nie wiadomo zatem, czy problem ten jest klasy P. Na pewno natomiast uzyskawszy z zewnątrz kandydata na rozwiązanie (np. {-2,6,-3,10,-11}) możemy w liniowym (a zatem wielomianowym) czasie sprawdzić, czy sumuje się do zera. Jest to zatem problem NP.</p>`
			},{
				'title': 'Hipoteza Hodge\'a',
				'date': '1950',
				'wikiUrl': 'https://pl.wikipedia.org/wiki/Hipoteza_Hodge%E2%80%99a',
				'content': `<p>Czy na algebraicznych rozmaitościach rzutowych każdy cykl Hodge’a jest wymierną liniową kombinacją cykli algebraicznych? Hipoteza dotyczy algebraiczności wybranych klas kohomologii de Rhama. Do tej pory problem jest rozwiązany tylko dla niektórych wersji.</p>`
			},{
				'title': 'Hipoteza Poincarégo',
				'date': '1904',
				'wikiUrl': 'https://pl.wikipedia.org/wiki/Hipoteza_Poincar%C3%A9go',
				'content': `<p>Hipoteza dotycząca 3-wymiarowych rozmaitości topologicznych sformułowana w pracach Henriego Poincarégo w roku 1904. Przez niemal sto lat nie udawało się jej dowieść ani obalić. Była jednym z problemów milenijnych, ogłoszonych przez Instytut Matematyczny Claya w roku 2000.</p><p>Ogólniejsza wersja hipotezy sformułowana została przy użyciu terminów topologii algebraicznej:</p><p>
				<span class="special-text">Każda n-wymiarowa rozmaitość bez brzegu, zwarta i mająca typ homotopijny n-wymiarowej hipersfery jest homeomorficzna z n-wymiarową hipersferą.</span></p><p> Dla wymiaru 1 (czyli dla okręgu) i 2 (czyli dla sfery) dowody znane były od lat. Stephen Smale podał w 1961 dowód dla wymiarów większych niż 4, Michael Freedman w roku 1982 dla wymiaru 4.</p>`
			}, {
				'title': 'Hipoteza Riemanna',
				'date': '1859',
				'wikiUrl': 'https://pl.wikipedia.org/wiki/Hipoteza_Riemanna',
				'content': `<p>Dla liczb zespolonych s spełniających warunek Re s > 1 funkcja dzeta określona jest wzorem:</p>

				<img src="${img_zeta}" alt="">

				<p>Funkcja ta daje się jednoznacznie przedłużyć analitycznie na całą płaszczyznę zespoloną, nie licząc punktu s = 1, gdzie funkcja przechodzi w rozbieżny szereg harmoniczny. Wtedy funkcja Dzeta Riemanna spełnia równanie funkcyjne:</p>

				<img src="${img_zeta2}" alt="">

				<p>gdzie T(s) reprezentuje funkcję gamma. Dzięki temu rozszerzeniu funkcja Dzeta ma tzw. trywialne miejsca zerowe dla s = -2, -4, -6, ... , wynikające z zerowania się funkcji sinus. Uwaga: dla s = 2, 4,... stosuje się pierwotną postać szeregu zbieżnego w tym przypadku do od lat znanych wartości (różnych od zera) pokazanych choćby przez Eulera. Hipoteza Riemanna mówi, że wszystkie pozostałe miejsca zerowe znajdują się na prostej Re s = ½, zwanej prostą krytyczną. G.H. Hardy oraz J.E. Littlewood udowodnili, że istnieje nieskończenie wiele miejsc zerowych funkcji dzeta na prostej krytycznej. Zostało również udowodnione, że przynajmniej 40% miejsc zerowych leży na prostej krytycznej (Conrey, 1989).</p>`
			},{
				'title': 'Teoria Yanga-Millsa',
				'date': '1954',
				'wikiUrl': 'https://pl.wikipedia.org/wiki/Pole_Yanga-Millsa',
				'content': `<p>Pole rządzące oddziaływaniem wszystkich znanych cząstek elementarnych we Wszechświecie. Zostało zaproponowane w 1954 roku przez Chen Ning Yanga i jego ucznia Roberta Millsa. Jest ono uogólnieniem pola Maxwella – wprowadzonego sto lat wcześniej, by m.in. opisać światło – z tym wyjątkiem, że pole Yanga-Millsa w niektórych teoriach dopuszcza obecność ładunku magnetycznego. Dla oddziaływań słabych kwantem odpowiadającym polu Yanga-Millsa jest wuon (bozon W), który może mieć ładunek (czyli słaby izospin) +1 lub -1 oraz zeton (ładunek 0). Nośnikiem oddziaływania silnego są gluony występujące w ośmiu stanach kwantowych.</p><p>Istnieją dwa równoważne opisy teorii Yanga-Millsa - jeden wykorzystuje bozony cechowania, a drugi topologiczne ekscytacje pól (np. monopole, instantony, merony itd.</p>`
			},{
				'title': 'Równania Naviera-Stokesa',
				'date': '1822',
				'wikiUrl': 'https://pl.wikipedia.org/wiki/R%C3%B3wnania_Naviera-Stokesa',
				'content': `<p>Równania Naviera-Stokesa (nazwane na cześć Claude’a-Louis Naviera i George’a Gabriela Stokesa) – zestaw równań opisujących zasadę zachowania pędu dla poruszającego się płynu. Według nich zmiany pędu elementu płynu zależą jedynie od sił masowych, zewnętrznego ciśnienia i wewnętrznych sił lepkości w płynie.</p><p>Dla płynu idealnego o zerowej lepkości równania mówią, że przyspieszenie jest proporcjonalne do gradientu ciśnienia.</p><p>Równania są wyrażone w postaci różniczkowej, dla danego problemu fizycznego muszą być znalezione na drodze rachunku różniczkowego i całkowego. W praktyce jedynie najprostsze przypadki mogą być rozwiązane analitycznie, na przykład nieturbulentnego (laminarnego), stacjonarnego przepływu (niezmieniającego się w czasie), w których liczba Reynoldsa ma małą wartość.</p><p>W bardziej złożonych przypadkach, jak prognozowanie pogody na Ziemi, analiza El Niño lub obliczenia siły nośnej skrzydeł samolotów, rozwiązania równań Naviera-Stokesa mogą być znalezione jedynie metodami numerycznymi przy pomocy komputerów. Jest to oddzielna dziedzina nauki zwana obliczeniową mechaniką płynów.</p><p>W 2000 roku Instytut Matematyczny Claya ogłosił równania Naviera-Stokesa jednym z siedmiu problemów milenijnych matematyki i zaoferował 1 000 000 dolarów nagrody za podanie rozwiązania lub kontrprzykładu.</p>`
			},{
				'title': 'Hipoteza Bircha i Swinnertona-Dyera',
				'date': '1960',
				'wikiUrl': 'http://www.tomaszgrebski.pl/problemymilenijne/Hipoteza%20Bircha%20i%20Swinnertona-Dyera/Hipoteza%20Bircha%20i%20Swinnertona-Dyera.pdf',
				'content': `<p>Dla sformułowania hipotezy Bircha i Swinnertona-Dyera wystarczy kilka zdań. Mówi ona, jak wygląda pierwszy wyraz rozwinięcia na szereg funkcji L krzywej eliptycznej E w otoczeniu punktu s = 1 (więcej informacji po kliknięciu w przycisk)</p>`
			}]
		}
	},
	methods: {
		openModal: function (e) {
			const number = e.target.parentNode.dataset.number;
			const modal = this.modalData[(number * 1) - 1];
			this.modalTitle = modal.title;
			this.modalDate = modal.date;
			this.modalWikiUrl = modal.wikiUrl;
			this.modalContent = modal.content;
			this.modalStyle = 'display: block;';
		},
		closeModal: function () {
			this.modalStyle = 'display: none;';
		}
	}
}

</script>

<style lang="scss">
.special-text{
    background-color: #381635; padding: 10px; border-radius: 10px; line-height: 300%;
}
</style>

<style scoped lang="scss">
@import "@/css/vodal/common.scss";
@import "@/css/vodal/slide-down.scss";

::selection {
  color: #111;
  background: #F5A50B;
}
.addnotation{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
	margin: 0 auto;
	color: #eee;
	padding: 50px 20px;
	border: 1px solid #eee;
	text-align: center;
	margin-top: 100px;
	z-index: 2;
}
.addnotation a{
	color: #ffc800;
	text-decoration: underline;
}
.page-wrapper{
	width: 100%;
	min-height: 100vh;
	background-color: #FEDCC8;
}
.page-nav{
	position: fixed;
	top: 0;
	left: 0;
    z-index: 1;
}
.page-nav-btn{
	padding: 10px;
}
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
.parallax {
  -webkit-perspective: 100px;
          perspective: 100px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: -1px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
}

.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer img {
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.parallax__cover {
  background: #2D112B;
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 2200px;
  z-index: 2;
  padding: 0 20%;
}
.parallax__cover::after{
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 490px;
	background: url('~@/assets/mathproblems/footer.svg');
}

.parallax__layer__1 {
  transform: translateZ(-250px) scale(3.5);
}

.parallax__layer__2 {
  transform: translateZ(-200px) scale(2.7);
}

.parallax__layer__3 {
  transform: translateZ(-150px) scale(2.5);
}

.parallax__layer__4 {
  transform: translateZ(-100px) scale(2);
}

.parallax__layer__5 {
  transform: translateZ(-50px) scale(1.5);
}

.parallax__layer__6 {
  transform: translateZ(0px) scale(1);
}

.parallax__title{
  position: absolute;
  top: 15%;
  font-size: 5em;
  font-family: 'Poppins';
  font-weight: bold;
   transform: translateZ(-50px);
  text-transform: uppercase;
  color: #df7235;
}
.parallax__text{
  position: absolute;
  top: 60%;
  font-size: 2em;
  font-family: 'Poppins';
  font-weight: bold;
   transform: translateZ(-50px);
  text-transform: uppercase;
  color: #2e0e2c;
}
.parallax__text::after{
  content: "";
  width: 70%;
  height: 4px;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2e0e2c;
}
.parallax__cover__title{
  font-size: 3em;
  margin: 0;
  padding: 0;
  font-family: 'Poppins';
  color: #eee;
  font-weight: bold;
}
.special{
  color: #F5A50B;
}
.parallax__cover__boxes{
  margin-top: 30px;
  font-family: 'Poppins';
  font-size: 1em;
  color: #eee;
  width: 100%;
  display: flex;
  justify-content: space-around;
  line-height: 150%;
}
.multiplecards{
	margin-top: 150px;
}
.title{
	font-size: 3em;
	color: #eee;
	text-align: center;
	width: 100%;
	display: block;
	margin-bottom: 50px;
}
.multiplecards__box{
	display: flex;
	justify-content: space-between;
    align-items: center;
}
.card{
	height: 350px;
	width: 270px;
	border: 1px solid #eee;
	border-radius: 5px;
	position: relative;
	overflow-wrap: break-word;
	padding: 10px 0;
	transition: box-shadow 0.3s, transform 0.3s;
	box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
}
.card:hover{
	box-shadow: 0px 0px 0px -2px rgba(0,0,0,0.75);
	transform: scale(1.01);
}
.card::after{
	content: attr(data-number);
	position: absolute;
	left: -20px;
	top: -20px;
	width: 60px;
	height: 60px;
	background-color: #2D112B;
	border: 2px solid #eee;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5em;
	color: #eee;
}
.card__box{
	display: flex;
	flex-direction: column;
}
.multiplecards__beside .card{
	margin-bottom: 250px;

}
.multiplecards__middle .card{
	margin-bottom: 100px;
}
.card__button{
	position: absolute;
	font-family: 'Poppins';
	font-size: 1em;
	padding: 5px 35px;
	background-color: #FEC76C;
	bottom: -20px;
	left: 50%;
	transform: translateX(-50%);
	border: none;
	border-radius: 5px;
	transition: background-color 0.3s;
}
.card__button:hover{
	background-color: #F9B23C;
}
.card__title{
	font-size: 2em;
	color: #F5A50B;
	display: block;
	width: 100%;
	font-weight: bold;
	margin-top: 35px;
	text-align: center;
	padding: 0 15px;
}
.card__text{
	display: block;
	margin-top: 50px;
	color: #eee;
	text-align: center;
	padding: 0 15px;
	line-height: 110%;
}
.card__special-text{
	display: block;
	text-align: center;
	font-family: 'Poppins';
	margin: 20px 0;
	font-weight: bold;
	color: #0BF431;
	text-transform: uppercase;
}
.modal__wrapper{
	position: fixed;
	top: 0; left: 0; bottom: 0; right: 0;
	z-index: 2;
	background-color: rgba(0,0,0,0.5);
	transition: opacity 0.3s;
	animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}
.modal{
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80vw;
	z-index: 3;
	color: #eee;
	background-color: #41183E;
	border-radius: 10px;
	padding: 50px 40px;
}
.modal__close{
	position: absolute;
	top: 0;
	right: 0;
	border-top-right-radius: 10px;
	padding: 5px 10px;
	padding-right: 15px;
	font-size: 2em;
	border: none;
	background-color: transparent;
	color: #912589;
	transition: color 0.2s;
}
.modal__close:hover{
	color: #DC3AD0;
}
.modal__title{
	font-size: 2em;
	font-weight: bold;
	color: #F5A50B;
	margin-bottom: 50px;
	position: relative;
}
.modal__title::after{
	content: "";
	position: absolute;
	width: 10%;
	height: 4px;
	background-color: #eee;
	left: 0;
	bottom: -20px;
}
.modal__date{
	position: absolute;
	top: 50px;
	right: 40px;
	font-size: 1.3em;
	color: #ACACAC;
}
.modal__text{
	line-height: 150%;
	margin-bottom: 100px;
}
.modal__button{
	padding: 10px 60px;
	font-family: 'Poppins';
	text-transform: uppercase;
	border: 0;
	border-radius: 10px;
	color: #eee;
	display: block;
	margin: 0 auto;
	margin-top: 20px;
	background-color: #63205E;
	transition: background-color 0.4s;
}
a{
	text-decoration: none;
}
.modal__button:hover, .modal__button:focus{
	background-color: #8E2987;
}
@keyframes fadeIn{
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}

</style>