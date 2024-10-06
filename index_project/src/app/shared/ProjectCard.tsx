import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  title: string;
  img: string;
  price?: string;
  description: string;
  className?: string;
}

export const ProjectCard: React.FC<Props> = ({
  className,
  id,
  title,
  img,
  price,
  description,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="p-2 text-md">
          <h2>{title}</h2>
        </div>
        <div className="">
          <img src={img} alt="Картинка коффе" className="size-[300px]" />
        </div>
        <div className="p-1">
          <p>{price}</p>
          <span>{description}</span>
        </div>
      </Link>
    </div>
  );
};
