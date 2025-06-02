import { useState } from "react";

export default function CommentsSection({ targetId, type }) {
  const [comments, setComments] = useState([
    {
      id: "1",
      userName: "Alice",
      text: "I completely agree with this. Something must be done.",
      timestamp: new Date("2025-06-01T10:45:00Z"),
      likes: 2,
      replies: [
        {
          id: "1-1",
          userName: "Bob",
          text: "Yes! Community pressure could help.",
          timestamp: new Date("2025-06-01T11:00:00Z"),
        },
      ],
    },
    {
      id: "2",
      userName: "Charlie",
      text: "Has anyone tried proposing this to the council?",
      timestamp: new Date("2025-06-02T09:15:00Z"),
      likes: 1,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [replyStates, setReplyStates] = useState({}); // track open reply forms
  const [replyTexts, setReplyTexts] = useState({});   // track reply text per comment

  const handleLike = (id) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleReplyToggle = (id) => {
    setReplyStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReplySubmit = (id) => {
    if (!replyTexts[id]?.trim()) return;

    const newReply = {
      id: `${id}-${Date.now()}`,
      userName: "You",
      text: replyTexts[id],
      timestamp: new Date(),
    };

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id
          ? { ...comment, replies: [newReply, ...comment.replies] }
          : comment
      )
    );

    setReplyTexts((prev) => ({ ...prev, [id]: "" }));
    setReplyStates((prev) => ({ ...prev, [id]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newEntry = {
      id: Date.now().toString(),
      userName: "You",
      text: newComment,
      timestamp: new Date(),
      likes: 0,
      replies: [],
    };

    setComments([newEntry, ...comments]);
    setNewComment("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md  mx-auto">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>

      {/* New comment form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full p-2 border rounded-md"
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 bg-black text-white py-1 px-4 rounded-md hover:bg-gray-800"
        >
          Submit
        </button>
      </form>

      {/* Comment list */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-3 border-b bg-gray-50 rounded-lg">
            <div className="mb-1">
              <p className="text-sm font-semibold text-gray-800">{comment.userName}</p>
              <p className="text-gray-900">{comment.text}</p>
              <p className="text-xs text-gray-400">
                {comment.timestamp.toLocaleString()}
              </p>
            </div>

            {/* Like + Reply buttons */}
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <button
                onClick={() => handleLike(comment.id)}
                className="hover:underline"
              >
                👍 {comment.likes}
              </button>
              <button
                onClick={() => handleReplyToggle(comment.id)}
                className="hover:underline"
              >
                💬 Reply
              </button>
            </div>

            {/* Reply form */}
            {replyStates[comment.id] && (
              <div className="mt-2">
                <textarea
                  value={replyTexts[comment.id] || ""}
                  onChange={(e) =>
                    setReplyTexts((prev) => ({ ...prev, [comment.id]: e.target.value }))
                  }
                  placeholder="Write a reply..."
                  className="w-full p-2 border rounded-md text-sm"
                  rows={2}
                />
                <button
                  onClick={() => handleReplySubmit(comment.id)}
                  className="mt-1 bg-gray-800 text-white py-1 px-3 rounded-md text-sm"
                >
                  Post Reply
                </button>
              </div>
            )}

            {/* Replies */}
            <div className="ml-4 mt-3 space-y-2">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="bg-white p-2 rounded-md border">
                  <p className="text-sm font-semibold">{reply.userName}</p>
                  <p className="text-sm text-gray-800">{reply.text}</p>
                  <p className="text-xs text-gray-400">
                    {reply.timestamp.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
