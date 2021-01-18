import React from "react";

const Digest = ({ label, tag, total, hasRDI, daily, unit }) => {
  return (
    <div className="digest-item">
      <span className="plex-title bold small">{label}</span>
      <span>Tag: {tag}</span>

      <span>
        Total: {Math.round(total)}
        {" " + unit}
      </span>
      <span>HasRDI: {hasRDI ? "true" : "false"}</span>
      <span>
        Daily: {Math.round(daily)}
        {unit}
      </span>
      {/** TODO add subDigests */}
    </div>
  );
};
export default Digest;
