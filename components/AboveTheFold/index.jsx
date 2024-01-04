import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledImage } from "@/design-system/StyledImage";
import { StyledHeader } from "@/design-system/StyledHeader";
import MainNavigation from "@/components/MainNavigation";

export default function AboveTheFold() {
  return (
    <div>
      <StyledHeader>
        <p>Feli</p>
        <MainNavigation></MainNavigation>
      </StyledHeader>
      <StyledContainer>
        <StyledImage
          src="/rosacloud.jpg"
          alt="Rosarote Wolkendecke"
          width={2880}
          height={2160}
        ></StyledImage>
      </StyledContainer>
    </div>
  );
}
