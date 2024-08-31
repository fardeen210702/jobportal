import React, { useState } from "react";
import { isNullOrEmpty } from "../utility/Utility";

function JobDescription({ description }) {
  const [fullScreen, setFullScreen] = useState(false);
  let formattedDescription = [];
  formattedDescription = description.split("\n");

  return (
    <div className=" text-justify p-[3%]">
      {
        <div>
          <h1 className="font-semibold  mb-2 -ml-6">Job Description :</h1>
          <ul className="text-sm">
            {!fullScreen && formattedDescription.length <= 3 ? (
              renderFormattedDescription(formattedDescription)
            ) : (
              <>
                {
                  <ul>
                    {
                      <div className={`${fullScreen ? "hidden" : "visible"}`}>
                        <li>{formattedDescription[0]}</li>
                        <li>{formattedDescription[1]}</li>
                        <li>{formattedDescription[2]}</li>
                      </div>
                    }
                  </ul>
                }

                {fullScreen && renderFormattedDescription(formattedDescription)}

                {/* Button to show or hide full description  */}
                <>
                  <button
                    onClick={() => setFullScreen(!fullScreen)}
                    className="text-gray-500 hover:text-gray-600"
                  >
                    {fullScreen ? ` ...hide` : `...Show more`}
                  </button>
                </>
              </>
            )}
          </ul>
        </div>
      }
    </div>
  );
}

function renderFormattedDescription(formattedDescription) {
  return (
    <>
      {!isNullOrEmpty(formattedDescription) &&
        formattedDescription.map((desc, index) => {
          return (
            <ul key={index}>
              <li className={`my-2 text-sm`}>
                {desc}
              </li>
            </ul>
          );
        })}
    </>
  );
}

export default JobDescription;
