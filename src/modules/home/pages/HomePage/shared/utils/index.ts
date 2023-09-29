
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInWeeks } from 'date-fns';

export function getHashtags(text: string) {
    
    const regex = /#\w+/g;
    
    
    const hashtags = text.match(regex);
    
    
    return hashtags ? hashtags : [];
  }
  
  export function getTextWithoutHashtags(text: string) {
  
  const regex = /#\w+/g;

  
  const textWithoutHashtags = text.replace(regex, '');

  
  return textWithoutHashtags;
}



export function getTimeSincePublication(timestamp: number): string {
  const currentDate = new Date();
  const postDate = new Date(timestamp * 1000);

  const hoursAgo = differenceInHours(currentDate, postDate);
  const minutesAgo = differenceInMinutes(currentDate, postDate);
  const secondsAgo = differenceInSeconds(currentDate, postDate);
  const daysAgo = differenceInDays(currentDate, postDate);
  const weeksAgo = differenceInWeeks(currentDate, postDate);
  const monthsAgo = differenceInMonths(currentDate, postDate);

  if (monthsAgo >= 1) {
    return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
  } else if (weeksAgo >= 1) {
    return `${weeksAgo} ${weeksAgo === 1 ? 'week' : 'weeks'} ago`;
  } else if (daysAgo >= 1) {
    return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  } else if (hoursAgo >= 1) {
    return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
  } else if (minutesAgo >= 1) {
    return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    return `${secondsAgo} ${secondsAgo === 1 ? 'second' : 'seconds'} ago`;
  }
}
