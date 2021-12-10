import React from "react";
import ReactDOM from "react-dom";
import "./newspaper-explorer.css";

const mockedNews = [
  {
    artTitle:
      "El último reto de la NASA: hay una región sobre el Ártico que frena las naves e interfiere con las señales y no sabemos por qué",
    artTheme: "ciencia",
    artDescription:
      "La misión CREX-2, que la NASA acaba de poner en marcha, se marca un objetivo ambicioso: aclarar qué ocurre en en una misteriosa área situada sobre el Polo Norte en la que las señales sufren alteraciones y las naves espaciales se ralentizan.",
    artContent:
      "Al mediodía, cuando el Sol está en su punto álgido, se registra un curioso y misterioso fenómeno a 250 millas —alrededor de 400 kilómetros— sobre el Polo Norte que trae de cabeza a los ingenieros aeroespaciales: por algún motivo todavía no esclarecido, las naves viajan más lentas y las señales GPS y de comunicaciones sufren interferencias. Tras varios años puliendo detalles, la NASA acaba de poner en marcha un programa para aclarar cuál es la explicación. No se trata solo de saciar la curiosidad o resolver una incógnita. La información que obtenga la agencia estadounidense será valiosa, por ejemplo, para anticipar cambios en las trayectorias de las naves. La misión de la NASA, bautizada como CREX-2, busca analizar la cúspide solar, una brecha en forma de embudo en el campo magnético de nuestro planeta que nos protege del viento solar, la corriente de partículas cargadas que arroja el astro. La abertura —detalla la agencia estadounidense— permite al viento solar un acceso directo a la atmósfera. Desde hace décadas, los expertos son conscientes de que al desplazarse por esa zona las señales se comportan de manera extraña y las naves espaciales se ralentizan, “se sienten más arrastradas”, en palabras del propio Mark Conde, físico de la Universidad de Alaska Fairbanks e investigador principal del CREX-2.",
    images: [
      "https://i.blogs.es/047ca0/azure_ampule_release_print/1366_2000.jpeg",
      "https://i.blogs.es/9cc3d4/49004_post_sequence_test/1366_2000.jpg",
    ],
    author: "CARLOS PREGO",
    comments: 15,
    publishedTime: 14,
    idNumber: 24,
  },
  {
    artTitle:
      "Los billetes del euro cambiarán de look a partir de 2024, pero puede puede que los veamos poco porque cada vez los usamos menos",
    artTheme: "economía",
    artDescription:
      "El Banco Central Europeo no solo trabaja en ese proyecto: también ve el euro digital en el futuro cercano.",
    artContent: `Al mundo ya no le gusta (tanto) pagar en efectivo. Los pagos con tarjeta y los pagos móviles son cada vez más frecuentes, y lo de llevar cartera o monedero con dinero en efectivo es para muchos casi un anacronismo.
  Resulta por tanto curioso que con ese escenario surja una noticia singular: la de que el Banco Central Europeo (BCE) haya decidido cambiar el diseño de los billetes de euro, algo que no había ocurrido desde el nacimiento de la moneda hace casi 20 años.`,
    images: [
      "https://i.blogs.es/2ab458/captura-de-pantalla-2021-12-07-a-las-11.09.06/500_333.jpeg",
      "https://i.blogs.es/31aed1/euro-redisenyo-2/1366_2000.jpeg",
    ],
    author: "JAVIER PASTOR",
    comments: 2,
    publishedTime: 1,
    idNumber: 32,
  },
  {
    artTitle:
      "Sony prepara nuevas micropantallas 4K OLED para una realidad virtual 8K más inmersiva que nunca",
    artTheme: "tecnología",
    artDescription:
      "El objetivo, parece, no es tanto el gaming como aprovecharlas en entornos industriales.",
    artContent: `En Sony no se olvidan de la realidad virtual. La propuesta que ya tuvo un éxito destacable en la PS4 quiere continuar su camino en la PS5, y hace unos meses ya indicaron que estaban trabajando en unas nuevas gafas de realidad virtual aunque avisaban también de que tendríamos que ser pacientes, puesto que ese periférico no llegaría en 2021.

  Poco después nos mostrarían los peculiares mandos de su futuro visor de realidad virtual para PlayStation 5, pero de momento no se conocen detalles sobre esas gafas. Lo que sí que hemos conocido son sus nuevas micropantallas OLED con resolución 4K, que están destinadas a gafas de realidad virtual con una resolución 8K y que ojo, no parecen destinadas al hipotético PSVR2 para la PS5, sino a gafas de otros fabricantes que incluso se usen en ámbitos industriales.`,
    images: [
      "https://i.blogs.es/635826/vr1/1366_2000.jpeg",
      "https://tec.mx/sites/default/files/styles/header_full/public/2020-09/La-realidad-aumentada-sera-anadida-al-metodo-de-ensenanza-actual.jpg?h=920929c4&itok=rY5SW9HA",
    ],
    author: "JAVIER PASTOR",
    comments: 5,
    publishedTime: 3,
    idNumber: 69,
  },
  {
    artTitle:
      "Los reactores de fisión nuclear tienen una aliada que los ayudará a seguir evolucionando: la aleación 617",
    artTheme: "ciencia",
    artDescription:
      "La esperanza de las centrales nucleares de cuarta generación está depositada sobre este innovador material. Esta minuciosa combinación de cromo, cobalto, níquel y molibdeno puede contribuir a que estén preparadas en menos tiempo. ",
    artContent: `El estrés térmico al que están sometidos los componentes de los reactores de las centrales nucleares mediante fisión que utilizamos actualmente es altísimo. Los reactores de agua ligera trabajan en el rango que va desde los 290 a los 325 ºC, pero los diseños de cuarta generación en los que están trabajando los ingenieros plantean nuevos desafíos. Y uno de ellos es la temperatura.

  Algunos de los diseños más prometedores son los reactores de muy alta temperatura (VHTR) refrigerados por helio. También son muy interesantes los reactores rápidos refrigerados por gas (GFR), los reactores rápidos refrigerados por sodio (SFR), los reactores supercríticos refrigerados por agua (SCWR), los reactores rápidos refrigerados por aleación de plomo (LFR) y los reactores de sales fundidas (MSR). Todos estos diseños tienen algo importante en común: su temperatura de operación puede superar con holgura los 600 ºC.`,
    images: [
      "https://i.blogs.es/b05412/reactornuclear-ap/1366_2000.jpg",
      "https://i.blogs.es/f0ee8e/vasijanuclear/1366_2000.jpg",
    ],
    author: "JUAN CARLOS LÓPEZ",
    comments: 0,
    publishedTime: 21,
    idNumber: 543,
  },
  {
    artTitle:
      "EE.UU. afronta una nueva polémica sobre privacidad y el protagonista es Clearview AI, el software de reconocimiento facial",
    artTheme: "tecnología",
    artDescription:
      "EE.UU. afronta un nuevo capítulo en el debate entre privacidad y seguridad. La protagonista es en esta ocasión Clearview y su polémico software de reconocimiento facial. Pese a las voces crítiacs, la firma ha logrado una patente federal. ",
    artContent: `Polémica servida. Igual que si se adentrase en las primeras páginas del universo Watchmen, EE. UU. encara nuevo capítulo en uno de los debates más espinosos, difíciles y polarizados en la a menudo complicada linde entre seguridad y privacidad: ¿Hay líneas rojas en el uso que las autoridades pueden hacer de la tecnología para salvaguardar el bien común? Y si es así, ¿cuáles?

  En el ojo del huracán está la compañía Clearview AI, que acaba de recibir luz verde de las autoridades de EE. UU. para lograr una patente federal por su software de reconocimiento facial y “rastreo web automatizado”, una herramienta que extrae imágenes públicas de Internet —incluidas las redes— para que sus algoritmos las analicen y comparen. El recurso lo utilizan las fuerzas del orden del país para cotejar el material con sus bases de datos y labores de vigilancia.`,
    images: [
      "https://i.blogs.es/5faa43/1366_2000-3-/500_333.jpg",
      "https://i.blogs.es/338374/1366_2000-4-/1366_2000.jpg",
    ],
    author: "CARLOS PREGO",
    comments: 4,
    publishedTime: 8,
    idNumber: 123,
  },
  {
    artTitle:
      "He hecho caso a los consejos de inversión de Forocoches durante el último año (y todavía he ganado un 12%)",
    artTheme: "economía",
    artDescription: "Pole.",
    artContent: `Hace cerca de un año, un grupo de usuarios de Reddit se organizaron para ganar al mercado invirtiendo en masa en acciones de capa caída para vencer a los grandes grupos de inversión tradicionales, que habían realizado inversiones en corto contra ellos (apostando a que su valor caería). Lograron disparar el valor de acciones como GameStop, AMC o BlackBerry, provocando que esos grandes fondos perdieran mucho dinero por el camino. En Forocoches, quizás lo más parecido a un Reddit español, algunos usuarios sugirieron organizarse para lograr algo similar desde España, si bien el funcionamiento de nuestro mercado y la fuerte regulación que tiene detrás hacían improbable el éxito.`,
    images: [
      "https://i.blogs.es/37b471/1366_2000-2/500_333.jpg",
      "https://i.blogs.es/2787c8/inversiones-forococheras.001/1366_2000.png",
    ],
    author: "JAVIER LACORT",
    comments: 25,
    publishedTime: 1,
    idNumber: 321,
  },
  {
    artTitle:
      "Volvo quiere que todo tu parabrisas sea un gigantesco HUD en el que se proyecte información mientras conduces",
    artTheme: "tecnología",
    artDescription: "Del HUD minimalista al HUD gigante.",
    artContent: `Los Head-Up Display (HUD) son desde hace tiempo una propuesta interesante para lograr ofrecer información sobre nuestro trayecto, pero hacerlo sin que tengamos que retirar la vista de la carretera.

  Volvo, que es una marca conocida por tratar de proteger al conductor —inventaron el cinturón de seguridad que ha salvado millones de vidas—, está precisamente trabajando en un sistema que permitirá transformar el parabrisas del coche en un gigantesco HUD y así evitar distracciones.`,
    images: ["https://i.blogs.es/186b30/volvo1/500_333.jpeg", ""],
    author: "JAVIER PASTOR",
    comments: 1,
    publishedTime: 6,
    idNumber: 2335,
  },
];

