/*
  Component to displaying JSON data.
*/

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import JSONPretty from 'react-json-pretty'

function JsonDisplay (props) {
  if (!props.jsonData) return null

  return (
    <>
      <br />
      <Row>
        <Col xs={1} lg={2} />
        <Col xs={10} lg={8}>
          <p><b>{props.header}</b></p>
          <JSONPretty
            data={props.jsonData}
          />
        </Col>
        <Col xs={1} lg={2} />
      </Row>
      <br />
    </>
  )
}

export default JsonDisplay
