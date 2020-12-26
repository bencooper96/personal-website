import React from "react";

import Image from "./projectImage";
import Link from "next/link";

const Project = (props) => {
  return (
    <Link href="/projects/[slug]" as={`/projects/${props.projectData.slug}`}>
      <div>
        <Image projectData={props.projectData} />
      </div>
    </Link>
  );
};

export { Project };
