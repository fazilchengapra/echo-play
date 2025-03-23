import React, { useEffect, useState } from "react";
import turncate from "lodash/truncate";

const Description = (data) => {
  const [more, setMore] = useState(false);
  console.log(data.data);
  return (
    <div>
      <div className="p-5 bg-gray-200 mt-2 rounded-md">
        {more ? (
          <div
            dangerouslySetInnerHTML={{
              __html: data.data.snippet.description.replace(/\n/g, "<br />"),
            }}
          />
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: turncate(data.data.snippet.description, { length: 20 }).replace(
                /\n/g,
                "<br />"
              ),
            }}
          />
        )}
        {more !== true && (
          <button onClick={() => setMore(true)} className="font-semibold">
            Read more...
          </button>
        )}
      </div>
      <div className="text-xl font-semibold mt-3">{data?.data?.statistics?.commentCount} Comments</div>
    </div>
  );
};

export default Description;
