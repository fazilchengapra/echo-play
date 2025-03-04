export const formatViews = (views) => {
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

  export const calculateDate = (date) => {
    const diff = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / 3600000
    );
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