import React from 'react';
import ReactDOM from 'react-dom';

const mockedNews = [{
  artTitle: 'El último reto de la NASA: hay una región sobre el Ártico que frena las naves e interfiere con las señales y no sabemos por qué',
  artTheme: 'espacio exterior',
  artDescription: 'La misión CREX-2, que la NASA acaba de poner en marcha, se marca un objetivo ambicioso: aclarar qué ocurre en en una misteriosa área situada sobre el Polo Norte en la que las señales sufren alteraciones y las naves espaciales se ralentizan.',
  artContent: 'Al mediodía, cuando el Sol está en su punto álgido, se registra un curioso y misterioso fenómeno a 250 millas —alrededor de 400 kilómetros— sobre el Polo Norte que trae de cabeza a los ingenieros aeroespaciales: por algún motivo todavía no esclarecido, las naves viajan más lentas y las señales GPS y de comunicaciones sufren interferencias. Tras varios años puliendo detalles, la NASA acaba de poner en marcha un programa para aclarar cuál es la explicación. No se trata solo de saciar la curiosidad o resolver una incógnita. La información que obtenga la agencia estadounidense será valiosa, por ejemplo, para anticipar cambios en las trayectorias de las naves. La misión de la NASA, bautizada como CREX-2, busca analizar la cúspide solar, una brecha en forma de embudo en el campo magnético de nuestro planeta que nos protege del viento solar, la corriente de partículas cargadas que arroja el astro. La abertura —detalla la agencia estadounidense— permite al viento solar un acceso directo a la atmósfera. Desde hace décadas, los expertos son conscientes de que al desplazarse por esa zona las señales se comportan de manera extraña y las naves espaciales se ralentizan, “se sienten más arrastradas”, en palabras del propio Mark Conde, físico de la Universidad de Alaska Fairbanks e investigador principal del CREX-2.',
  author: 'Carlos Prego',
  comments: 15,
  publishedTime: 14,
  idNumber: 24
},
{
  artTitle: 'Los billetes del euro cambiarán de look a partir de 2024, pero puede puede que los veamos poco porque cada vez los usamos menos',
  artTheme: 'economía',
  artDescription: 'El Banco Central Europeo no solo trabaja en ese proyecto: también ve el euro digital en el futuro cercano.',
  artContent: 'Al mundo ya no le gusta (tanto) pagar en efectivo. Los pagos con tarjeta y los pagos móviles son cada vez más frecuentes, y lo de llevar cartera o monedero con dinero en efectivo es para muchos casi un anacronismo. Resulta por tanto curioso que con ese escenario surja una noticia singular: la de que el Banco Central Europeo (BCE) haya decidido cambiar el diseño de los billetes de euro, algo que no había ocurrido desde el nacimiento de la moneda hace casi 20 años.',
  author: 'Javier Pastor',
  comments: 2,
  publishedTime: 1,
  idNumber: 32
}
]

//reminder to improve components later using context;

class FullNewsArticle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props.newsData };
  }
  render() {
    return (
      <div>
        <button>-- volver</button>
        <h2>{this.state.artTitle}</h2>
        <img></img>
        <div className='artextrainfo'>{this.state.comments} - {this.state.author} - {this.state.publishedTime} horas</div>
        <p>{this.state.artContent}</p>
        <div className='artTheme'>Temas: {this.state.artTheme}</div>
      </div>
    )
  }
}

class NewsArticlePreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props.newsData };
    this.sendID = this.sendID.bind(this);
  }

  //onClick sendID will update the state of Main, chaging the value of openFullArticle to its opossite, and giving idNumber to showedArtID as a value; 
  sendID() {
    this.props.handlePageChanges(this.state.idNumber)
  }

  render() {
    return (
      <article>
        <div className='artTitle'>{this.state.artTitle}</div>
        <div className='artTheme'>{this.state.artTheme}</div>
        <img></img>
        <p>{this.state.artDescription}</p>
        <button onClick={this.sendID}>leer más --</button>
        <div className='artextrainfo'>{this.state.comments} - {this.state.author} - {this.state.publishedTime} horas</div>
      </article>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { news: [...mockedNews], openFullArticle: false, showedArtID: undefined };
    this.handlePageChanges = this.handlePageChanges.bind(this);
  }

  handlePageChanges(id) {
    this.setState(state => ({
      openFullArticle: !state.openFullArticle,
      showedArtID: id
    }));
  }

  render() {

    const explorePage = (
      <section className='explore'>
        {this.state.news.map(article => <NewsArticlePreview newsData={article} handlePageChanges={this.handlePageChanges} key={mockedNews.indexOf(article)} />)}
      </section>
    )

    let articleInfo = this.state.news.filter(article => { return article.idNumber == this.state.showedArtID })
    //check later to improve scalability getting rid of the array created by filter method somehow;
    let articlePage = <FullNewsArticle newsData={articleInfo[0]} />

    return (
      //when {openFullArticle == true} explorePage will hide and articlePage will display, getting the info needed to render by filtering mockedNews using showedArtID.
      <>
        {this.state.openFullArticle ? articlePage : explorePage}
      </>
    )
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

ReactDOM.render(<Main />, document.getElementById('root'));
