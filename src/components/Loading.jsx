
function Loading({styles,Instances}) {
    const result = [];
    for (let i = 1; i <= Instances; i++) {
        result.push(i);
    }
  

  return (
    <>
    
    {
       result.map((instance,index) => (
        <div className={styles + " animate-pulse"} key={index}>
      
        </div>
       ))
    }
    </>
  
  )
}

export default Loading
