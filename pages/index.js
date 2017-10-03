import React from 'react'
import Link from 'next/link';

import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import hoc from '../components/Shared/hoc'
import theme from '../components/theme'

import Layout from '../components/Shared/Layout'
import Container from '../components/Shared/Container'
import Button from '../components/Shared/Button'
import { Text, LargeText, MediumText, SmallText, AuthorText, LineBreak, LineBreakMax, LineBreakAll, TextBlock } from '../components/Shared/Text'
import { Display, Headline, Subheadline, HeadlineMeta } from '../components/Shared/Headline'

import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'
import Block from '../components/Shared/Block'
import ContactAction from '../components/ContactAction'
import Contacts from '../components/Shared/Contacts'
import HeroListening from '../components/Shared/HeroListening'

import FeatureList from '../components/Shared/FeatureList'
import HeroSydney from '../components/Shared/HeroSydney'
import ContactForms from '../components/Shared/ContactForms.js'


const TextBlockWrapper = styled(Flex)`
  margin-top: 0;
  margin-bottom: ${theme.space[4]}px;

  @media (min-width: ${theme.containers.sm}) {
    margin: 0;
  }
`

const Root = (props) => (
  <Layout>
    <Header
      pathname={props.pathname}
      clear
      linkToStrata
    />

    <HeroListening
      headline='The Real Estate team experienced in helping people.'
      button
    />

    <Block mw='rg' textCenter>
      <Box mx='auto' width={[ 1, 1, 5/6 ]}>
        <Headline font='displayMedium' color='text' mt={[ 0, 4, 4 ]} mb={2}>With our end-to-end services range, <LineBreak /> we've got you covered</Headline> <LargeText color='text70'>
          "VJ Ray made everything easier. We all know our block is looked after, and friendly neighbours are far more easier to live with"<LineBreak m='auto'><AuthorText>— Jessica, Campsie</AuthorText></LineBreak>
        </LargeText>
      </Box>

      <FeatureList />
    </Block>

    <HeroSydney
      headline="We believe in better <LineBreak bp='1' m='auto'>Strata management for Sydney.</LineBreak>"
      subheadline="We know that our job is much more that just looking after buildings. Its the people that matter. We know that our job is much more that just looking after buildings. Its the people that matter."
    />

    <Block>
      <Container textCenter pb={4}>
        <Display color='text'>
          Our duty is your satisfaction.
        </Display>

        <Box w={[ 1, 1, 8/12 ]} mx='auto'>
          <MediumText color='brand'>
            "I have known and been happy with VJ Ray for years. I cannot fault you. Thank you! I have known and been happy with VJ Ray for years. I cannot fault you. Thank you!" <LineBreakAll mx='auto'>
              <AuthorText>— Mike Pollard, Owner</AuthorText>
            </LineBreakAll>
          </MediumText>
        </Box>
      </Container>

      <Flex
        direction={[ 'column', 'column', 'row' ]}
        mx={[ -2, -2, -2, -3 ]}
      >
        <Flex
          column
          width={[ 1, 1, 1/3 ]}
          px={[ 4, 2, 2, 3, 3 ]}
        >
          <Box mt='6px'>
            <img src='static/img/mike-pollard.jpg' />
          </Box>
          <Text color='text70' mt={2} children='Mike Pollard' />
          <Text color='text70' children='Managing Director' />
        </Flex>
        <TextBlockWrapper
          order={[ '-1', '-1', 'initial' ]}
          px={[ 2, 2, 2, 3 ]}
          width={[ 1, 1, 2/3 ]}
        >
          <TextBlock>
            <p>
              Sit lorem veniam repellat ex itaque? Reprehenderit voluptatum delectus earum a vel? Iusto fugiat unde aut praesentium suscipit. Sunt commodi deleniti ipsam natus sunt Eum tempore saepe enim blanditiis sapiente quo Minus tempore neque quisquam cumque facilis beatae repudiandae! Corporis harum libero omnis quod hic Ut sit voluptatibus dolorem eius minus Vero veniam voluptas facilis animi debitis mollitia id. Aliquam velit eos laudantium illo soluta? Voluptatem ex cumque molestiae eveniet dignissimos quia. Obcaecati inventore fugiat quasi voluptas placeat. Eum aperiam nisi eum ipsa magnam distinctio aliquam explicabo reprehenderit repellat laudantium dolorem!
            </p>
            <p>
              Sit lorem veniam repellat ex itaque? Reprehenderit voluptatum delectus earum a vel? Iusto fugiat unde aut praesentium suscipit. Sunt commodi deleniti ipsam natus sunt Eum tempore saepe enim blanditiis sapiente quo Minus tempore neque quisquam cumque facilis beatae repudiandae! Corporis harum libero omnis quod hic Ut sit voluptatibus dolorem eius minus Vero veniam voluptas facilis animi debitis mollitia id. Aliquam velit eos laudantium illo soluta? Voluptatem ex cumque molestiae eveniet dignissimos quia. Obcaecati inventore fugiat quasi voluptas placeat. Eum aperiam nisi eum ipsa magnam distinctio aliquam explicabo reprehenderit repellat laudantium dolorem!
            </p>
          </TextBlock>
        </TextBlockWrapper>

      </Flex>
    </Block>

    <Block mw='sm' pb={[ 0, 0 ]}>
      <ContactForms defaultForm={props.defaultForm} />
    </Block>

    <Block>
      <ContactAction btnColor='brandAlt' withButton />
      <Contacts />
    </Block>

    <Footer />
  </Layout>
)

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