//reminder to improve components later using context;

class FullNewsArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.newsData };
    this.prevPage = this.prevPage.bind(this);
  }

  prevPage() {
    this.props.handlePageChanges(undefined);
  }

  render() {
    return (
      <article id="fullArticle">
        <button onClick={this.prevPage}>-- volver</button>
        <h2>{this.state.artTitle}</h2>
        <img src={this.state.images[0]} />
        <div className="artextrainfo">
          {this.state.comments} - {this.state.author} -{" "}
          {this.state.publishedTime} horas
        </div>
        <p>{this.state.artContent}</p>
        <img src={this.state.images[1]} />
        <div className="artTheme">Temas: {this.state.artTheme}</div>
      </article>
    );
  }
}

class NewsArticlePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.newsData };
    this.sendID = this.sendID.bind(this);
  }

  //onClick sendID will update the state of Main, chaging the value of openFullArticle to its opossite, and giving idNumber to showedArtID as a value;
  sendID() {
    this.props.handlePageChanges(this.state.idNumber);
  }

  render() {
    return (
      <article onClick={this.sendID} className="article-preview">
        <div className="artTitle">{this.state.artTitle}</div>
        <div className="artTheme">{this.state.artTheme}</div>
        <img src={this.state.images[0]} />
        <p>{this.state.artDescription}</p>
        <button>leer más --</button>
        <div className="artextrainfo">
          {this.state.comments} - {this.state.author} -{" "}
          {this.state.publishedTime} horas
        </div>
      </article>
    );
  }
}

