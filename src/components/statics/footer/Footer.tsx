import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import {  Box, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <Grid container spacing={3} className="container">
          <Grid className="roww">
          <Box><a href="#"><img src="https://i.ibb.co/TrWMPXT/logo-preto-e-branco-2000px.png" alt='logo avozes' width='80px' height='80px' /></a></Box>
            <Grid item sm={12} md={6} className="box1">
              
              <h6>Sobre</h6>
              <p className="text-justify">Somos uma plataforma que viabiliza a conexão entre idosos e pessoas colaboradoras. Mais que uma simples doação, uma troca de experiências de vida .</p>
              <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                <InstagramIcon style={{ fontSize: 40, color: "white" }} />
              </a>
              <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
              </a>
              <a href="https://github.com/a-vozes" target="_blank">
                <GithubIcon style={{ fontSize: 40, color: "white" }} />
              </a>
            </Box>
            </Grid>

            <Grid xs={6} md={3} className="box1">
              <h6>Serviços</h6>
              <ul className="footer-links">
                <li><Link to='/sobre' ><a>Institucional</a></Link></li>
                <li><Link to='/prods' ><a>Avós</a></Link></li>
                <li><Link to='/Categorias' ><a>Conexões</a></Link></li>
                <li><Link to='/contato' ><a>Contato</a></Link></li>
              </ul>
            </Grid>

            <Grid xs={6} md={3} className="box1">
              <h6>Trabalhe com a gente</h6>
                <p>Quer se juntar a nossa equipe? Entre em contato!</p>
                <p>avozes.org@gmail.com</p>
            </Grid>
          </Grid>
          
        </Grid>
        <Box>
          <p className="copyright-text fundoFooter">© 2022 Copyright: Avozes - Todos os direitos reservados
              </p>
              <p className="copyright-text fundoFooter">brasil.generation.org</p>
        </Box>
      </footer>
    </>
  )
}

export default Footer;