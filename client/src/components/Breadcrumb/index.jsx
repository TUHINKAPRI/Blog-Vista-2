import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";

export function Breadcrumbs() {
  const path = useLocation();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to="/" className="text-gray">
            Home
          </Link>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator>/</BreadcrumbSeparator> */}

        {path?.pathname
          ?.split("/")
          .slice(1)
          ?.map((ele, index) => (
            <>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <Link to={`/${ele}`} className="text-gray">
                  {ele}
                </Link>
              </BreadcrumbItem>
            </>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
