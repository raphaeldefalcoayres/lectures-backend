import * as Yup from 'yup';
import moment from 'moment';

class LectureController {
  async store(req, res) {
    const { data } = req.body;

    const start_hour = 9;
    const interval_hour = 12;
    const end_hour = 17;

    const tracks = [];

    let time = start_hour * 60;

    // function convert minutes in hours with format
    const formatTime = minutes => {
      const h = minutes / 60;
      const m = minutes % 60;
      return moment
        .utc()
        .hours(h)
        .minutes(m)
        .format('hh:mmA');
    };

    // function convert minutes in hours rounding to floor
    const getHour = minutes => {
      return Math.floor(minutes / 60);
    };

    // function get time in string of example: 20min or lightning
    const getTimeInString = string => {
      let newTime = string.split(/(\d+|lightning)/);
      newTime = newTime[1].replace('lightning', 5);
      return parseInt(newTime, 10);
    };

    // Validations check if have data and array have strings min 10 characters
    const schema = Yup.object().shape({
      data: Yup.array()
        .of(
          Yup.string()
            .required()
            .min(10)
        )
        .required(),
    });

    // return if validation error
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    let trackId = 0;

    // set the initial object
    tracks[trackId] = { title: `Track ${trackId + 1}`, data: [] };

    // list the lectures posted
    data.forEach((item, index) => {
      // only after zero add time for next lecture
      if (index > 0) {
        time += getTimeInString(data[index - 1]);
      }

      // if time equal interval hour then add 60mins and insert step lunch
      if (getHour(time) === interval_hour) {
        time += 60;
        tracks[trackId].data.push('12:00PM Lunch');
      }

      // if time is longer than end hour then insert step networking event and create a new track
      if (getHour(time) > end_hour - 1) {
        tracks[trackId].data.push('05:00PM Networking Event');
        trackId += 1;
        tracks[trackId] = { title: `Track ${trackId + 1}`, data: [] };
        time = start_hour * 60;
      }

      // add lecture in track with time and description
      tracks[trackId].data.push(`${formatTime(time)} ${item}`);

      // if end list of lectures then insert step networking event
      if (data.length === index + 1 && getHour(time) === end_hour - 1) {
        tracks[trackId].data.push('05:00PM Networking Event');
      }
    });

    return res.json({ data: tracks });
  }
}

export default new LectureController();
