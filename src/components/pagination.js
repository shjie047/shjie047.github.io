import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Paginnation = ({
  pages,
  page_no,
  page_size
}) => (
  <Root>
    Page {page_no} of {pages}
  </Root>
)

export default Paginnation

const Root = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9eabb3;
  font-size: 1.3rem;
`

Paginnation.PropsType = {
  // 总页码
  pages: PropTypes.number.required,
  page_no: PropTypes.number,
  page_size: PropTypes.number
}
