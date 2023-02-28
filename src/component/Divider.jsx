import React from 'react'

const Divider = ({text1, text2}) => {
  return (
    <div>
      <section>
        <div className="text-center mt-[30px]">
          <h1 className="text-[40px] ">{text1}</h1>
          <p className="text-[18px] text-ash">{text2}</p>
        </div>
      </section>
    </div>
  );
};

export default Divider