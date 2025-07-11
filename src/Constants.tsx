import { JSONObject } from "./Types";

export const SIMPLE_DEMO_DATA: JSONObject = {
  date: "2021-10-27T07:49:14.896Z",
  hasError: false,
  ids: [1, 2, 3, 4],
};

export const SUPPLIED_DEMO_DATA: JSONObject = {
  date: "2021-10-27T07:49:14.896Z",
  hasError: false,
  fields: [
    {
      id: "4c212130",
      prop: "iban",
      value: "DE81200505501265402568",
      hasError: false,
    },
  ],
};

export const ADVANCED_DEMO_DATA: JSONObject = {
  date: "2021-10-27T07:49:14.896Z",
  hasError: false,
  fields: [
    {
      id: "4c212130",
      prop: "iban",
      value: "DE81200505501265402568",
      hasError: false,
    },
    {
      id: "4c212130",
      prop: "iban2",
      value: "DE81200505501265402568",
      hasError: true,
    },
  ],
  mixedArray: [
    "string",
    {
      collection: 1,
      UUIDArray: [
        {
          uuid: "42c0eb1d-d9be-4f59-ac07-98f8bee89a6c",
        },
        {
          uuid: "2332b473-18bf-42b1-8459-86c828a397f3",
        },
      ],
    },
    ["This is a mixed array", 1, { value: "test" }, [1, 2, 3]],
    4,
  ],
};
