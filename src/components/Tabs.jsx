"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Tabs = () => {
  const searcParams = useSearchParams();
  const genre = searcParams.get("genre");

  const tabs = [
    {
      name: "En Popülerler",
      url: "popular",
    },
    {
      name: "En Günceller",
      url: "latest",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7 ">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre
              ? "underline underline-offset-8 text-amber-600"
              : ""
          } `}
          href={`/?genre=${tab.url}`}
        >
          {" "}
          {tab.name}{" "}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
