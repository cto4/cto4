"use client";
import { DiscussionEmbed, CommentCount } from "disqus-react";

const Comments = ({ postId, title }) => {
  return (
    <DiscussionEmbed
      shortname="hima-pro"
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
      shortname="hima-pro"
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
