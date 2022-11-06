import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

const timeAgo = new TimeAgo('en-US')

export function timeAgoFormat(date: string | Date | undefined) {
  date = date ? new Date(date) : new Date()

  return timeAgo.format(date)
}
