const Record = ({name, time}) => {

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100; 

 return (
  <div className='record'>
    <div className='recordName'>{name}</div>
    <div className='recordTime'>{minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:
      {milliseconds.toString().padStart(2, "0")}</div>
  </div>
 )
}

export default Record;