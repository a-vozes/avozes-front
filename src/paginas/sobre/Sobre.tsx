import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import './Sobre.css';
import './Card.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';

function Sobre() {
    return (
        <>

            <Grid>
                <Box className='sobreTitulo'>

                    <Typography className='texto' variant="h2" gutterBottom color="textPrimary" component="h3" align="center">
                        Sobre nós
                    </Typography>

                    <Typography  className='texto2' variant="h4" gutterBottom color="textPrimary" component="h5" align="center">
                    Dando voz à voz da experiência.
                    </Typography>


                </Box>

                <Box display="flex" justifyContent="center">
                    <div className='sobreTexto'>

                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >Em menos de 4 anos o Brasil será o sexto país do mundo com a maior população idosa, segundo dados da OMS. A expectativa de vida deste grupo aumentou e é crescente a necessidade de cuidados e programas de proteção ao idoso. As consequências são em sua maioria psicológicas, principalmente para aqueles que sofrem  de abandono e precisam lidar com a rejeição dos próprios familiares, gerando sentimentos de impotência e até mesmo revolta. </Typography>

                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >Um pacto global assinado durante a Cúpula das Nações Unidas em 2015 pelos 193 países membros ficou conhecido como “Agenda 2030”. Nesta agenda existem 17 objetivos ambiciosos e interconectados, desdobrados em 169 metas, com foco em superar os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo, promovendo o crescimento sustentável global até 2030. Estes objetivos ficaram conhecidos como “Objetivos de Desenvolvimento Sustentável” ou simplesmente ODS.
                        </Typography>

                        <Box display="flex" >
                            <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" > Com embasamento na ODS 16 que fala sobre paz , justiça e instituições eficazes para promover sociedades pacíficas com a redução significativa de todas as formas de violência, decidimos trabalhar com as problemáticas sociais em torno da população idosa brasileira que sofre com abusos, abandono e precariedades.
                            </Typography>

                            <Grid item xs={6} >
                                <img src="https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS16-1-1.jpg" alt="" className='sobreImg' />
                            </Grid>

                        </Box>

                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >Uma cultura muito comum de grupos de voluntariado é a visita a asilos e abrigos onde os idosos têm alguém para fazer companhia para eles, além de conseguirem interagir com pessoas diferentes com as quais estão acostumados.  </Typography>
                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >A visita a asilos e abrigos é uma forma de ajudar os idosos, mas não é a única. Existem outras formas como por exemplo, a doação de roupas, alimentos, brinquedos, produtos de higiene e limpeza, entre outros. </Typography>
                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >Durante a pandemia dificultou-se o contato com esse grupo em situação de vulnerabilidade. Contudo utilizando a tecnologia nós podemos romper as fronteiras e unir pessoas em diferentes contextos sociais e a grandes distâncias.</Typography>
                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >Pensando nisso surgiu o Avozes que trás duas formas de colaboração em uma só. </Typography>

                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >Somos um e-commerce que oferta conexões com a vida dessas pessoas que tem uma grande bagagem cultural e muitas experiências. </Typography>
                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >A ideia é que as pessoas possam comprar uma sessão de conversa com um idoso e, assim, ajudar a manter a saúde mental dessas pessoas que estão em situação de vulnerabilidade. </Typography>
                        <Typography className='sobreTextoSobre' variant="h5" gutterBottom color="textPrimary" component="h5" >Além disso, o dinheiro arrecadado pelo Avozes será revertido em produtos de higiene e limpeza, roupas,entre outros, para asilos e abrigos. </Typography>
                    
                    </div>

                </Box>

                <Box display="flex" alignItems="center" justifyContent="center" paddingY={5} style={{ backgroundColor: "#f9f8d6" }}>
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Instituições parceiras</Typography>
                
                </Box>
                <Grid display="flex" alignItems="center" justifyContent="center">
                <img src="https://images-ext-1.discordapp.net/external/9_5D7zG6pAD46YomnsfdNwrgPiYsLnBjh_b6PUo4FS8/https/i.ibb.co/D963m6t/0d5fa2be-494d-4c0d-967d-e8fab22ac496.png" alt="" className='sobreImg3' />
                    <img src="https://i.ibb.co/gr87DHh/logo2-transparente.png" alt="" className='sobreImg2' />
                    <img src="https://i.ibb.co/m0R4LW7/logo1-transparente.png" alt="" className='sobreImg2' />
                    
                </Grid>



                <Box alignItems="center" justifyContent="center" paddingY={5} style={{ backgroundColor: "#f9f8d6" }}>
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Os desenvolvedores:</Typography>
                    <br />
                    <div className="card__collection clear-fix" style={{ backgroundColor: "#f9f8d6" }} >
                        <div className="cards cards--two">
                            <img src="https://i.ibb.co/0VjXyjW/Whats-App-Image-2022-09-18-at-11-20-48.jpg" className="img-responsive" alt="Cards Image" />
                            <span className="cards--two__rect"></span>
                            <span className="cards--two__tri"></span>
                            <p>Angélica Macário</p>
                            <ul className="cards__list">
                                <li><i><a href="https://github.com/Angelmacario" target="_blank">
                                    <GithubIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                                <li><i><a href="https://www.linkedin.com/in/ang%C3%A9lica-mac%C3%A1rio-a7057670/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>

                            </ul>
                        </div>
                        <div className="cards cards--two">
                            <img src="https://i.ibb.co/zsdKTp0/Whats-App-Image-2022-09-19-at-01-17-53.jpg" className="img-responsive" alt="Cards Image" />
                            <span className="cards--two__rect"></span>
                            <span className="cards--two__tri"></span>
                            <p>Cinthia Balbino</p>
                            <ul className="cards__list">
                                <li><i><a href="https://github.com/cinthiagrazy" target="_blank">
                                    <GithubIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                                <li><i><a href="https://www.linkedin.com/in/cinthia-balbino-2a021918a/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                            </ul>
                        </div>
                        <div className="cards cards--two">
                            <img src="https://i.ibb.co/4Jv8ryV/Whats-App-Image-2022-09-18-at-12-44-35.jpg" className="img-responsive" alt="Cards Image" />
                            <span className="cards--two__rect"></span>
                            <span className="cards--two__tri"></span>
                            <p>João Victor</p>
                            <ul className="cards__list">
                                <li><i><a href="https://github.com/Exxecutor" target="_blank">
                                    <GithubIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                                <li><i><a href="https://www.linkedin.com/in/joao-victor-fnascimento/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                            </ul>
                        </div>
                        <div className="cards cards--two">
                            <img src="https://i.ibb.co/0XwCH7V/2.jpg" className="img-responsive" alt="Cards Image" />
                            <span className="cards--two__rect"></span>
                            <span className="cards--two__tri"></span>
                            <p>Lucas Caetano</p>
                            <ul className="cards__list">
                                <li><i><a href="https://github.com/Lucas-Caethanos" target="_blank">
                                    <GithubIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                                <li><i><a href="https://www.linkedin.com/in/lucas-caetano-aa7a32228/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                            </ul>
                        </div>
                        <div className="cards cards--two">
                            <img src="https://i.ibb.co/km8PhrZ/Whats-App-Image-2022-09-18-at-12-51-01.jpg" className="img-responsive" alt="Cards Image" />
                            <span className="cards--two__rect"></span>
                            <span className="cards--two__tri"></span>
                            <p>Lucas Souza</p>
                            <ul className="cards__list">
                                <li><i><a href="https://github.com/lucaszri" target="_blank">
                                    <GithubIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                                <li><i><a href="https://www.linkedin.com/in/lucas-de-souza-benedito-343b85b6/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                            </ul>
                        </div>

                        <div className="cards cards--two">
                            <img src="https://i.ibb.co/CtXPQMQ/formatura-gen.jpg" className="img-responsive" alt="Cards Image" />
                            <span className="cards--two__rect"></span>
                            <span className="cards--two__tri"></span>
                            <p>Matheus Mota</p>
                            <ul className="cards__list">
                                <li><i><a href="https://github.com/omatheusmota" target="_blank">
                                    <GithubIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                                <li><i><a href="https://www.linkedin.com/in/omatheusmota/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                            </ul>
                        </div>
                        <div className="cards cards--two">
                            <img src="https://i.ibb.co/QM1cwCz/Whats-App-Image-2022-09-18-at-15-17-56.jpg" className="img-responsive" alt="Cards Image" />
                            <span className="cards--two__rect"></span>
                            <span className="cards--two__tri"></span>
                            <p>Nicolas Alves</p>
                            <ul className="cards__list">
                                <li><i><a href="https://github.com/Gloower" target="_blank">
                                    <GithubIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                                <li><i><a href="https://www.linkedin.com/in/nicolas-alves-a19650214/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 20, color: "white" }} />
                                </a></i></li>
                            </ul>
                        </div>
                    </div>
                </Box>
            </Grid>

        </>
    );
}

export default Sobre;