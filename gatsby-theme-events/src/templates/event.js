import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Event from '../components/event';

export const query = graphql`
  query ($eventId: String!) {
    event(id: {eq: $eventId }) {
      name
      url
      startDate(formatString: "MMMM D, YYYY")
      endDate(formatString: "MMMM D, YYYY")
      location
      slug
    }
  }
`;

const EventTemplate = ({ data: { event } }) => (
  <Layout>
    <Event {...event} />
  </Layout>
)

export default EventTemplate;
