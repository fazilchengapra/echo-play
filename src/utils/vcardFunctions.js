export const formatCounts = (views) => {
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
    const now = new Date();
    const past = new Date(date);
    const diffMs = now - past; // Difference in milliseconds
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30.44); // Approximate month length
    const diffYears = Math.floor(diffDays / 365.25); // Considering leap years
  
    if (diffYears >= 1) return `${diffYears} ${diffYears > 1 ? "years" : "year"} ago`;
    if (diffMonths >= 1) return `${diffMonths} ${diffMonths > 1 ? "months" : "month"} ago`;
    if (diffWeeks >= 1) return `${diffWeeks} ${diffWeeks > 1 ? "weeks" : "week"} ago`;
    if (diffDays >= 1) return `${diffDays} ${diffDays > 1 ? "days" : "day"} ago`;
    if (diffHours >= 1) return `${diffHours} ${diffHours > 1 ? "hours" : "hour"} ago`;
    if (diffMinutes >= 1) return `${diffMinutes} ${diffMinutes > 1 ? "minutes" : "minute"} ago`;
    return "Just now";
  };
  