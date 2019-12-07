import moment from 'moment';

class LectureController {
  async store(req, res) {
    const { data } = req.body;

    const tracks = [];

    const start_hour = 9;
    const interval_hour = 12;
    const end_hour = 17;

    let time = start_hour * 60;

    const formatTime = minutes => {
      const h = minutes / 60 || 0;
      const m = minutes % 60 || 0;
      return moment
        .utc()
        .hours(h)
        .minutes(m)
        .format('hh:mmA');
    };

    const getHour = minutes => {
      return Math.round(minutes / 60);
    };

    const getTimeInString = string => {
      let newTime = string.split(/(\d+|lightning)/);
      newTime = newTime[1].replace('lightning', 5);
      return parseInt(newTime, 10);
    };

    if (data) {
      let trackId = 0;

      tracks[trackId] = { title: `Track ${trackId + 1}`, data: [] };

      data.forEach((item, index) => {
        if (index > 0) {
          time += getTimeInString(data[index - 1]);
        }

        if (getHour(time) === interval_hour) {
          time += 60;
          tracks[trackId].data.push('12:00PM Lunch');
        }

        if (getHour(time) >= end_hour) {
          tracks[trackId].data.push('05:00PM Networking Event');
          trackId += 1;
          tracks[trackId] = { title: `Track ${trackId + 1}`, data: [] };
          time = start_hour * 60;
        }

        tracks[trackId].data.push(`${formatTime(time)} ${item}`);
      });
    }

    return res.json(tracks);
  }
}

export default new LectureController();