/*class NewsArticle extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}*/

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [...mockedNews],
      openFullArticle: false,
      showedArtID: undefined,
      articleTheme: undefined,
    };
    this.handlePageChanges = this.handlePageChanges.bind(this);   
    this.handleSetTheme = this.handleSetTheme.bind(this)
  }

  handlePageChanges(id) {
    this.setState((state) => ({
      openFullArticle: !state.openFullArticle,
      showedArtID: id,
    }));
  }  
  handleSetTheme(theme){
    console.log(`El tema ${theme}`);
    this.setState((state) => ({articleTheme: theme}))
  }

  render() {
   
    const explorePage = (
      <section className="explore">
        {this.state.news.map((article) => (
          <NewsArticlePreview
            newsData={article}
            handlePageChanges={this.handlePageChanges}
            key={article.idNumber} /*key={mockedNews.indexOf(article)}*/
          />
        ))}
      </section>
    );

    
    let articleInfo = this.state.news.filter((article) => {
      return article.idNumber === this.state.showedArtID;
    });
    //check later to improve scalability getting rid of the array created by filter method somehow;
    const articlePage = (
      <FullNewsArticle
        handlePageChanges={this.handlePageChanges}
        newsData={articleInfo[0]}
      />
    );

    let myRender = undefined;
    {
      if (this.state.articleTheme === undefined) {
        myRender = this.state.openFullArticle ? articlePage : explorePage;
      } else {
        myRender = if(this.state.news.artTheme == this.state.articleTheme){
          <Header handleFilterThemes={this.handleFilterThemes} newsData={filteredThemes[0]}/>
        } 
      }
    }    
    return (
      //when {openFullArticle == true} explorePage will hide and articlePage will display, getting the info needed to render by filtering mockedNews using showedArtID.
      <>
        <Header handleSetTheme = {this.handleSetTheme}/>
        {myRender}
      </>
    );
  }
}
//Class Header now contains a Class Navbar to make a Header for the web and include the nav on it.
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [...mockedNews]};
    this.handleFilterThemes = this.handleFilterThemes.bind(this)
  }
  handleFilterThemes(artTheme) {    
    this.props.handleSetTheme(artTheme);
  }  
  
  render() {
    let rawThemes = this.state.news.map((article) => (
      article.artTheme  
    ));
    let filteredThemes = [];
    for (let element of rawThemes) {
      if (!filteredThemes.includes(element)) {
        filteredThemes.push(element);
      }           
    }  

    return (
      <header>
        <h1>Chataca</h1>
        <nav>
        {filteredThemes.map(theme => <Navbar handleFilterThemes={this.handleFilterThemes} newsData={theme}/>)}
        </nav>        
      </header>
    )
  }
}
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: this.props.newsData };
    this.sendTheme = this.sendTheme.bind(this);
    
  }
  sendTheme() {
    this.props.handleFilterThemes(this.state.theme);
  }
  
  render() {     
    console.log(`Este ${this.state.theme}`);
    return (
      <>        
          <button onClick={this.sendTheme}>{this.state.theme}</button>        
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
