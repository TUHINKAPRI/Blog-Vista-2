import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export function Bread({ breadcrumb }) {
  return (
    <Breadcrumb
      aria-label="Default breadcrumb example"
      className="text-deepDarkBlue"
    >
      {breadcrumb?.map((ele, index) => (
        <Breadcrumb.Item key={index} as="div">
          <Link to={ele?.path} className="text-gray">
            {ele?.name}{" "}
          </Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
