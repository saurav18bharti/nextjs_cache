"use client";

import React from "react";

async function revalidate() {
  await fetch("/api/ondemandrevalidation", {
    method: "POST",
  });
}
export const Revalidate = () => {
  return <button
  onClick={revalidate}
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
  Revalidate
</button>;
};


const handleRefresh = () => {
  window.location.reload();
};

export const Refresh=()=>{
  return   <button
  onClick={handleRefresh}
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
  Refresh
</button>
}
