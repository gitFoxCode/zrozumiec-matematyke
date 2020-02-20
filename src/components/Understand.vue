<template>
<div class="page-wrapper" >
	<nav class="page-nav">
		<router-link to="/" tag="button" class="page-nav-btn btn__home" >Wróć</router-link>
	</nav>
	<section class="header">
		<h1 data-ref="Zrozumieć Matematykę">Zrozumieć Matematykę</h1>
		<p>Matematyka jest uważana za królową nauk, ale nie dla każdego jest taka łaskawa. Kluczem do zrozumienia matematyki jest rozkładanie zadań na mniejsze fragmenty. Żeby to zobrazować i pokazać, że nawet <a href="https://kskedlaya.org/putnam-archive/1992.pdf">najtrudniejsze zadanie na najtrudniejszym sprawdzianie na świecie</a> po podzieleniu na kroki nie jest takie ciężkie!</p>

		<div class="task">
			<span class="task__title">Zadanie</span>
			<span class="task__content">4 punkty są losowo wybierane z powierzchni kuli. Jakie jest prawdopodobieństwo że środek kuli zawiera się w czworościanie, którego wierzchołki są w tych 4 punktach? (zakłada się że każdy punkt jest niezależnie wybrany relatywnie do równomiernego rozkładu na sferze)</span>
		</div>

	</section>
	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-2.mp4"></video>
		</div>
		<div class="step__content">
			<p>Zacznijmy od zrozumienia zadania: <span class="legend-red">4 punkty są losowo wybierane z powierzchni kuli</span>. <span class="legend-blue">Jakie jest prawdopodobieństwo</span>, że <span class="legend-pink">środek kuli zawiera się</span> w <span class="legend-green">czworościanie</span>, <span class="legend-violet">którego wierzchołki są w tych 4 punktach</span>? (<span class="legend-yellow">zakłada się że każdy punkt jest niezależnie wybrany relatywnie do równomiernego rozkładu na sferze</span>)</p>
			<ul>
				<li class="legend-red">Losujemy 4 punkty na powierzchni kuli</li>
				<li class="legend-blue">W zadaniu pytają nas o prawdopodobieństwo</li>
				<li class="legend-pink">Środek kuli jest w czworościanie ( wchodzi w skład czworościaniu )</li>
				<li class="legend-green">Czworościan - Wielościan o czterech trójkątnych ścianach <img src="~@/assets/umath/tetrahedron.svg" alt="czworościan"></li>
				<li class="legend-violet">Czworościan ma 4 wierzchołki, wystarczy je umieścić w wylosowanych punktach</li>
				<li class="legend-yellow">Założenie</li>
			</ul>
			<p>Więc, jakie jest prawdopodbieństwo, że czworościan znajduje się w środku kuli?</p>
			<p class="step__content-title">Jak zacząć?</p>
			<p>Zazwyczaj w matematyce dobrze jest pomyśleć o prostszych przypadkach. <br>Więc pierwszym krokiem będzie uproszczenie zadania zmieniając 3 wymiary na 2 wymiary, gdzie wybierzemy 3 losowe punkty na okręgu:</p>
			<img class="vis-img" src="~@/assets/umath/2d-1.svg" alt="">
			<p>Nazwijmy punkty P1, P2, P3:</p>
			<img class="vis-img" src="~@/assets/umath/2d-2.svg" alt="">
		</div>
	</section>
	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-3.mp4"></video>
		</div>
		<div class="step__content">
			<p>Teraz pytanie będzie brzmieć: Jakie jest prawdopodobieństwo, że trójkąt utworzony przez te punkty, przechodzi przez środek koła?</p>
			<img class="vis-img" src="~@/assets/umath/2d-3.svg" alt="">
			<p>Ciągle jest to trudne pytanie. Więc spróbujmy jeszcze uprościć to zadanie! <br>Musimy znaleźć jakiś punkt odniesienia, z którego można zbudować rozwiązanie.</p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-4.mp4"></video>
		</div>
		<div class="step__content">
			<p>Spróbujmy sobie wyobrazić, że punkty P1 oraz P2 są stale przymocowane i pozwalamy na ruch po okręgu tylko punktowi P3.</p>
			<p class="mind-break">Kiedy to zrobimy, możemy zauważyć, że istnieje specialny region, pewien łuk, w którym gdy P3 jest w tym łuku, trójkąt przechodzi przez środek, w przeciwnym razie nie przechodzi. </p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-5.mp4"></video>
		</div>
		<div class="step__content">
			<p>Jeżeli poprowadzimy linie z punktów P1 oraz P2 przez środek, te linie dzielą okrąg na cztery różne łuki.<br>A jeśli P3 znajduje się po przeciwnej stronie P1 i P2 - trójkąt ma środek.<br> Jeśli jest w którymkolwiek z innych łuków, trójkąt nie zawiera środka okręgu. </p>
			<p class="mind-break">Zakładamy, że położenie P3 na wszystkich punktach koła jest jednakowo prawdopodobne.<br>Jakie jest więc prawdopodobieństwo, że P3 znajdzie się w tym łuku? </p>
			<p class="mind-break">Jest to długość tego łuku podzielona przez pełny obwód okręgu! <br>Proporcja okręgu, stworzona przez <span style="color: #6CAABA">TEN łuk </span></p>
			<img class="vis-img" src="~@/assets/umath/text.svg" alt="">
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-6.mp4"></video>
		</div>
		<div class="step__content">
			<p>Więc jaka jest ta proporcja?<br>Oczywiście zależy to od tego gdzie umieścisz punkty P1 oraz P2</p>
			<p>To znaczy, że jeżeli linie prowadzące przez środek tworzą kąt 90&#176; to odpowiadający im łuk stanowi &frac14; okręgu. </p>
			<p class="mind-break">Ale jeśli dwa punkty były dalej oddalone ta proporcja byłaby bliższa &frac12; a jeśli byłyby bardziej bliżej siebie, proporcja zbliża się do 0. </p>
			<p class="mind-break">P1 i P2 są wybierane losowo, z równym prawdopodobieństwem pojawienia się w dowolnym punkcie na kole - jaka jest średnia wielkość tego odpowiedniego łuku? </p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-7.mp4"></video>
		</div>
		<div class="step__content">
			<p>Spróbujmy unieruchomić P1 w dowolnym miejscu i rozważyć wszystkie miejsca, w którym może być P2.</p>
			<p>Możliwe są wszystkie kąty między dwoma liniami, z przedziału 0&#176; do 180&#176;, a każdy z nich jest jednakowo prawdopodobny. </p>
			<p class="mind-break">Zatem każda proporcja między 0 a 0,5 jest równie prawdopodobna.</p>
			<p class="mind-break">A to oznacza, że średnia proporcja to 0,25.</p>
		</div>
	</section>

	<br><br><br>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-8.mp4"></video>
		</div>
		<div class="step__content">
			<p>Jeśli więc średnia wielkość tego łuku wynosi &frac14; pełnego okręgu, średnie prawdopodobieństwo, że trzeci punkt się znajdzie w nim to &frac14;. </p>
		</div>
	</section>

	<div class="big-step">
		Oznacza to, że całkowite prawdopodobieństwo, że nasz trójkąt zawiera się w środku,<br>wynosi &frac14;
	</div>

	<div class="full__preview">
		<video autoplay loop muted playsinline src="~@/assets/umath/sphere-9.mp4"></video>
	</div>

	<div class="big-step">
		Ale czy możemy to rozszerzyć o trójwymiarowy przypadek?
	</div>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-10.mp4"></video>
		</div>
		<div class="step__content">
			<p>Jeśli wyobrazisz sobie trzy z tych czterech punktów, które właśnie zostały utwierdzone w jednym miejscu, na jakim obszarze kuli będzie punkt P4, tak aby czworościan utworzonyze wszystkich punktów, zawierał się w środku kuli? </p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-11.mp4"></video>
		</div>
		<div class="step__content">
			<p>Tak jak poprzednio, przejdźmy dalej i narysujmy kilka linii z każdego z ustalonych 3 punktów, które przejdą przez środek kuli.</p>
			<p class="mind-break">Pomocne też będzie, jeśli utworzymy niektóre płaszczyzny określone przez dowolną parę tych linii.</p>
			<p class="mind-break">Te płaszczyzny dzielą kulę na 8 równych części, z których każda jest pewnym rodzajem "trójkąta sferycznego".</p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-12.mp4"></video>
		</div>
		<div class="step__content">
			<p>Czworościan będzie zawierał się w środku kuli tylko jeśli czwarty punkt znajdzie się w trójkącie sferycznym po przeciwnej stronie niż pierwsze trzy.</p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-13.mp4"></video>
		</div>
		<div class="step__content">
			<p>Teraz, w przeciwieństwie do przypadku 2D - trudno jest myśleć o średnim rozmiarze sekcji, ponieważ położenie początkowych trzech punktów jest różne. </p>
			<p class="mind-break">Ci, którzy umieją rachunek całkowity mogą pomyśleć "spróbujmy całki powierzchniowej!". Oczywiście można spróbować to zrobić, ale to nie jest łatwe.  Oczywiście - powinno być trudne - jest to szósty najtrudniejszy problem w teście PUTNAM, czego się spodziewać? </p>
		</div>
	</section>

	<div class="big-step">
		Co z tym dalej zrobić?
	</div>

	<div class="full__preview">
		<video autoplay loop muted playsinline src="~@/assets/umath/sphere-14.mp4"></video>
	</div>

	<div class="big-step">
		Jedną z rzeczy, którą można zrobić jest powrót do dwuwymiarowego przypadku i zastanowić się, czy istnieje<br> inny sposób myslenia o tej samej odpowiedzi, którą otrzymaliśmy.
	</div>

	<section class="step">
		<div class="step__preview">
			<img src="~@/assets/umath/jedna-czwarta.svg" alt="1/4">
		</div>
		<div class="step__content">
			<p>Co reprezentuje "4" w naszej odpowiedzi? </p>
			<p class="mind-break">Rozwiązanie które zareprezentuje, niesie ze sobą szerszą lekcje matematycznego rozwiązywania problemów.</p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-16.mp4"></video>
		</div>
		<div class="step__content">
			<p>Pomyślmy o tych dwóch liniach, które stworzyliśmy dla P1 i P2 przez środek okręgu. <br>Sprawiły one, że problem stał się o wiele łatwiejszy do wyobrażenia. </p>
		</div>
	</section>

	<div class="full__preview">
		<video autoplay loop muted playsinline src="~@/assets/umath/sphere-15.mp4"></video>
	</div>

	<div class="big-step">
		I na ogół, jeśli dodasz coś do problemu co sprawia, że jest to koncepcyjnie łatwiejsze - zobacz, czy<br>możesz zmienić charakter całego pytania pod względem rzeczy, którą właśnie dodałeś.
	</div>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-17.mp4"></video>
		</div>
		<div class="step__content">
			<p>W tym przypadku zamiast myśleć o wybieraniu losowo trzech punktów, wybierz dwie losowe linie, które przechodzą przez środek okręgu. </p>
			<p class="mind-break">Dla każdej linii istnieją dwa możliwe punkty, które mogą odpowiadać, więc po prostu rzuć monetą dla każdego, aby wybrać, który z punktów końcowych będzie P1. I podobnie dla drugiego, którego punktem końcowym będzie P2. </p>
			<p class="mind-break">Wybieranie losowej linii i rzut monetą w ten sposób jest tym samym, co wybieranie losowego punktu na kole! Po prostu wydaje się nieco zawiłe, ale powód myslenia o procesie losowym w ten sposób jest taki, że rzeczy w rzeczywistości staną się łatwiejsze.</p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-18.mp4"></video>
		</div>
		<div class="step__content">
			<p>Ale jeden i tylko jeden z tych czterech wyników pozostawia P1 i P2 po przeciwnej stronie koła jako P3, z trójkątem, który tworzą zawierającym się w środku. Niezależnie od tego, gdzie kończą się dwie półproste i gdzie leży P3 - zawsze jest 1/4 szansy, że rzut monetą pozostawia nam trójkąt zawierający środek. </p>

		</div>
	</section>

	<div class="big-step">
		Po prostu zmieniając sposób, w jaki myślimy o losowym procesie wyboru punktów, odpowiedź 1/4 wyskoczyła w zupełnie inny sposób niż wcześniej.<br> Co ważne - ten styl argumentacji może być prosto przeniesiony do trzech wymiarów!
	</div>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-20.mp4"></video>
		</div>
		<div class="step__content">
			<p>Ponownie, zamiast zaczynać od wybrania czterech losowych punktów, wyobraź sobie wybranie trzech losowych linii przechodzących przez środek sfery, a następnie jakiś losowy punkt dla P4. </p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-19.mp4"></video>
		</div>
		<div class="step__content">
			<p>Ta pierwsza linia przechodzi przez kulę  w dwóch punktach. więc rzuć monetą, aby zdecydować, który z tych dwóch punktó będzie P1. Podobnie, dla każdej z pozostałych linii, rzuć monetą, aby zdecydować, gdzie będą P2 i P3. </p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-21.mp4"></video>
		</div>
		<div class="step__content">
			<p>Teraz jest 8 równie prawdopodobnych wyników rzutu monetą, ale jeden i tylko jeden z nich umieszcza P1, P2 i P3 po przeciwnej strone centrum jako P4. </p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<video autoplay loop muted playsinline src="~@/assets/umath/sphere-22.mp4"></video>
		</div>
		<div class="step__content">
			<p>Tak więc jeden i tylko jeden z tych ośmiu równie prawdopodobnych wyników daje nam czworościan zawierający się w centrum.  </p>
		</div>
	</section>

	<div class="solution">
		Prawdopodobieństwo, że czworościan znajdzie się w centrum wynosi 1/8
	</div>

	<div class="center-text">
		<p>Jest to prawidłowe rozwiązanie problemu, ale opiera się na pewnej intuicji wizualnej. Jeśli jesteś ciekawy, jak można to zapisać w sposób, który nie opiera się na intuicji wizualnej <a href="https://lsusmath.rickmabry.org/psisson/putnam/putnam-web.htm">kliknij tutaj</a>, i sprawdź jak powinno się to zadanie zapisać w języku algebry liniowej.</p>
		<p class="mind-break">Powszechne jest to w matematyce, gdzie posiadanie kluczowego wzglądu i zrozumienia to jedno, ale trzeba [1] mieć też odpowiednie tło do formułowania tego zrozumienia bardziej formalnie jest prawie oddzielnym mięśniem - takim, nad którym studenci matematyki spędzają większość swojego czasu.</p>
	</div>

	<div class="big-step" style="padding-bottom: 50px">
		Głównym przekazem tutaj nie jest samo rozwiązanie
	</div>

	<div class="center-text" style="margin-top: 0;">
		<p>ale jak rozwiązać postawiony przed Tobą potencjalnie trudny problem! Po prostu zadawaj prostsze wersje pytania, dopóki nie uzyskasz pewnego rodzaju punktu odniesienia. Nie bój się tworzyć własnych linii pomocniczych lub całkowicie innych elementów - a kiedy to zrobisz, jeśli pojawią się nowe rzeczy, które okażą się przydatne zobacz, czy możesz zmienić całe pytanie wokół tych elementów. </p>
	</div>

	<div class="center-text">
		<p>Spróbujmy taką zasadę zastosować do o wiele łatwiejszego przykładu:</p>
	</div>

	<section class="bonus">
		<div class="task">
			<span class="task__title">Zadanie (CKE)</span>
			<span class="task__content">Podstawą ostrosłupa jest kwadrat KLMN o boku długości 4. Wysokością tego ostrosłupa jest krawędź NS, a jej długość też jest równa 4 (zobacz rysunek).
			<img class="task__img" src="~@/assets/umath/ostroslup.jpg" alt="ostrosłup">
			<br>Kąt &alpha;, jaki tworzą krawędzie KS i MS, spełnia warunek: <br>A. &alpha; = 45&deg;<br> B. 45&deg; &lt; &alpha; &lt; 60&deg; <br>C. &alpha; > 60&deg;  <br>D. &alpha; = 60&deg; </span>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<img src="~@/assets/umath/bonus-1.svg" alt="Ostrosłup">
		</div>
		<div class="step__content">
			<p>Na samym początku warto w podanym obrazku zapisać sobie informacje, które mamy podane w zadaniu.</p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<img src="~@/assets/umath/bonus-2.svg" alt="Ostrosłup">
		</div>
		<div class="step__content">
			<p>Podstawą naszego ostrosłupa jest kwadrat o boku 4, każdy kwadrat ma cztery równe długości. Krawędź NS również ma długość 4.</p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<img src="~@/assets/umath/bonus-3.svg" alt="Ostrosłup">
		</div>
		<div class="step__content">
			<p>Żeby obliczyć miarę kąta w bryle warto go umiejscowić w jakimś trójkącie  - to nam znacznie ułatwi zadanie. Musimy stworzyć trójkąt z kątem &alpha;, żeby to zrobić stworzymy pomocny obiekt jakim będzie linia K-L, która będzie przekątną kwadratu KLNM. </p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<img src="~@/assets/umath/bonus-4.svg" alt="Ostrosłup">
		</div>
		<div class="step__content">
			<p>Dzięki temu otrzymaliśmy trójkąt KMS. Krawędź KM tego trójkąta jest przekątną kwadratu o boku 4, zgodnie ze wzorem na przekątną kwadratu a&#8730;2 uzyskujemy długość KM równą 4&#8730;2. </p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<img src="~@/assets/umath/bonus-5.svg" alt="Ostrosłup">
		</div>
		<div class="step__content">
			<p>Z obrazka możemy zauważyć, że KS również jest przekątną kwadratu, żeby to lepiej zwizualizować można dorysować kolejny pomocniczy obiekt! Dzięki temu zauważamy, że krawędź KS również ma 4&#8730;2</p>
		</div>
	</section>

	<section class="step">
		<div class="step__preview">
			<img src="~@/assets/umath/bonus-6.svg" alt="Ostrosłup">
		</div>
		<div class="step__content">
			<p>Z drugiej strony mamy sytuacje analogiczną, również możemy dorysować pomocniczy obiekt. Dzięki takiemu rysunkowi od razu można stwierdzić, że trójkąt KMS jest trójkątem równobocznym, ponieważ wszystkie boki ma równej długości (4&#8730;2), więc zgodnie z właściwościami trójkątów równobocznych - wszystkie kąty mają 60&deg; (w tym nasz kąt &alpha;).</p>
		</div>
	</section>

	<div class="solution">
		D. &alpha; = 60&deg;
	</div>
</div>
</template>

<script>

export default {
	name: 'understand',
	data: ()=>{
		return {
			text: 'test'
		}
	},
	methods: {
	}
}

</script>

<style scoped lang="scss">
.task__img{
	display: block;
}
.bonus{
	padding: 0 10%;
}
.center-text{
	max-width: 70%;
	margin: 0 auto;
	margin-top: 50px;
	color: #eee;
	line-height: 150%;
}
.full__preview{
	width: 100%;
	display: flex;
	justify-content: center;
}
.page-wrapper{
	width: 100%;
	min-height: 100vh;
	background-color: #000;
	font-family: 'Poppins', sans-serif;
	padding-bottom: 100px;
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
.header{
	width: 100%;
	padding: 0 10%;
	padding-top: 150px;
	background: rgba(23,29,32,1);
	background: -moz-linear-gradient(top, rgba(23,29,32,1) 0%, rgba(0,0,0,1) 100%);
	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(23,29,32,1)), color-stop(100%, rgba(0,0,0,1)));
	background: -webkit-linear-gradient(top, rgba(23,29,32,1) 0%, rgba(0,0,0,1) 100%);
	background: -o-linear-gradient(top, rgba(23,29,32,1) 0%, rgba(0,0,0,1) 100%);
	background: -ms-linear-gradient(top, rgba(23,29,32,1) 0%, rgba(0,0,0,1) 100%);
	background: linear-gradient(to bottom, rgba(23,29,32,1) 0%, rgba(0,0,0,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#171d20', endColorstr='#000000', GradientType=0 );
}
.header h1{
	font-size: 3em;
	font-family: 'Poppins';
	color: #fff;
	position: relative;
	z-index: 1;
}
.header h1::before{
	content: attr(data-ref);
	position: absolute;
	top: 10px;
	left: -10px;
	font-size: 1.3em;
	color: #14191C;
	z-index: -1;
}
.header h1::after{
	content: "";
	position: absolute;
	bottom: -50px;
	left: 0;
	width: 400px;
	height: 4px;
	background-color: #fff;
}
.header p{
	margin-top: 200px;
	font-size: 1.2em;
	color: #eee;
	line-height: 150%;
}
.header p a{
	color: #1c9ce6;
}
.task{
	margin-top: 100px;
	width:100%;
	border-top-right-radius: 50px;
	border-bottom-right-radius: 50px;
	background-color: #13181A;
	padding: 30px;
	display: flex;
	flex-direction: column;
	border-left: 5px solid #fff;
	color: #eee;
}
.task__title{
	font-weight: 1.6em;
	font-weight: bold;
}
.task__content{
	font-weight: 1.3em;
	margin-top: 10px;
	line-height: 150%;
}
.step{
	margin-top: 100px;
	padding: 0 10%;
	display: flex;
}
.step__preview{
	width: 40%;
	display: flex;
	justify-content: center;
}
.step__preview video{
	position: sticky;
	position: -webkit-sticky;
  	top: 0;
	height: 550px;
	margin-top: -50px;
}
.step__content{
	width: 60%;
}
.step__content p{
	font-size: 1.2em;
	line-height: 150%;
	color: #eee;
}
.vis-img{
	display: block;
	margin: 60px 0;
}
span.legend-red{
	border-bottom: 2px solid #FB1F1F;
}
p.mind-break{
	margin-top: 50px;
}
li.legend-red{
	color: #FB1F1F;
}
span.legend-violet{
	border-bottom: 2px solid #9C1FFB;
}
li.legend-violet{
	color: #9C1FFB;
}
span.legend-blue{
	border-bottom: 2px solid #1FA3FB;
}
li.legend-blue{
	color: #1FA3FB;
}
span.legend-yellow{
	border-bottom: 2px solid #ECFB1F;
}
li.legend-yellow{
	color: #ECFB1F;
}
span.legend-green{
	border-bottom: 2px solid #1FFB77;
}
li.legend-green{
	color: #1FFB77;
}
span.legend-pink{
	border-bottom: 2px solid #FB1FAA;
}
li.legend-pink{
	color: #FB1FAA;
}
ul{
	margin: 30px 0;
}
li{
	list-style-type: disc;
	padding: 20px 0;
	margin-left: 20px;
}
p.step__content-title{
	margin-top: 50px;
	font-weight: bold;
	font-size: 2.2em;
}
.big-step{
	padding-top: 200px;
	font-size: 2em;
	font-weight: bold;
	padding-bottom: 200px;
	text-align: center;
	color: #fff;
	line-height: 150%;
}
.solution{
	padding: 100px 0;
	text-align: center;
	max-width: 80%;
	font-size: 2em;
	margin: 0 auto;
	color: #fff;
	line-height: 150%;
	position: relative;
}
.solution::before{
	content: "Rozwiązanie:";
	position: absolute;
	top: 60px;
	left: 12%;
	font-size: 0.5em;
	text-transform: uppercase;
}

</style>