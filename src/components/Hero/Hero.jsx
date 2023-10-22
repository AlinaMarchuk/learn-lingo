import {
  HeroSection,
  HeroContainer,
  HeroWrapper,
  HeroBox,
  Title,
  Text,
  Subtitle,
  ImageBox,
  HeroBtn,
  InfoBox,
  InfoList,
  InfoItem,
  InfoQuantity,
  InfoText,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroWrapper>
          <HeroBox>
            <Title>
              Unlock your potential with the best <Text>language</Text> tutors
            </Title>
            <Subtitle>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </Subtitle>
            <HeroBtn type="button">Get started</HeroBtn>
          </HeroBox>
          <ImageBox></ImageBox>
        </HeroWrapper>
        <InfoBox>
          <InfoList>
            <InfoItem>
              <InfoQuantity>32,000 +</InfoQuantity>
              <InfoText>Experienced tutors</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoQuantity>300,000 +</InfoQuantity>
              <InfoText>5-star tutor reviews</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoQuantity>120 +</InfoQuantity>
              <InfoText>Subjects taught</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoQuantity>200 +</InfoQuantity>
              <InfoText>Tutor nationalities</InfoText>
            </InfoItem>
          </InfoList>
        </InfoBox>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
