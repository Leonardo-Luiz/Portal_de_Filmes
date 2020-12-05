import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import api from '../services/api'

import logo from '../imgs/logo.png'
import noticia1 from '../imgs/noticia1.jpg';
import noticia2 from '../imgs/noticia2.jpg';
import noticia3 from '../imgs/noticia3.jpg';
import perfil1 from '../imgs/perfil1.jpg';
import perfil2 from '../imgs/perfil2.jpg';
import perfil3 from '../imgs/perfil3.jpg';

interface Popular{
    results:Array<{
        id:number;
        title:string;
        overview:string;
        release_date:string;
        vote_average:number;
        poster_path:string;      
    }>
  }
  interface Playing{
    results:Array<{
        id:number;
        title:string;
        overview:string;
        release_date:string;
        vote_average:number;
        poster_path:string;
    }>
  }
    

export default function Landing(){

    const [nomeFilme, setNomeFilme] = useState('');
    const [popular, setPopular] = useState<Popular>();
    const [playing, setPlaying] = useState<Playing>();
    
    useEffect(() => {
        api.get('movie/popular?api_key=af6c08b142f3faf95e9b674b19059f2d&language=en-US&page=1').then(response => {
          setPopular(response.data);
        })
        api.get('movie/upcoming?api_key=af6c08b142f3faf95e9b674b19059f2d&language=en-US&page=1').then(response => {
            setPlaying(response.data);
          })
      }, []);

    if(!popular){
        return <p>Carregando....</p>
    }

      return(
        <body id='root'>
              
        <main className="container main">
        <header className="container header">
    
    <div className="row">
        <div className="col-12 header_area">
            <div className="row">
                <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 logo_area">
                    <img alt='logo' src={logo} className="logo"/>
                </div>

                <div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-7 menu_area">
                    <input type="checkbox" id="menuToggle"/>
                    <label htmlFor="menuToggle" className="menu-icon">
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-times-circle"></i>
                    </label>

                    <nav className="nav menu">
                        <input type="checkbox" id="menuToggle"/>
                        <a className="nav-link" href="#cartaz">Em Cartaz</a>
                        <a className="nav-link" href="#populares">Populares</a>
                        <a className="nav-link" href="#avaliacao">Avaliações</a>
                        <a className="nav-link" href="#entrevista">Entrevistas & Making Of</a>
                        <a className="nav-link" href="#novidades">Novidades</a>
                    </nav>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 pesquisa_area">
                     
                    <input id='texto_pesquisa' className="form-control mr-sm-2 caixa-pesquisa" type="search" placeholder="Pesquisar Filme"
                        aria-label="Search" onChange={event => setNomeFilme(event.target.value)}/> 
                                 
                    <Link className="enter-app" to={`/search?${nomeFilme}` }>
                        <FiSearch className='pesquisa_botao' size={26} color="rgba(255, 255, 255, 0.6)"/>
                    </Link>                     
                </div>  
                </div>
            </div>
        </div>
        </header>

        <article className="row">
            <div className="col-12 main2">
                <div className="row cartaz">
                    <h2 className=" col-12 tit1" id="cartaz">Filmes em Cartaz</h2>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row lancamentos ">
                                    <div className="col-12 col-lg-6 trailer">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title='video' className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/9nlhmJF5FNI"></iframe>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <h3 className="col-12 nome_filme">{playing?.results[0].title}</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-10 sinopse text-justify">
                                                <span className="negrito">Sinopse: </span>{playing?.results[0].overview}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 datalanc">
                                                <span className="negrito">Data de lançamento: </span>{playing?.results[0].release_date}
                                            </div>

                                            <div className="col-sm-12 col-md-4 nota_media">
                                                <span className="negrito">Nota Média: </span>{playing?.results[0].vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row lancamentos">
                                    <div className="col-12 col-lg-6 trailer">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title='video' className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/XUN5EEDwHcI"></iframe>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <h3 className="col-12 nome_filme">{playing?.results[1].title}</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-10 sinopse text-justify">
                                                <span className="negrito">Sinopse: </span>{playing?.results[1].overview}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 datalanc">
                                                <span className="negrito">Data de lançamento: </span>{playing?.results[1].release_date}
                                            </div>

                                            <div className="col-sm-12 col-md-4 nota_media">
                                                <span className="negrito">Nota Média: </span>{playing?.results[1].vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row lancamentos">
                                    <div className="col-12 col-lg-6 trailer">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title='video' className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/X0K5cA2hS6g"></iframe>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <h3 className="col-12 nome_filme">{playing?.results[2].title}</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-10 sinopse text-justify">
                                                <span className="negrito">Sinopse: </span>{playing?.results[2].overview}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 datalanc">
                                                <span className="negrito">Data de lançamento: </span>{playing?.results[2].release_date}
                                            </div>

                                            <div className="col-sm-12 col-md-4 nota_media">
                                                <span className="negrito">Nota Média: </span>{playing?.results[2].vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row lancamentos">
                                    <div className="col-12 col-lg-6 trailer">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title='video' className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/y8UDuUVwUzg"></iframe>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <h3 className="col-12 nome_filme">{playing?.results[3].title}</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-10 sinopse text-justify">
                                                <span className="negrito">Sinopse: </span>{playing?.results[3].overview}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 datalanc">
                                                <span className="negrito">Data de lançamento: </span>{playing?.results[3].release_date}
                                            </div>

                                            <div className="col-sm-12 col-md-4 nota_media">
                                                <span className="negrito">Nota Média: </span>{playing?.results[3].vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article className="row populares conteudo-central">
            <h2 className="col-12 col-md-6 col-lg-6 tit2 " id="populares">Populares</h2>

            <div className="col-7 col-md-6 col-lg-6 dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categoria: TODOS
                </button>
                <div className="dropdown-menu">
                    <button className="dropdown-item" type="button">Aventura</button>
                    <button className="dropdown-item" type="button">Romance</button>
                    <button className="dropdown-item" type="button">Comédia</button>
                    <button className="dropdown-item" type="button">Suspense</button>
                </div>
            </div>

            <div className="row">

                <div className="col-6 col-md-3 col-lg-3">
                    <div className="row">
                        <h3 className="col-12 nome_filme">{popular.results[0].title}</h3>
                    </div>
                    <div className="banner">
                        <img alt='banner1' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${popular.results[0].poster_path}`}/>
                    </div>
                    <div className="row">
                        <div className="col-12 sinopse text-justify">
                            <span className="negrito">Sinopse: </span>{popular.results[0].overview}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 datalanc">
                            <span className="negrito">Data de lançamento: </span>{popular.results[0].release_date}
                        </div>

                        <div className="col-sm-12 col-md-4 nota_media">
                            <span className="negrito">Nota Média: </span>{popular.results[0].vote_average}
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 col-lg-3">
                    <div className="row">
                        <h3 className="col-12 nome_filme">{popular.results[1].title}</h3>
                    </div>
                    <div className="banner">
                        <img alt='banner2' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${popular.results[1].poster_path}`}/>
                    </div>
                    <div className="row">
                        <div className="col-12 sinopse text-justify">
                            <span className="negrito">Sinopse: </span>{popular.results[1].overview}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 datalanc">
                            <span className="negrito">Data de lançamento: </span>{popular.results[1].release_date}
                        </div>

                        <div className="col-sm-12 col-md-4 nota_media">
                            <span className="negrito">Nota Média: </span>{popular.results[1].vote_average}
                        </div>
                    </div>                    
                </div>

                <div className="col-6 col-md-3 col-lg-3">
                    <div className="row">
                        <h3 className="col-12 nome_filme">{popular.results[2].title}</h3>
                    </div>
                    <div className="banner">
                        <img alt='banner3' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${popular.results[2].poster_path}`}/>
                    </div>
                    <div className="row">
                        <div className="col-12 sinopse text-justify">
                            <span className="negrito">Sinopse: </span>{popular.results[2].overview}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 datalanc">
                            <span className="negrito">Data de lançamento: </span>{popular.results[2].release_date}
                        </div>

                        <div className="col-sm-12 col-md-4 nota_media">
                            <span className="negrito">Nota Média: </span>{popular.results[2].vote_average}
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 col-lg-3">
                    <div className="row">
                        <h3 className="col-12 nome_filme">{popular.results[3].title}</h3>
                    </div>
                    <div className="banner">
                        <img alt='banner4' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${popular.results[3].poster_path}`}/>
                    </div>
                    <div className="row">
                        <div className="col-12 sinopse text-justify">
                            <span className="negrito">Sinopse: </span>{popular.results[3].overview}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 datalanc">
                            <span className="negrito">Data de lançamento: </span>{popular.results[3].release_date}
                        </div>

                        <div className="col-sm-12 col-md-4 nota_media">
                            <span className="negrito">Nota Média: </span>{popular.results[3].vote_average}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active" id="botao-carregar">
                            <input type="checkbox" checked/> <i className="fa fa-plus"></i> Carregar mais filmes
                        </label>
                    </div>
                </div>
            </div>
        </article>

        <article className="row avaliacoes">
            <div className="col-12 avaliacao conteudo-central">
                <h2 className="tit2" id="avaliacao">Últimas avaliações</h2>
                <div className="row">

                    <div className="col-12 col-lg-6 col-xl-4 card-avaliacao">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2 foto">
                                    <img alt='perfil3' src={perfil3}/>
                                </div>

                                <div className="col-12 resposta_avaliacao">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5>Ben</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <span className="negrito">Filme: </span>Batman vs Superman: A Origem da Justiça
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 text-justify">
                                            <p><span className="negrito">Avaliação: </span>Simplesmente o melhor filme de super herois ja feito até hoje,as cenas de ação convencem, a mulher maravilha ficou ótima e o lex luthor surpreendeu. Mas deviam ter focado mais na luta entre batman e superman que mal dura 10 minutos.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7 avaliacao_individual">
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela-nula2"></i>
                                        </div>
                                        <div className="col-5 data_avaliacao">
                                            <span className="negrito">18/08/2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-4 card-avaliacao">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2 foto">
                                    <img alt='perfil2' src={perfil2}/>
                                </div>

                                <div className="col-12 resposta_avaliacao">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5>Christian</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <span className="negrito">Filme: </span>Batman - O Cavaleiro das Trevas
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 text-justify">
                                            <p><span className="negrito">Avaliação: </span>Não vejo nem palavras para explicar o quanto esse filme é surpreendente. Ação a todo instante! A atuação de Heath Ledger (Coringa) é inexplicável, um vilão psicótico, insano e cativante ao mesmo tempo, diferente de tudo que já vi, 153 minutos de pura adrenalina. Excelente filme, uma obra prima insuperável. Super recomendo.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7 avaliacao_individual">
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                        </div>
                                        <div className="col-5 data_avaliacao">
                                            <span className="negrito">25/07/2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-4 card-avaliacao">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2 foto">
                                    <img alt='perfil1' src={perfil1}/>
                                </div>

                                <div className="col-12 resposta_avaliacao">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5>Tom</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <span className="negrito">Filme: </span>No Limite do Amanhã
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 text-justify">
                                            <p><span className="negrito">Avaliação: </span>Excelente filme. Direção, enredo, efeitos 3D e especiais, atuações de seus principais atores, Tom Cruise e Emily Blunt, tudo de primeira. Muita ação, suspense e uma história de guerra e invasão alien diferente e bastante criativa, com viagem no tempo. O novo filme X-Man também usa isso. Muito legal. Do início ao fim você quase que não consegue respirar e nem percebe que o filme é mais longo que o normal. Melhor filme do ano, desse gênero. Imperdível.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7 avaliacao_individual">
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela-nula2"></i>
                                        </div>
                                        <div className="col-5 data_avaliacao">
                                            <span className="negrito">03/03/2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 conteudo-central">
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active" id="botao-carregar">
                        <input type="checkbox" checked/> <i className="fa fa-plus"></i> Carregar mais avaliações
                    </label>
                </div>
            </div>
        </article>
        <article className="row entrevista">
            <div className="col-12 entrevistas conteudo-central">
                <h2 className="tit2" id="entrevista">Entrevistas & Making Of</h2>

                <div className="row">

                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/2k055gIRmsc"></iframe>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                <h5>Pacific Rim</h5>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Diretor: </span>Guilherme del Toro | Steven S. DeKnight
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Roteiro: </span>Guilherme del Toro | Travis Beacham
                                    </div>

                                    <div className="col-12 estreia_filme">
                                        <span className="negrito">Estreia: </span>2013
                                    </div>
                                </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/DUSgVmIi9FQ"></iframe>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                <h5>Madagascar</h5>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Diretor: </span>Tom McGrath | Eric Darnell | Conrad Vernon | Simon J. Smith | David Soren
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Roteiro: </span>Tom McGrath | Eric Darnell | Mark Burton | Billy Frolick
                                    </div>

                                    <div className="col-12 estreia_filme">
                                        <span className="negrito">Estreia: </span>2005
                                    </div>
                                </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/XbPVAiX3Igg"></iframe>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                <h5>Mulan</h5>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Diretor: </span>Niki Caro

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Roteiro: </span>Chris Sanders | Rita Hsiao | Raymond Singer | Philip LaZebnik
                                    </div>

                                    <div className="col-12 estreia_filme">
                                        <span className="negrito">Estreia: </span>2020
                                    </div>
                                </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary active" id="botao-carregar">
                                <input type="checkbox" checked/> <i className="fa fa-plus" ></i> Carregar mais filmes
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article className="row conteudo-central informacoes">

            <div className="col-12 col-lg-8 novidades">
                <h2 className=" col-12 tit2" id="novidades">Novidades</h2>

                <div className="row reportagem">
                    <div className="col-12 col-lg-4">
                        <img alt='noticia1' src={noticia1} className="foto_noticia" />
                    </div>

                    <div className="col-12 col-lg-8 materia">
                        <div className="col-12 data_materia">
                            4 de Dezembro de 2020
                        </div>
                        <div className="col-12">
                            <h5>Oscar Isaac vai estrelar adaptação do game Metal Gear Solid</h5>
                        </div>
                        <div className="col-12">
                            <p className="text-left">
                            Diretor de Kong: Ilha da Caveira, Jordan Vogt-Roberts vai comandar o filme de aventura.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="tags">
                                <a href="#esquadrao suicida">metal gear solid</a>
                                <a href="#hollywood">adaptacao</a>
                                <a href="#james gunn">oscar isaac</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row reportagem">
                    <div className="col-12 col-lg-4">
                        <img alt='' src={noticia2} className="foto_noticia" />
                    </div>

                    <div className="col-12 col-lg-8 materia">
                        <div className="col-12 data_materia">
                            4 de Dezembro de 2020
                        </div>
                        <div className="col-12">
                            <h5>10 vilões brasileiros inesquecíveis</h5>
                        </div>
                        <div className="col-12">
                            <p className="text-left">
                            Cláudia Raia, Mariana Ximenes e Alexandre Nero participaram do painel Os Vilões que Amamos Odiar na CCXP Worlds.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="tags">
                                <a href="#mandalorian">brasil</a>
                                <a href="#disney">vilao</a>
                                <a href="#produtos">ccxp</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row reportagem">
                    <div className="col-12 col-lg-4">
                        <img alt='noticia3' src={noticia3} className="foto_noticia" />
                    </div>

                    <div className="col-12 col-lg-8 materia">
                        <div className="col-12 data_materia">
                            4 de Dezembro de 2020
                        </div>
                        <div className="col-12">
                            <h5>Grey's Anatomy traz retorno de mais um personagem na 17ª temporada</h5>
                        </div>
                        <div className="col-12">
                            <p className="text-left">
                            Atenção com os spoilers!
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="tags">
                                <a href="#pirataria">greys anatomy</a>
                                <a href="#torrent">serie</a>
                                <a href="#brasil">personagem</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active" id="botao-carregar">
                            <input type="checkbox" checked/> <i className="fa fa-plus" ></i>Ver mais notícias
                        </label>
                    </div>
                </div>
            </div>

            
            <div className="col-12 col-lg-4 info">

              
                <div className="row">
                    <div className="col-12">
                        <h2 className="tit2">Sobre</h2>
                        <p className="text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolor voluptatibus
                            quisquam dolores, repellendus, at commodi, facere quis aliquid ipsam vel eos pariatur iste
                            fuga. Esse molestiae nulla minus maiores!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="tit3">Editorial</h2>

                        <div className="col-12 pessoas">
                            <i className="fa fa-user"></i>
                            <span className="negrito">Redação: </span>Leonardo Luiz
                        </div>

                        <div className="col-12 pessoas">
                            <i className="fa fa-user"></i>
                            <span className="negrito">Pesquisa: </span>Leonardo Luiz
                        </div>

                        <div className="col-12 pessoas">
                            <i className="fa fa-user"></i>
                            <span className="negrito">Gerente Geral: </span>Leonardo Luiz
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="tit4">Redes Sociais:</h3>
                        <div className="row">
                            <div className="col-12 media-icons">
                                <a href="https://www.facebook.com/AdoroCinema/" target="blanck"><i
                                        className="fa fa-facebook-square"></i></a>&emsp;
                                <a href="https://twitter.com/adorocinema" target="blanck"><i
                                        className="fa fa-twitter"></i></a>&emsp;
                                <a href="https://www.instagram.com/adorocinema/" target="blanck"><i
                                        className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article> 
    </main>
    <footer className="container footer">
    <div className="row conteudo-central">
        <div className="col-12">
            <div className="row">
                <div className="col-10 copyright">
                    <p>Copyright 2020 - Disciplina de Desenvolvimento de Interfaces Web - <span className="negrito">ICEI
                            PUC Minas</span>
                    </p>
                </div>

                <div className="col-2 logo">
                    <img alt='logo' src={logo} className="logo_rodape"/>
                </div>
            </div>
        </div>
    </div>

</footer>


</body>
)}