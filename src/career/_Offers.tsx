import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { CustomSection } from '../components/shared'
import { createJobs } from '../models/creator'
import OffersList from './_OffersList'
import styled from 'styled-components'
import variables from '../styles/variables'
import { CustomSectionTitle } from '../components/shared/index.styled'

export const ParagraphHeader = styled(CustomSectionTitle)`
  margin-top: 11rem;
  margin-bottom: 4.125rem;
  font-weight: 900;
  font-size: 2.5rem;
  @media ${variables.device.laptop} {
    margin-top: 1.5rem;
    margin-bottom: 4rem;
    font-size: 2.125rem;
  }

  @media ${variables.device.mobile} {
    margin-top: 1.5rem;
    margin-bottom: 2.75rem;
    font-size: 1.375rem;
  }
`

const Offers: React.FC = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <CustomSection
      id='open-positions'
      paddingProps='2rem 15rem 11.625rem'
      paddingLaptop='0rem 6rem 7.25rem'
      paddingTabletXL='0rem 9rem 7.25rem'
      paddingTablet='2rem 1.125rem 7.25rem'
      paddingMobileProps='2rem 1.125rem 4rem'
    >
      <ParagraphHeader>job offers</ParagraphHeader>

      <OffersList jobs={createJobs(useStaticQuery(jobsQuery))} />
    </CustomSection>
  )
}

const jobsQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { layout: { eq: "job" }, published: { eq: true } } }

      sort: { frontmatter: { order: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            salary
            hours
          }
          internal {  contentFilePath  }
        }
      }
    }
  }
`

export default Offers
