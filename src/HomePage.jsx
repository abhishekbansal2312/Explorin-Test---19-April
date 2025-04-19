import { useState } from "react";
import { Heart, Search, Home, PlusSquare } from "lucide-react";
import { posts } from "./lib/posts";
import Post from "./Post";

export default function InstagramUI() {
  const [allPosts, setAllPosts] = useState(posts);

  const handleLike = (id) => {
    setAllPosts(() => {
      return allPosts.map((post) => {
        if (post.id === id) {
          return { ...post, liked: !post.liked };
        }
        console.log("hello");

        return post;
      });
    });
  };

  const handleComment = (id, comment) => {
    setAllPosts(() => {
      return allPosts.map((post) => {
        if (post.id === id) {
          return { ...post, comments: [...post.comments, comment] };
        }
        return post;
      });
    });
  };

  return (
    <div className="flex flex-col overflow-hidden">
      <header className="flex justify-between items-center p-2 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-center w-full">
          <h1 className="font-serif text-2xl font-medium">Instagram</h1>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 gap-10 m-6 md:grid-cols-3">
        {allPosts.map((post) => (
          <Post
            key={post.id}
            post={post}
            setAllPosts={setAllPosts}
            handleLike={handleLike}
            handleComment={handleComment}
          />
        ))}
      </main>

      <footer className="flex justify-between p-3 border-t border-gray-200 bg-white">
        <Home className="w-6 h-6" />

        <PlusSquare className="w-6 h-6" />

        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
      </footer>
    </div>
  );
}
