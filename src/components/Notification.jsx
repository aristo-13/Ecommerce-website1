import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';


function Notification({message,isSuccess,show}) {


  return (
    <div className='w-[200px] border absolute bg-white flex flex-col p-2  top-4 right-[-100%] duration-300' style={{right: show? '4px': '-100%'}}>
        <div className='flex gap-2 items-center justify-center'>
            {isSuccess? <CheckCircleIcon className='text-[green]' fontSize='small'/> : <DoNotDisturbAltIcon className='text-red-500' fontSize='small'/>}
            <p className='text-[0.8rem]'>{message}</p>
        </div>
    </div>
  )
}

export default Notification
