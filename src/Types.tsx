export type JSONValue = string | number | boolean | JSONObject | JSONArray;
export type JSONObject = {
  [key: string]: JSONValue;
};
export type JSONArray = Array<JSONValue>;

export type JSONExplorerProps = {
  data: JSONObject;
  hyperlinkCallback: (path: string) => void;
};

export type ValuePathPair = {
  value: JSONValue;
  path: string;
};
