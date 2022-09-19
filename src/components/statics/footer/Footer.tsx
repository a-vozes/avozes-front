import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { Typography, Box, Grid } from '@mui/material';
import './Footer.css'

function Footer() {
  return (
    <>
      <Box justifyContent="center" alignItems="center" className = "degrade" >
        <Box alignItems="center">
          <Box style={{ height: "120px" }} marginBottom= '35px' >
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Sobre nós </Typography>
            </Box>
            <Typography  align="center" gutterBottom style={{ color: "white" }}>Somos uma plataforma que viabiliza a conexão entre idosos e pessoas colaboradoras. Mais que uma simples doação, uma troca de experiências de vida </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <img src= "https://i.ibb.co/TrWMPXT/logo-preto-e-branco-2000px.png" alt = 'logo avozes' width='80px' height= '80px' />
              </Box>
              </Box> 
          </Box>

          <Box display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
            </Box>
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

          <Box style={{ height: "70px" }}>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright: Avozes - Todos os direitos reservados</Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
              </a>
            </Box>
          </Box>
          </Box>  
      
         </>
  )
}

export default Footer;