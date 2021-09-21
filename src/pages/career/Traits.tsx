import React from 'react'
import styled from 'styled-components'

import { Section, SectionInner, SectionTitle, TextRegular } from '../../components/shared'
import variables from '../../styles/variables'
// import { TextRegular } from './../../components/shared/index'

const SectionTitleEx = styled(SectionTitle)`
  margin-bottom: 5rem;
  font-size: 2.5rem;
  font-weight: 900;

  @media ${variables.device.mobile} {
    font-size: 1.125rem;
    margin-bottom: 2.75rem;
    text-align: left;
  }
`

const TextTitle = styled.h4`
  margin: 5rem 0 1.625rem;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;

  @media ${variables.device.mobile} {
    font-size: 1.125rem;
    margin: 4rem 0 1.5rem;
    text-align: left;
  }
`
const TextRegularTraits = styled(TextRegular)`
  font-size: 1.375rem;
  color: var(--black-200);

  @media ${variables.device.mobile} {
    font-size: 1rem;
    margin-bottom: 2.75rem;
    text-align: left;
    &:last-of-type {
      margin-bottom: 2.125rem;
    }
  }
`

const Traits: React.FC = () => {
  return (
    <div className='container'>
      <Section>
        <SectionInner>
          <SectionTitleEx>teamwork, responsibility and positive mindset</SectionTitleEx>
          <TextRegularTraits>
            We believe that bright ideas and bright products come out of bright minds. We work together making the most
            of experience and expertise we have.
          </TextRegularTraits>

          <TextTitle>Teamwork</TextTitle>
          <TextRegularTraits>
            It is only through teamwork that we achieve brightness. We know each others’ strengths and we also can ask
            for help when we need. We work together to bring our passions and expertise to make Bright Inventions the
            best place it can be.
          </TextRegularTraits>

          <TextTitle>Responsibility</TextTitle>
          <TextRegularTraits>
            We support and share responsibility with the members of our team. We also actively take responsibility for
            our own self-development. Everything is everyone’s responsibility and we own our collective results
            together.
          </TextRegularTraits>

          <TextTitle>Positive attitude</TextTitle>
          <TextRegularTraits>
            We love what we do and the people around us. In fact, we believe that happy people are more motivated,
            efficient and creative, so we bring a positive attitude to everything we do.
          </TextRegularTraits>

          <TextTitle>Flexibility</TextTitle>
          <TextRegularTraits>
            We balance ambition with flexibility because what matters is the final result. We are nimble. We evolve and
            adapt. People who work here are not afraid of taking risk and making mistakes as long as we learn from them.
            We encourage the diversity of thought.
          </TextRegularTraits>

          <TextTitle>Client orientation</TextTitle>
          <TextRegularTraits>
            We are only successful if our clients are - and that drives everything we do. Our team will overcome
            obstacles, find solutions and deliver results on time. Every action we take enables our clients to make a
            bigger impact on the world.
          </TextRegularTraits>
        </SectionInner>
      </Section>
    </div>
  )
}

export default Traits
