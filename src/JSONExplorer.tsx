import { JSONExplorerProps, JSONObject, JSONValue } from "./Types";
import styles from "./JSONExplorer.module.css";

export const JSONExplorer = ({
  data,
  hyperlinkCallback,
}: JSONExplorerProps) => {
  const renderObject = (object: JSONObject, path: string) => {
    return (
      <span>
        {`{`}
        {Object.keys(object).map((key) => {
          const currentValue: JSONValue = object[key];
          return (
            <div className={styles.tabIndent}>
              <span
                className={styles.indexHyperlink}
                onClick={() => hyperlinkCallback(`${path}.${key}`)}
              >
                {key}
              </span>
              {`: `}
              {renderValue(currentValue, `${path}.${key}`)},
            </div>
          );
        })}
        {`}`}
      </span>
    );
  };

  const renderArray = (array: Array<JSONValue>, path: string) => {
    return (
      <span>
        [
        {array.map((value, index) => {
          return (
            <div key={`${path}[${index}]`} className={styles.tabIndent}>
              {renderValue(value, `${path}[${index}]`)}
              {index !== array.length - 1 && `,`}
            </div>
          );
        })}
        ]
      </span>
    );
  };

  const renderValue = (value: JSONValue, path: string) => {
    if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        return renderArray(value, path);
      } else {
        return renderObject(value, `${path}`);
      }
    } else {
      return `${value}`;
    }
  };

  return (
    <>
      <div className={styles.responseContainer}>{renderObject(data, "")}</div>
    </>
  );
};
