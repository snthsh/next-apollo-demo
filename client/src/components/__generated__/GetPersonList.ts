/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPersonList
// ====================================================

export interface GetPersonList_persons_persons {
  __typename: "Person";
  id: string;
  name: string | null;
  address: string | null;
  email: string | null;
  phoneNumber: string | null;
}

export interface GetPersonList_persons {
  __typename: "PersonConnection";
  cursor: string;
  hasMore: boolean;
  persons: (GetPersonList_persons_persons | null)[];
}

export interface GetPersonList {
  persons: GetPersonList_persons;
}

export interface GetPersonListVariables {
  after?: string | null;
}
