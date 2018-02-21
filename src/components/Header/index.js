import React from 'react'
import Link from 'gatsby-link'

import StyledLink from './styles/StyledLink'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
         Dillon Lundell.
        </Link>
      </h1>
      <StyledLink>
      <Link
          to="/portfolio-page"
        >
         PORTFOLIO
        </Link>
        </StyledLink>
        <Link
          to="/blog-page"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginLeft: '20px'
          }}
        >
         BLOG
        </Link>
        <Link
          to="/design-page"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginLeft: '20px'
          }}
        >
         DESIGN
        </Link>
    </div>
  </div>
)

export default Header
