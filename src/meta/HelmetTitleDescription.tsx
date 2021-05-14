import React from 'react'
import { Helmet } from 'react-helmet'
import { siteTitle } from './site-title'
import { descriptionOrDefault } from './meta-description'

interface HelmetTitleDescriptionProps {
  title: string
  description?: string
}

export const HelmetTitleDescription: React.FC<HelmetTitleDescriptionProps> = ({title, description}) => {
  return (
    // please note that Helmet does not support nesting higher order components like so
    // <Helmet><MetaTitle title={whatever}></Helmet>
    <Helmet defaultTitle={siteTitle}>
      <title>{title} | Bright Inventions</title>
      {title && <meta property='og:title' content={title} />}
      <meta name='description' content={descriptionOrDefault(description)} />
      <meta property='og:description' content={descriptionOrDefault(description)} />
    </Helmet>
  )
}
