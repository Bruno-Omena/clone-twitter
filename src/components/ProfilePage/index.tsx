import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
 } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

    <ProfileData>
      <EditButton outlined>Editar Perfil</EditButton>

    <h1>Bruno Omena</h1>
    <h2>@bruno_omena_</h2>

    <p>
      Developer at <a href="https://www.digicad.com.br/">@Digicad</a>
    </p>

    <ul>
      <li>
        <LocationIcon />
        São Bernardo do Campo, Brasil
      </li>
      <li>
        <CakeIcon />
        Nascido(a) em 03 de Fevereiro de 2002
      </li>
    </ul>

    <Followage>
      <span>
        Seguindo <strong>90</strong>
      </span>
      <span>
       <strong>60 </strong> seguidores
      </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;