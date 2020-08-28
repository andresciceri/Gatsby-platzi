import React from 'react';
import { graphql } from 'gatsby';
import { Jumbo, SEO, Products } from '../components';


export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          currency
          unit_amount
          product {
            id
            name
            metadata {
              img
              description
              wear
            }
          }
        }
      }
    }
  }
`;

// const Button = styled.button`
//   width: 20px;
//   background-color: #98ca3f;
//   border: none;
//   border-radius: 10px;
//   color: ${props => props.color};
//   $:hover {
//     transform: scale(1.4);
//   }
// `;

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      {/* <Button color="white">Comprar</Button> */}
      <Products products={data.allStripePrice.edges}/>
    </>
  );
};

export default IndexPage;
