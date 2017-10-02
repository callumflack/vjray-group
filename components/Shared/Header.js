import Link from 'next/link'
import PropTypes from 'prop-types'

import { contactDetails, icons } from '../constants'
import theme from '../theme'

import styled, { css } from 'styled-components'
import { Flex, Box } from 'rebass'

import hoc from './hoc'
import Icon from './Icon';
import { Display } from './Headline'
import { Text, InlineText, Divider } from './Text'
import Container from './Container'
import Button from './Button'

import Hamburger from './Hamburger'


const fade = {
  duration: 0.25,
  delay: 0.15,
};

const Root = styled(({
	isHidden,
	isWindowScrolled,
	isModalVisible,
	children,
	...rest
}) => (
	<Flex {...rest}>{children}</Flex>
))`
  --Header-background-color: rbga(255, 255, 255, 1);
  --Header-border-color: rgba(88, 88, 112, 0.15);
  background-color: var(--Header-background-color);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--Header-border-color);
  height: ${theme.blockHeights.navBar};
  opacity: 1;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0) translateY(0px);
  transition:
    opacity ${fade.duration}s ease-in-out ${fade.delay}s,
    transform ${fade.duration}s ease-in-out ${fade.delay}s,
    background-color ${fade.duration}s ease-in-out,
    border ${fade.duration}s ease-in-out 0s;
  width: 100%;
  z-index: 3;

  @media (max-width: 512px) {
    button {
      padding: 0 0.75rem;
    }
  }

  @media (max-width: 320px) {
    button span {
      display: none;
    }
  }

  ${props => props.color && css`
    color: ${theme.colors[props.color] || theme.colors.text};
  `}

  ${props => props.clear && css`
    --Header-background-color: rbga(255, 255, 255, 0);
  `}

  ${props => props.reverseBorder && css`
    --Header-border-color: rgba(255, 255, 255, 0.15);
  `}

  ${props => props.isHidden && css`
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(-${theme.blockHeights.navBar});
    transition:
      opacity ${fade.duration}s ease-in-out 1s,
      transform ${fade.duration}s ease-in-out 1s,
      background-color ${fade.duration}s ease-in-out,
      border ${fade.duration}s ease-in-out 0s;
  `}

  ${props => props.isWindowScrolled && css`
    --Header-border-color: transparent;
    background-color: ${theme.colors[props.bg] || 'rgba(255, 255, 255, 1)'};
    box-shadow:
      0 16px 24px 2px rgba(0,0,0,0.03),
      0 6px 30px 5px rgba(0,0,0,0.03);
    color: ${theme.colors.text};
    transition:
      opacity ${fade.duration}s ease-in-out,
      transform ${fade.duration}s ease-in-out,
      background-color ${fade.duration}s ease-in-out,
      border ${fade.duration}s ease-in-out;
  `}

  ${props => props.isModalVisible && css`
    --Header-background-color: ${theme.colors.offWhite};
    --Header-border-color: rgba(88, 88, 112, 0.15);
    background-color: var(--Header-background-color);
    border-bottom: 1px solid var(--Header-border-color);
    transition:
      opacity ${fade.duration}s ease-in-out,
      transform ${fade.duration}s ease-in-out,
      background-color ${fade.duration}s ease-in-out,
      border ${fade.duration}s ease-in-out;
  `}

  ${props => props.invertTextOnMobile && css`
    @media (max-width: 512px) {
      --Header-border-color: rgba(255, 255, 255, 0.15);

      a,
      span {
        color: ${theme.colors.text20} !important;
      }

      button {
        border-color: --Header-border-color;
      }
    }
  `}
`;//`

const StyledButton = Button.extend`
  border-width: 1px;
`

const ResponsiveToggle = styled(Box)`
  ${props => props.hideAtDesktop && css`
    @media (min-width: 1024px) {
      display: none;
    }
  `}

  ${props => props.hideAtMobile && css`
    @media (max-width: 768px) {
      display: none;
    }
  `}
`//`

const DesktopNav = styled(ResponsiveToggle)`
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
`

const Nav = styled(ResponsiveToggle)`
  display: flex;
  justify-content: center;

	a {
    cursor: pointer;
	}

	/* Following styles are applied to span as well to style dividers from Text.js */
  a, span {
    line-height: ${theme.blockHeights.navBar};
  }

  a:not(:last-child),
  span:not(:last-child) {
    margin-right: 1.5rem;
  }

  ${props => props.hidePhoneNumberResponsively && css`
    @media (min-width: 769px) and (max-width: 1023px) {
      display: none;
    }
  `}
`;//`


/*
 * -----------
 * Mobile nav
 * -----------
 */

const MobileNav = styled.nav`
  a {
    margin: 0.5rem 0;
  }
`;

const MobileNavContainer = styled(Container)`
  @media (max-width: ${theme.breakpoints[1]}em) {
    padding: 0;
  }
`

const MobileNavFlex = Flex.extend`
  align-content: flex-end;
  opacity: 0;
  transform: translateY(-32px);

  ${props => props.isVisible && css`
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity ${fade.duration}s ease-in-out,
      transform ${fade.duration}s ease-in-out;
  `}
`//`

const MobileModal = Flex.extend`
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity ${fade.duration}s ease-in-out,
    transform 0s ease-in-out 0s;
  background-color: ${theme.colors.offWhite};
  bottom: 0;
  left: 0;
  padding: ${theme.space[3]}px;
  position: fixed;
  right: 0;
  top: ${theme.blockHeights.navBar};
  z-index: 15;

  ${props => !props.isVisible && css`
    opacity: 0;
    transform: translateY(100vh);
    transition:
      opacity ${fade.duration}s ease-in-out,
      transform 0s ease-in-out ${fade.duration}s;
  `}
`//`

