"use client";
import { DiscussionEmbed, CommentCount } from "disqus-react";

const Comments = ({ postId, title }) => {
  return (
    <DiscussionEmbed
      shortname="codjix"
      config={{
        url: globalThis?.location?.href,
        identifier: postId,
        title: title,
      }}
    />
  );
};

export const CommentsCount = ({ postId, title }) => {
  return (
    <CommentCount
      shortname="codjix"
      config={{
        url: globalThis?.location?.href,
        identifier: postId,
        title: title,
      }}
    >
      Comments
    </CommentCount>
  );
};

export default Comments;
