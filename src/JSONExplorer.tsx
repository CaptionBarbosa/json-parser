import { JSONExplorerProps, JSONObject, JSONValue } from "Types";
import styles from "./JSONExplorer.module.css";
import { useState } from "react";
import { JSONRenderer } from "JSONRenderer";

const JSONExplorer = ({ data, rootPath = "res" }: JSONExplorerProps) => {
  const [currentPath, setCurrentPath] = useState<string | undefined>();

  const getValueByPath = (
    value: JSONValue,
    path: string | undefined,
    defaultResult: string = "undefined"
  ) => {
    if (!path || path.length === 0) {
      return "No path provided";
    }

    let result: JSONValue = value;
    const strippedPath = path.startsWith(`${rootPath}.`)
      ? path.substring(rootPath.length + 1)
      : path;

    const keys = strippedPath.split(/[.[\]]/).filter(Boolean);

    for (const key of keys) {
      if (typeof result !== "object" || !(key in result)) {
        return defaultResult;
      }

      result = (result as JSONObject)[key];
    }

    return JSON.stringify(result, null, "\t") || defaultResult;
  };

  return (
    <div>
      <div className={styles.explorerContainer}>
        <div className={styles.valueLabelContainer}>
          <span className={styles.fieldLabel}>Property</span>
          <input
            type="text"
            placeholder="JSON path"
            value={currentPath}
            className={styles.pathInput}
            onChange={(event) => {
              setCurrentPath(event.target.value);
            }}
          />
        </div>
        <div className={styles.valueLabelContainer}>
          <span className={styles.fieldLabel}>Value</span>
          <div className={styles.valueContainer}>
            {getValueByPath(data, currentPath)}
          </div>
        </div>
        <div className={styles.rendererContainer}>
          <JSONRenderer
            data={data}
            hyperlinkCallback={(path) => setCurrentPath(`${rootPath}.${path}`)} //The rootPath is prepended to the path for display purposes
          />
        </div>
      </div>
    </div>
  );
};

export default JSONExplorer;
