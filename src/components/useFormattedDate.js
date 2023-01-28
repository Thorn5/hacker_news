import { useEffect, useState } from "react";

const useFormattedDate = (datetime) => {

  const [formattedDate, setFormattedDate] = useState(Date);

  useEffect(() => {
    const date = new Date(datetime);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(date);
    setFormattedDate(formattedDate);
  }, [datetime]);

  return formattedDate;
}

export default useFormattedDate;