"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

const Posts = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState();

  const fetchPost = async () => {
    const data = await fetch(
      "http://localhost:3000/api/user/clp9y92tm0001ulxs7qt685as",
      {
        method: "Get",
        headers: { authorization: `${session?.user.accessToken}` },
      }
    );
    console.log("data", data);
    const response = await data.json();
    setPosts(response);
  };

  return (
    <div>
      <button onClick={fetchPost}>
        user's posts here:
        {posts && JSON.stringify(posts)}
      </button>
    </div>
  );
};

export default Posts;