const LinkTextRoot = hoc('span').extend`
  ${props => props.isActive && css`
    border-bottom: 2px solid currentColor;
    padding-bottom: 33px;
  `}
`

const LinkText = props =>
  <LinkTextRoot
    font='textRegular'
    fontSize={[ 2, 3 ]}
    color='inherit'
		isActive={props.isActive}
		children={props.children}
  />

const StyledDivider = styled(Divider)`
  margin-left: 0 !important;
`

const MobileLinkText = props =>
  <Display
		align='left'
		color='text'
		isActive={props.isActive}
		children={props.children}
	/>










/*
 * final component
 */


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this)
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleModalTriggerClick = this.handleModalTriggerClick.bind(this);

    this.state = {
      isVisible: true,
      isWindowScrolled: false,
      previousScrollPos: 0,
      isModalVisible: false,
    };
  }

  componentDidMount() {
    this.setState({
      previousScrollPos: window.scrollY,
      isWindowScrolled: window.scrollY > 200,
    });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (this.state.isModalVisible) return;

    const previousScrollPos = this.state.previousScrollPos;
    // iOS hides the header when scrolled to top
    // The cause is believed to be that it's possible to scroll a little below
    // 0 on the Y axis with a bounce back animation which scrolls back to 0.
    // scollPos is checked to be above 0 to exclude scroll events caused by the bounce back animation
    const scrolledDown = window.scrollY > previousScrollPos && window.scrollY > 0;

    this.setState({
      previousScrollPos: window.scrollY,
      isVisible: !scrolledDown,
      isWindowScrolled: window.scrollY > 200,
    });
  }

  handleModalClick() {
    this.setState({
      isModalVisible: false,
      isWindowScrolled: window.scrollY > 200,
    });
  }

  handleModalTriggerClick() {
    const willHideModal = this.state.isModalVisible;

    this.setState({
      isVisible: true,
      isWindowScrolled: !willHideModal || !(willHideModal && window.scrollY <= 200),
      isModalVisible: !this.state.isModalVisible,
    });
  }

  render() {
    return (
      <div>
        <Root
          isHidden={!this.state.isVisible}
          isWindowScrolled={this.state.isWindowScrolled}
          isModalVisible={this.state.isModalVisible}
        >
          <Container
            px={[ 1, 2, 2, 3 ]}
            mw='lg'
            w={1}
          >
            <Flex
              align='center'
              justify='space-between'
            >

              <DesktopNav hideAtMobile style={{ textAlign: 'center' }}>
                <Nav>
                  <Link href='/who-we-are'>
                    <a><LinkText isActive={this.props.pathname === '/who-we-are'}>Who We Are</LinkText></a>
                  </Link>

                  <Link href='/what-we-do-for-you'>
                    <a><LinkText isActive={this.props.pathname === '/what-we-do-for-you'}>What We Do For You</LinkText></a>
                  </Link>

                  <Link href='/contact'>
                    <a><LinkText isActive={this.props.pathname === '/contact'}>Contact Us</LinkText></a>
                  </Link>

									<StyledDivider />

									<Link href={'tel:' + contactDetails.phone}>
										<a><LinkText>{contactDetails.phone}</LinkText></a>
									</Link>
                </Nav>
              </DesktopNav>

              <Box>
                <Link href='/'>
                  <a><Icon
                    color={this.props.color}
                    size='80'
                    icon={icons.logo}
                  /></a>
                </Link>
              </Box>

              <Nav hidePhoneNumberResponsively>
                <Link href='vjraystrata.com.au'>
                  <a><LinkText>
                    <StyledButton invert>
											Visit VJ Ray Strata
                    </StyledButton>
                  </LinkText></a>
                </Link>
              </Nav>

              <ResponsiveToggle hideAtDesktop p={2}>
                <Hamburger onClick={this.handleModalTriggerClick} isOpen={this.state.isModalVisible}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Hamburger>
              </ResponsiveToggle>

            </Flex>
          </Container>
        </Root>

        <MobileModal
          onClick={this.handleModalClick}
          isVisible={this.state.isModalVisible}
          column
        >
          <MobileNav>
            <MobileNavContainer textCenter>
              <MobileNavFlex column isVisible={this.state.isModalVisible}>
                <Link href='/'>
                  <a><MobileLinkText>Home</MobileLinkText></a>
                </Link>
                <Link href='/who-we-are'>
                  <a><MobileLinkText>Who we are</MobileLinkText></a>
                </Link>
                <Link href='/what-we-do-for-you'>
                  <a><MobileLinkText>What we do for you</MobileLinkText></a>
                </Link>
                <Link href='/contact'>
                  <a><MobileLinkText>Contact us</MobileLinkText></a>
                </Link>

                <Link href='/let-us-help-you'>
                  <a>
                    <Text align='left' font='textRegular' mt={1}>
                      <StyledButton invert icon children='Get a fast quote' />
                    </Text>
                  </a>
                </Link>

              </MobileNavFlex>
            </MobileNavContainer>
          </MobileNav>
        </MobileModal>

      </div>
    )
  }
}

Header.propTypes = {
  color: PropTypes.string,
  clear: PropTypes.bool,
  invertTextOnMobile: PropTypes.bool,
  pathname: PropTypes.string,
  reverseBorder: PropTypes.bool,
};

Header.defaultProps = {
  color: 'text',
  clear: false,
  invertTextOnMobile: false,
  reverseBorder: false,
};

export default Header;
