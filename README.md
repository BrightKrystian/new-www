## Development Environment
### 📋  Required packages
- Node.js
- gatsby-cli (https://www.gatsbyjs.com/docs/tutorial/part-zero/#using-the-gatsby-cli)

### 🚀  Enviroment setup

1. Run `yarn install`
1. Run `yarn develop`
1. The site is running at `http://127.0.0.1:8000` :)

Production build is done by `gatsby build`

## Development rules 👮‍♂

1.  We work on feature branches. The name of the branch should be meaningful and indicate the changes you made.
1.  Once the work is finished, you should create a pull request on github. Target branch should be set to `gatsby`.
1.  When a pull request is merged, it will be deployed automatically to the production website.

## patch-package

We're using https://github.com/gatsbyjs/gatsby/discussions/34613#discussioncomment-2276231
be careful when upgrading gatsby.

## SimpleMdx

There's a custom SimpleMdx type defined that allows
using MDX inside frontmatter fields.

It only handles simple html conversion. Probably not even styling.
See `JobTemplate.tsx` and `links_more_about_us` for an example.
