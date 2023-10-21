import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const CourseCard = ({
    id, 
    imgUrl,
    title, 
    index,
    active,
    handleClick,
    courseUrl
}) => {
  return (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${
            active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center transition-[flex] duration ease-out-flex cursor-pointer mt-[30px] mb-[30px] h-[700px] w-[720px]`}
        onClick={() => {
            window.location.href = courseUrl;
            handleClick(id)
        }}
    >
    <img 
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
    />
            <div className="bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
            <p className="font-normal text-[16px] leading-[20px] text-black uppercase">
                Learn more about
            </p>
            <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-black">
                {title}
            </h2>
        </div>

    {/* {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-grey  z-0 lg:bottom-20 lg:origin-[0,0]">
            {title}
        </h3>
    ) : (
        <div className="bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
            <p className="font-normal text-[16px] leading-[20px] text-black uppercase">
                Learn more about
            </p>
            <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-black">
                {title}
            </h2>
        </div>
    )} */}
    </motion.div>
  )
}

export default CourseCard
