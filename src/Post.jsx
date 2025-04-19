import { Heart, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

function Post({ post, handleLike, handleComment }) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [showComments, setshowComments] = useState(false);
  return (
    <div className="flex flex-col bg-white border border-gray-200 w-full h-full">
      <div className="border-b border-gray-200 pb-2 flex-1 flex flex-col">
        <div className="flex items-center p-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-0.5">
            <div className="bg-white p-0.5 rounded-full w-full h-full">
              <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="ml-2 flex-1">
            <span className="font-medium text-sm">{post.username}</span>
            <div className="text-xs text-gray-500">{post.location}</div>
          </div>
          <div className="text-lg">...</div>
        </div>

        <div className="relative flex-1">
          <img
            src={post.imageSrc}
            alt="Post"
            className="w-96 h-96 object-cover"
          />
        </div>

        <div className="flex justify-between p-2">
          <div className="flex space-x-4">
            <button
              onClick={() => {
                handleLike(post.id);
                console.log("clicked");
              }}
            >
              {post.liked ? (
                <Heart className="w-6 h-6 fill-red-500 text-red-500" />
              ) : (
                <Heart className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={() => setShowCommentBox(!showCommentBox)}
              className="w-6 h-6"
            >
              {" "}
              <MessageCircle />
            </button>

            <Send className="w-6 h-6" />
          </div>
        </div>
        {showCommentBox && (
          <input
            type="text"
            placeholder="Add a comment..."
            className="border border-gray-300 rounded p-1 w-full"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && comment.trim()) {
                handleComment(post.id, comment.trim());
                setComment("");
                setShowCommentBox(false);
              }
            }}
          />
        )}
        {/* 
        <button
          onClick={() => setshowComments(!showComments)}
          className="text-sm text-blue-500 px-2 mt-1 text-left"
        >
          {showComments ? "Hide comments" : "Show comments"}
        </button> */}

        {post.comments.length > 0 ? (
          <button
            onClick={() => setshowComments(!showComments)}
            className="text-sm text-blue-500 px-2 mt-1 text-left"
          >
            {showComments ? "Hide comments" : "Show comments"}
          </button>
        ) : (
          <>
            <div className="text-sm text-gray-500 px-2 mt-1 text-left">
              No comments yet
            </div>
          </>
        )}

        {showComments && (
          <div className="p-2">
            {post.comments.map((comment, index) => (
              <div key={index} className="text-sm text-gray-700">
                {comment}
              </div>
            ))}
          </div>
        )}

        <div className="px-2 mt-1">
          <span className="text-sm">
            <span className="font-medium">{post.username}</span> {post.caption}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
