export type JSONValue = string | number | boolean | JSONObject | JSONArray;
export type JSONObject = {
  [key: string]: JSONValue;
};
export type JSONArray = Array<JSONValue>;

export type JSONExplorerProps = {
  data: JSONObject;
  rootPath?: string;
}

export type JSONRendererProps = {
  data: JSONValue;
  hyperlinkCallback: (path: string) => void;
  currentPath?: string;
  jsonKey?: string;
};

export type DemoDataPickerProps = {
  setDataCallback: (data: JSONObject) => void;
}
