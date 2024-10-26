import React from 'react'

type Props = {
    language: string
}
const QuestionHeader = ({ language}: Props) => {

  return (
    <div className={`${language}-gradient relative`}>
    <div className={`h-72 ${language}-gradient relative bg-grid-line bg-[20px_20px] bg-[20px 20px]`}
        style={{
            // background: 'linear-gradient(0deg, #000, rgba(0,0,0,0) 5%), linear-gradient(90deg, #000, rgba(0,0,0,0) 5%)',
            backgroundSize: '20px 20px',
        }}
    >
        {/* Gradient overlay for fade effect */}
        <div className="absolute inset-0 bg-grid-blur-overlay"></div>

        {/* Content goes here */}
        <div className="">
            <h2 className='sm:text-9xl font-semibold tracking-tight text-primary-dark text-6xl pt-12 pl-8'>
            {language?.toUpperCase()}

            </h2>
        </div>
    </div>

    <div className='absolute bottom-0 right-0 h-12 w-full bg-blur-shadow'></div>
</div>
  )
}

export default QuestionHeader
