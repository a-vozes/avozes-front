import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import './Sobre.css';
import './Card.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';

function Sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f9f8d6" }} paddingY={5}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Sobre nós</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Em menos de 4 anos o Brasil será o sexto país do mundo com a maior população idosa, segundo dados da OMS. A expectativa de vida deste grupo aumentou e é crescente a necessidade de cuidados e programas de proteção ao idoso. As consequências são em sua maioria psicológicas, principalmente para aqueles que sofrem  de abandono e precisam lidar com a rejeição dos próprios familiares, gerando sentimentos de impotência e até mesmo revolta. </Typography>
                        <br />
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Um pacto global assinado durante a Cúpula das Nações Unidas em 2015 pelos 193 países membros ficou conhecido como “Agenda 2030”. Nesta agenda existem 17 objetivos ambiciosos e interconectados, desdobrados em 169 metas, com foco em superar os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo, promovendo o crescimento sustentável global até 2030. Estes objetivos ficaram conhecidos como “Objetivos de Desenvolvimento Sustentável” ou simplesmente ODS.
                        </Typography>
                        <br />
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}> Com embasamento na ODS 16 que fala sobre paz , justiça e instituições eficazes para promover sociedades pacíficas com a redução significativa de todas as formas de violência, decidimos trabalhar com as problemáticas sociais em torno da população idosa brasileira que sofre com abusos, abandono e precariedades.
                        </Typography>
                        <br />
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS16-1-1.jpg" alt="" width="500px" height="500px" />
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f9f8d6" }}>
                <Grid item xs={6} justifyContent="center" alignItems="center" paddingX={20}>
                    <img src="https://c.tenor.com/d00h-naXdo8AAAAd/old-man.gif" alt="" width="500px" height="500px" />
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Uma cultura muito comum de grupos de voluntariado é a visita a asilos e abrigos onde os idosos têm alguém para fazer companhia para eles, além de conseguirem interagir com pessoas diferentes com as quais estão acostumados.  </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>A visita a asilos e abrigos é uma forma de ajudar os idosos, mas não é a única. Existem outras formas como por exemplo, a doação de roupas, alimentos, brinquedos, produtos de higiene e limpeza, entre outros. </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Durante a pandemia dificultou-se o contato com esse grupo em situação de vulnerabilidade. Contudo utilizando a tecnologia nós podemos romper as fronteiras e unir pessoas em diferentes contextos sociais e a grandes distâncias.</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Pensando nisso surgiu o Avozes que trás duas formas de colaboração em uma só. </Typography>

                        <br />
                    </Box>
                </Grid>
            </Grid>
            <Box display="flex" alignItems="center" justifyContent="center" paddingY={5} style={{ backgroundColor: "#f9f8d6" }}>
                <img src="https://i.ibb.co/B6sFXST/avozes-preto-e-branco-2.png" alt="" />
            </Box>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f9f8d6" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Somos um e-commerce que oferta conexões com a vida dessas pessoas que tem uma grande bagagem cultural e muitas experiências. </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>A ideia é que as pessoas possam comprar uma sessão de conversa com um idoso e, assim, ajudar a manter a saúde mental dessas pessoas que estão em situação de vulnerabilidade. </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Além disso, o dinheiro arrecadado pelo Avozes será revertido em produtos de higiene e limpeza, roupas,entre outros, para asilos e abrigos. </Typography>
                        <br />
                    </Box>
                </Grid>
                <Grid item xs={6} justifyContent="center" alignItems="center" padding={20}>
                    <img src="https://i.ibb.co/Wy8BJQN/Untitled-1.gif" alt="" />
                </Grid>
            </Grid>
            <Box display="flex" alignItems="center" justifyContent="center" paddingY={5} style={{ backgroundColor: "#f9f8d6" }}>
                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Instituições parceiras</Typography>
            </Box>

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
                        <img src="https://i.ibb.co/0VjXyjW/Whats-App-Image-2022-09-18-at-11-20-48.jpg" className="img-responsive" alt="Cards Image" />
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
                        <img src="https://i.ibb.co/0VjXyjW/Whats-App-Image-2022-09-18-at-11-20-48.jpg" className="img-responsive" alt="Cards Image" />
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
                        <p>Matheus</p>
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
                        <img src="https://i.ibb.co/0VjXyjW/Whats-App-Image-2022-09-18-at-11-20-48.jpg" className="img-responsive" alt="Cards Image" />
                        <span className="cards--two__rect"></span>
                        <span className="cards--two__tri"></span>
                        <p>Nicolas</p>
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
        </>
    );
}

export default Sobre;