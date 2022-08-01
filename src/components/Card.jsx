import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: #999;
`;

const Card = () => {
  return (
    <Container>
      <Image src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo'></Image>
    </Container>
  );
};

export default Card;
