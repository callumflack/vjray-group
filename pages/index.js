import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import { 
  Flex, 
  Box
} from 'rebass'

// NEW
import Layout from '../components/Shared/Layout'
import { Display, Heading } from '../components/Shared/Headings'
import { Text, LargeText, MediumText, SmallText, AuthorText, TextBlock } from '../components/Shared/Texts'
import LineBreak from '../components/Shared/LineBreak'
import HeroStrata from '../components/Shared/HeroStrata'

// OLD
import theme from '../components/theme'
import hoc from '../components/Shared/hoc'
import Container from '../components/Shared/Container'
import Button from '../components/Shared/Button'
import { Subheadline, HeadlineMeta } from '../components/Shared/Headline'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import ContactAction from '../components/ContactAction'
import Contacts from '../components/Shared/Contacts'
import HeroListening from '../components/Shared/HeroListening'
import FeatureList from '../components/Shared/FeatureList'
import ContactForms from '../components/Shared/ContactForms.js'




const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;

  @media (min-width: ${theme.containers.sm}) {
    margin: 0;
  }
`

const Root = props => (
  <Layout>
    <Header pathname={props.pathname} clear linkToStrata />

    <HeroListening
      headline="The Real Estate team experienced in helping people."
      button
    />

    <Block align="center">
      <Box mx="auto" width={[1, 1, 4 / 6]}>
        <Heading center>
          With our end-to-end services range,{" "}
          <LineBreak>we've got you covered.</LineBreak>
        </Heading>
        <LargeText center color="text70">
          "You guys are very quick to respond and handle things efficiently, no
          complaints here!"<LineBreak>
            <AuthorText>— Terry & Linda, Caringbah</AuthorText>
          </LineBreak>
        </LargeText>
      </Box>

      <FeatureList border />
    </Block>

    <HeroStrata
      subhead="Dependable and effective"
      headline="We believe in better <LineBreak>Strata Management </LineBreak><LineBreak>for Sydney.</LineBreak>"
      lede="This paragraph is about how 50% of Sydney’s population will live in Strata management by 2020, about VJ Ray's history in Sydney, how they love Sydney and want to see it progress upwards and stave off housing uncertainty and more pain points that hit customers."
    />

    <Block>
      <Container pb={4}>
        <Display center color="text" family="displayMedium">
          Our duty is your satisfaction.
        </Display>

        <Box w={[1, 1, 8 / 12]} mx="auto">
          <MediumText center color="brand">
            “I’ve been working for VJ Ray for over three decades and in that
            time, I’ve seen many things in Real Estate change. But at heart of
            great business is great customer service. That’s what we pride
            ourselves on here at VJ Ray” <LineBreak><AuthorText>— Mike Pollard, Owner</AuthorText></LineBreak>
          </MediumText>
        </Box>
      </Container>

      <Flex direction={["column", "column", "row"]} mx={[-2, -2, -2, -3]}>
        <Flex column width={[1, 1, 1 / 3]} px={[4, 2, 2, 3, 3]}>
          <Box mt="6px">
            <img src="static/img/mike-pollard.jpg" />
          </Box>
          <Text color="text70" mt={2} children="Mike Pollard" />
          <Text color="text70" children="Managing Director" />
        </Flex>
        <TextBlockWrapper
          order={["-1", "-1", "initial"]}
          px={[2, 2, 2, 3]}
          width={[1, 1, 2 / 3]}
        >
          <TextBlock>
            <p>
              Sit lorem veniam repellat ex itaque? Reprehenderit voluptatum
              delectus earum a vel? Iusto fugiat unde aut praesentium suscipit.
              Sunt commodi deleniti ipsam natus sunt Eum tempore saepe enim
              blanditiis sapiente quo Minus tempore neque quisquam cumque
              facilis beatae repudiandae! Corporis harum libero omnis quod hic
              Ut sit voluptatibus dolorem eius minus Vero veniam voluptas
              facilis animi debitis mollitia id. Aliquam velit eos laudantium
              illo soluta? Voluptatem ex cumque molestiae eveniet dignissimos
              quia. Obcaecati inventore fugiat quasi voluptas placeat. Eum
              aperiam nisi eum ipsa magnam distinctio aliquam explicabo
              reprehenderit repellat laudantium dolorem!
            </p>
            <p>
              Sit lorem veniam repellat ex itaque? Reprehenderit voluptatum
              delectus earum a vel? Iusto fugiat unde aut praesentium suscipit.
              Sunt commodi deleniti ipsam natus sunt Eum tempore saepe enim
              blanditiis sapiente quo Minus tempore neque quisquam cumque
              facilis beatae repudiandae! Corporis harum libero omnis quod hic
              Ut sit voluptatibus dolorem eius minus Vero veniam voluptas
              facilis animi debitis mollitia id. Aliquam velit eos laudantium
              illo soluta? Voluptatem ex cumque molestiae eveniet dignissimos
              quia. Obcaecati inventore fugiat quasi voluptas placeat. Eum
              aperiam nisi eum ipsa magnam distinctio aliquam explicabo
              reprehenderit repellat laudantium dolorem!
            </p>
          </TextBlock>
        </TextBlockWrapper>
      </Flex>
    </Block>

    <Block mw="sm" pb={[0, 0]}>
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block>
      <ContactAction btnColor="brandAlt" withButton />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
);

class Index extends React.Component {
  static async getInitialProps({ pathname, query }) {
    return {
      pathname,
      defaultForm: query.form,
    }
  }
  render() {
    return <Root {...this.props} />
  }
}

export default Index;
