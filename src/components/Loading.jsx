
function Loading({styles,Instances}) {
    const result = [];
    for (let i = 1; i <= Instances; i++) {
        result.push(i);
    }
  

  return (
    <>
    
    {
       result.map((instance) => (
        <div className={styles + " animate-pulse"}>
      
        </div>
       ))
    }
    </>
  
  )
}

export default Loading
