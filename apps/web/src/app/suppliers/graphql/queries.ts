import { gql } from '@apollo/client';

export const GET_SUPPLIERS = gql`
  query GetSuppliers($input: GetSuppliersInput!) {
    suppliers(input: $input) {
      id
      name
      logo
      state
      source
      pricePerKwh
      minKwh
      totalClients
      averageRating
    }
  }
`;
