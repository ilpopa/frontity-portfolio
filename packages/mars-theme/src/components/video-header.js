import React from "react";
import { connect, styled } from "frontity";

const VideoHeader = ({ video }) => {

  return (
      <Container>
        <VideoContainer>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </VideoContainer>
    </Container>
  );
};

export default connect(VideoHeader);

const Container = styled.div`
    width: 100%;
    position: relative;
    height: 450px;
    overflow: hidden;
    z-index: -5;
    @media (max-width: 560px) {
        height: 250px;
    }
`

const VideoContainer = styled.div`
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
  video {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    min-height: 50%;
    min-width: 50%;
  }
`;

