import { useState } from "react";
import JSONExplorer from "JSONExplorer";
import DemoDataPicker from "DemoDataPicker";
import { JSONObject } from "./Types";
import { SIMPLE_DEMO_DATA } from "./Constants";
import styles from "./App.module.css";

const App = () => {
  const [currentDemoData, setCurrentDemoData] =
    useState<JSONObject>(SIMPLE_DEMO_DATA);

  return (
    <div className={styles.contentContainer}>
      <DemoDataPicker setDataCallback={setCurrentDemoData} />
      <JSONExplorer data={currentDemoData} rootPath="res" />
    </div>
  );
};

export default App;
