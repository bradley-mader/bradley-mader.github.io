import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
    position: relative;
    background-color: white;
    border-radius: 4px;
`

const Title = styled.h1`
  font-size: 60pt;
  text-align: center;
  padding: .5em;
`;

const Description = styled.p`
  font-size: 18pt;
  border-top: 2px solid #AAA;
  border-bottom: 2px solid #AAA;
  padding: 1em;
`;

const Header = styled.h1`
  margin-top:1em;
`;

const Disclaimer = styled.p`
  font-size: 18pt;
  border-top: 2px solid #AAA;
  padding: 1em;
`;

export const Ubiqi = () =>
{
  return (
    <ProjectContainer>
      <Title>Ubiqi</Title>
      <Description>
        Ubiqi is a pet collection service that is designed to be entirely interface agnostic. 
        You can bring your pets from one game to another, interact with them through the web browser, trade physical "cages", and even potentially find them in AR/VR environments.
        The posibilities are endless.
      </Description>
      <Header>How it works:</Header>
      <ul>
        <li>Pets are a combination of abstract attributes and abilities as well as the meshes, sprites, animations, and audio that go along with them.</li>
        <li>Signing in to Ubiqi gets you access to all of your pets via the web API. This can be integrated with OAuth providers to provide a seamless experience.</li>
        <li>New pets can be obtained via a url which will grant you access to the designated pet in a core service with the ability to trade. This can most easily be 
          conveyed by link or QR code. This means that pets can be added as simply as scanning a QR code with your phone and accepting the new pet.</li>
        <li>Users can bring these pets to any Ubiqi enabled environment to interact with their pets.</li>
        <li>Users can recage pets in order to convert them back into a physical format. This means that the supplied QR code will become live for exchange.</li>
        <li>Users can trade their pets through the core services with no need to cage them first. This means that there is no risk when transacting through the web service.</li>
      </ul>
      <Header>Architecture:</Header>
      <ul>
        <li>
          Scalable: Ubiqi is designed from the ground up to be a scalable, cloud-native solution. Built for Kubernetes, the environment can entirely run locally on a minikube 
          instance, but can be scaled up to accomodate increased traffic or regions.</li>
        <li>
          Modular: The project is designed with modularity in mind and demonstrates an n-tier microservice architecture:
          <ul>
            <li>Application Layer: The sample web application is the primary example of this. While this particular interface is hosted in the cluster, requests as demonstrated by 
              the application can originate from any program once the user has authenticated to the interface.</li>
            <li>Interface Layer / Aggregation Layer: These are the points of interaction for applications interacting with the Ubiqi system. These interface services currently include
               the Pet Service (all things pet and user data), Notification Service (tracks notifications of activity on the user's account), Messaging Service (chat messaging), and Trade
                Service (session based trading).
            </li>
            <li>Data Layer: The data layers are services which abstract away the underlying data stores. This means that changes can potentially be made internally without dramatically
               impacting consumers of the data.
            </li>
            <li>Data Storage: The databases housing information pertaining to users and pets.</li>
          </ul>
        </li>
        <li>
          Secure: User and Pet data is entirely secured via OAuth2.0 for initial Authentication and Authorization and JWT tokens for session management. Secure information and transactions 
          which manage menagerie are tied to core services (Ubiqi owned), while transactions which request information and update the state within a specific authorized context can be done through
          vender accounts.
        </li>
      </ul>
      <Disclaimer>
        ***Keep in mind, this is all hypothetical and gives rise to a rich sandbox environment with diverse problem spaces and needs. The intention is not currently to
        bring this concept to market.
      </Disclaimer>
    </ProjectContainer>
  );
}