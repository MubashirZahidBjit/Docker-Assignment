import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const GetFile = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <img
        src={`http://127.0.0.1:8000/file/get/${searchParams.get("filepath")}`}
        alt=""
      />
      <a
        href={`http://127.0.0.1:8000/file/get/${searchParams.get("filepath")}`}
        download
      >
        Get File
      </a>
    </div>
  );
};

export default GetFile;
