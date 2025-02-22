import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import _ from 'lodash'

const VideoCard = ({ data }) => {
  console.log(data);

  return (
    <Card
      sx={{ maxWidth: 385, p: 0, m: 0, border: "none", boxShadow: "none" }}
      className="!rounded-lg"
    >
      <CardMedia
        sx={{ height: 220, width: 380 }}
        image={data?.snippet?.thumbnails?.standard?.url}
        title="green iguana"
        className="!rounded-lg"
      />
      <CardContent sx={{ padding: 0, margin: 0 }}>
        <Typography component="div" sx={{ display: "flex", mt: 1 }}>
          <Typography component="div">
            <Avatar
              sizes="8"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
            />
          </Typography>
          <Typography component="div" className="!ml-2">
            <Typography component="p" className=" !font-thin !text-start">
              {_.truncate(data?.snippet?.title, {length:60})}
            </Typography>
            <Typography
              component="div"
              className="!text-start !mt-2 !text-gray-500"
            >
              <Typography component="p" className="!text-sm">
                {data?.snippet?.channelTitle}
              </Typography>
              <Typography component="p" className="!text-sm">
                32K views 7 days ago
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
