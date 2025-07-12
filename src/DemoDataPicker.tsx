import { DemoDataPickerProps } from "Types";
import {
  ADVANCED_DEMO_DATA,
  SIMPLE_DEMO_DATA,
  SUPPLIED_DEMO_DATA,
} from "./Constants";
import styles from "./DemoDataPicker.module.css";

const DemoDataPicker = ({ setDataCallback }: DemoDataPickerProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => setDataCallback(SIMPLE_DEMO_DATA)}>
        Use Simple Data
      </button>
      <button onClick={() => setDataCallback(SUPPLIED_DEMO_DATA)}>
        Use Supplied Data
      </button>
      <button onClick={() => setDataCallback(ADVANCED_DEMO_DATA)}>
        Use Advanced Data
      </button>
    </div>
  );
};

export default DemoDataPicker;
