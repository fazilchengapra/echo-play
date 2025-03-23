import React, { useEffect, useRef, useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { Avatar, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { formatCounts, calculateDate } from "../utils/vcardFunctions";
import ClipLoader from "react-spinners/ClipLoader";

const Comments = ({ id = "", parentId = "" }) => {
  const API = process.env.REACT_APP_API_KEY;
  const [comments, setComments] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [loading, setLoading] = useState(false);
  const lastElementRef = useRef(null);
  const [openReply, setOpenReply] = useState(null);
  const [reply, setReply] = useState([]);

  const fetchComments = async () => {
    if (loading) return; // Prevent duplicate calls

    setLoading(true);
    try {
      const res = await fetch(
        parentId
          ? `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${API}&order=relevance&maxResults=10&parentId=${parentId}&pageToken=${pageToken}`
          : `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${id}&key=${API}&order=relevance&maxResults=10&pageToken=${pageToken}`
      );

      const json = await res.json();
      console.log(json.items);

      if (parentId) {
        setReply(json.items);
        return;
      }
      setComments((prev) => [...prev, ...json.items]); // Properly merge new comments
      setPageToken(json.nextPageToken || "");
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, [id, parentId]); // Run once on mount

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && pageToken) {
          fetchComments();
        }
      }
      // { threshold: 1.0 }
    );

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => observer.disconnect();
  }, [pageToken]); // Runs when `pageToken` changes

  return (
    <div>
      <div className="h-full mt-10 text-center min-w-sm max-w-xl">
        {(openReply ? reply : comments).map((e, index) => (
          <div key={e.etag + index} className="flex gap-3 pb-3">
            <div className="1/3">
              <Avatar
                alt="profile"
                className="!select-none"
                src={e.snippet.topLevelComment.snippet.authorProfileImageUrl}
              />
            </div>
            <div className="2/3 text-start">
              <div className="font-semibold text-sm">
                <span>
                  {e.snippet.topLevelComment.snippet.authorDisplayName}
                </span>{" "}
                <span className="font-normal text-gray-700">
                  {calculateDate(e.snippet.topLevelComment.snippet.publishedAt)}
                </span>
              </div>
              <div
                className="mt-1"
                dangerouslySetInnerHTML={{
                  __html: e.snippet.topLevelComment.snippet.textDisplay.replace(
                    /\n/g,
                    "<br />"
                  ),
                }}
              ></div>
              <div className="flex mt-2">
                <div className="text-center flex gap-1">
                  <Button
                    sx={{ p: 0, m: 0 }}
                    className="!text-gray-900"
                    startIcon={<ThumbUpOffAltIcon className="text-gray-900" />}
                  >
                    {formatCounts(e.snippet.topLevelComment.snippet.likeCount)}
                  </Button>
                </div>

                <Button
                  sx={{ p: 0, m: 0 }}
                  startIcon={<ThumbDownOffAltIcon className="text-gray-900" />}
                />
                <div className="text-sm font-semibold  text-center">
                  <Button
                    sx={{ p: 0, m: 0 }}
                    className="!text-gray-900 !text-center !font-normal !capitalize"
                  >
                    Reply
                  </Button>
                </div>
              </div>
              {e.snippet.totalReplyCount > 0 && (
                <div className="mt-2">
                  <Button
                    sx={{ textTransform: "lowercase" }}
                    startIcon={
                      openReply === e.id ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )
                    }
                    className="!rounded-xl"
                    onClick={() =>
                      setOpenReply(openReply === e.id ? null : e.id)
                    }
                  >
                    {formatCounts(e.snippet.totalReplyCount)} Replies
                  </Button>
                  <div className="ml-5">
                    {openReply === e.id && <Comments id={id} parentId={e.id} />}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Loader */}
        {loading && <ClipLoader size={35} color="gray" />}

        {/* The observer watches this div */}
        <div ref={lastElementRef} className="h-8"></div>
      </div>
    </div>
  );
};

export default Comments;
