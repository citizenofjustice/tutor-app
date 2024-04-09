import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

export interface Path {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  pathElements: Path[];
}

const BreadcrumbPath: React.FC<BreadcrumbProps> = ({ pathElements }) => {
  return (
    <Breadcrumb className="mb-3">
      <BreadcrumbList className="text-text-800 font-medium">
        {pathElements &&
          pathElements.map((element, index) => (
            <Fragment key={index}>
              <BreadcrumbItem className="last:underline last:underline-offset-4">
                <BreadcrumbLink asChild>
                  <a href={element.url}>{element.name}</a>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathElements[index + 1] ? <BreadcrumbSeparator /> : ""}
            </Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbPath;
