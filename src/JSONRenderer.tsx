import { JSONRendererProps, JSONValue } from "./Types";
import styles from "./JSONRenderer.module.css";

export const JSONRenderer = ({
  data,
  hyperlinkCallback,
  jsonKey,
  currentPath,
}: JSONRendererProps) => {
  const path = formatPath();

  function formatPath() {
    if (!currentPath) {
      return !!jsonKey ? jsonKey : "";
    } else {
      if (jsonKey?.startsWith("[")) {
        return `${currentPath}${jsonKey}`;
      } else {
        return `${currentPath}.${jsonKey}`;
      }
    }
  }

  function getHyperlinkKey() {
    if (!jsonKey || jsonKey.startsWith("[")) {
      return null;
    }
    return (
      <span
        className={styles.indexHyperlink}
        onClick={() => hyperlinkCallback(path)}
      >
        {`${jsonKey}`}
        {": "}
      </span>
    );
  }

  function renderObjectWithFormatting(object: JSONValue, path: string) {
    return (
      <>
        {`{`}
        <div className={styles.tabIndent}>{renderObject(object, path)}</div>
        {`}`}
      </>
    );
  }

  function renderObject(object: JSONValue, path: string) {
    return (
      <>
        {Object.entries(object).map(([key, value]) => {
          return (
            <div key={key}>
              <JSONRenderer
                data={value}
                hyperlinkCallback={hyperlinkCallback}
                currentPath={path}
                jsonKey={key}
              />
              {`,`}
            </div>
          );
        })}
      </>
    );
  }

  function renderArray(array: Array<JSONValue>, path: string) {
    return (
      <>
        {`[`}
        {array.map((value, index) => {
          return (
            <div className={styles.tabIndent}>
              <JSONRenderer
                data={value}
                hyperlinkCallback={hyperlinkCallback}
                currentPath={path}
                jsonKey={`[${index}]`}
              />
              {`,`}
            </div>
          );
        })}
        {`]`}
      </>
    );
  }

  function renderValue() {
    if (typeof data === "object" && data !== null) {
      if (Array.isArray(data)) {
        return renderArray(data, path);
      } else {
        return !!jsonKey
          ? renderObjectWithFormatting(data, path)
          : renderObject(data, path);
      }
    } else {
      return <>{JSON.stringify(data)}</>;
    }
  }

  return (
    <>
      {getHyperlinkKey()}
      {renderValue()}
    </>
  );
};
