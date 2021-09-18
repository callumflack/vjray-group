import React from "react";
import { PrimaryButtonText } from "./Texts";
import { ButtonOutline } from "./Buttons";
import VideoModal from "./VideoModal";
import HeroBlock from "./HeroBlock";
import HGroup from "./HGroup";

class HeroHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isContentVisible: true,
    };
  }

  render() {
    return (
      <div>
        <VideoModal
          isVisible={!this.state.isContentVisible}
          setContentVisibility={this.setContentVisibility}
          closeModal={() => this.setState({ isContentVisible: true })}
        />
        <HeroBlock
          bluegreyGradientBg
          img="https://res.cloudinary.com/pw-img-cdn/image/upload/v1507792017/vanessa_waedtl.png"
        >
          <HGroup
            titleIs="h1"
            title="The Real Estate Managers who focus on people."
            titleFamily="displayMedium"
            text="At VJ Ray, we know property. And we also know people. That's why our focus is on serving you."
            textColor="text70"
            textIsLast
          >
            <PrimaryButtonText mt={3}>
              <ButtonOutline
                icon
                color="brand"
                brandBg
                px={3}
                children="Watch video"
                onClick={() => this.setState({ isContentVisible: false })}
              />
            </PrimaryButtonText>
          </HGroup>
        </HeroBlock>
      </div>
    );
  }
}

export default HeroHome;
