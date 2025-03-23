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
import { calculateDate, formatCounts } from "../utils/vcardFunctions";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  const API = process.env.REACT_APP_API_KEY;
  const [channelData, setChannelData] = useState(null);

  const { channelId, title, channelTitle } = data.snippet;
  const fetchChannel = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API}`
    );
    const channeldata = await res.json();
    setChannelData(channeldata);
  };

  useEffect(() => {
    fetchChannel();
  }, []);



  return (
    <Link to={`/watch?v=${data.id}`} state={{ videoData: data }}>
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
                {formatCounts(data?.statistics?.viewCount)}
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
    </Link>
  );
};

export default VideoCard;
