import styled from "@emotion/styled";
import HeroImg from "../../images/girl.png";
import LaptopImg from "../../images/union.png";
import AppleImg from "../../images/apple.png";

export const HeroSection = styled.section`
  padding: 20px 0 32px;
`;

export const HeroContainer = styled.div`
  padding: 0 64px 0 64px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const HeroWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const HeroBox = styled.div`
  width: 720px;
  padding: 98px 64px;
  border-radius: 30px;
  background-color: var(--hero-bg-color);
`;

export const Title = styled.h1`
  max-width: 548px;

  color: var(--text-color);
  font-size: 48px;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -0.96px;
`;

export const Text = styled.span`
  color: var(--text-color);
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.16;
  letter-spacing: -0.96px;
  background-color: var(--first-theme-bg-color);
  border-radius: 8px;
`;

export const Subtitle = styled.p`
  margin: 32px 0 64px;
  max-width: 471px;

  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.37;
  letter-spacing: -0.32px;
`;

export const ImageBox = styled.div`
  width: 568px;
  height: 530px;
  border-radius: 30px;
  background-color: var(--first-theme-bg-color);
  background-image: url(${AppleImg}), url(${LaptopImg}), url(${HeroImg});
  background-repeat: no-repeat;
  background-position: 50% 85%, bottom, center;
`;

export const HeroBtn = styled.button`
  padding: 16px 88px;
  border-radius: 12px;
  background-color: var(--first-theme-accent-color);
  border: 1px solid transparent;

  color: var(--text-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  transition: all var(--transition-duration-and-fun);

  &:hover,
  :focus {
    background-color: var(--first-theme-accent-color);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const InfoBox = styled.div`
  margin-top: 24px;
  padding: 40px 0 44px;
  border-radius: 30px;
  border: 1.5px dashed var(--first-theme-accent-color);
`;

export const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InfoQuantity = styled.span`
  color: var(--text-color);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const InfoText = styled.span`
  width: 74px;
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;
