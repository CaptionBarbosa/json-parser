import { useEffect, useState } from "react";
import { JSONObject, JSONValue } from "./Types";
import { JSONExplorer } from "./JSONExplorer";
import {
  ADVANCED_DEMO_DATA,
  SIMPLE_DEMO_DATA,
  SUPPLIED_DEMO_DATA,
} from "./Constants";
import styles from "./App.module.css";

const App = () => {
  const [currentJSONValue, setCurrentJSONValue] = useState<JSONValue>("");
  const [currentPath, setCurrentPath] = useState<string>("");
  const [currentDemoData, setCurrentDemoData] =
    useState<JSONObject>(ADVANCED_DEMO_DATA);

  useEffect(() => {
    const newValue = getValueByPath(currentDemoData, currentPath);
    setCurrentJSONValue(newValue);
  }, [currentPath, currentDemoData]);

  useEffect(() => {
    setCurrentPath("");
    setCurrentJSONValue("");
  }, [currentDemoData]);

  const getValueByPath = (
    object: JSONValue,
    path: string,
    defaultValue: JSONValue = "undefined"
  ) => {
    let result: JSONValue = object;

    if (result === null || result === undefined || typeof path !== "string") {
      return defaultValue;
    }

    const keys = path.split(/[.[\]]/).filter(Boolean);

    for (const key of keys) {
      if (typeof result !== "object" || !(key in result)) {
        return defaultValue;
      }

      result = (result as JSONObject)[key];
    }

    return result;
  };

  const DemoDataPicker = () => {
    return (
      <div className={styles.flexRowContainer}>
        <button onClick={() => setCurrentDemoData(SIMPLE_DEMO_DATA)}>
          Use Simple Date
        </button>
        <button onClick={() => setCurrentDemoData(SUPPLIED_DEMO_DATA)}>
          Use Supplied Date
        </button>
        <button onClick={() => setCurrentDemoData(ADVANCED_DEMO_DATA)}>
          Use Advanced Date
        </button>
      </div>
    );
  };

  return (
    <div className={styles.contentContainer}>
      <DemoDataPicker />
      <div className={styles.flexRowContainer}>
        <div className={styles.fieldContainer}>
          <span className={styles.fieldLabel}>Property</span>
          <input
            type="text"
            placeholder="JSON path"
            value={currentPath}
            className={styles.resultInput}
            onChange={(event) => {
              setCurrentPath(event.target.value);
            }}
          />
        </div>
        <div className={styles.fieldContainer}>
          <span className={styles.fieldLabel}>Value</span>
          <input
            type="text"
            placeholder="Value"
            value={JSON.stringify(currentJSONValue)}
            className={styles.resultInput}
          />
        </div>
      </div>
      <JSONExplorer
        data={currentDemoData}
        hyperlinkCallback={(path) => setCurrentPath(path)}
      />
    </div>
  );
};

export default App;
