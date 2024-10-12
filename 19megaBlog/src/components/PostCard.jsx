import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = appwriteService.getFilePreview(featuredImage);

  if (!imageUrl) {
    return null;
  }

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-violet-950 rounded-xl p-2 hover:bg-violet-900">
        <div className="w-full justify-center mb-4">
          <img src={imageUrl} alt={title} className="rounded-xl" />
        </div>
        <h2 className="text-xl text-white font-semibold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
