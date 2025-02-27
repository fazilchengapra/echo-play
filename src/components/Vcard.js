import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useEffect, useState } from "react";
import _ from "lodash";

const VideoCard = ({ data }) => {
  console.log(data);
  const [channelData, setChannelData] = useState(null);

  const { channelId, title, channelTitle } = data.snippet;
  const fetchChannel = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyCUtB7MTsNkscmZrD-MuYUVPNYZHLfnGWo`
    );
    const channeldata = await res.json();
    setChannelData(channeldata);
  };

  useEffect(() => {
    fetchChannel();
  }, []);

  const formatViews = (views) => {
    if (views >= 1_000_000_000) {
      return Math.floor(views / 1_000_000_000).toFixed(0) + "B";
    } else if (views >= 1_000_000) {
      return Math.floor(views / 1_000_000).toFixed(0) + "M";
    } else if (views >= 1_000) {
      return Math.floor(views / 1_000).toFixed(0) + "K";
    } else {
      return views.toString();
    }
  };

  const calculateDate = (date) => {
    const diff = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / 3600000
    );
    console.log(diff);
    if (diff >= 8760)
      return (
        Math.floor(diff / 8760) + (diff / 8760 >= 2 ? "years ago" : " year ago")
      );
    if (diff >= 730.001)
      return (
        Math.floor(diff / 730.001) +
        (diff / 730.001 >= 2 ? " months ago" : " month ago")
      );
    if (diff >= 168)
      return (
        Math.floor(diff / 168) + (diff / 168 >= 2 ? " weeks ago" : " week ago")
      );
    if (diff >= 24)
      return (
        Math.floor(diff / 24) + (diff / 24 >= 2 ? " days ago" : " day ago")
      );
    if (diff >= 1) return (Math.floor(diff / 1) + (diff/1 >= 2 ?" hours ago":" hour ago"))
    return Math.floor(diff) + " minutes ago";
  };

  return (
    <Card
      sx={{ maxWidth: 385, p: 0, m: 0, border: "none", boxShadow: "none" }}
      className="!rounded-lg"
    >
      <CardMedia
        sx={{ height: 220, width: 380 }}
        image={data?.snippet?.thumbnails?.medium?.url}
        title="green iguana"
        className="!rounded-lg"
      />
      <CardContent sx={{ padding: 0, margin: 0 }}>
        <Typography component="div" sx={{ display: "flex", mt: 1 }}>
          <Typography component="div">
            <Avatar
              sizes="8"
              src={channelData?.items[0]?.snippet?.thumbnails?.medium?.url}
            />
          </Typography>
          <Typography component="div" className="!ml-2">
            <Typography component="p" className=" !font-thin !text-start">
              {_.truncate(title, { length: 60 })}
            </Typography>
            <Typography
              component="div"
              className="!text-start !mt-2 !text-gray-500"
            >
              <Typography component="p" className="!text-sm">
                {channelTitle}
              </Typography>
              <Typography component="p" className="!text-sm">
                {formatViews(data?.statistics?.viewCount)}
                {" • "}
                {calculateDate(data?.snippet?.publishedAt)}
              </Typography>
            </Typography>
          </Typography>
          <Typography component="div">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
