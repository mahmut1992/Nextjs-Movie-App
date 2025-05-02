"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ data }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${data.id}`)}
      className="min-w-[470px] relative cursor-pointer  imgContainer"
    >
      <Image
        style={{ objectFit: "cover" }}
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          data?.backdrop_path || data?.poster_path
        }`}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity ">
        <div className="text-2xl font-bold">{data?.title}</div>
        <div>
          {data?.release_date} - {data?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
