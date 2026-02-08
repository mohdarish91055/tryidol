import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import {  FixedSizeList } from "react-window";

const ExcelViewer = ({ file }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!file) return;

    (async () => {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      const data = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        defval: "",
      });

      setRows(data);
    })();
  }, [file]);

  if (rows.length === 0) {
    return <div className="no-data">No data found</div>;
  }

  const Row = ({ index, style }) => {
    const row = rows[index];
    if (!row) return null;

    return (
      <div style={style} className="excel-row">
        {row.join(" | ")}
      </div>
    );
  };

  return (
    <div className="viewer-container">
      <div style={{ height: "400px", width: "100%", border: "1px solid #ddd", borderRadius: "4px" }}>
        <FixedSizeList
            height={400}
            itemCount={rows.length}
            itemSize={35}
            width={800}
        >
            {Row}
        </FixedSizeList>
      </div>
    </div>
  );
};

export default ExcelViewer;
