import request, { gql } from "graphql-request";

// Change this with the environment link from your account
const MASTER_HYGRAPH_URL =
  "https://eu-west-2.cdn.hygraph.com/content/cm7z6hquz00oi07wfpdww0lwk/master";

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
  const result = await request(MASTER_HYGRAPH_URL, query);
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

  const result = await request(MASTER_HYGRAPH_URL, query);
  return result;
};

export const createBooking = async (formValue: {
  pickupLocation: string;
  pickupDate: string;
  returnDate: string;
  pickupTime: string;
  returnTime: string;
  phoneNumber: string;
  username: string;
  carList: string;
}) => {
  const mutationQuery =
    gql`
    mutation CreateBooking {
      createBooking(
        data: {
          phoneNumber: "` +
    formValue.phoneNumber +
    `"
          pickupDate: "` +
    formValue.pickupDate +
    `"
          pickupTime: "` +
    formValue.pickupTime +
    `"
          pickupLocation: "` +
    formValue.pickupLocation +
    `"
          returnDate: "` +
    formValue.returnDate +
    `"
          returnTime: "` +
    formValue.returnTime +
    `"
          username: "` +
    formValue.username +
    `"
          carList: { connect: { id: "` +
    formValue.carList +
    `" } }
        }
      ) {
        id
      }
    }
  `;
  const result = await request(MASTER_HYGRAPH_URL, mutationQuery);
  return result;
};
