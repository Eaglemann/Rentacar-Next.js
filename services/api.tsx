import request, { gql } from "graphql-request";

export const ExportCarData = async () => {
  const query = gql`
    query CarList {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seats
        carType
        carBrand
        image {
          url
        }
      }
    }
  `;
  // Change this with the environment link from your account
  const result = await request(
    "https://eu-west-2.cdn.hygraph.com/content/cm7z6hquz00oi07wfpdww0lwk/master",
    query
  );
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query GetStoreLocations {
      storesLocations {
        storeLocation
      }
    }
  `;

  const result = await request(
    "https://eu-west-2.cdn.hygraph.com/content/cm7z6hquz00oi07wfpdww0lwk/master",
    query
  );
  return result;
};
